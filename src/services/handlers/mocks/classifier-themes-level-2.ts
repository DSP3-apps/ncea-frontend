export const CLASSIFIER_COUNT_LEVEL_2 = { count: 8091, _shards: { total: 1, successful: 1, skipped: 0, failed: 0 } };

export const CLASSIFIER_LEVEL_2 = [
  {
    sectionTitle: 'Natural assets',
    sectionIntroduction:
      'Natural Assets are the living and non-living elements of ecosystems including soils, freshwater, minerals, air and oceans. We often group assets by broad habitat types (e.g. woodland or pelagic) but can also group them by the components that make up ecosystems  (e.g. by species that span multiple habitats,  soils and sediments). Select all that apply.',
    classifiers: [
      {
        code: 'lv2-001',
        name: 'Terrestrial and freshwater habitats',
        definition:
          'Habitats found on land and in freshwater.  This includes mountains, moorlands and heath, grasslands, farmland, woodlands, urban, linear features, and various freshwater bodies, e.g. rivers, lakes, small streams.',
        text: 'Habitats found on land and in freshwater.  This includes mountains, moorlands and heath, grasslands, farmland, woodlands, urban, linear features, and various freshwater bodies, e.g. rivers, lakes, small streams.',
        value: 'Terrestrial and freshwater habitats',
      },
      {
        code: 'lv2-002',
        name: 'Coastal and estuarine habitats',
        definition:
          'Habitats located at the interface of land and sea, including beaches, salt marshes, estuaries, and rocky shores. These environments are shaped by the dynamic interactions between terrestrial and marine influences, such as tides.',
        text: 'Habitats located at the interface of land and sea, including beaches, salt marshes, estuaries, and rocky shores. These environments are shaped by the dynamic interactions between terrestrial and marine influences, such as tides.',
        value: 'Coastal and estuarine habitats',
      },
      {
        code: 'lv2-003',
        name: 'Marine habitats',
        definition:
          'Marine habitats are directly connected to the oceans, i.e. part of the continuous body of water which covers the greater part of the earth’s surface and which surrounds its land masses. Marine waters may be fully saline, brackish or almost fresh. Marine habitats include those below spring high tide limit (or below mean water level in non-tidal waters) and enclosed coastal saline or brackish waters, without a permanent surface connection to the sea but either with intermittent surface or sub-surface connections (as in lagoons). Rockpools in the supralittoral zone are considered as enclaves of the marine zone. Includes marine littoral habitats which are subject to wet and dry periods on a tidal cycle including tidal saltmarshes; marine littoral habitats which are normally water-covered but intermittently exposed due to the action of wind or atmospheric pressure changes; freshly deposited marine strandlines characterised by marine invertebrates. Waterlogged littoral saltmarshes and associated saline or brackish pools above the mean water level in non-tidal waters or above the spring high tide limit in tidal waters are included with marine habitats. Includes constructed marine saline habitats below water level as defined above (such as in marinas, harbours, etc) which support a semi-natural community of both plants and animals. The marine water column includes bodies of ice.',
        text: 'Marine habitats are directly connected to the oceans, i.e. part of the continuous body of water which covers the greater part of the earth’s surface and which surrounds its land masses. Marine waters may be fully saline, brackish or almost fresh. Marine habitats include those below spring high tide limit (or below mean water level in non-tidal waters) and enclosed coastal saline or brackish waters, without a permanent surface connection to the sea but either with intermittent surface or sub-surface connections (as in lagoons). Rockpools in the supralittoral zone are considered as enclaves of the marine zone. Includes marine littoral habitats which are subject to wet and dry periods on a tidal cycle including tidal saltmarshes; marine littoral habitats which are normally water-covered but intermittently exposed due to the action of wind or atmospheric pressure changes; freshly deposited marine strandlines characterised by marine invertebrates. Waterlogged littoral saltmarshes and associated saline or brackish pools above the mean water level in non-tidal waters or above the spring high tide limit in tidal waters are included with marine habitats. Includes constructed marine saline habitats below water level as defined above (such as in marinas, harbours, etc) which support a semi-natural community of both plants and animals. The marine water column includes bodies of ice.',
        value: 'Marine habitats',
      },
      {
        code: 'lv2-004',
        name: 'Generalist species (spanning multiple habitats)',
        definition:
          'Habitat generalist species are known for spanning multiple habitats, either through adaptability or through extensive movements over large geographical distances, often during specific times of the year (migratory species). Includes species of birds, marine mammals, insects and fish.',
        text: 'Habitat generalist species are known for spanning multiple habitats, either through adaptability or through extensive movements over large geographical distances, often during specific times of the year (migratory species). Includes species of birds, marine mammals, insects and fish.',
        value: 'Generalist species (spanning multiple habitats)',
      },
      {
        code: 'lv2-005',
        name: 'Ecosystem component',
        definition:
          'An ecosystem is a dynamic complex of living and non-living elements interacting as a functional unit including the processes that support these functions. These include Climate, Atmosphere, Soils, Sediments and Geology, Water Chemistry and Hydrology, and Biodiversity.',
        text: 'An ecosystem is a dynamic complex of living and non-living elements interacting as a functional unit including the processes that support these functions. These include Climate, Atmosphere, Soils, Sediments and Geology, Water Chemistry and Hydrology, and Biodiversity.',
        value: 'Ecosystem component',
      },
    ],
    selectAll: 'lv2-001,lv2-002,lv2-003,lv2-004,lv2-005',
  },
  {
    sectionTitle: 'Pressure',
    sectionIntroduction:
      'Pressures affect the state of natural assets (their condition, extent, or location) thereby changing their ability to deliver ecosystem services. Pressures include climate change, chemical and other types of pollution, biological disturbances, hydrological changes, and land or seabed use change, and are influenced by drivers such as population growth and societal needs for food, energy, wellbeing etc. Where the pressure cannot be directly measured, the impact on natural assets can be measured instead, such as habitat destruction.  In contrast, Drivers are much broader and indirect in nature, generally creating pressures. Select all that apply.',
    classifiers: [
      {
        code: 'lv2-011',
        name: 'Climate change',
        definition:
          'A change of climate which is attributed directly or indirectly to human activity that alters the composition of the global atmosphere and which is in addition to natural climate variability observed over comparable time periods.',
        text: 'A change of climate which is attributed directly or indirectly to human activity that alters the composition of the global atmosphere and which is in addition to natural climate variability observed over comparable time periods.',
        value: 'Climate change',
      },
      {
        code: 'lv2-012',
        name: 'Chemical pollution',
        definition:
          'Pollution is the introduction of contaminants into the natural environment that cause adverse change. Chemical pollution is the addition of any substance (solid, liquid, or gas) to the environment at a rate faster than it can be dispersed, diluted, decomposed, recycled, or stored in some harmless form.',
        text: 'Pollution is the introduction of contaminants into the natural environment that cause adverse change. Chemical pollution is the addition of any substance (solid, liquid, or gas) to the environment at a rate faster than it can be dispersed, diluted, decomposed, recycled, or stored in some harmless form.',
        value: 'Chemical pollution',
      },
      {
        code: 'lv2-013',
        name: 'Biological disturbances',
        definition:
          'A disturbance (in ecology) is any relatively discrete event in time that disrupts ecosystem, community, or population structure and changes resources, substrate availability, or the physical environment. A biological disturbance is one from a biological origin (e.g. invasive species, pests and diseases).',
        text: 'A disturbance (in ecology) is any relatively discrete event in time that disrupts ecosystem, community, or population structure and changes resources, substrate availability, or the physical environment. A biological disturbance is one from a biological origin (e.g. invasive species, pests and diseases).',
        value: 'Biological disturbances',
      },
      {
        code: 'lv2-014',
        name: 'Hydrological changes',
        definition:
          "Changes to the properties of the earth's water and its movement over and through the Earth's surface caused by human activities or natural causes.",
        text: "Changes to the properties of the earth's water and its movement over and through the Earth's surface caused by human activities or natural causes.",
        value: 'Hydrological changes',
      },
      {
        code: 'lv2-015',
        name: 'Land and sea use change',
        definition:
          'Land and sea use change is a major human influence on habitats and can include the conversion of land or sea cover (e.g. through deforestation or trawling), changes in the management of the ecosystem (e.g. through the intensification of agricultural management or aquaculture) or changes in the spatial configuration of the landscape (e.g. fragmentation of habitats).',
        text: 'Land and sea use change is a major human influence on habitats and can include the conversion of land or sea cover (e.g. through deforestation or trawling), changes in the management of the ecosystem (e.g. through the intensification of agricultural management or aquaculture) or changes in the spatial configuration of the landscape (e.g. fragmentation of habitats).',
        value: 'Land and sea use change',
      },
      {
        code: 'lv2-016',
        name: 'Other pollution or physical pressure',
        definition:
          'Pollution is the introduction of contaminants into the natural environment that cause adverse change. ‘Other pollution’ refers to the addition on non-chemical pollutants, such as litter, noise, light, to the environment at a rate faster than it can be dispersed, diluted, decomposed, recycled, or stored in some harmless form.\nPhysical pressures result from human activities which bring about changes in the state of the environment. This category includes pressures not covered elsewhere, such as barriers to species movement and death or injury by collision.',
        text: 'Pollution is the introduction of contaminants into the natural environment that cause adverse change. ‘Other pollution’ refers to the addition on non-chemical pollutants, such as litter, noise, light, to the environment at a rate faster than it can be dispersed, diluted, decomposed, recycled, or stored in some harmless form.\nPhysical pressures result from human activities which bring about changes in the state of the environment. This category includes pressures not covered elsewhere, such as barriers to species movement and death or injury by collision.',
        value: 'Other pollution or physical pressure',
      },
    ],
    selectAll: 'lv2-011,lv2-012,lv2-013,lv2-014,lv2-015,lv2-016',
  },
];

