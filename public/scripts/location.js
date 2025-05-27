import { fireEventAfterStorage, getStorageData, updateSubmitButtonState } from './customScripts.js';
import { invokeAjaxCall } from './fetchResults.js';
import {
  addCategoryAccordionToggleListeners,
  appendMetaSearchParams,
  addScopeChangeListener,
  getValidatedFormData,
  addMapFilterFormSubmitListener,
  addMapFilterFormResetListener,
  addAllCheckboxListeners,
} from './filters.js';
import {
  loadKeyboardListData,
  keywordsDropdownListAction,
  createBadge,
  checkDuplicateKeywords,
} from './keywordsFilter.js';

const mapResultsInstance = 'map_results';
const index3 = 3;
const precision = 6;
const timeout = 200;
const maxZoom = 16;
const mapTarget = 'coordinate-map';
const isDetailsScreen = typeof isDetails !== 'undefined' && isDetails;
const hasCenter = typeof center !== 'undefined' && center;
const isMapResultsScreen = typeof isViewMapResults !== 'undefined' && isViewMapResults;
let initialCenter;
const initialZoom = 2;
let viewChanged = false;
const mapInitialLon = 3.436;
const mapInitialLat = 55.3781;
const mapResultsButtonId = 'map-result-button';
const mapResultsCountId = 'map-result-count';
const noSpatialDataId = 'no-spatial-data';
const viewResultsId = 'view-results';
const mapContainerId = 'map-container';
const actionDataAttribute = 'data-action';
const filterBlockId = 'map-filter-block';
const boundingBoxCheckbox = document.getElementById('bounding-box');
const extentSearchZoomLevel = 5;
const responseSuccessStatusCode = 200;
const highlightedMarkerIcon = `/natural-capital-ecosystem-assessment/assets/images/highlight-marker-icon.svg`;
const hoverMarkerIcon = `/natural-capital-ecosystem-assessment/assets/images/hover-marker-icon.svg`;
const markerIcon = `/natural-capital-ecosystem-assessment/assets/images/marker-icon.svg`;
const mapInfoBlock = document.getElementById('map-info');
const contentMaxChar = 500;
let selectedRecord = '';
let mapResults;
let appliedFilterOptions = null;
const markerOverlays = [];
const defaultMapProjection = 'EPSG:3857';
const extentTransformProjection = 'EPSG:4326';
let firstMove = true;
const resetControl = document.getElementById('defra-map-reset');
const markerOverlayOffsetX = -15;
const markerOverlayOffsetY = -50;
const leftArrowKey = 37;
const upArrowKey = 38;
const rightArrowKey = 39;
const downArrowKey = 40;
let resetData = false;
let hoveredCluster = null;
let selectedCluster = null;
let selectedBoundingBox = '';
let hasResourceListener = false;
const maxCountForBoundingBoxInfo = 50;
const polygonFeatureData = [];
let isBadgeChanged = false;

const CLUSTER_STATE = {
  inactive: 'inative',
  hover: 'hover',
  active: 'active',
};

const geographyTabBboxStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: '#F47738',
    width: 2,
  }),
  fill: new ol.style.Fill({
    color: 'rgb(255, 251, 0, 0.2)',
  }),
});

const bboxStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: '#004618',
    width: 2,
  }),
  fill: new ol.style.Fill({
    color: 'rgb(62, 238, 0, 0.15)',
  }),
});

const bboxSelectedStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: '#FFDD00',
    width: 2,
  }),
  fill: new ol.style.Fill({
    color: 'rgb(244, 119, 56, 0.20)',
  }),
});

const bboxSource = new ol.source.Vector();
const bboxLayer = new ol.layer.Vector({
  source: bboxSource,
});

// style definitions for the cluster layers
const [
  clusterOuterCircleFill,
  clusterOuterCircleFillHover,
  clusterOuterCircleFillActive,
  clusterInnerCircleFill,
  clusterInnerCircleFillHover,
  clusterInnerCircleFillActive,
] = [
  new ol.style.Fill({
    color: 'rgba(255, 153, 102, 0.3)',
  }),
  new ol.style.Fill({
    color: 'rgba(209, 135, 92, 0.3)',
  }),
  new ol.style.Fill({
    color: 'rgba(171, 102, 255, 0.3)',
  }),
  new ol.style.Fill({
    color: 'rgba(255, 165, 0, 0.7)',
  }),
  new ol.style.Fill({
    color: 'rgba(214, 152, 19, 0.7)',
  }),
  new ol.style.Fill({
    color: 'rgba(106, 0, 255, 0.7)',
  }),
];
const [
  clusterOuterCircle,
  clusterOuterCircleHover,
  clusterOuterCircleActive,
  clusterInnerCircle,
  clusterInnerCircleHover,
  clusterInnerCircleActive,
] = [
  new ol.style.Circle({
    radius: 20,
    fill: clusterOuterCircleFill,
  }),
  new ol.style.Circle({
    radius: 20,
    fill: clusterOuterCircleFillHover,
  }),
  new ol.style.Circle({
    radius: 20,
    fill: clusterOuterCircleFillActive,
  }),
  new ol.style.Circle({
    radius: 14,
    fill: clusterInnerCircleFill,
  }),
  new ol.style.Circle({
    radius: 14,
    fill: clusterInnerCircleFillHover,
  }),
  new ol.style.Circle({
    radius: 14,
    fill: clusterInnerCircleFillActive,
  }),
];

