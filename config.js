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
        
    ]
};