export const CLASSIFIER_LEVEL_2_MOCK_DATA = [
  {
    sectionTitle: 'Natural capital valuation',
    sectionIntroduction:
      'For the purposes of this search tool, natural capital valuation is defined as the method used to determine the value of an ecosystem service. This can be in non-monetary terms (e.g. heritage values or existence values) or in monetary terms (e.g. market price or willingness to pay).',
    classifiers: [
      {
        code: 'lv2-009',
        name: 'Monetary',
        definition:
          'The amount of value an item or a service has in relation to its acceptable cash price for a willing seller and buyer.',
        text: 'The amount of value an item or a service has in relation to its acceptable cash price for a willing seller and buyer.',
        value: 'Monetary',
      },
      {
        code: 'lv2-010',
        name: 'Non-monetary',
        definition:
          'The value attributable to an item or a service without relation to any acceptable cash price and for which a fixed or determinable amount of currency is absent (e.g. many ecosystem services, interpersonal good-will, health, etc.).',
        text: 'The value attributable to an item or a service without relation to any acceptable cash price and for which a fixed or determinable amount of currency is absent (e.g. many ecosystem services, interpersonal good-will, health, etc.).',
        value: 'Non-monetary',
      },
    ],
    selectAll: 'lv2-009,lv2-010',
  },
];