const clusterTextFill = new ol.style.Fill({
  color: '#fff',
});
const clusterTextStroke = new ol.style.Stroke({
  color: 'rgba(0, 0, 0, 0.6)',
  width: 3,
});

const [clusterSingleIcon, clusterSingleHoverIcon, clusterSingleActiveIcon] = [
  new ol.style.Icon({
    src: markerIcon,
  }),
  new ol.style.Icon({
    src: hoverMarkerIcon,
  }),
  new ol.style.Icon({
    src: highlightedMarkerIcon,
  }),
];

const getSingleClusterIcon = (feature, state) => {
  let style = new ol.style.Style({
    geometry: feature.getGeometry(),
  });

  switch (state) {
    case CLUSTER_STATE.active:
      style.setImage(clusterSingleActiveIcon);
      break;
    case CLUSTER_STATE.hover:
      style.setImage(clusterSingleHoverIcon);
      break;
    default: // CLUSTER_STATE.inactive or undefined (in case of bugs markers shouldnt be invisible)
      style.setImage(clusterSingleIcon);
      break;
  }

  return style;
};

const getClusterStyle = (feature) => {
  const size = feature.get('features').length;
  const clusterState = feature.get('state');

  // if there is more than 1 marker we display the cluster style
  if (size > 1) {
    let outerCircleStyle = new ol.style.Style({
      image: clusterOuterCircleFill,
    });
    let innerCircleStyle = new ol.style.Style({
      image: clusterInnerCircleFill,
      text: new ol.style.Text({
        text: size.toString(),
        fill: clusterTextFill,
        stroke: clusterTextStroke,
      }),
    });

    switch (clusterState) {
      case CLUSTER_STATE.hover:
        outerCircleStyle.setImage(clusterOuterCircleHover);
        innerCircleStyle.setImage(clusterInnerCircleHover);
        break;
      case CLUSTER_STATE.active:
        outerCircleStyle.setImage(clusterOuterCircleActive);
        innerCircleStyle.setImage(clusterInnerCircleActive);
        break;
      default: // CLUSTER_STATE.inactive or undefined (in case of bugs markers shouldnt be invisible)
        outerCircleStyle.setImage(clusterOuterCircle);
        innerCircleStyle.setImage(clusterInnerCircle);
        break;
    }

    return [outerCircleStyle, innerCircleStyle];
  }

  // otherwise we return a single icon
  const originalFeature = feature.get('features')[0];
  return getSingleClusterIcon(originalFeature, clusterState);
};

const clusterVectorSource = new ol.source.Vector();
const clusterSource = new ol.source.Cluster({
  distance: 35,
  source: clusterVectorSource,
});
const clusterLayer = new ol.layer.Vector({
  source: clusterSource,
  style: getClusterStyle,
});

const map = new ol.Map({
  target: mapTarget,
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([mapInitialLon, mapInitialLat]),
    zoom: !isDetailsScreen && !isMapResultsScreen ? extentSearchZoomLevel : 2,
    minZoom: 2,
    extent: ol.proj.get(defaultMapProjection).getExtent(),
  }),
  controls: [],
  ...(isDetailsScreen && { interactions: [] }),
});
map.addLayer(bboxLayer);
map.addLayer(clusterLayer);

if (isMapResultsScreen) {
  mapEventListener();
}

function mapEventListener() {
  map.on('pointermove', (event) => {
    // the cluster layer contains each cluster as its own feature
    clusterLayer.getFeatures(event.pixel).then((clusters) => {
      map.getTargetElement().style.cursor = clusters.length > 0 ? 'pointer' : '';

      // only reset the hover state if a) we aren't hovering anything and b) the cluster is not currently active
      if (clusters.length === 0 && hoveredCluster && hoveredCluster.get('state') != CLUSTER_STATE.active) {
        hoveredCluster.set('state', CLUSTER_STATE.inactive);
        hoveredCluster = null;
      }

      if (clusters.length > 0) {
        // logically it shouldnt be possible to hover over more than 1 cluster
        // at the same time, since if they were close enough they would group together
        // anyway. this is also how it is done in the example
        const cluster = clusters[0];

        // `ol_uid` is a guaranteed unique id for each cluster (it is incremented for every feature)
        // so there is no collisions
        // https://gis.stackexchange.com/a/266665
        const clusterId = ol.util.getUid(cluster);
        const oldClusterId = (hoveredCluster && ol.util.getUid(hoveredCluster)) ?? '';

        if (clusterId !== oldClusterId) {
          const selectedClusterState = selectedCluster?.get('state') ?? CLUSTER_STATE.inactive;
          // set the old marker to be inactive
          // the `true` means silent, so it will not emit and event when the state is changed
          // the reason we want this is because if it were to emit an event it would reset the state for the
          // `selectedCluster`. instead, we set the state silently and re-apply the selected state non-silently
          // to trigger a rerender
          hoveredCluster?.set('state', CLUSTER_STATE.inactive, true);
          selectedCluster?.set('state', selectedClusterState);
          cluster.set('state', CLUSTER_STATE.hover);

          // setting the state will cause the layer to redraw
          // which will mean it will call `getSingleClusterIcon` automatically
          // which will return the new icon with the new state
          hoveredCluster = cluster;
        }
      }
    });
  });

  map.on('click', (event) => {
    clusterLayer.getFeatures(event.pixel).then((clusters) => {
      if (clusters.length > 0) {
        const cluster = clusters[0];

        selectedCluster?.set('state', CLUSTER_STATE.inactive);
        cluster.set('state', CLUSTER_STATE.active);

        selectedCluster = cluster;

        showClusterDetails(selectedCluster);
      } else {
        closePopupsAndDeselectCluster();
      }
    });
  });
}

