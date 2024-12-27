export const CLASSIFIER_COUNT_LEVEL_3 = { count: 1032, _shards: { total: 1, successful: 1, skipped: 0, failed: 0 } };

export const CLASSIFIER_LEVEL_3 = [
  {
    sectionTitle: 'Natural assets',
    sectionIntroduction:
      'Natural Assets are the living and non-living elements of ecosystems including soils, freshwater, minerals, air and oceans. We often group assets by broad habitat types (e.g. woodland or pelagic) but can also group them by the components that make up ecosystems  (e.g. by species that span multiple habitats,  soils and sediments). Select all that apply.',
    classifiers: [],
    selectAll: '',
  },
  {
    code: 'lv2-001',
    name: 'Terrestrial and freshwater habitats',
    classifiers: [
      {
        code: 'lv3-001',
        name: 'Broadleaved, mixed and yew woodland',
        definition:
          'Covers all broadleaved, yew, and mixed broadleaved and coniferous stands which have more than 20% cover of broadleaved and yew trees. It includes patches of scrub where the woody element creates a canopy of more than 30% and the scrub area is above 0.25ha, recently felled broadleaved woodland, and integral features of woodland such as glades (clearings) and rides (pathways).',
        text: 'Covers all broadleaved, yew, and mixed broadleaved and coniferous stands which have more than 20% cover of broadleaved and yew trees. It includes patches of scrub where the woody element creates a canopy of more than 30% and the scrub area is above 0.25ha, recently felled broadleaved woodland, and integral features of woodland such as glades (clearings) and rides (pathways).',
        value: 'Broadleaved, mixed and yew woodland',
      },
      {
        code: 'lv3-002',
        name: 'Coniferous woodland',
        definition:
          'Covers all coniferous stands where native and non-native conifers exceed more than 80% of the total cover of trees present.  It includes recently felled coniferous woodland and integral features of woodland, such as glades (clearings) and rides (pathways). It excludes yew woodlands.',
        text: 'Covers all coniferous stands where native and non-native conifers exceed more than 80% of the total cover of trees present.  It includes recently felled coniferous woodland and integral features of woodland, such as glades (clearings) and rides (pathways). It excludes yew woodlands.',
        value: 'Coniferous woodland',
      },
      {
        code: 'lv3-003',
        name: 'Boundary and linear features',
        definition:
          'Covers landscape features that are linear in appearance, such as hedgerows, lines of trees, stonewalls, and built components of the rural landscape such as railways, roads, and verges. It excludes canals, rivers, woodland rides or arable field margins managed for nature conservation which are covered in other broad habitats.',
        text: 'Covers landscape features that are linear in appearance, such as hedgerows, lines of trees, stonewalls, and built components of the rural landscape such as railways, roads, and verges. It excludes canals, rivers, woodland rides or arable field margins managed for nature conservation which are covered in other broad habitats.',
        value: 'Boundary and linear features',
      },
      {
        code: 'lv3-004',
        name: 'Arable and horticulture',
        definition:
          "Covers arable cropland, commercial horticultural land, freshly ploughed land, other cultivated areas such as temporary grasslands and fallow. It excludes domestic gardens and allotments which are covered by 'Built-up areas and gardens'.",
        text: "Covers arable cropland, commercial horticultural land, freshly ploughed land, other cultivated areas such as temporary grasslands and fallow. It excludes domestic gardens and allotments which are covered by 'Built-up areas and gardens'.",
        value: 'Arable and horticulture',
      },
      {
        code: 'lv3-005',
        name: 'Improved grassland',
        definition:
          'Highly modified / intensively managed grassland, dominated by a few fast-growing grasses on fertile, neutral soils. These grasslands tend to be managed as pasture, used for silage production, and for recreation and amenity purposes.',
        text: 'Highly modified / intensively managed grassland, dominated by a few fast-growing grasses on fertile, neutral soils. These grasslands tend to be managed as pasture, used for silage production, and for recreation and amenity purposes.',
        value: 'Improved grassland',
      },
      {
        code: 'lv3-006',
        name: 'Neutral grassland',
        definition:
          'Covers semi-improved and unimproved grassland on soils with a neutral pH. It includes managed grassland like hay meadows and pastures, grasslands with various amounts of waterlogging.  These grasslands have a greater range and cover of herbs than improved grassland.',
        text: 'Covers semi-improved and unimproved grassland on soils with a neutral pH. It includes managed grassland like hay meadows and pastures, grasslands with various amounts of waterlogging.  These grasslands have a greater range and cover of herbs than improved grassland.',
        value: 'Neutral grassland',
      },
      {
        code: 'lv3-007',
        name: 'Calcareous grassland',
        definition:
          'Covers semi-improved and unimproved grassland on soils with a pH above 7. They are found on shallow soils rich in lime, typically underlain by chalk or limestone rocks.',
        text: 'Covers semi-improved and unimproved grassland on soils with a pH above 7. They are found on shallow soils rich in lime, typically underlain by chalk or limestone rocks.',
        value: 'Calcareous grassland',
      },
      {
        code: 'lv3-008',
        name: 'Acid grassland',
        definition:
          'Covers semi-improved and unimproved grassland on soils with a pH below 5.5. It excludes saltmarsh and sand-dune communities.',
        text: 'Covers semi-improved and unimproved grassland on soils with a pH below 5.5. It excludes saltmarsh and sand-dune communities.',
        value: 'Acid grassland',
      },
      {
        code: 'lv3-009',
        name: 'Bracken',
        definition:
          'Areas covered by continuous bracken. It excludes scattered patches and areas of bracken that are less than 0.25ha which should be classified with their associated broad habitat type.',
        text: 'Areas covered by continuous bracken. It excludes scattered patches and areas of bracken that are less than 0.25ha which should be classified with their associated broad habitat type.',
        value: 'Bracken',
      },
      {
        code: 'lv3-010',
        name: 'Dwarf shrub heath',
        definition:
          'Vegetation dominated by heath family species or dwarf gorse on well-drained, nutrient poor, acid soils.  It excludes dwarf shrub associated with peat (formation and substrate), alpine and coastal areas.',
        text: 'Vegetation dominated by heath family species or dwarf gorse on well-drained, nutrient poor, acid soils.  It excludes dwarf shrub associated with peat (formation and substrate), alpine and coastal areas.',
        value: 'Dwarf shrub heath',
      },
      {
        code: 'lv3-011',
        name: 'Fen, marsh and swamp',
        definition:
          'Vegetation types found on groundwater-fed, permanently, seasonally, or periodically waterlogged peat, peaty, or mineral soils. It excludes areas of waterlogged wooded terrain over 0.25ha and wet grassland which are covered by other broad habitats.',
        text: 'Vegetation types found on groundwater-fed, permanently, seasonally, or periodically waterlogged peat, peaty, or mineral soils. It excludes areas of waterlogged wooded terrain over 0.25ha and wet grassland which are covered by other broad habitats.',
        value: 'Fen, marsh and swamp',
      },
      {
        code: 'lv3-012',
        name: 'Bogs',
        definition:
          'Wetlands with vegetation that typically forms peat, receiving nutrients principally from precipitation rather than ground water. It includes blanket bog, raised bog, and intermediate bog habitats.',
        text: 'Wetlands with vegetation that typically forms peat, receiving nutrients principally from precipitation rather than ground water. It includes blanket bog, raised bog, and intermediate bog habitats.',
        value: 'Bogs',
      },
      {
        code: 'lv3-013',
        name: 'Standing open water and canals',
        definition:
          "Covers natural water bodies like lakes and man-made ones like reservoirs, ponds, and canals. It includes open water vegetation and vegetation at the water's edge. Also includes ditches having open water for most of the year and adjacent wetland habitats with connected water levels that are less than 0.25 hectares.",
        text: "Covers natural water bodies like lakes and man-made ones like reservoirs, ponds, and canals. It includes open water vegetation and vegetation at the water's edge. Also includes ditches having open water for most of the year and adjacent wetland habitats with connected water levels that are less than 0.25 hectares.",
        value: 'Standing open water and canals',
      },
      {
        code: 'lv3-014',
        name: 'Rivers and streams',
        definition:
          "Large (rivers) and small (streams) running waters. It covers the area up to the average yearly flood level, including the open channel, vegetation at the water's edge, and exposed sediments and shingle banks.",
        text: "Large (rivers) and small (streams) running waters. It covers the area up to the average yearly flood level, including the open channel, vegetation at the water's edge, and exposed sediments and shingle banks.",
        value: 'Rivers and streams',
      },
      {
        code: 'lv3-015',
        name: 'Montane habitats',
        definition:
          'Covers vegetation types occurring in the montane zone (above the natural tree line).  This includes dwarf shrub heath, snow bed communities, sedge and rush heaths, and moss and lichen heaths.',
        text: 'Covers vegetation types occurring in the montane zone (above the natural tree line).  This includes dwarf shrub heath, snow bed communities, sedge and rush heaths, and moss and lichen heaths.',
        value: 'Montane habitats',
      },
      {
        code: 'lv3-016',
        name: 'Inland rock',
        definition:
          'Covers natural and man-made exposed rock surfaces that are greater than 0.25 ha and almost entirely lack vegetation. It covers inland cliffs, ledges, caves, screes, limestone pavements, quarries, waste tips.  Plant communities include those that colonise cracks and fissures, grasslands on soils containing heavy metals, and some tall herbs and fern vegetation.',
        text: 'Covers natural and man-made exposed rock surfaces that are greater than 0.25 ha and almost entirely lack vegetation. It covers inland cliffs, ledges, caves, screes, limestone pavements, quarries, waste tips.  Plant communities include those that colonise cracks and fissures, grasslands on soils containing heavy metals, and some tall herbs and fern vegetation.',
        value: 'Inland rock',
      },
      {
        code: 'lv3-017',
        name: 'Built up areas and gardens',
        definition:
          'Covers urban and rural settlements, farm buildings, caravan parks, industrial areas and other man-made structures like retail parks, urban parks, transport infrastructure and derelict land. It includes domestic gardens and allotments. Amenity grassland is included in the Improved Grassland category.',
        text: 'Covers urban and rural settlements, farm buildings, caravan parks, industrial areas and other man-made structures like retail parks, urban parks, transport infrastructure and derelict land. It includes domestic gardens and allotments. Amenity grassland is included in the Improved Grassland category.',
        value: 'Built up areas and gardens',
      },
    ],
    sectionTitle: 'Terrestrial and freshwater habitats',
    sectionIntroduction: '',
    selectAll:
      'lv3-001,lv3-002,lv3-003,lv3-004,lv3-005,lv3-006,lv3-007,lv3-008,lv3-009,lv3-010,lv3-011,lv3-012,lv3-013,lv3-014,lv3-015,lv3-016,lv3-017',
    text: '',
    value: 'Terrestrial and freshwater habitats',
  },
  {
    code: 'lv2-005',
    name: 'Ecosystem component',
    classifiers: [
      {
        code: 'lv3-042',
        name: 'Climate and Microclimate',
        definition:
          'Climate is the generalised weather of an area, including typical patterns of sunlight, temperature, rainfall and wind. It also includes seasonal effects, such as changes in day length.\nMicroclimate is the localised climate of a particular location, which can be measured over multiple scales (e.g. beneath a tree or within a valley). It represents the local modification of the climate through various surface factors such as topography, vegetation, the presence of water and soil types.',
        text: 'Climate is the generalised weather of an area, including typical patterns of sunlight, temperature, rainfall and wind. It also includes seasonal effects, such as changes in day length.\nMicroclimate is the localised climate of a particular location, which can be measured over multiple scales (e.g. beneath a tree or within a valley). It represents the local modification of the climate through various surface factors such as topography, vegetation, the presence of water and soil types.',
        value: 'Climate and Microclimate',
      },
      {
        code: 'lv3-043',
        name: 'Ecological community',
        definition:
          'An assemblage of species occurring in the same space or time, often linked by biotic interactions such as competition or predation.',
        text: 'An assemblage of species occurring in the same space or time, often linked by biotic interactions such as competition or predation.',
        value: 'Ecological community',
      },
      {
        code: 'lv3-044',
        name: 'Functional trait',
        definition:
          'Functional traits are behaviours, morphologies or other characteristics of organisms that impact that organism’s environment or ecosystem (e.g. burrowing, body size, breeding behaviour, filter feeding etc.).',
        text: 'Functional traits are behaviours, morphologies or other characteristics of organisms that impact that organism’s environment or ecosystem (e.g. burrowing, body size, breeding behaviour, filter feeding etc.).',
        value: 'Functional trait',
      },
      {
        code: 'lv3-045',
        name: 'Ecosystem process',
        definition:
          'An intrinsic ecosystem characteristic whereby an ecosystem maintains its integrity.  Ecosystem processes include decomposition production, nutrient cycling and fluxes of nut rients and energy.',
        text: 'An intrinsic ecosystem characteristic whereby an ecosystem maintains its integrity.  Ecosystem processes include decomposition, production, nutrient cycling and fluxes of nutrients an d energy.',
        value: 'Ecosystem process',
      },
      {
        code: 'lv3-046',
        name: 'Soils, Sediments and Geology',
        definition:
          'Soils are vertical profiles of weathered geological material (including sediments) and organic deposits, they have a variety of physical, mineral, and biotic characteristics, including pH, texture, aeration/compaction, carbon content, particle size and nutrient content. \nSediments are weathered materials thathave been transported from the place they were originally weathered from their parent material. This includes marine sediments are the accumulation of particles, organic matter and other materials that settle on the ocean floor over time.\nGeology is the original parent material from which sediments and soils are weathered. Landform is topographic features such as aspect, slope and elevation which affect climate and geology of a location which in turn affect its hydrology (e.g. catchment characteristics, in combination with soils and watercourse features) and biota.',
        text: 'Soils are vertical profiles of weathered geological material (including sediments) and organic deposits, they have a variety of physical, mineral, and biotic characteristics, including pH, texture, aeration/compaction, carbon content, particle size and nutrientcontent. \nSediments are weathered materials that have been transported from the place they were originally weathered from their parent material. This includes marine sediments are the accumulation of particles, organic matter and other materials that settle on the ocean floor over time.\nGeology is the original parent material from which sediments and soils are weathered. Landform is topographic features such as aspect, slope and elevation which affect climate and geology of a location which in turn affect its hydrology (e.g. catchment characteristics, in combination with soils and watercourse features) and biota.',
        value: 'Soils, Sediments and Geology',
      },
      {
        code: 'lv3-047',
        name: 'Water Chemistry and Hydrology',
        definition:
          "Hydrology is the branch of science concerned with the properties of the earth's water and its movement over and through the Earth's surface. This includes ground water (all water that exists in soils, sediments and rock), surface water bodies (bodies of freshwater in non-marine and coastal environments, including streams, rivers and lakes) and all marine environments. These waters have different abiotic and biotic chemistry (for instance different pH, Dissolved Organic Carbon, dissolved oxygen, and ammonia/nitrate concentrations), and biotic communities.",
        text: "Hydrology is the branch of science concerned with the properties of the earth's water and its movement over and through the Earth's surface. This includes ground water (all water that exists in soils, sediments and rock), surface water bodies (bodies of freshwater in non-marine and coastal environments, including streams, rivers and lakes) and all marine environments. These waters have different abiotic and biotic chemistry (for instance different pH, Dissolved Organic Carbon, dissolved oxygen, and ammonia/nitrate concentrations), and biotic communities.",
        value: 'Water Chemistry and Hydrology',
      },
      {
        code: 'lv3-048',
        name: 'Atmosphere',
        definition: 'Atmosphere is the mixture of gases which surround the Earth’s surface.',
        text: 'Atmosphere is the mixture of gases which surround the Earth’s surface.',
        value: 'Atmosphere',
      },
    ],
    sectionTitle: 'Ecosystem component',
    sectionIntroduction: '',
    selectAll: 'lv3-042,lv3-043,lv3-044,lv3-045,lv3-046,lv3-047,lv3-048',
    text: '',
    value: 'Ecosystem component',
  },
  {
    sectionTitle: 'Pressure',
    sectionIntroduction:
      'Pressures affect the state of natural assets (their condition, extent, or location) thereby changing their ability to deliver ecosystem services. Pressures include climate change, chemical and other types of pollution, biological disturbances, hydrological changes, and land or seabed use change, and are influenced by drivers such as population growth and societal needs for food, energy, wellbeing etc. Where the pressure cannot be directly measured, the impact on natural assets can be measured instead, such as habitat destruction.  In contrast, Drivers are much broader and indirect in nature, generally creating pressures. Select all that apply.',
    classifiers: [],
    selectAll: '',
  },
  {
    code: 'lv2-011',
    name: 'Climate change',
    classifiers: [
      {
        code: 'lv3-064',
        name: 'More frequent and extreme weather or climate events',
        definition:
          'The occurrence of a weather or climate variable above (or below) a threshold value near the upper (or lower) ends of the range of observed values of the variable. By definition, the characteristics of what is called extreme weather may vary from place to place in an absolute sense. When a pattern of extreme weather persists for some time, such as a season, it may be classified as an extreme climate event, especially if it yields an average or total that is itself extreme (e.g., wildfires, high temperature, drought or heavy rainfall over a season).',
        text: 'The occurrence of a weather or climate variable above (or below) a threshold value near the upper (or lower) ends of the range of observed values of the variable. By definition, the characteristics of what is called extreme weather may vary from placeto place in an absolute sense. When a pattern of extreme weather persists for some time, such as a season, it may be classified as an extreme climate event, especially if it yields an average or total that is itself extreme (e.g., wildfires, high temperature, drought or heavy rainfall over a season).',
        value: 'More frequent and extreme weather or climate events',
      },
      {
        code: 'lv3-065',
        name: 'Changes in precipitation pattern',
        definition:
          'A change in the distribution, intensity or frequency of rainfall in a particular area over a given period of time.',
        text: 'A change in the distribution, intensity or frequency of rainfall in a particular area over a given period of time.',
        value: 'Changes in precipitation pattern',
      },
      {
        code: 'lv3-060',
        name: 'Global warming',
        definition:
          'Global warming refers to the increase in global surface temperature relative to a baseline reference period, averaging over a period sufficient to remove interannual variations',
        text: 'Global warming refers to the increase in global surface temperature relative to a baseline reference period, averaging over a period sufficient to remove interannual variations',
        value: 'Global warming',
      },
      {
        code: 'lv3-061',
        name: 'Marine heatwaves',
        definition:
          'A period during which water temperature is abnormally warm for the time of the year relative to historical temperatures, with that extreme warmth persisting for days to months. The phenomenon can manifest in any place in the ocean and at scales of up to thousands of kilometres.',
        text: 'A period during which water temperature is abnormally warm for the time of the year relative to historical temperatures, with that extreme warmth persisting for days to months. The phenomenon can manifest in any place in the ocean and at scales of up to thousands of kilometres.',
        value: 'Marine heatwaves',
      },
      {
        code: 'lv3-062',
        name: 'Ocean acidification',
        definition:
          'Increased CO2concentrations in the atmosphere are absorbed by the ocean.  Increased CO2 concentrations affect the carbonate chemistry of seawater, and result in a reduction in pH, changes in the carbonate saturation and, potentially, hypercapnia (CO2 poisoning) in marine organisms.  Increasing levels of CO2 in the atmosphere have led to the average pH of sea surface waters dropping from 8.25 in the 1700s to 8.14 in the 1990s, leading to a 25% increase in H+ ions (Jacobson, 2005). However, the pH of surface waters are highly variable over time (Fig. 5), which reflects seasonal cycles in photosynthesis, respiration and water mixing (Ostle et al., 2016).',
        text: 'Increased CO2 concentrations in the atmosphere are absorbed by the ocean.  Increased CO2 concentrations affect the carbonate chemistry of seawater, and result in a reduction in pH, changes in the carbonate saturation and, potentially, hypercapnia (CO2 poisoning) in marine organisms.  Increasing levels of CO2 in the atmosphere have led to the average pH of sea surface waters dropping from 8.25 inthe 1700s to 8.14 in the 1990s, leading to a 25% increase in H+ ions (Jacobson, 2005). However, the pH of surface waters are highly variable over time (Fig. 5), which reflects seasonal cycles in photosynthesis,respiration and water mixing (Ostle et al., 2016).',
        value: 'Ocean acidification',
      },
      {
        code: 'lv3-063',
        name: 'Sea-level rise',
        definition:
          'Sea-level rise results from a combination of the thermal expansion of seawater and ice melt (e.g. ice sheets and glaciers).  Sea-levels have risen 1-3 mm yr-1 in the last century (Cazenave & Nerem, 2004, Church et al., 2004, Church & White, 2006).  The global mean sea-level has risen by 0.16 m (a range of 0.12-0.21 m) between 1902 and 2015 (IPCC, 2019).  The rate of rise in 2006-2015 is unprecedented compared to the last century, during which period, sea-level rise has been dominated by melting ice-sheets and glaciers (IPCC, 2019).\nA rise in sea-level increases the water depth at the shore and results in increased wave and tidal energy along the shore, due to the increase in fetch and reductionin wave attenuation (Pethick, 2001; Crooks, 2004; Fujii, 2012).  As a result, coastal landforms (e.g. subtidal bedforms, intertidal flats, saltmarshes, shingle banks, sand dunes, cliffs and coastal lowlands) migrate along and parallel to the shore to maintain their position with the coastal energy gradient (Cooks, 2004; Fujii, 2012).  Sedimentary habitats are dynamic and liable to adapt to sea-level rise, except wherehard structures (e.g. cliffs and artificial structures) prevent their natural movement, where existing intertidal areas are likely to be submerged, eroded, or moved (coastal squeeze).',
        text: 'Sea-level rise results from a combination of the thermal expansion of seawater and ice melt (e.g. ice sheets and glaciers).  Sea-levels have risen 1-3 mm yr-1 in the last century (Cazenave & Nerem, 2004, Church et al., 2004, Church & White, 2006).  The global mean sea-level has risen by 0.16 m (a range of 0.12-0.21 m) between 1902 and 2015 (IPCC,2019).  The rate of rise in 2006-2015 is unprecedented compared to the last century, during which period, sea-level rise has been dominated by melting ice-sheets and glaciers (IPCC, 2019).\nA rise in sea-level increases the water depth at the shore and results in increased wave and tidal energy along the shore, due to the increase in fetch and reduction in wave attenuation (Pethick, 2001; Crooks, 2004; Fujii, 2012).  As a result, coastal landforms (e.g. subtidal bedforms, intertidal flats, saltmarshes, shing le banks, sand dunes, cliffs and coastal lowlands) migrate along and parallel to the shore to maintain their position with the coastal energy gradient (Cooks, 2004; Fujii, 2012).  Sedimentary habitats are dynamic and liable to adapt to sea-level rise, except where hard structures (e.g. cliffs and artificial structures) prevent their natural movement, where existing intertidal areas are likely to be submerged, eroded, or moved (coastal squeeze).',
        value: 'Sea-level rise',
      },
    ],
    sectionTitle: 'Climate change',
    sectionIntroduction: '',
    selectAll: 'lv3-064,lv3-065,lv3-060,lv3-061,lv3-062,lv3-063',
    text: '',
    value: 'Climate change',
  },
  {
    code: 'lv2-016',
    name: 'Other pollution or physical pressure',
    classifiers: [
      {
        code: 'lv3-109',
        name: 'Litter',
        definition:
          'Litter is any manufactured or processed solid material from anthropogenic activitiesdiscarded, disposed or abandoned (excluding legitimate disposal) once it enters the environment including plastics, metals, timber, rope, fishing gear, rubbish and fly-tipping etc. and their degraded components, e.g. microplastic particles. Ecological effects can be physical (smothering), biological (ingestion, including uptake of microplastics; entangling; physical damage; accumulation of chemicals) and/or chemical (leaching, contamination).',
        text: 'Litter is any manufactured or processed solid material from anthropogenic activities discarded, disposed or abandoned (excluding legitimate disposal) once it enters the environment including plastics, metals, timber, rope, fishing gear, rubbish and fly-tipping etc. and their degraded components, e.g. microplastic particles. Ecological effects can be physical (smothering), biological (ingestion, including uptake of microplastics; entangling; physical damage; accumulation of chemicals) and/or chemical (leaching, contamination).',
        value: 'Litter',
      },
      {
        code: 'lv3-110',
        name: 'Electromagnetic changes',
        definition:
          'Localized electric and magnetic fields associated with operational power cables and telecommunication cables (if equipped with power relays). Such cables may generate electric and magnetic fields that could alter the behaviour and migration patterns of sensitive species (e.g. sharks and rays).',
        text: 'Localized electric and magnetic fields associated with operational power cables and telecommunication cables (if equipped with power relays). Such cables may generate electric and magnetic fields that could alter the behaviour and migration patterns of sensitive species (e.g. sharks and rays).',
        value: 'Electromagnetic changes',
      },
      {
        code: 'lv3-111',
        name: 'Noise changes',
        definition:
          'Increases over and above background noise levels (consisting of environmental noise (ambient) and incidental man-made/anthropogenic noise (apparent)) at a particular location. Species known to be affected are marine mammals and fish. The theoretical zones of noise influence (Richardson et al 1995) are temporary or permanent hearing loss, discomfort & injury; response; masking and detection. In extreme cases, noise pressures may lead to death. The physical or behavioural effects are dependent on a number of variables, including the sound pressure, loudness, sound exposure level and frequency. High amplitude low and mid-frequency impulsive sounds and low frequency continuous sounds are of greatest concern for effects on marine mammals and fish. Some species maybe responsive to the associated particle motion rather than the usual concept of noise. Noise propagation can be over large distances (tens of kilometres) but transmission losses can be attributable to factors such as water depth and sea bed topography. Noise levels associated with construction activities, such as pile-driving, are typically significantly greater than operational phases (i.e. shipping, the operation of a wind farm).',
        text: 'Increases over and above background noise levels (consisting of environmental noise (ambient) and incidental man-made/anthropogenic noise (apparent)) at a particular location. Species known to be affected are marine mammals and fish. The theoretical zones of noise influence (Richardson et al 1995) are temporary or permanent hearing loss, discomfort & injury; response; masking and detection. In extreme cases, noise pressures may lead to death. The physical or behavioural effects are dependent on a number of variables, including the sound pressure, loudness, sound exposure level and frequency. High amplitude low and mid-frequency impulsive sounds and low frequency continuous sounds are of greatest concern for effects on marine mammals and fish. Some species may be responsive to the associated particle motion rather than the usual concept of noise. Noise propagation can be over large distances (tens of kilometres) but transmission losses can be attributable to factors such as water depth and sea bed topography. Noise levels associated with construction activities, such as pile-driving, are typically significantly greater than operational phases (i.e. shipping, the operation of a wind farm).',
        value: 'Noise changes',
      },
      {
        code: 'lv3-112',
        name: 'Introduction of light or shading',
        definition:
          'Direct inputs of light from anthropogenic activities, i.e. lighting on structures during construction or operation to allow 24-hour working; new tourist facilities, e.g. promenade or pier lighting, lighting on oil & gas facilities etc. Ecological effects may be the diversion of bird species from migration routes if they are disorientated by or attracted to the lights. It is also possible that continuous lighting may lead to increased algal growth.',
        text: 'Direct inputs of light from anthropogenic activities, i.e. lighting on structures during construction or operation to allow 24-hour working; new tourist facilities, e.g. promenade or pier lighting, lighting on oil & gas facilities etc. Ecological effects may be the diversion of bird species from migration routes if they are disorientated by or attracted to the lights. It is also possible that continuous lighting may lead to increased algal growth.',
        value: 'Introduction of light or shading',
      },
      {
        code: 'lv3-113',
        name: 'Barriers to species movement',
        definition:
          'The physical obstruction of species movements and including local movements (within & between roosting, breeding, feeding areas) and regional/global migrations (e.g. birds,eels, salmon, and whales). Both include up-river movements (where tidal barrages & devices or dams could obstruct movements) or movements across open waters (offshore wind farm, wave or tidal device arrays, mariculture infrastructure or fixed fishing gears). Species affected are mostly highly mobile birds, fish, and mammals.',
        text: 'The physical obstruction of species movements and including local movements (within &between roosting, breeding, feeding areas) and regional/global migrations (e.g. birds, eels, salmon, and whales). Both include up-river movements (where tidal barrages & devices or dams could obstruct movements) or movements across open waters (offshore wind farm, wave or tidal device arrays, mariculture infrastructure or fixed fishing gears). Species affected are mostly highly mobile birds, fish, and mammals.',
        value: 'Barriers to species movement',
      },
      {
        code: 'lv3-114',
        name: 'Death or injury by collision',
        definition:
          'Injury or mortality from collisions of biota with both static &/or moving structures. Examples include collisions with rigs (e.g. birds) or screens in intake pipes (e.g. fish at power stations) (static) or collisions with wind turbine blades, fish & mammal collisions with tidal devices and shipping (moving). Activities increasing the number of vessels transiting areas, e.g. new port development or construction works will influence the scale and intensity of this pressure.',
        text: 'Injury or mortality from collisions of biota with both static &/or moving structures. Examples include collisions with rigs (e.g. birds) or screens in intake pipes (e.g. fish at power stations) (static) or collisions with wind turbine blades, fish & mammal collisions with tidal devices and shipping (moving). Activities increasing the number of vessels transiting areas, e.g. new port development or construction works will influence the scale and intensity of this pressure.',
        value: 'Death or injury by collision',
      },
      {
        code: 'lv3-115',
        name: 'Visual disturbance',
        definition:
          'The disturbance of biota by anthropogenic activities, e.g. increased vessel movements, such as during construction phases for new infrastructure (bridges, cranes, port buildings etc.), increased personnel movements, increased tourism, increased vehicular movements on shore etc. disturbing bird roosting areas, seal haul-out areas etc.',
        text: 'The disturbance of biota by anthropogenic activities, e.g. increased vessel movements, such as during construction phases for new infrastructure (bridges, cranes, port buildings etc.), increased personnel movements, increased tourism, increased vehicular movements on shore etc. disturbing bird roosting areas, seal haul-outareas etc.',
        value: 'Visual disturbance',
      },
    ],
    sectionTitle: 'Other pollution or physical pressure',
    sectionIntroduction: '',
    selectAll: 'lv3-109,lv3-110,lv3-111,lv3-112,lv3-113,lv3-114,lv3-115',
    text: '',
    value: 'Other pollution or physical pressure',
  },
];

