# NCEA Harvester - Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Data Flow](#data-flow)
4. [Azure Functions](#azure-functions)
5. [Data Models](#data-models)

---

## Project Overview

### Purpose
The **NCEA (Natural Capital and Ecosystem Assessment) Harvester** is a serverless data ingestion pipeline built using Azure Functions. It extracts metadata from multiple data sources, transforms it into a unified schema, and stores it in Azure Cosmos DB for consumption by the NCEA search API.

### Key Objectives
- **Harvest metadata** from external data sources (CKAN, JNCC)
- **Transform heterogeneous data** into a standardized format
- **Manage permissions and entitlements** for data access control
- **Synchronize records** by detecting and removing deleted items
- **Provide reliable, auditable** data ingestion with comprehensive logging

### Solution Type
Software-as-a-Service (SaaS) data harvesting solution

---

## Architecture

### High-Level Architecture

```
┌─────────────────────┐
│ Azure Data Factory  │
│  (Orchestration)    │
└──────────┬──────────┘
           │
           ├───────────────────────────────────────┐
           │                                       │
           ▼                                       ▼
┌──────────────────────┐              ┌──────────────────────┐
│  ProcessCkan         │              │  MetaData            │
│  Function            │              │  Function            │
│  (CKAN API)          │              │  (JNCC)              │
└──────────┬───────────┘              └──────────┬───────────┘
           │                                     │
           └──────────────┬──────────────────────┘
                          │
                          ▼
                 ┌────────────────┐
                 │ Cosmos DB      │
                 │ (ingested_data)│
                 └────────┬───────┘
                          │
                          ▼
                 ┌────────────────┐
                 │ Service Bus    │
                 │ Queue          │
                 └────────┬───────┘
                          │
                          ▼
                 ┌────────────────┐
                 │  Permissions   │
                 │  Function      │
                 └────────┬───────┘
                          │
                          ▼
                 ┌────────────────┐
                 │ Cosmos DB      │
                 │ (Updated with  │
                 │  Entitlements) │
                 └────────────────┘
```

### Components

#### 1. **Azure Data Factory (ADF)**
- **Role**: Orchestration engine
- **Pipelines**:
  - **Process CKAN Data**: Runs daily, harvests from Agrimetrics CKAN API
  - **Process JNCC Data**: Runs daily, harvests from JNCC Open Data WAF Index

#### 2. **Azure Functions (Serverless Compute)**
Six HTTP-triggered and Service Bus-triggered functions handle the harvesting workflow

#### 3. **Azure Cosmos DB**
- **Database**: NoSQL document store
- **Collections**:
  - `ingested_data`: Stores normalized metadata records
  - `failed_records`: Logs records that failed processing

#### 4. **Azure Service Bus**
- **Queue**: Decouples metadata ingestion from permissions processing
- **Message Type**: `DataAddedMessage` (contains record ID, data type, state)

#### 5. **Azure Application Insights**
- Centralized logging and telemetry
- Diagnostic data for monitoring and debugging

---

## Data Flow

### End-to-End Workflow

#### Phase 1: Data Harvesting (CKAN or JNCC)

```
1. Azure Data Factory triggers HTTP POST to ProcessCkanFunction or MetaDataFunction
2. Function receives source data (JSON/XML)
3. Data is parsed and transformed into IngestedDataSet model
4. Record is checked against existing data:
   - If NEW → Insert into Cosmos DB
   - If UPDATED → Update existing document in Cosmos DB
5. For CKAN data: Send DataAddedMessage to Service Bus queue
6. For JNCC data: Apply default public entitlement directly
```

#### Phase 2: Permissions Processing

```
1. PermissionsFunction triggered by Service Bus message
2. Function calls EntitlementsService to fetch permissions
3. Cosmos DB record is patched with entitlements
4. On failure: Record logged to failed_records collection
```

#### Phase 3: Cleanup (CKAN Only)

```
1. RemoveDeletedRecordsFunction triggered by ADF
2. Function fetches all IDs from CKAN using provided query
3. Compares CKAN IDs with Cosmos DB IDs
4. Deletes records in Cosmos DB that no longer exist in CKAN
```

#### Phase 4: Permissions Sync (Periodic)

```
1. UpdatePermissionsFunction triggered by ADF
2. Function retrieves all IDs from Cosmos DB (ingested_data)
3. Sends each ID as a message to Service Bus queue
4. PermissionsFunction processes each message to refresh entitlements
```

---

## Azure Functions

### 1. ProcessCkanFunction
**Endpoint**: `POST /api/ProcessCkanData`

**Purpose**: Harvests metadata from the Agrimetrics CKAN API (DSP platform)

**Trigger**: HTTP POST (called by Azure Data Factory)

#### Exact API Endpoints

**CKAN API Base URL** (from `CKAN_BASE_URL` environment variable):
- **Format**: `{CKAN_BASE_URL}?fl={fields}&q={query}&rows={limit}&start={offset}`
- **Example**: `https://api-test.agrimetrics.co.uk/api/3/action/package_search?fl=id&q=extras_draftId:[* TO *]&rows=10000&start=0`

**API Call Details**:
- **Method**: `GET`
- **Authentication**: Custom header
  - Header Name: Value from `CKAN_SUBSCRIPTION_KEY`
  - Header Value: From `CKAN_SUBSCRIPTION_VALUE`
- **Accept Header**: `application/json`
- **Hard Limit**: 10,000 results per request (CKAN limitation)

#### Query Parameters Used

**Parameter Values**:

| Parameter | Description | Example Values | Notes |
|-----------|-------------|----------------|-------|
| `fl` | Field list (comma-separated) | `id`, `title,author,notes`, `extras_draftId` | Specifies which fields to return. Omit for all fields. |
| `q` | Solr query string | `*:*`, `extras_draftId:[* TO *]`, `title:environmental` | Main search query. Use Solr syntax. |
| `fq` | Filter query (optional) | `organization:defra`, `state:active` | Additional filters applied to results. |
| `rows` | Results per page | `10000` | Maximum: 10,000 (CKAN hard limit). |
| `start` | Offset for pagination | `0`, `10000`, `20000` | Starting position in result set. |

**Common CKAN Queries**:
1. **All Records**: `q=*:*`
2. **Draft IDs**: `q=extras_draftId:[* TO *]` with `fl=extras_draftId`
3. **Organization Filter**: `q=*:*&fq=organization:defra`
4. **Field Selection**: `fl=id` (comma-separated for multiple fields)
5. **Full Records**: Omit `fl` parameter to get all fields

**Pagination Logic**:

CKAN enforces a hard limit of 10,000 results per API request. To retrieve datasets beyond this limit, the harvester uses offset-based pagination with the `start` parameter.

**How Pagination Works**:
1. **First Request** (`start=0`): Fetches records 0-9,999 (10,000 records)
   - The response includes `result.count` (total number of matching records)
   - Example: If total is 25,000, you need 3 requests to fetch all records

2. **Second Request** (`start=10000`): Fetches records 10,000-19,999
   - The `start` parameter is incremented by `rows` (10,000)
   - This skips the first 10,000 records and returns the next batch

3. **Third Request** (`start=20000`): Fetches records 20,000-24,999
   - Only 5,000 records returned (less than the 10,000 limit)
   - This signals the last page has been reached

**Pagination Loop**:
- The loop continues while `start < total` (more records exist)
- After each request, `start` is incremented by `rows` (10,000)
- If fewer than 10,000 records are returned, it's the final page
- All records are accumulated in `all_records` array

#### Request/Response Details for Azure Function

These details describe the HTTP request **sent TO the Azure Function** (`POST /api/ProcessCkanData`), not the CKAN API.

**Request Body** (sent by Azure Data Factory to `POST /api/ProcessCkanData`):

This body is sent to: `https://{function-app-name}.azurewebsites.net/api/ProcessCkanData`

```json
[
  {
    "id": "abc123",
    "title": "Dataset Title",
    "author": "Author Name",
    "author_email": "author@example.com",
    "notes": "Description",
    "organization": {...},
    "resources": [...],
    "tags": [...],
    "extras": [
      {"key": "bbox-east-long", "value": "-0.5"},
      {"key": "metadata-date", "value": "2024-01-15"}
    ]
  }
]
```

**Response** (returned by the Azure Function):
```json
{
  "processedCount": 150,
  "insertedCount": 100,
  "updatedCount": 50
}
```

**Key Responsibilities**:
- Accepts CKAN dataset array in request body (already fetched by ADF)
- Filters out draft records (checks against cached draft IDs)
- Calls `ICkanProcessingService` to:
  - Transform to `IngestedDataSet` model
  - Insert/update records in Cosmos DB
  - Send messages to Service Bus queue
- Returns count of processed records

---

### 2. MetaDataFunction
**Endpoint**: `POST /api/MetaData`

**Purpose**: Harvests metadata from JNCC and other third-party sources

**Trigger**: HTTP POST (called by Azure Data Factory)

#### Exact JNCC API Details

**JNCC WAF Index URLs** (101 total XML files):
- **Base URL**: `https://data.jncc.gov.uk/waf/`
- **URL Pattern**: `https://data.jncc.gov.uk/waf/@{item()}.xml`
- **WAF Index Files**: `{guid}.xml` (e.g., `bf632ae8-500c-452f-820f-caa66f797048.xml`)
- **URL List Source**: **Static array of 101 GUIDs** stored in Azure Data Factory pipeline parameters
  - Array stored as pipeline parameter/variable in ADF
  - Example array structure: `["bf632ae8-500c-452f-820f-caa66f797048", "35ae2fc2-177e-4e1d-b8e9-2aa065d0a7b1", ...]`

**Complete List of 101 JNCC Metadata IDs** (from ADF pipeline parameter `MetadataIds`):

<details>
<summary>Click to expand full list of GUIDs</summary>

```json
[
    "0e68944d-8cec-4855-9016-3627ce8802c5",
    "55b0ab55-428c-47e1-bbb8-9bb4166d11b8",
    "52b4e00d-798e-4fbe-a6ca-2c5735ddf049",
    "e301ec47-a4e2-402f-8ffd-66a66558ba3e",
    "20dbc9b4-ceac-4bf2-8763-4ae387fa88c4",
    "8b81cb32-c654-4cf0-b334-571bf523bbe3",
    "29e3eedf-2748-4752-bc25-4d8c2ca84348",
    "f55acffa-f8ab-4ee8-8370-98c988004c0e",
    "478f7160-967b-4366-acdf-8941fd33850b",
    "8935a9f1-2c5f-4296-b014-42e4233b7d9e",
    "4b9204f4-e3c8-4c48-b689-73773a42407c",
    "016a246b-6c33-4847-8306-be03c4d08a6b",
    "6d383377-0c95-4338-ad33-91598fce59c8",
    "fcf9a4ea-2430-4396-8fa9-46a059cfc656",
    "1d34e164-afa9-4863-9530-9cf358fc4800",
    "800a4ac5-8d10-4e83-ab3b-f73ffe627f95",
    "97447f16-9f38-49ff-a3af-56d437fd1951",
    "d88cdf24-192c-44e2-8d25-e35883955895",
    "1e1cc65d-c197-4031-aa71-a4ff97829013",
    "89a6ad30-98fc-43de-9e73-245e97889c83",
    "52652f29-ab2f-4f0e-a0d8-0e2d32bbf0b7",
    "a098562a-5ba7-41ec-9af2-78e8d8d11e33",
    "251144ab-5c2e-440e-b095-dbcd4c3f9704",
    "ec3045a0-afe4-4632-a269-2670db2aa4f6",
    "bb4622de-c06a-4bd0-ba18-021764179038",
    "0a26368d-400c-44e1-beaf-d4b89b7badcd",
    "c6136564-1737-42fb-9f83-27b0e3f08d6d",
    "27a7e045-ddcc-4738-9398-5217429d485e",
    "035dfb66-75fe-454e-950c-9a74218a5de3",
    "bda904b5-fc2f-4528-a964-8adf6d285e01",
    "f0e372e3-1580-4bf4-b31a-2b18ab9ca51d",
    "6a0b00dd-e028-426f-99a8-35a9efceaae2",
    "a7e1d9c5-84cd-4474-8cba-e7ec18e96c09",
    "97493f00-15ee-4bbf-bfd9-614b5040124d",
    "4ce89031-266f-4152-b703-9d2f0cfe4f9c",
    "97945f14-ab30-4e1c-ba60-145022234a1a",
    "6314cc74-79b9-4c7d-b38c-37d79890026c",
    "1f0123de-6383-432f-ac86-1a911e15fb04",
    "a25f0e7f-01cf-439c-9b88-7f3d3c946ac4",
    "1e136107-1396-4c67-b755-dc9f43bf3bb1",
    "8bcf6f03-8954-4d61-9e16-4f322e95063a",
    "da398064-3e48-417b-a642-f30ddc1e947d",
    "d2529db8-ee0e-442a-91cc-1562c4543d79",
    "d08f2795-cf91-4784-951a-a750bf1bc8d7",
    "cd3e03fa-bf94-4eff-817c-427e870e4c22",
    "e522a73a-1882-49a7-8ff2-3bf16f234329",
    "3b3c33d1-48da-4b34-ab36-e3f0defc1c48",
    "648025aa-0ac3-4af0-9d61-e72b8e7e98fa",
    "c852f4b7-fd04-4575-9519-126b045bef51",
    "e44be552-ff46-4aea-baf2-493326a9792c",
    "27428c30-3274-4e27-a763-bd2d0d100dac",
    "56095ee7-9619-4322-bd63-eacde5f48050",
    "58133399-3c74-4dc2-b9a9-fcbecf1c538b",
    "52418b61-4473-4792-8515-106cc84fe116",
    "b7fa2315-0023-4ecf-9b83-0e3af840c971",
    "24cf987a-a5b9-4ce6-a4b0-38992ee267ca",
    "4ee2e442-14ef-4ffe-ac19-b71d605f6cfd",
    "d6919812-14d2-41d7-940e-a26fd5370923",
    "85f58433-6904-4b62-a747-b895b4b82104",
    "83b41246-a37c-4d66-8fb2-435607b32c45",
    "95723f9f-3d56-4fa6-b65c-cd633a949135",
    "cb2b268e-316c-4e1a-8a50-f6d3c75fea0e",
    "81aa4d38-7c29-47ef-acea-2491c5aafd3d",
    "59a3acd7-0aa9-480f-a20c-53b7dd46ed41",
    "d265a848-dda7-4149-ab7d-432cb2108818",
    "bfa0f573-e58f-4254-8c3e-2ee90a770ca5",
    "209eb19e-3f55-4315-809c-385cf39b8ecd",
    "7e76b004-1796-4d9b-955d-3da6c790bba3",
    "280883cb-fa50-41ec-96db-6a1fb661e246",
    "75f588c0-9f92-4082-b9e0-ae5b5f05c9a0",
    "b015050f-3a16-4a97-8853-6658979abefc",
    "36360cb7-5c21-4d6f-a57f-19f0b0c48ec0",
    "d8b46626-4ee8-45a3-98ba-0857828a8d75",
    "e67877e2-c3a9-4656-8b24-f893a6039bd6",
    "6bd191b1-6a83-43e7-8821-d7458cec8cd6",
    "61d25639-2741-4479-83ea-9ccbaecaf7b1",
    "198d70c0-33d7-4d37-bcb1-fc7d57c68ba1",
    "01c48ab6-d656-4fc8-8867-a52be4085d73",
    "5bbff561-bb26-47da-b974-1dbe79234777",
    "3d06aba5-c2e3-40a3-8c7e-24069be1e733",
    "a0dc442c-1966-488b-955d-9ae5327c220b",
    "04a135e5-1f79-42bc-b287-473e959293df",
    "3742a2e5-361d-43cc-8c98-d42bdbf3215a",
    "278f4394-159f-4f71-a38a-0e1f9de29314",
    "9a2e47ba-17dd-4410-8141-cbd70a17310f",
    "c01267e7-895a-4c62-9f2f-2a1d8c01d599",
    "008e1853-0f2f-451a-978b-f5878a13253a",
    "a3d9da1e-dedc-4539-a574-84287636c898",
    "7ba2b342-ec9b-4ff9-9da1-82bd56086e09",
    "7a615038-aee6-4b8d-85b0-a1eae34ad2ad",
    "536bfee9-794f-4889-b2ad-2ee9a74ded35",
    "436a79aa-7c25-4755-b027-a2b70f80b0ca",
    "bc9b0905-fb63-4786-8e90-5f7851bb417d",
    "a9e80307-620b-4504-822f-41eab71675cb",
    "6fe81667-5cc2-4072-b13e-c4a1d1d8db89",
    "f03018f6-d6a6-40ee-97c7-7742db6b9c04",
    "7279324b-e502-4373-a78c-70964238f2dc",
    "84cb669d-41ae-46c4-a65d-485bdd7c6824",
    "e4824821-f433-438f-a8cd-7bc60eee469e",
    "9454f1bd-b3f7-4620-8836-0e5642d83d96",
    "5d973561-15fd-4b42-8e53-5aa0532e2ea8"
]
```

</details>

**Processing Flow**:
1. ADF fetches each XML file from JNCC
2. ADF base64-encodes the XML content
3. ADF POSTs to MetaDataFunction with encoded content
4. Function decodes, parses, and stores in Cosmos DB

**Authentication**: None required (public data)

#### Request Body Format

**Structure**:
```json
{
  "dataset": "jncc",
  "metaData": [
    {
      "url": "https://data.jncc.gov.uk/data/35ae2fc2-177e-4e1d-b8e9-2aa065d0a7b1/waf-index.xml",
      "content": "PD94bWwgdmVyc2lvbj0iMS4wIj8+...",  // base64-encoded XML
      "contentType": "XML"
    }
  ]
}
```

**Key Responsibilities**:
- Accepts base64-encoded XML content
- Calls `IMetaDataProcessingService` to:
  - Decode and parse XML
  - Transform to `IngestedDataSet` model
  - Apply default public entitlements (for JNCC)
  - Insert/update records in Cosmos DB
- Overrides publisher name for JNCC data to "Joint Nature Conservation Committee"

**Public Data Sources**:
The following sources automatically receive public entitlements:
- `jncc` (Joint Nature Conservation Committee)

---

### 3. PermissionsFunction
**Trigger**: Service Bus Queue Message

**Purpose**: Enriches ingested records with entitlements (permissions)

**Message Type**: `DataAddedMessage`

**Key Responsibilities**:
- Receives message from queue
- Calls `IEntitlementsService.GetEntitlements(id)` to fetch permissions
- Patches Cosmos DB record with entitlements array
- Logs failures to `failed_records` collection

---

### 4. RemoveDeletedRecordsFunction
**Endpoint**: `POST /api/RemoveDeletedRecords`

**Purpose**: Removes records from Cosmos DB that have been deleted in CKAN

**Trigger**: HTTP POST (called by Azure Data Factory after CKAN harvest)

**Request Body**:
```json
{
  "CkanQueryString": "your-ckan-query"
}
```

**Key Responsibilities**:
- Fetches all current IDs from CKAN using provided query
- Queries Cosmos DB for all ingested_data IDs
- Identifies orphaned records (in Cosmos but not in CKAN)
- Deletes orphaned records in batches (10 at a time to avoid 429 errors)

**Response**:
```json
{
  "deletedCount": 25
}
```

---

### 5. UpdatePermissionsFunction
**Endpoint**: `POST /api/UpdatePermissions`

**Purpose**: Refreshes entitlements for all records in Cosmos DB

**Trigger**: HTTP POST (called periodically by Azure Data Factory)

**Key Responsibilities**:
- Queries all document IDs from `ingested_data` collection
- Sends each ID to Service Bus queue as a `DataAddedMessage`
- Triggers bulk permissions refresh via `PermissionsFunction`

**Use Case**: Ensures permissions stay synchronized if external entitlements API changes

---

### 6. GetIdsToProcessFunction *(If present)*
**Purpose**: Retrieves specific IDs for targeted processing

---

### 7. UpdateMetadataResourcesFunction *(If present)*
**Purpose**: Updates resource metadata for existing records

---

## Data Models

### IngestedDataSet
The primary model representing harvested metadata.

### Field Mapping: CKAN JSON → Cosmos DB

**Core Fields** (from `BaseIngestedData`):

| Source Field (CKAN JSON) | Target Field (Cosmos DB) | Type | Transformation Notes |
|--------------------------|--------------------------|------|---------------------|
| `id` | `id` | string | Direct mapping - Unique identifier & partition key |
| `title` | `title` | string | Direct mapping |
| `notes` | `notes` | string | Direct mapping - Dataset description |
| `author` | `author` | string | Direct mapping |
| `author_email` | `authorEmail` | string | snake_case → camelCase |
| `maintainer` | `maintainer` | string | Direct mapping |
| `maintainer_email` | `maintainerEmail` | string | snake_case → camelCase |
| `license_id` | `licenseId` | string | snake_case → camelCase |
| `license_title` | `licenseTitle` | string | snake_case → camelCase |
| `url` | `url` | string | Direct mapping - Dataset homepage URL |
| `version` | `version` | string | Direct mapping |
| `state` | `state` | string | Direct mapping (active/draft/deleted) |
| `type` | `type` | string | Direct mapping |
| `isopen` | `isOpen` | boolean | camelCase conversion |
| `private` | `isPrivate` | boolean | Renamed to isPrivate |
| `num_resources` | `numResources` | int | snake_case → camelCase |
| `num_tags` | `numTags` | int | snake_case → camelCase |
| `metadata_created` | `metadataCreated` | datetime | snake_case → camelCase, ISO 8601 format |
| `metadata_modified` | `metadataModified` | datetime | snake_case → camelCase, ISO 8601 format |
| `creator_user_id` | `creatorUserId` | string | snake_case → camelCase |
| `name` | `name` | string | Direct mapping - URL-friendly name |
| `owner_org` | `ownerOrg` | string | snake_case → camelCase - Organization ID |
| `organization` | `organisation` | object | UK spelling - Organization details |
| `groups` | `groups` | array | Direct mapping - Group memberships |
| `tags` | `tags` | array | Direct mapping - Tag list |
| `resources` | `resources` | array | Direct mapping - Resource list |
| `relationships_as_subject` | `relationshipsAsSubjects` | array | snake_case → camelCase |
| `relationships_as_object` | `relationshipsAsObjects` | array | snake_case → camelCase |
| `extras` | `extras` | object | Array → Object transformation (see Extras mapping below) |
| - | `entitlements` | array | **Added by PermissionsFunction** - Not in source |
| - | `createdDate` | datetime | **System field** - Timestamp when inserted |
| - | `modifiedDate` | datetime | **System field** - Timestamp when updated |

**Extras Fields Mapping** (from `extras` array → `ParsedExtras` object):

CKAN extras arrive as array: `[{"key": "bbox-east-long", "value": "-0.5"}]`
Transformed to flat object: `{"bboxEastLong": -0.5}`

| Source Field (CKAN extras[].key) | Target Field (Cosmos DB extras) | Type | Transformation Notes |
|----------------------------------|----------------------------------|------|---------------------|
| `bbox-east-long` | `bboxEastLong` | double | String → Number, kebab-case → camelCase |
| `bbox-west-long` | `bboxWestLong` | double | String → Number, kebab-case → camelCase |
| `bbox-north-lat` | `bboxNorthLat` | double | String → Number, kebab-case → camelCase |
| `bbox-south-lat` | `bboxSouthLat` | double | String → Number, kebab-case → camelCase |
| `spatial` | `spatial` | object | JSON string → Parsed GeoJSON object |
| `temporal-extent-begin` | `temporalExtentBegin` | string | kebab-case → camelCase |
| `temporal-extent-end` | `temporalExtentEnd` | string | kebab-case → camelCase |
| `access_constraints` | `accessConstraints` | array | JSON string → Parsed array |
| `accessConstraint` | `accessConstraint` | array | Alternative field name |
| `metadata-date` | `metadataDate` | string | kebab-case → camelCase |
| `metadata-language` | `metadataLanguage` | string | kebab-case → camelCase |
| `lineage` | `lineage` | string | Direct mapping |
| `resource-type` | `resourceType` | string | kebab-case → camelCase |
| `contact-email` | `contactEmail` | string | kebab-case → camelCase |
| `frequency-of-update` | `frequencyOfUpdate` | string | kebab-case → camelCase |
| `guid` | `guid` | string | Direct mapping |
| `harvest_source_id` | `harvestSourceId` | string | snake_case → camelCase |
| `harvest_source_title` | `harvestSourceTitle` | string | snake_case → camelCase |
| `isDatasetRelevantToANaturalCapitalApproach` | `isDatasetRelevantToANaturalCapitalApproach` | boolean | String "yes" → boolean true |
| `nceaContribution` | `nceaContribution` | string | Direct mapping |
| `naturalCapitalTheme` | `naturalCapitalTheme` | array | JSON string → Parsed array |
| `naturalCapitalCategory` | `naturalCapitalCategory` | array | JSON string → Parsed array |
| `naturalCapitalSubCategory` | `naturalCapitalSubCategory` | array | JSON string → Parsed array |
| `draftId` | `draftId` | string | Direct mapping |
| `draftStatus` | `draftStatus` | string | Direct mapping |
| `dataFormats` | `dataFormats` | array | JSON string → Parsed array |
| `contacts` | `contacts` | array | JSON string → Parsed array of contact objects |
| `citationIdentifiers` | `citationIdentifiers` | array | JSON string → Parsed array |
| `thesaurusKeywords` | `thesaurusKeywords` | array | JSON string → Parsed array |
| `taxonomyKeywords` | `taxonomyKeywords` | array | JSON string → Parsed array |

---

## Security

### Authentication & Environment Variables

**Azure Key Vault Secrets** (referenced via `@Microsoft.KeyVault(...)` syntax):

#### Cosmos DB
- **Secret Name**: `COSMOS-DB-CONNECTION-STRING`
- **Environment Variable**: `COSMOS_DB_CONNECTION_STRING`
- **Format**: `AccountEndpoint=https://{account}.documents.azure.com:443/;AccountKey={key};`
- **Alternative Variables** (legacy):
  - `COSMOS_ENDPOINT_URI`
  - `COSMOS_PRIMARY_KEY`
  - `COSMOS_DB_DATABASE` (default: `ncea_database`)
  - `COSMOS_INGESTED_DB_CONTAINER` (default: `ingested_data`)
  - `COSMOS_FAILED_RECORDS_DB_CONTAINER` (default: `failed_records`)

#### CKAN API
- **Secret Name**: `CKAN-BASE-URL`
- **Environment Variable**: `CKAN_BASE_URL`
- **Format**: `https://api-test.agrimetrics.co.uk/api/3/action/package_search`
- **Secret Name**: `CKAN-SUBSCRIPTION-KEY`
- **Environment Variable**: `CKAN_SUBSCRIPTION_KEY`
- **Value**: `"Ocp-Apim-Subscription-Key"` (header name)
- **Secret Name**: `CKAN-SUBSCRIPTION-VALUE`
- **Environment Variable**: `CKAN_SUBSCRIPTION_VALUE`
- **Value**: APIM subscription key value

#### Permissions API (Internal)
- **Secret Name**: `INTERNAL-API-URL`
- **Environment Variable**: `INTERNAL_API_URL`
- **Format**: `https://api-test.agrimetrics.co.uk` or `https://api.agrimetrics.co.uk`
- **Secret Name**: `APIM-API-KEY`
- **Environment Variable**: `APIM_API_KEY`
- **Value**: APIM subscription key
- **Secret Name**: `JWT-SHARED-SECRET-PRIMARY`
- **Environment Variable**: `JWT_SHARED_SECRET_PRIMARY`
- **Value**: Shared secret for JWT signing
- **Environment Variable**: `ENVIRONMENT`
- **Values**: `"test"` or `"live"`