const resetFeatureStyle = () => {
  bboxSource.getFeatures().forEach((feature) => {
    feature.setStyle(bboxStyle);
  });
};

function truncateString(inputString, maxLength) {
  if (inputString && inputString.length > maxLength) {
    return `${inputString.slice(0, maxLength)}...`;
  }
  return inputString;
}

/**
 * Returns a record from the map results by a given id.
 *
 * @param {string} recordId
 */
const getMapResultByRecordId = (recordId) => {
  return mapResults.find((item) => item?.id === recordId);
};

const showClusterDetails = (cluster) => {
  const features = cluster.get('features');
  if (features.length === 1) {
    const recordId = features[0].get('id');
    const boundingBox = features[0].get('boundingBox');

    // if you click on a cluster of 1 element the record list should close as there is nothing to list
    closeClusterPopup();
    showSingleInformationPopup(recordId, boundingBox);
  } else {
    // likewise if you click on a cluster the info popup no longer matches so we close it
    // we dont want to use `closePopupsAndDeselectCluster` as we dont want to deslect the new
    // cluster
    closeInfoPopup();
    showClusterRecordPopup(features);
  }
};

/**
 * Attaches the event listener to the close button on the cluster list
 * popup.
 */
const attachCluserListCloseListener = () => {
  const button = $('#cluster-list-close');

  button.on('click', closePopupsAndDeselectCluster);
};

/**
 * Shows the cluster list popup for a given list of features
 * from a cluster.
 */
const showClusterRecordPopup = (clusterFeatures) => {
  const clusterList = $('#cluster-list');
  const clusterListHeading = $('#cluster-list-heading');
  const clusterListRecords = $('#cluster-list-records');

  // remove all previous children
  clusterListHeading.empty();
  clusterListRecords.empty();

  clusterList.removeClass('display-none');
  clusterListHeading.append(document.createTextNode(`Listing ${clusterFeatures.length} records`));

  clusterFeatures.forEach((feature) => {
    const recordId = feature.get('id');
    const record = getMapResultByRecordId(recordId);

    const li = $('<li>', {});
    const recordLink = $('<a>', { class: 'govuk-link', href: '#' });
    recordLink.append(document.createTextNode(record.title));
    li.append(recordLink);

    recordLink.on('click', () => {
      const boundingBox = feature.get('boundingBox');
      showSingleInformationPopup(recordId, boundingBox);
    });

    clusterListRecords.append(li);
  });
};

/**
 * Closes the cluster list popup.
 */
const closeClusterPopup = () => {
  const clusterList = $('#cluster-list');

  clusterList.addClass('display-none');
};

/**
 * Shows the popup for an individual record, given the ID and bounding box.
 */
function showSingleInformationPopup(recordId, boundingBox) {
  selectedRecord = getMapResultByRecordId(recordId);
  infoListener();
  boundingBoxListener(boundingBoxCheckbox.checked);
  const titleElement = document.getElementById('info-title');
  const publishedBlock = document.getElementById('info-published-block');
  const publishedByElement = document.getElementById('info-published-by');
  const contentElement = document.getElementById('info-content');
  if (selectedRecord && Object.keys(selectedRecord).length) {
    if (boundingBox) {
      boundingBox.setStyle(bboxSelectedStyle);
    }
    if (mapInfoBlock) {
      mapInfoBlock.style.display = 'block';
      titleElement.textContent = selectedRecord.title;
      if (selectedRecord.publishedBy) {
        publishedByElement.textContent = selectedRecord.publishedBy;
        publishedBlock.style.display = 'block';
      } else {
        publishedBlock.style.display = 'none';
      }
      contentElement.textContent = truncateString(selectedRecord.content, contentMaxChar);
    }
  }
}

function moreInfoNavigation() {
  if (selectedRecord && Object.keys(selectedRecord).length) {
    const moreInfoUrl = `${window.location.origin}${window.location.pathname}/${selectedRecord.id}${window.location.search}`;
    window.open(moreInfoUrl, '_blank');
  }
}

/**
 * Deselectes the cluster the user has selected.
 */