export const CLASSIFIER_LEVEL_3_MOCK_DATA = [
  {
      "sectionTitle": "Natural asset",
      "sectionIntroduction": "Natural Assets are the living and non-living elements of ecosystems including soils, freshwater, minerals, air and oceans. We often group assets by broad habitat types (e.g. woodland or pelagic) but can also group them by the components that make up ecosystems  (e.g. by species that span multiple habitats,  soils and sediments).",
      "classifiers": [],
      "selectAll": ""
  },
  {
      "code": "lv2-001",
      "name": "Terrestrial and freshwater habitats",
      "classifiers": [
          {
              "code": "lv3-001",
              "name": "Broadleaved, mixed and yew woodland",
              "definition": "Covers all broadleaved, yew, and mixed broadleaved and coniferous stands which have more than 20% cover of broadleaved and yew trees. It includes patches of scrub where the woody element creates a canopy of more than 30% and the scrub area is above 0.25ha, recently felled broadleaved woodland, and integral features of woodland such as glades (clearings) and rides (pathways).",
              "text": "Covers all broadleaved, yew, and mixed broadleaved and coniferous stands which have more than 20% cover of broadleaved and yew trees. It includes patches of scrub where the woody element creates a canopy of more than 30% and the scrub area is above 0.25ha, recently felled broadleaved woodland, and integral features of woodland such as glades (clearings) and rides (pathways).",
              "value": "Broadleaved, mixed and yew woodland"
          },
          {
              "code": "lv3-002",
              "name": "Coniferous woodland",
              "definition": "Covers all coniferous stands where native and non-native conifers exceed more than 80% of the total cover of trees present.  It includes recently felled coniferous woodland and integral features of woodland, such as glades (clearings) and rides (pathways). It excludes yew woodlands.",
              "text": "Covers all coniferous stands where native and non-native conifers exceed more than 80% of the total cover of trees present.  It includes recently felled coniferous woodland and integral features of woodland, such as glades (clearings) and rides (pathways). It excludes yew woodlands.",
              "value": "Coniferous woodland"
          },
          {
              "code": "lv3-003",
              "name": "Boundary and linear features",
              "definition": "Covers landscape features that are linear in appearance, such as hedgerows, lines of trees, stonewalls, and built components of the rural landscape such as railways, roads, and verges. It excludes canals, rivers, woodland rides or arable field margins managed for nature conservation which are covered in other broad habitats.",
              "text": "Covers landscape features that are linear in appearance, such as hedgerows, lines of trees, stonewalls, and built components of the rural landscape such as railways, roads, and verges. It excludes canals, rivers, woodland rides or arable field margins managed for nature conservation which are covered in other broad habitats.",
              "value": "Boundary and linear features"
          },
          {
              "code": "lv3-004",
              "name": "Arable and horticulture",
              "definition": "Covers arable cropland, commercial horticultural land, freshly ploughed land, other cultivated areas such as temporary grasslands and fallow. It excludes domestic gardens and allotments which are covered by 'Built-up areas and gardens'.",
              "text": "Covers arable cropland, commercial horticultural land, freshly ploughed land, other cultivated areas such as temporary grasslands and fallow. It excludes domestic gardens and allotments which are covered by 'Built-up areas and gardens'.",
              "value": "Arable and horticulture"
          },
          {
              "code": "lv3-005",
              "name": "Improved grassland",
              "definition": "Highly modified / intensively managed grassland, dominated by a few fast-growing grasses on fertile, neutral soils. These grasslands tend to be managed as pasture, used for silage production, and for recreation and amenity purposes.",
              "text": "Highly modified / intensively managed grassland, dominated by a few fast-growing grasses on fertile, neutral soils. These grasslands tend to be managed as pasture, used for silage production, and for recreation and amenity purposes.",
              "value": "Improved grassland"
          },
          {
              "code": "lv3-006",
              "name": "Neutral grassland",
              "definition": "Covers semi-improved and unimproved grassland on soils with a neutral pH. It includes managed grassland like hay meadows and pastures, grasslands with various amounts of waterlogging.  These grasslands have a greater range and cover of herbs than improved grassland.",
              "text": "Covers semi-improved and unimproved grassland on soils with a neutral pH. It includes managed grassland like hay meadows and pastures, grasslands with various amounts of waterlogging.  These grasslands have a greater range and cover of herbs than improved grassland.",
              "value": "Neutral grassland"
          },
          {
              "code": "lv3-007",
              "name": "Calcareous grassland",
              "definition": "Covers semi-improved and unimproved grassland on soils with a pH above 7. They are found on shallow soils rich in lime, typically underlain by chalk or limestone rocks.",
              "text": "Covers semi-improved and unimproved grassland on soils with a pH above 7. They are found on shallow soils rich in lime, typically underlain by chalk or limestone rocks.",
              "value": "Calcareous grassland"
          },
          {
              "code": "lv3-008",
              "name": "Acid grassland",
              "definition": "Covers semi-improved and unimproved grassland on soils with a pH below 5.5. It excludes saltmarsh and sand-dune communities.",
              "text": "Covers semi-improved and unimproved grassland on soils with a pH below 5.5. It excludes saltmarsh and sand-dune communities.",
              "value": "Acid grassland"
          },
          {
              "code": "lv3-009",
              "name": "Bracken",
              "definition": "Areas covered by continuous bracken. It excludes scattered patches and areas of bracken that are less than 0.25ha which should be classified with their associated broad habitat type.",
              "text": "Areas covered by continuous bracken. It excludes scattered patches and areas of bracken that are less than 0.25ha which should be classified with their associated broad habitat type.",
              "value": "Bracken"
          },
          {
              "code": "lv3-010",
              "name": "Dwarf shrub heath",
              "definition": "Vegetation dominated by heath family species or dwarf gorse on well-drained, nutrient poor, acid soils.  It excludes dwarf shrub associated with peat (formation and substrate), alpine and coastal areas.",
              "text": "Vegetation dominated by heath family species or dwarf gorse on well-drained, nutrient poor, acid soils.  It excludes dwarf shrub associated with peat (formation and substrate), alpine and coastal areas.",
              "value": "Dwarf shrub heath"
          },
          {
              "code": "lv3-011",
              "name": "Fen, marsh and swamp",
              "definition": "Vegetation types found on groundwater-fed, permanently, seasonally, or periodically waterlogged peat, peaty, or mineral soils. It excludes areas of waterlogged wooded terrain over 0.25ha and wet grassland which are covered by other broad habitats.",
              "text": "Vegetation types found on groundwater-fed, permanently, seasonally, or periodically waterlogged peat, peaty, or mineral soils. It excludes areas of waterlogged wooded terrain over 0.25ha and wet grassland which are covered by other broad habitats.",
              "value": "Fen, marsh and swamp"
          },
          {
              "code": "lv3-012",
              "name": "Bogs",
              "definition": "Wetlands with vegetation that typically forms peat, receiving nutrients principally from precipitation rather than ground water. It includes blanket bog, raised bog, and intermediate bog habitats.",
              "text": "Wetlands with vegetation that typically forms peat, receiving nutrients principally from precipitation rather than ground water. It includes blanket bog, raised bog, and intermediate bog habitats.",
              "value": "Bogs"
          },
          {
              "code": "lv3-013",
              "name": "Standing open water and canals",
              "definition": "Covers natural water bodies like lakes and man-made ones like reservoirs, ponds, and canals. It includes open water vegetation and vegetation at the water's edge. Also includes ditches having open water for most of the year and adjacent wetland habitats with connected water levels that are less than 0.25 hectares.",
              "text": "Covers natural water bodies like lakes and man-made ones like reservoirs, ponds, and canals. It includes open water vegetation and vegetation at the water's edge. Also includes ditches having open water for most of the year and adjacent wetland habitats with connected water levels that are less than 0.25 hectares.",
              "value": "Standing open water and canals"
          },
          {
              "code": "lv3-014",
              "name": "Rivers and streams",
              "definition": "Large (rivers) and small (streams) running waters. It covers the area up to the average yearly flood level, including the open channel, vegetation at the water's edge, and exposed sediments and shingle banks.",
              "text": "Large (rivers) and small (streams) running waters. It covers the area up to the average yearly flood level, including the open channel, vegetation at the water's edge, and exposed sediments and shingle banks.",
              "value": "Rivers and streams"
          },
          {
              "code": "lv3-015",
              "name": "Montane habitats",
              "definition": "Covers vegetation types occurring in the montane zone (above the natural tree line).  This includes dwarf shrub heath, snow bed communities, sedge and rush heaths, and moss and lichen heaths.",
              "text": "Covers vegetation types occurring in the montane zone (above the natural tree line).  This includes dwarf shrub heath, snow bed communities, sedge and rush heaths, and moss and lichen heaths.",
              "value": "Montane habitats"
          },
          {
              "code": "lv3-016",
              "name": "Inland rock",
              "definition": "Covers natural and man-made exposed rock surfaces that are greater than 0.25 ha and almost entirely lack vegetation. It covers inland cliffs, ledges, caves, screes, limestone pavements, quarries, waste tips.  Plant communities include those that colonise cracks and fissures, grasslands on soils containing heavy metals, and some tall herbs and fern vegetation.",
              "text": "Covers natural and man-made exposed rock surfaces that are greater than 0.25 ha and almost entirely lack vegetation. It covers inland cliffs, ledges, caves, screes, limestone pavements, quarries, waste tips.  Plant communities include those that colonise cracks and fissures, grasslands on soils containing heavy metals, and some tall herbs and fern vegetation.",
              "value": "Inland rock"
          },
          {
              "code": "lv3-017",
              "name": "Built up areas and gardens",
              "definition": "Covers urban and rural settlements, farm buildings, caravan parks, industrial areas and other man-made structures like retail parks, urban parks, transport infrastructure and derelict land. It includes domestic gardens and allotments. Amenity grassland is included in the Improved Grassland category.",
              "text": "Covers urban and rural settlements, farm buildings, caravan parks, industrial areas and other man-made structures like retail parks, urban parks, transport infrastructure and derelict land. It includes domestic gardens and allotments. Amenity grassland is included in the Improved Grassland category.",
              "value": "Built up areas and gardens"
          }
      ],
      "sectionTitle": "Terrestrial and freshwater habitats",
      "sectionIntroduction": "",
      "selectAll": "lv3-001,lv3-002,lv3-003,lv3-004,lv3-005,lv3-006,lv3-007,lv3-008,lv3-009,lv3-010,lv3-011,lv3-012,lv3-013,lv3-014,lv3-015,lv3-016,lv3-017",
      "text": "",
      "value": "Terrestrial and freshwater habitats"
  },
  {
      "code": "lv2-002",
      "name": "Coastal and estuarine habitats",
      "classifiers": [
          {
              "code": "lv3-018",
              "name": "Coastal dunes and sandy shores",
              "definition": "Sand-covered shorelines of the oceans, their connected seas and associated coastal lagoons, fashioned by the action of wind or waves. They include gently sloping beaches and beach-ridges, formed by sands brought by waves, longshore drift and storm waves, as well as dunes, formed by aeolian deposits, though sometimes re-fashioned by waves.",
              "text": "Sand-covered shorelines of the oceans, their connected seas and associated coastal lagoons, fashioned by the action of wind or waves. They include gently sloping beaches and beach-ridges, formed by sands brought by waves, longshore drift and storm waves, as well as dunes, formed by aeolian deposits, though sometimes re-fashioned by waves.",
              "value": "Coastal dunes and sandy shores"
          },
          {
              "code": "lv3-019",
              "name": "Coastal shingle",
              "definition": "Beaches of the oceans, of their connected seas and of their associated coastal lagoons, covered by pebbles, or sometimes boulders, usually formed by wave action.",
              "text": "Beaches of the oceans, of their connected seas and of their associated coastal lagoons, covered by pebbles, or sometimes boulders, usually formed by wave action.",
              "value": "Coastal shingle"
          },
          {
              "code": "lv3-020",
              "name": "Rock cliffs, ledges and shores including the supralittoral",
              "definition": "Sea-cliffs, or parts of sea-cliffs, and rocky shores colonized by disjunct assemblages of salt-tolerant crevice plants (chasmophytes) or by more or less closed salt-tolerant grasslands with associated terrestrial invertebrate and vertebrate faunal communities.",
              "text": "Sea-cliffs, or parts of sea-cliffs, and rocky shores colonized by disjunct assemblages of salt-tolerant crevice plants (chasmophytes) or by more or less closed salt-tolerant grasslands with associated terrestrial invertebrate and vertebrate faunal communities.",
              "value": "Rock cliffs, ledges and shores including the supralittoral"
          },
          {
              "code": "lv3-021",
              "name": "Estuaries",
              "definition": "An estuary is a semi-enclosed coastal body of water with one or more rivers or streams flowing into it, where saltwater is measurably diluted with freshwater from the land and the river is subject to tidal action. Estuaries are often associated with high rates of biological productivity.",
              "text": "An estuary is a semi-enclosed coastal body of water with one or more rivers or streams flowing into it, where saltwater is measurably diluted with freshwater from the land and the river is subject to tidal action. Estuaries are often associated with high rates of biological productivity.",
              "value": "Estuaries"
          }
      ],
      "sectionTitle": "Coastal and estuarine habitats",
      "sectionIntroduction": "",
      "selectAll": "lv3-018,lv3-019,lv3-020,lv3-021",
      "text": "",
      "value": "Coastal and estuarine habitats"
  }
]

