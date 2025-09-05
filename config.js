var config = {
    style: 'mapbox://styles/kskhushi1901/cmf6ciczc002x01s7f1ondlij',
    accessToken: 'pk.eyJ1Ijoia3NraHVzaGkxOTAxIiwiYSI6ImNtZjY1aDBvejBjMGQya29ndHJmN3B0MTgifQ.d7Vr8R_YjPCw6DRnPxjQNQ',
    showMarkers: false,
    markerColor: '#000000',
    projection: 'globe',
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Bacteria to Biomaterial',
    subtitle: 'framworker housing',
    //byline: 'Marcos Escamilla-Guerrero',
    
   //showTable: true,

    lakes: [
      {
        number: 153,
        name: "Somerset Lake",
        index: "D-66-P268",
        elevation: 470,
        area: 20.7,
        quality: "B",
        region: 4,
        county: "Delaware",
        url: "https://example.com/somerset-lake"
      },
      {
        number: 206,
        name: "Yankee Lake",
        index: "D-1-12-8-P21",
        elevation: 438,
        area: 165.8,
        quality: "B",
        region: 3,
        county: "Sullivan",
        url: "https://example.com/yankee-lake"
      },
      {
        number: 64,
        name: "Chase Lake",
        index: "Ont 19-57-4-P597",
        elevation: 379,
        area: 54.4,
        quality: "A",
        region: 6,
        county: "Lewis",
        url: "https://example.com/chase-lake"
      },
      {
        number: 154,
        name: "Spring Lake",
        index: "H-204-2-36-4-P81",
        elevation: 539,
        area: 10.4,
        quality: "B",
        region: 4,
        county: "Rensselaer",
        url: "https://example.com/spring-lake"
      }
      // ... add more rows here
    ],


    footer: '<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',

    chapters:[
        {
            id: 'globe-heatmap',
            alignment: 'left',
            hidden: false,
            title: 'List of Biomaterials',
            image: 'images/Timber.jpg', 
            description:"The Western Hemisphere faces a severe migratory crisis as economic instability, violence, political controversies, and climate change drive millions to flee their homelands. Migrants journey through dangerous routes, often encountering exploitation, cartel violence, and harsh immigration policies. This crisis highlights deep systemic inequities and the urgent need for comprehensive regional solutions. Furthermore, one of the rising problems is the mortality rates in the migration corridors, the heatmap on the right represents the location of dead or missing migrants in the Western Hemisphere. <br> <br>", 
            image2:  'images/bio_based_cement.jpg',
            description2:"The above image shows the behavior of migrant deads in the western hemispher in previous years. It is evident that the overall behavior depicts a rise in the mortality of the migration corridors. The corresponding full report elaborated by IOM (International Organization for Migration) can be found<a href ='https://missingmigrants.iom.int/2022-americas-overview-missing-migrants-data'> here.</a>", 
            imagecredit: 'Photo credits: <a href="https://www.wjtv.com/news/international/ap-migrant-caravan-regroups-in-mexico-after-government-promises-of-papers-falls-through/">AP Photo/Edgar H. Clemente</a>',
            imagecredit2: 'Photo credits: <a href="https://www.iom.int/news/us-mexico-border-worlds-deadliest-migration-land-route">UN Migration</a>',
            location: {
                center: [-98.5795, 39.8283],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback:() => {
                popup.remove();
                popup2.remove();
                popup3.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend_z").style.visibility = "hidden";
                document.getElementById("bivariate_legend").style.visibility = "hidden";
                document.getElementById("crime_rates_legend").style.visibility = "hidden";
                document.getElementById("Drug_Cartel_legend").style.visibility = "hidden";
                document.getElementById("Cartel_Conflict").style.visibility = "hidden";
                document.getElementById("support_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico State*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 0}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 1}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Main_Routes',
            alignment: 'right',
            hidden: false,
            title: 'New York Farms',
            image: 'images/Migrant_Train.webp',
            description: "Taking a closer look at the Mexican territory, there is something particular to the location of the migration routes inside Mexico and their relationship with existing infrastructure. Mexico’s migration corridors align closely with cargo train tracks, including routes through Chiapas, Veracruz, and Tamaulipas. These tracks are used by migrants to traverse the country, often riding La Bestia, a dangerous and mortal freight train. The corridors facilitate movement towards the North but expose migrants to extortion, accidents, and cartel violence along the way.",
            image2: 'images/Migration_Truck.webp',
            description2: "Cargo trucks are frequently used to smuggle migrants across Mexico, offering an “affordable” transport but posing deadly risks. Overcrowding, suffocation, and lack of ventilation have led to tragic fatalities, as seen in specific cases. Accidents, vehicle abandonment, and harsh conditions amplify dangers, making truck smuggling one of the most deadly and dangerous methods in migration corridors inside Mexico. One of the most recent tragedies in 2021 involved over 55 dead migrants in the state of Chiapas.<a href ='https://www.cnn.com/2021/12/09/americas/mexico-road-accident-intl-hnk/index.html'> Check the news.</a>",
            imagecredit: 'Photo credits: <a href="https://www.nytimes.com/2023/05/10/world/americas/migrants-beast-train-mexico.html">Alejandro Cegarra</a>',
            imagecredit2: 'Photo credits: <a href="https://www.nytimes.com/2018/10/22/world/americas/immigrant-caravan-mexico-usa.html">Pedro Pardo/Agence France-Presse</a>',
            location: {
                center: [-73.889, 42.770],
                zoom: 6.25,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: () => {
                popup.remove();
                popup2.remove();
                popup3.remove();
                document.getElementById("routes_legend").style.visibility = "visible";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend_z").style.visibility = "hidden";
                document.getElementById("bivariate_legend").style.visibility = "hidden";
                document.getElementById("crime_rates_legend").style.visibility = "hidden";
                document.getElementById("Drug_Cartel_legend").style.visibility = "hidden";
                document.getElementById("Cartel_Conflict").style.visibility = "hidden";
                document.getElementById("support_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Routes_Crossed_Cities',
            alignment: 'right',
            hidden: false,
            title: 'Orange County',
            image: 'images/Migration_Routes_D_W.png',
            description: "The image above represents a diagram of the flows and partial destinations in the migration corridors. Based on a study done in 2020 by BBVA, the migration corridors were successfully replicated by using Google API tools. At the same time, the superposition of the railroad network, retrieved from INEGI, demonstrates the close relationships between migration and trains. Furthermore, it is graphically visible how the migration routes can be classified into three mayor areas: Pacific (left), Center (middle) and Gulf (right). According to the retrieved information, the longest journey can be composed of over 4,000 kilometers, from Tapachula, Chiapas to Tijuana, Baja California. The BBVA report can be found  <a href = 'https://www.bbvaresearch.com/en/publicaciones/map-2020-of-migrant-houses-shelters-and-soup-kitchens-for-migrants-in-mexico/'>here.</a>.",
            imagecredit: 'Photo credits: Self Produced Diagram based on BBVA 2020</a>',
            location: {
                center: [-73.827, 41.346],
                zoom: 7.80,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: () => {
                popup.remove();
                popup2.remove();
                popup3.remove();
                document.getElementById("routes_legend").style.visibility = "visible";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend_z").style.visibility = "hidden";
                document.getElementById("bivariate_legend").style.visibility = "hidden";
                document.getElementById("crime_rates_legend").style.visibility = "hidden";
                document.getElementById("Drug_Cartel_legend").style.visibility = "hidden";
                document.getElementById("Cartel_Conflict").style.visibility = "hidden";
                document.getElementById("support_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 1}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 1}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        
          
        
        {
            id: 'Sources',
            alignment: 'center',
            hidden: false,
            title: 'Sources',
            description: `The Data utilized in this story map can be found in the following sites: <br>

                          <br><a href ='https://missingmigrants.iom.int/downloads'>Missing Migrants Project, United Nations.</a>
                          <br><a href ='https://en.www.inegi.org.mx/app/biblioteca/ficha.html?upc=702825267568'>Climatology-Climatic Units, INEGI.</a>
                          <br><a href ='https://www.inegi.org.mx/app/ageeml/'>Unique Catalogue of State, Municipal and Local Geostatistical Area Codes, INEGI.</a>
                          <br><a href ='https://en.www.inegi.org.mx/programas/ccpv/2020/#open_data'>Census of Population and Housing 2020, INEGI.</a>
                          <br><a href ='https://missingmigrants.iom.int/downloads'>Missing Migrants Project, United Nations.</a>
                          <br><a href ='https://www.coneval.org.mx/Medicion/Paginas/PobrezaInicio.aspx'>Poverty Measurement 2022, CONEVAL.</a>
                          <br><a href ='https://portales.segob.gob.mx/es/PoliticaMigratoria/Cuadros_Delitos?Anual=2022&Secc=2'>Delitos Perpetuados en contra de personas migrantes irregulares en México, Unidad de Política Migratoria, Registro e Identidad de Personas.</a>
                          <br><a href ='https://www.cndh.org.mx/documento/informe-especial-de-la-cndh-sobre-el-estado-que-guarda-el-trafico-y-el-secuestro-en'>CNDH Special Report on the Status of Trafficking and Kidnapping of Migrants in Mexico 2011-2020, National Comission of Human Rights (CNDH).</a>
                          <br><a href ='https://www.inegi.org.mx/app/tabulados/interactivos/?pxq=Hogares_Hogares_15_9954f9c6-9512-40c5-9cbf-1b2ce96283e4&idrt=54&opc=t'>Population in Poverty per State, INEGI.</a>
                          <br><a href ='https://www.bbvaresearch.com/publicaciones/mapa-2020-de-casas-del-migrante-albergues-y-comedores-para-migrantes-en-mexico/'>Mexican Migration Observatory 2020, BBVA.</a>
                          <br><a href ='https://en.www.inegi.org.mx/app/biblioteca/ficha.html?upc=794551067314'>National Geostatistical Framework 2023, INEGI.</a>
                          <br><a href ='https://en.www.inegi.org.mx/programas/ensu/'>National Survey of Urban Public Safety (ENSU) 2024, INEGI.</a>
                          <br><a href ='https://interactivos.eluniversal.com.mx/2023/mapa-crimen-organizado/'>Organized Crime Map, El Universal.</a>
                          <br><a href ='https://www.gob.mx/sesnsp/acciones-y-programas/datos-abiertos-de-incidencia-delictiva?state=published'>Open Data on Crime Incidence, Executive Secretariat of the National Public Security System.</a>
                          <br><a href ='https://www.colef.mx/emif/basescuestionarios.html'>EMIF (Migration Surveys in the Mexican Borders), Colegio de la Frontera Norte.</a>
                          <br><a href ='https://portales.segob.gob.mx/es/PoliticaMigratoria/Boletines_Estadisticos'>2024 Boletín estadístico anual, Unidad de Política Migratoria, Registro e Identidad de Personas.</a>
                          <br><a href ='https://portales.segob.gob.mx/es/PoliticaMigratoria/EvPerMigrIrreg'>Base de Datos Eventos de personas en situación migratoria irregular por México. Unidad de Política Migratoria, Registro de identidad de Personas.</a>
                          <br><a href ='https://www.icrc.org/sites/default/files/wysiwyg/Gaby/Mexico/cicr_mensajes_autocuidado_esp_16062021_8.pdf'>Mensajes de Autocuidado, International Committee of the Red Cross.</a>
                          <br>
                          <br>
                          Much of the data presented is either self-collected or reorganized from online resources. Specifically, the information on the locations and territorial control of drug cartels is based on journalistic evidence and publicly available resources. After gathering the multiple data sets, it was visualized through choropleth maps and circle-based representations, with variations in size and color to convey different dimensions of the information. Several overlays are integrated into the story map to reveal additional layers of context.
                          <br>
                          <br>
                          The core objective of this research is to highlight the spatial relationships between migrant corridors and the diverse territorial conditions, particularly in terms of insecurity levels. However, it is important to note that the information should not be regarded as absolute or definitive, as the dynamics of these phenomena are highly fluid and change over time. In particular, the data on the territorial presence and control of drug cartels reflects a specific moment in time and may not represent the current reality.
                          <br>
                          <br>
                          This exercise should be understood as a mapping tool that provides researchers and a broader audience with an initial framework to explore the topic addressed by this research and website. For more robust scientific conclusions, further in-depth investigation is required.
                          `,
            description2: '', 
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0,
                bearing: 0,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup.remove();
                popup2.remove();
                popup3.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend_z").style.visibility = "hidden";
                document.getElementById("bivariate_legend").style.visibility = "hidden";
                document.getElementById("crime_rates_legend").style.visibility = "hidden";
                document.getElementById("Drug_Cartel_legend").style.visibility = "hidden";
                document.getElementById("Cartel_Conflict").style.visibility = "hidden";
                document.getElementById("support_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 0}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Background and Precedents',
            alignment: 'center',
            hidden: true,
            title: 'Sources',
            description: `Since the topic of this exercise is not new, multiple efforts have been made in the past with similar objectives, specifically during and after the period of former President Felipe de Jesús Calderón Hinojosa, known for a declared open war against the drug cartels. However, most of these precedents have not been conceived as a countermapping exercise or an informative mixed media work. The past and current efforts to study this topic are done from academic environments for a specialized audience, such as scholars in social sciences. Despite the difference in approaches and objectives, significant progress and discoveries have occurred. For instance, an ongoing debate is whether violence by itself causes migration and, if so, which type of violence and which type of migration. Currently, an unprecedented phenomenon is occurring, where Mexicans are migrating to Guatemala to escape the unmanageable violence increase in the state of Chiapas (south of Mexico).
                          <br><br>Specifically in terms of mapping, other characters have made contributions and advanced the agenda. Different types of maps have been developed to identify the variables of interest individually. One interesting map was created by Professor Viridiana Rios, who included in her paper (“The Role of Drug-Related Violence and Extortion in Promoting Mexican Migration”) a map that depicts the number of “drug violence refugees” per municipality. Further details on her work are described in the next section. Another effort was made by Professor Guadalupe Correa Cabrera, who conducted fieldwork and documented different human trafficking activities in some that belong to the migration corridors. She mainly focused on the eastern Mexican migration routes. Another study from 2009 mapped the human trafficking routes inside Mexico and their relationship with migration corridors. Furthermore, in early 2024, journalist Ioan Grillo published an innovative map that shows the territorial presence of drug cartels in Mexico at a municipal level. However, with the current events of increased conflicts and fragmentation of the biggest drug cartel (Cartel de Sinaloa), the forecast is a considerable increase in violence across Mexico and a territorial reconfiguration of the cartels. At the same time, different non-governmental organizations have made efforts to map multiple elements related to migration in hopes of aiding migrant’s journey and improving their traveling experience. IRC (International Red Cross) has created a map that depicts weather, migration routes, and shelters. However, despite the previous efforts, no web-based interactive tool has been developed to tell the story this study intends to tell.
                          <br><br>Specifically, two scholars have released relevant information. Firstly, Viridiana Rios, a professor at Harvard University, published a paper in 2014 that provided evidence of the relationship between the fear of organized crime activities and migration. In her article, she suggested that regular migration dynamics model predictors were not usable in the Mexican context due to the organized crime factor. Ultimately, she indicated that between 2006 and 2010, more than a quarter million Mexicans migrated due to the fear of organized crime presence; she describes it as the Mexican exodus. In contrast, Douglas Massey, a professor at Princeton, published a contradictory study in 2020. In his paper, Massey indicates that by analyzing data from 1990 to 2018, organized crime violence is likely to translate into a first national trip of relocation, but in his own words, “Violence in Mexico is not a driver of undocumented migration to the U.S..” In the same sense, and previous to Massey, Basu & Pearlman conducted a study where they evaluated the presence of drug cartels based on cocaine seizures in federal highways as a measure of pre-existing drug distribution networks. Their conclusions suggested that their found evidence is incompatible with the narrative of a wide-scale displacement from the violence. Regardless of the opposite findings of the studies, my argument is that neither of them considered the impact of organized crime and drug cartel violence on the international migrants that cross Mexico. However, what their studies unveiled is that organized crime violence and drug cartel presence have to be taken into account while doing migration studies, specifically under the particularities of the Mexican context.
                          <br><br><Aside from the three papers previously described, there are other studies that have worked on the relationship between migration and crime. Among them, one done in 2018 by Professor Eduardo Guerrero Gutierrez explored the correlation between human trafficking and migration. Guerrero’s study is comprehensive and developed multiple indexes that, at a state level, explain the causes and factors of human trafficking. More specifically, the “Destination Risk Factors Index for Sexual Exploitation” takes into account the condition of undocumented migratory status inside Mexico. His results demonstrated that undocumented migrants are at a high risk of human trafficking activity. 
                          <br><br>Lastly, the United Nations report in collaboration with “Colegio de la Frontera Norte” (North Border College) “Migrantes en México Vulnerabilidad y Riesgos” (Migrants in Mexico Vulnerabilities and Risks) contains a graphic representation of those territories where migrants suffer more aggression. The maps depict an apparent concentration on the east coast of Mexico, a territory that matches some of the drug trafficking routes. In brief, the document is augmented that there is a close relationship between drug trafficking and migration routes, which inevitably leads to abuses and crimes committed towards undocumented migrants. 
                          <br><br>In summary, for the purposes of this study, there seems to be enough research and work on the topic. However, again, the area of opportunity relies on creating visualizations that are for a broader public and, to a certain degree, that appeal to emotion by combining journalistic pieces.
                          `,
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0,
                bearing: 0,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup.remove();
                popup2.remove();
                popup3.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend_z").style.visibility = "hidden";
                document.getElementById("bivariate_legend").style.visibility = "hidden";
                document.getElementById("crime_rates_legend").style.visibility = "hidden";
                document.getElementById("Drug_Cartel_legend").style.visibility = "hidden";
                document.getElementById("Cartel_Conflict").style.visibility = "hidden";
                document.getElementById("support_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: .5}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: .5}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: .5}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: .5}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: .5}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: .5}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: .6}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: .7}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        
    ]
};