const deslectActiveCluster = () => {
  selectedCluster?.set('state', CLUSTER_STATE.inactive);
};

/**
 * Closes both popups and deselects the user selected cluster.
 */
const closePopupsAndDeselectCluster = () => {
  closeClusterPopup();
  closeInfoPopup();
  deslectActiveCluster();
};

function closeInfoPopup() {
  if (mapInfoBlock) {
    const titleElement = document.getElementById('info-title');
    const publishedBlock = document.getElementById('info-published-block');
    const publishedByElement = document.getElementById('info-published-by');
    const contentElement = document.getElementById('info-content');
    mapInfoBlock.style.display = 'none';
    titleElement.textContent = 'test';
    publishedBlock.style.display = 'block';
    publishedByElement.textContent = '';
    contentElement.textContent = '';
  }
  selectedBoundingBox = '';
  resetFeatureStyle();
  boundingBoxListener(boundingBoxCheckbox.checked);
}

function calculateCoordinates() {
  const extent = bboxSource.getExtent();
  if (extent[0] !== Infinity && extent[1] !== Infinity && extent[2] !== -Infinity && extent[index3] !== -Infinity) {
    const [west, south, east, north] = ol.proj.transformExtent(extent, defaultMapProjection, extentTransformProjection);

    const form = document.querySelector('[data-do-browser-storage]');
    if (form) {
      const sessionData = getStorageData();
      if (!sessionData.fields.hasOwnProperty(form.id)) {
        sessionData.fields[form.id] = {};
      }
      sessionData.fields[form.id] = {
        ...sessionData.fields[form.id],
        nth: north.toFixed(precision),
        sth: south.toFixed(precision),
        est: east.toFixed(precision),
        wst: west.toFixed(precision),
      };
      fireEventAfterStorage(sessionData);
      toggleClearSelectionBlock();
    }
  }
}

bboxSource.on('change', () => {
  if (!isDetailsScreen) {
    calculateCoordinates();
  }
});

const toggleClearSelectionBlock = () => {
  const clearSelection = document.getElementById('clear-map-selection');
  if (clearSelection) {
    const north = document.getElementById('north')?.value;
    const south = document.getElementById('south')?.value;
    const east = document.getElementById('east')?.value;
    const west = document.getElementById('west')?.value;
    if (north && south && east && west) {
      clearSelection.style.display = 'block';
    } else {
      clearSelection.style.display = 'none';
    }
  }
};

const attachClearSelectionListener = () => {
  const clearSelection = document.getElementById('clear-map-selection');
  if (clearSelection) {
    clearSelection.addEventListener('click', function () {
      bboxSource.clear();
      const form = document.querySelector('[data-do-browser-storage]');
      if (form) {
        const sessionData = getStorageData();
        if (sessionData.fields.hasOwnProperty(form.id)) {
          delete sessionData.fields[form.id];
        }
        fireEventAfterStorage(sessionData);
        document.getElementById('north').value = '';
        document.getElementById('south').value = '';
        document.getElementById('east').value = '';
        document.getElementById('west').value = '';
        toggleClearSelectionBlock();
        updateSubmitButtonState(form);
      }
    });
  }
};

if (document.getElementById('north')) {
  document.getElementById('north').addEventListener('change', () => {
    calculatePolygonFromCoordinates();
  });
}
if (document.getElementById('south')) {
  document.getElementById('south').addEventListener('change', () => {
    calculatePolygonFromCoordinates();
  });
}
if (document.getElementById('east')) {
  document.getElementById('east').addEventListener('change', () => {
    calculatePolygonFromCoordinates();
  });
}
if (document.getElementById('west')) {
  document.getElementById('west').addEventListener('change', () => {
    calculatePolygonFromCoordinates();
  });
}

function calculatePolygonFromCoordinates() {
  const targetKey = isDetailsScreen ? 'textContent' : 'value';
  const north = parseFloat(document.getElementById('north')[targetKey]);
  const south = parseFloat(document.getElementById('south')[targetKey]);
  const east = parseFloat(document.getElementById('east')[targetKey]);
  const west = parseFloat(document.getElementById('west')[targetKey]);
  bboxSource.clear();
  !isDetailsScreen && toggleClearSelectionBlock();
  addPolygon({ north, south, east, west }, geographyTabBboxStyle);
}

function addPolygon(coordinates, style, addToVector = true) {
  const { north, south, east, west } = coordinates;
  if (north && south && east && west) {
    const extent = ol.proj.transformExtent([west, south, east, north], extentTransformProjection, defaultMapProjection);
    const polygonFeature = new ol.Feature({
      geometry: new ol.geom.Polygon([
        [
          [extent[0], extent[1]],
          [extent[0], extent[index3]],
          [extent[2], extent[index3]],
          [extent[2], extent[1]],
          [extent[0], extent[1]],
        ],
      ]),
    });
    polygonFeature.setStyle(style);
    addToVector && bboxSource.addFeature(polygonFeature);
    if (!addToVector) {
      polygonFeatureData.push(polygonFeature);
    }
    return polygonFeature;
  }
  return null;
}