export const NO_CLASSIFIER_LEVEL_2_MOCK_DATA = [
  {
      "sectionTitle": "Natural asset",
      "sectionIntroduction": "Natural Assets are the living and non-living elements of ecosystems including soils, freshwater, minerals, air and oceans. We often group assets by broad habitat types (e.g. woodland or pelagic) but can also group them by the components that make up ecosystems  (e.g. by species that span multiple habitats,  soils and sediments).",
      "classifiers": [],
      "selectAll": ""
  },
  {
      "code": "lv2-001",
      "name": "Terrestrial and freshwater habitats",
      "classifiers": [
          {
              "code": "lv3-001",
              "name": "Broadleaved, mixed and yew woodland",
              "definition": "Covers all broadleaved, yew, and mixed broadleaved and coniferous stands which have more than 20% cover of broadleaved and yew trees. It includes patches of scrub where the woody element creates a canopy of more than 30% and the scrub area is above 0.25ha, recently felled broadleaved woodland, and integral features of woodland such as glades (clearings) and rides (pathways).",
              "text": "Covers all broadleaved, yew, and mixed broadleaved and coniferous stands which have more than 20% cover of broadleaved and yew trees. It includes patches of scrub where the woody element creates a canopy of more than 30% and the scrub area is above 0.25ha, recently felled broadleaved woodland, and integral features of woodland such as glades (clearings) and rides (pathways).",
              "value": "Broadleaved, mixed and yew woodland"
          },
          {
              "code": "lv3-002",
              "name": "Coniferous woodland",
              "definition": "Covers all coniferous stands where native and non-native conifers exceed more than 80% of the total cover of trees present.  It includes recently felled coniferous woodland and integral features of woodland, such as glades (clearings) and rides (pathways). It excludes yew woodlands.",
              "text": "Covers all coniferous stands where native and non-native conifers exceed more than 80% of the total cover of trees present.  It includes recently felled coniferous woodland and integral features of woodland, such as glades (clearings) and rides (pathways). It excludes yew woodlands.",
              "value": "Coniferous woodland"
          },
          {
              "code": "lv3-003",
              "name": "Boundary and linear features",
              "definition": "Covers landscape features that are linear in appearance, such as hedgerows, lines of trees, stonewalls, and built components of the rural landscape such as railways, roads, and verges. It excludes canals, rivers, woodland rides or arable field margins managed for nature conservation which are covered in other broad habitats.",
              "text": "Covers landscape features that are linear in appearance, such as hedgerows, lines of trees, stonewalls, and built components of the rural landscape such as railways, roads, and verges. It excludes canals, rivers, woodland rides or arable field margins managed for nature conservation which are covered in other broad habitats.",
              "value": "Boundary and linear features"
          },
          {
              "code": "lv3-004",
              "name": "Arable and horticulture",
              "definition": "Covers arable cropland, commercial horticultural land, freshly ploughed land, other cultivated areas such as temporary grasslands and fallow. It excludes domestic gardens and allotments which are covered by 'Built-up areas and gardens'.",
              "text": "Covers arable cropland, commercial horticultural land, freshly ploughed land, other cultivated areas such as temporary grasslands and fallow. It excludes domestic gardens and allotments which are covered by 'Built-up areas and gardens'.",
              "value": "Arable and horticulture"
          },
          {
              "code": "lv3-005",
              "name": "Improved grassland",
              "definition": "Highly modified / intensively managed grassland, dominated by a few fast-growing grasses on fertile, neutral soils. These grasslands tend to be managed as pasture, used for silage production, and for recreation and amenity purposes.",
              "text": "Highly modified / intensively managed grassland, dominated by a few fast-growing grasses on fertile, neutral soils. These grasslands tend to be managed as pasture, used for silage production, and for recreation and amenity purposes.",
              "value": "Improved grassland"
          },
          {
              "code": "lv3-006",
              "name": "Neutral grassland",
              "definition": "Covers semi-improved and unimproved grassland on soils with a neutral pH. It includes managed grassland like hay meadows and pastures, grasslands with various amounts of waterlogging.  These grasslands have a greater range and cover of herbs than improved grassland.",
              "text": "Covers semi-improved and unimproved grassland on soils with a neutral pH. It includes managed grassland like hay meadows and pastures, grasslands with various amounts of waterlogging.  These grasslands have a greater range and cover of herbs than improved grassland.",
              "value": "Neutral grassland"
          },
          {
              "code": "lv3-007",
              "name": "Calcareous grassland",
              "definition": "Covers semi-improved and unimproved grassland on soils with a pH above 7. They are found on shallow soils rich in lime, typically underlain by chalk or limestone rocks.",
              "text": "Covers semi-improved and unimproved grassland on soils with a pH above 7. They are found on shallow soils rich in lime, typically underlain by chalk or limestone rocks.",
              "value": "Calcareous grassland"
          },
          {
              "code": "lv3-008",
              "name": "Acid grassland",
              "definition": "Covers semi-improved and unimproved grassland on soils with a pH below 5.5. It excludes saltmarsh and sand-dune communities.",
              "text": "Covers semi-improved and unimproved grassland on soils with a pH below 5.5. It excludes saltmarsh and sand-dune communities.",
              "value": "Acid grassland"
          },
          {
              "code": "lv3-009",
              "name": "Bracken",
              "definition": "Areas covered by continuous bracken. It excludes scattered patches and areas of bracken that are less than 0.25ha which should be classified with their associated broad habitat type.",
              "text": "Areas covered by continuous bracken. It excludes scattered patches and areas of bracken that are less than 0.25ha which should be classified with their associated broad habitat type.",
              "value": "Bracken"
          },
          {
              "code": "lv3-010",
              "name": "Dwarf shrub heath",
              "definition": "Vegetation dominated by heath family species or dwarf gorse on well-drained, nutrient poor, acid soils.  It excludes dwarf shrub associated with peat (formation and substrate), alpine and coastal areas.",
              "text": "Vegetation dominated by heath family species or dwarf gorse on well-drained, nutrient poor, acid soils.  It excludes dwarf shrub associated with peat (formation and substrate), alpine and coastal areas.",
              "value": "Dwarf shrub heath"
          },
          {
              "code": "lv3-011",
              "name": "Fen, marsh and swamp",
              "definition": "Vegetation types found on groundwater-fed, permanently, seasonally, or periodically waterlogged peat, peaty, or mineral soils. It excludes areas of waterlogged wooded terrain over 0.25ha and wet grassland which are covered by other broad habitats.",
              "text": "Vegetation types found on groundwater-fed, permanently, seasonally, or periodically waterlogged peat, peaty, or mineral soils. It excludes areas of waterlogged wooded terrain over 0.25ha and wet grassland which are covered by other broad habitats.",
              "value": "Fen, marsh and swamp"
          },
          {
              "code": "lv3-012",
              "name": "Bogs",
              "definition": "Wetlands with vegetation that typically forms peat, receiving nutrients principally from precipitation rather than ground water. It includes blanket bog, raised bog, and intermediate bog habitats.",
              "text": "Wetlands with vegetation that typically forms peat, receiving nutrients principally from precipitation rather than ground water. It includes blanket bog, raised bog, and intermediate bog habitats.",
              "value": "Bogs"
          },
          {
              "code": "lv3-013",
              "name": "Standing open water and canals",
              "definition": "Covers natural water bodies like lakes and man-made ones like reservoirs, ponds, and canals. It includes open water vegetation and vegetation at the water's edge. Also includes ditches having open water for most of the year and adjacent wetland habitats with connected water levels that are less than 0.25 hectares.",
              "text": "Covers natural water bodies like lakes and man-made ones like reservoirs, ponds, and canals. It includes open water vegetation and vegetation at the water's edge. Also includes ditches having open water for most of the year and adjacent wetland habitats with connected water levels that are less than 0.25 hectares.",
              "value": "Standing open water and canals"
          },
          {
              "code": "lv3-014",
              "name": "Rivers and streams",
              "definition": "Large (rivers) and small (streams) running waters. It covers the area up to the average yearly flood level, including the open channel, vegetation at the water's edge, and exposed sediments and shingle banks.",
              "text": "Large (rivers) and small (streams) running waters. It covers the area up to the average yearly flood level, including the open channel, vegetation at the water's edge, and exposed sediments and shingle banks.",
              "value": "Rivers and streams"
          },
          {
              "code": "lv3-015",
              "name": "Montane habitats",
              "definition": "Covers vegetation types occurring in the montane zone (above the natural tree line).  This includes dwarf shrub heath, snow bed communities, sedge and rush heaths, and moss and lichen heaths.",
              "text": "Covers vegetation types occurring in the montane zone (above the natural tree line).  This includes dwarf shrub heath, snow bed communities, sedge and rush heaths, and moss and lichen heaths.",
              "value": "Montane habitats"
          },
          {
              "code": "lv3-016",
              "name": "Inland rock",
              "definition": "Covers natural and man-made exposed rock surfaces that are greater than 0.25 ha and almost entirely lack vegetation. It covers inland cliffs, ledges, caves, screes, limestone pavements, quarries, waste tips.  Plant communities include those that colonise cracks and fissures, grasslands on soils containing heavy metals, and some tall herbs and fern vegetation.",
              "text": "Covers natural and man-made exposed rock surfaces that are greater than 0.25 ha and almost entirely lack vegetation. It covers inland cliffs, ledges, caves, screes, limestone pavements, quarries, waste tips.  Plant communities include those that colonise cracks and fissures, grasslands on soils containing heavy metals, and some tall herbs and fern vegetation.",
              "value": "Inland rock"
          },
          {
              "code": "lv3-017",
              "name": "Built up areas and gardens",
              "definition": "Covers urban and rural settlements, farm buildings, caravan parks, industrial areas and other man-made structures like retail parks, urban parks, transport infrastructure and derelict land. It includes domestic gardens and allotments. Amenity grassland is included in the Improved Grassland category.",
              "text": "Covers urban and rural settlements, farm buildings, caravan parks, industrial areas and other man-made structures like retail parks, urban parks, transport infrastructure and derelict land. It includes domestic gardens and allotments. Amenity grassland is included in the Improved Grassland category.",
              "value": "Built up areas and gardens"
          }
      ],
      "sectionTitle": "Terrestrial and freshwater habitats",
      "sectionIntroduction": "",
      "selectAll": "lv3-001,lv3-002,lv3-003,lv3-004,lv3-005,lv3-006,lv3-007,lv3-008,lv3-009,lv3-010,lv3-011,lv3-012,lv3-013,lv3-014,lv3-015,lv3-016,lv3-017",
      "text": "",
      "value": "Terrestrial and freshwater habitats"
  },
  {
      "code": "lv2-002",
      "name": "Coastal and estuarine habitats",
      "sectionTitle": "Coastal and estuarine habitats",
      "sectionIntroduction": "",
      "classifiers": [],
      "selectAll": "",
      "text": "",
      "value": "Coastal and estuarine habitats"
  }
]