function disableInteractions() {
  map.getInteractions().forEach((interaction) => {
    const isZoomInteractions =
      interaction instanceof ol.interaction.DoubleClickZoom ||
      (!isMapResultsScreen && interaction instanceof ol.interaction.MouseWheelZoom);
    const isDragDrawModifySnap =
      interaction instanceof ol.interaction.DragPan || interaction instanceof ol.interaction.Draw;
    const isModifySnap = interaction instanceof ol.interaction.Modify || interaction instanceof ol.interaction.Snap;
    if (isZoomInteractions || isDragDrawModifySnap || isModifySnap) {
      map.removeInteraction(interaction);
    }
  });
}

function placeMarker(coords, iconPath, recordId = '1', boundingBoxData = '') {
  coords.forEach((coord) => {
    const lonLat = coord.split(',');

    const markerFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(lonLat)),
      id: recordId,
      boundingBox: boundingBoxData,
    });

    markerFeature.set('state', CLUSTER_STATE.inactive);

    clusterVectorSource.addFeature(markerFeature);
  });
}

function geographyTabListener() {
  map.updateSize();
  calculatePolygonFromCoordinates();
  if (typeof markers !== 'undefined' && markers) {
    placeMarker(markers.split('_'), `/natural-capital-ecosystem-assessment/assets/images/marker.png`);
  }
  const locationParts = center.split(',');
  map.getView().setCenter(ol.proj.fromLonLat(locationParts));
  map.getView().fit(bboxSource.getExtent(), {
    padding: [100, 100, 100, 100],
    duration: 1000,
  });
  disableInteractions();
}

function boundingBoxCheckboxChange(isChecked) {
  if (boundingBoxCheckbox) {
    boundingBoxCheckbox.checked = isChecked;
    boundingBoxCheckbox.dispatchEvent(new Event('change'));
  }
}

function resetMap() {
  map.getView().setZoom(initialZoom);
  map.getView().animate({ center: initialCenter, duration: 1000 });
  viewChanged = false;
  firstMove = true;
  if (resetControl) {
    resetControl.style.display = 'none';
  }
  resetFeatureStyle();
  closePopupsAndDeselectCluster();
  fitMapToExtent();
}

function setBadgeValue() {
  isBadgeChanged = true;
  return;
}

function getBadgeValue() {
  return isBadgeChanged;
}

/**
 * Take the applied filters in the map and insert them into the url so as to make
 * any filters applied in the map also apply in the search results view.
 */
function saveFilters() {
  const searchUrl = document.querySelector('[data-search-results-url]');
  if (!searchUrl) {
    return false;
  }
  const form = document.getElementById(`filters-map_results`);
  const data = getValidatedFormData(form, 'map_results');
  const url = getPathWithFormFilters(searchUrl.getAttribute('data-search-results-url'), data);
  window.location = url;

  return true;
}

function exitMap() {
  // this case should only happen if the user does not change any filters in the modal
  if (!saveFilters()) {
    // call the function that would normally be added as an event listener to the close button
    window.closeMapModal();

    resetMap();
    if (resetData) {
      appliedFilterOptions = null;
      resetData = false;
    }
  }
}

function exitMapEventListener() {
  const exitControl = document.getElementById('defra-map-exit');
  if (exitControl) {
    exitControl.addEventListener('click', exitMap);
  }
}

function drawBoundingBoxWithMarker(fitToMapExtentFlag, doRecenter = true) {
  clusterVectorSource.clear();
  bboxSource.clear();

  map.updateSize();

  const centerArray = [];
  mapResults.forEach((record) => {
    const markerCoords = record.geographicCenter.split('_');

    const boundingBox = addPolygon(record.geographicBoundary, bboxStyle, false);
    placeMarker(markerCoords, markerIcon, record.id, boundingBox);

    markerCoords.forEach((markerString) => {
      if (markerString) {
        const [lon, lat] = markerString.split(',').map(parseFloat);
        centerArray.push([lon, lat]);
      }
    });
  });

  if (doRecenter) {
    const totalCenters = centerArray.length;
    if (totalCenters) {
      const sumCenter = centerArray.reduce((acc, cur) => [acc[0] + cur[0], acc[1] + cur[1]], [0, 0]);
      const averageCenter = [sumCenter[0] / totalCenters, sumCenter[1] / totalCenters];
      map.getView().setCenter(ol.proj.fromLonLat(averageCenter));
      map.getView().setZoom(initialZoom);
    }
  }

  fitToMapExtentFlag && fitMapToExtent();
}

const boundingBoxListener = (boundingBoxCheckboxState) => {
  polygonFeatureData.forEach((feature) => {
    const isFeatureExists = bboxSource
      .getFeatures()
      .some((f) => f.getGeometry().getCoordinates().toString() === feature.getGeometry().getCoordinates().toString());
    if (feature !== selectedBoundingBox) {
      if (boundingBoxCheckboxState) {
        !isFeatureExists && bboxSource.addFeature(feature);
        feature.setStyle(bboxStyle);
      } else {
        isFeatureExists && bboxSource.removeFeature(feature);
      }
    } else {
      !isFeatureExists && bboxSource.addFeature(feature);
      feature.setStyle(bboxSelectedStyle);
    }
  });
};

const attachBoundingBoxToggleListener = () => {
  if (boundingBoxCheckbox) {
    boundingBoxCheckboxChange(false);
    boundingBoxCheckbox.addEventListener('change', () => {
      boundingBoxListener(boundingBoxCheckbox.checked);
    });
  }
};

const mapResultsScopeCallback = (data) => {
  appliedFilterOptions = data;

  invokeMapFilters();
  invokeMapResults(true);
};

const validateObjNullValues = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === null) {
      return true;
    }
  }
  return false;
};

const filterMapResults = (data) => {
  const results = data.filter((item) => {
    if (!validateObjNullValues(item.geographicBoundary)) {
      return item;
    }
  });
  return results;
};

const getMapResults = async (path, fitToMapExtentFlag) => {
  const mapResultsButton = document.getElementById(mapResultsButtonId);
  const mapResultsCount = document.getElementById(mapResultsCountId);
  const noSpatialDataSpan = document.getElementById(noSpatialDataId);
  const viewResultsSpan = document.getElementById(viewResultsId);
  const mapContainerDiv = document.getElementById(mapContainerId);

  const response = await invokeAjaxCall(path, {}, false, 'GET');
  if (response) {
    if (response.status === responseSuccessStatusCode) {
      const mapResultsJson = await response.json();
      const mapResultsData = filterMapResults(mapResultsJson.items);
      mapResultsCount.textContent = mapResultsData.length;
      if (mapResultsData.length === 0) {
        mapContainerDiv.classList.add('disabled');
        noSpatialDataSpan.classList.remove('display-none');
        viewResultsSpan.classList.add('display-none');
      } else {
        mapResultsButton.removeAttribute('disabled');
        mapContainerDiv.classList.remove('disabled');
        noSpatialDataSpan.classList.add('display-none');
        viewResultsSpan.classList.remove('display-none');
      }
      const boundingBoxInfo = document.getElementById('defra-bounding-box-info');
      if (boundingBoxInfo && mapResultsJson.total > maxCountForBoundingBoxInfo) {
        boundingBoxInfo.style.display = 'block';
      } else {
        boundingBoxInfo.style.display = 'none';
      }
      mapResults = mapResultsData;
      polygonFeatureData.length = 0;
      setTimeout(() => {
        drawBoundingBoxWithMarker(fitToMapExtentFlag, true);
      }, 100);
      attachBoundingBoxToggleListener();
      // don't need to handle the `else` cases anymore as it start disabled by default
    }

    // intialize the keywords functionality whenerver the DOM refreshed
    const keywordInput = $(`#filters-keywords-map_results`);
    const filterType = 'map_results';
    loadKeyboardListData();
    keywordsDropdownListAction(keywordInput, filterType);

    $('#keyboard-filter-list').on('click', 'li', function () {
      const selectedValue = $(this).text();
      keywordInput.val('');
      keywordInput.focus();
      if (!$(this).hasClass('keyword-filter-no-record-found')) {
        keywordInput.val($(this).text());
        $('.filter-options__keyboard-filter-content-' + filterType).hide();
      }

      if (!checkDuplicateKeywords('#keyword-badge-container-map_results', selectedValue)) {
        createBadge(selectedValue, '#keyword-badge-container-map_results');
        keywordInput.val('');
        keywordInput.focus();
        $(`.keyword-input-${filterType}-error-message`).hide();
        $(`#filters-keywords-${filterType}`).removeClass('govuk-input--error');
      }
    });
    $(document).click(function (event) {
      if (
        !$(event.target).closest('#filters-keywords-map_results').length &&
        !$(event.target).closest('.filter-options__keyboard-filter-content-' + filterType).length
      ) {
        $('.filter-options__keyboard-filter-content-' + filterType).hide();
      }
    });
  }
};

const getMapResultsOnPageload = async (fitToMapExtentFlag) => {
  const mapResultsButton = document.getElementById(mapResultsButtonId);
  const mapResultsCount = document.getElementById(mapResultsCountId);
  const noSpatialDataSpan = document.getElementById(noSpatialDataId);
  const viewResultsSpan = document.getElementById(viewResultsId);
  const mapContainerDiv = document.getElementById(mapContainerId);
  const searchResults = window.searchResults;
  const mapResultsData = filterMapResults(searchResults.items);

  mapResultsCount.textContent = mapResultsData.length;

  if (mapResultsData.length === 0) {
    mapContainerDiv.classList.add('disabled');
    noSpatialDataSpan.classList.remove('display-none');
    viewResultsSpan.classList.add('display-none');
  } else {
    mapResultsButton.removeAttribute('disabled');
    mapContainerDiv.classList.remove('disabled');
    noSpatialDataSpan.classList.add('display-none');
    viewResultsSpan.classList.remove('display-none');
  }
  const boundingBoxInfo = document.getElementById('defra-bounding-box-info');

  if (boundingBoxInfo && searchResults.total > maxCountForBoundingBoxInfo) {
    boundingBoxInfo.style.display = 'block';
  } else {
    boundingBoxInfo.style.display = 'none';
  }
  mapResults = mapResultsData;
  polygonFeatureData.length = 0;
  setTimeout(() => {
    drawBoundingBoxWithMarker(fitToMapExtentFlag, true);
  }, 100);
  attachBoundingBoxToggleListener();
  // don't need to handle the `else` cases anymore as it start disabled by default
};

const getMapFilters = async (path) => {
  const response = await invokeAjaxCall(path, {}, false, 'GET');
  if (response && response?.status === responseSuccessStatusCode) {
    const mapFiltersHtml = await response.text();
    document.getElementById(filterBlockId).innerHTML = mapFiltersHtml;

    addCategoryAccordionToggleListeners(mapResultsInstance);
    addScopeChangeListener(mapResultsInstance, mapResultsScopeCallback);
    addMapFilterFormSubmitListener(mapResultsInstance);
    addMapFilterFormResetListener(mapResultsInstance);
    addAllCheckboxListeners(mapResultsInstance);
    document.getElementById('filters-licence-map_results').setAttribute('aria-label', 'Licence');
    document.getElementById('filters-keywords-map_results').setAttribute('aria-label', 'Keywords');
  }
};

const getPathWithQueryParams = (basePath, needOriginalQueryParams) => {
  const queryParams = new URLSearchParams(appliedFilterOptions != null ? appliedFilterOptions : window.location.search);

  appendMetaSearchParams(queryParams);

  // add keywords query params
  const keywordBadgesList = Array.from(document.querySelectorAll('#keyword-badge-container-map_results li'));
  if (keywordBadgesList.length > 0) {
    const badgeText = keywordBadgesList.map((item) => item.innerText).join(',');
    queryParams.set('keywords', badgeText);
  }
  const queryString = queryParams.size > 0 ? `?${queryParams.toString()}` : '';
  return `${basePath}${queryString}`;
};

const getPathWithFormFilters = (basePath, formData) => {
  const queryParams = new URLSearchParams(formData);

  appendMetaSearchParams(queryParams);

  // add keywords query params
  const keywordBadgesList = Array.from(document.querySelectorAll('#keyword-badge-container-map_results li'));
  if (keywordBadgesList.length > 0) {
    const badgeText = keywordBadgesList.map((item) => item.innerText).join(',');
    queryParams.set('keywords', badgeText);
  }
  const queryString = queryParams.size > 0 ? `?${queryParams.toString()}` : '';
  return `${basePath}${queryString}`;
};

const checkLatestBrowser = () => {
  try {
    eval('const x = (y) => y + 1');
    return true;
  } catch (e) {
    const mapResultsBlock = document.getElementById('map-results-block');
    if (mapResultsBlock) {
      mapResultsBlock.classList.add('map-results-block');
    }
    const mapResultsButton = document.getElementById(mapResultsButtonId);
    if (mapResultsButton) {
      mapResultsButton.style.marginBottom = '10px';
      mapResultsButton.setAttribute('disabled', true);
    }
    const mapUnavailableInfo = document.getElementById('map-results-unavailable');
    if (mapUnavailableInfo) {
      mapUnavailableInfo.style.display = 'block';
    }
    return false;
  }
};

const invokeMapResults = (fitToMapExtentFlag = false, needOriginalQueryParams = false) => {
  if (checkLatestBrowser()) {
    const fetchResults = document.querySelector('[data-fetch-map-results]');
    if (fetchResults) {
      const action = fetchResults.getAttribute(actionDataAttribute);
      getMapResults(getPathWithQueryParams(action, needOriginalQueryParams), fitToMapExtentFlag);
    }
  }
};

const updateResetPathParams = (resetPathParams) => {
  if (document.getElementById('scope-map_results').checked) {
    return `${resetPathParams}&scope=ncea`;
  }
  return `${resetPathParams}&scope=all`;
};

const invokeMapResultsFormFilters = (fitToMapExtentFlag = false, data) => {
  if (checkLatestBrowser()) {
    const fetchResults = document.querySelector('[data-fetch-map-results]');
    if (fetchResults) {
      const action = fetchResults.getAttribute(actionDataAttribute);
      const updatePathParams = updateResetPathParams(getPathWithFormFilters(action, data));
      getMapResults(updatePathParams, fitToMapExtentFlag);
    }
  }
};

const invokeMapFilters = async (needOriginalQueryParams = false) => {
  if (checkLatestBrowser()) {
    const fetchFilters = document.querySelector('[data-fetch-map-filters]');
    if (fetchFilters) {
      const action = fetchFilters.getAttribute(actionDataAttribute);
      await getMapFilters(getPathWithQueryParams(action, needOriginalQueryParams));
    }
  }
};

function animateZoom(delta) {
  map.getView().animate({
    zoom: map.getView().getZoom() + delta,
    duration: 250,
    easing: ol.easing.easeOut,
  });
}

function createTooltipOverlay(index) {
  const tooltip = document.createElement('div');
  tooltip.className = 'marker-tooltip';
  tooltip.innerHTML = (index + 1).toString();
  tooltip.style.position = 'absolute';
  tooltip.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  tooltip.style.padding = '4px 4px';
  tooltip.style.borderRadius = '7px';
  tooltip.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  tooltip.style.pointerEvents = 'none';
  tooltip.style.border = '3px solid #000';
  tooltip.style.fontWeight = 'bold';
  tooltip.style.fontSize = '20px';
  tooltip.style.display = 'flex';
  tooltip.style.alignItems = 'center';
  tooltip.style.justifyContent = 'center';
  tooltip.style.width = '16px';
  tooltip.style.height = '16px';
  tooltip.style.fontFamily = "'GDS Transport', arial, sans-serif";

  const markerOverlay = new ol.Overlay({
    element: tooltip,
    positioning: 'top-center',
    offset: [markerOverlayOffsetX, markerOverlayOffsetY],
    stopEvent: false,
  });

  map.addOverlay(markerOverlay);
  markerOverlays.push(markerOverlay);
}

function fitMapToExtent() {
  const padding = 50;

  const visibleMarkers = clusterVectorSource.getFeatures();
  const extent = ol.extent.createEmpty();
  if (visibleMarkers.length > 0) {
    visibleMarkers.forEach((marker) => {
      ol.extent.extend(extent, marker.getGeometry().getExtent());
    });
  }

  if (!ol.extent.isEmpty(extent)) {
    map.getView().fit(extent, {
      padding: [padding, padding, padding, padding],
      duration: 1000,
      maxZoom,
    });
  }
  initialCenter = map.getView().getCenter();
  if (resetControl) {
    viewChanged = false;
    resetControl.style.display = 'none';
  }
}

function customControls() {
  const zoomInElement = document.getElementById('defra-map-zoom-in');
  const zoomOutElement = document.getElementById('defra-map-zoom-out');
  if (zoomInElement) {
    zoomInElement.addEventListener('click', () => {
      animateZoom(1);
    });
  }
  if (zoomOutElement) {
    zoomOutElement.addEventListener('click', () => {
      animateZoom(-1);
    });
  }
  if (resetControl) {
    resetControl.addEventListener('click', resetMap);
    map.on('moveend', () => {
      if (firstMove) {
        fitMapToExtent();
        firstMove = false;
      } else {
        if (!viewChanged) {
          viewChanged = true;
        } else {
          resetControl.style.display = 'block';
        }
      }
    });
  }
}

function infoListener() {
  const closeInfoElement = document.getElementById('map-info-close');
  if (closeInfoElement) {
    closeInfoElement.addEventListener('click', () => {
      closeInfoPopup();
      deslectActiveCluster();
    });
  }
  const moreInfoElement = document.getElementById('more-info');
  if (moreInfoElement) {
    moreInfoElement.addEventListener('click', moreInfoNavigation);
  }
  const goToResourceElement = document.getElementById('go-to-resource');
  if (goToResourceElement) {
    if (!selectedRecord.organisationName || !selectedRecord.resourceLocator) {
      goToResourceElement.setAttribute('disabled', true);
    } else {
      goToResourceElement.removeAttribute('disabled');
    }
    if (!hasResourceListener) {
      goToResourceElement.addEventListener('click', () => {
        window.openDataModal(selectedRecord.organisationName, selectedRecord.resourceLocator, true);
      });
      hasResourceListener = true;
    }
  }
}

function handleKeyboardArrowEvent(event) {
  const view = map.getView();
  const delta = view.getResolution() * 100;

  switch (event.keyCode) {
    case leftArrowKey: // Left arrow key
      view.animate({
        center: [view.getCenter()[0] - delta, view.getCenter()[1]],
        duration: 100,
      });
      break;
    case upArrowKey: // Up arrow key
      view.animate({
        center: [view.getCenter()[0], view.getCenter()[1] + delta],
        duration: 100,
      });
      break;
    case rightArrowKey: // Right arrow key
      view.animate({
        center: [view.getCenter()[0] + delta, view.getCenter()[1]],
        duration: 100,
      });
      break;
    case downArrowKey: // Down arrow key
      view.animate({
        center: [view.getCenter()[0], view.getCenter()[1] - delta],
        duration: 100,
      });
      break;
    default:
      break;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById(mapTarget)) {
    if (isDetailsScreen && hasCenter) {
      const geographyTabTag = document.querySelector('a[href="#geography"]');
      geographyTabTag.addEventListener('click', geographyTabListener);
      setTimeout(() => {
        geographyTabListener();
      }, timeout);
    } else if (isMapResultsScreen) {
      getMapResultsOnPageload(true);
      invokeMapFilters();
      exitMapEventListener();
      attachCluserListCloseListener();

      disableInteractions();
      customControls();
      document.addEventListener('keydown', handleKeyboardArrowEvent);
    } else {
      setTimeout(() => {
        calculatePolygonFromCoordinates();
        attachClearSelectionListener();
      }, timeout);
    }
  }
});
export { invokeMapResults, setBadgeValue, invokeMapResultsFormFilters };
