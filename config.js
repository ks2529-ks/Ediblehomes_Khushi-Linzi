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
    byline: 'Marcos Escamilla-Guerrero',
    
    para1:'The ongoing international migration through Mexico has escalated into a humanitarian crisis marked by a complex interplay of human rights violations, geopolitical challenges, environmental factors, and rising crime rates. According to the International Organization for Migration (IOM), only in 2022, 686 deaths and migrant disappearances were documented on the US-Mexico border. However, if the whole Mexican territory is evaluated, the numbers rise. Sadly, non-governmental organizations have led the majority of efforts to address this crisis by managing shelters and healthcare checkpoints spread across the country. On the other hand, the Mexican government\'s actions have proven to be insufficient in mitigating the worsening conditions. To this date, Mexico’s position towards the future seems uncertain. The recent presidential transition in Mexico and the upcoming elections in the United States (2024) have increased the speculation and stress over this topic. Furthermore, the policies implemented under former President Andrés Manuel López Obrador, particularly his "Abrazos no Balazos" (Hugs no Shots) strategy, have not only failed to alleviate the general violence in the Mexican territory but have, in many cases, exacerbated the insecurity faced by migrants.',
    para2:'One of the most significant obstacles in addressing the migration crisis, as highlighted by the United Nations, is the constant lack of accurate information and the spread of misinformation. However, the project managed by the same institution, “Missing Migrants Project,” now has over a decade of data regarding the disappearances and deaths of migrants. Using the United Nation\'s resources, among others, this project seeks to shed light on the true implications and meaning of crossing Mexico as a migrant, with a particular focus on insecurity factors. A legitimate concern is that, with the end of López Obrador\'s term and the rise in cartel violence, Mexico is on track to become even more dangerous, with over 200,000 murders and 150,000 disappearances during the past six-year presidential term (sexenio). The previous numbers represent the most violent presidential period ever. Furthermore, drug cartels have expanded their influence, making migrants a key target for extortion, forced recruitment, and violence. According to a report by the Mexican government, between 2019 (the beginning of López Obrador\'s term) and 2022, more than 2,000 crimes were committed against migrants.',
    para3:'This website focuses on the relationship between migration, criminal rates, and cartel violence. By mapping out the hardships migrants face, including the number of territories, climates, and cartel-controlled zones they must navigate, the project illustrates how deeply intertwined these issues are. The site visually depicts correlations between migrant deaths, migration routes, crime hotspots, and the distribution of shelters and support infrastructure across Mexico.',


    footer: '<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',

    chapters:[
        {
            id: 'globe-heatmap',
            alignment: 'left',
            hidden: false,
            title: 'List of Biomaterials',
            image: 'images/Migrant_Caravan.jpg', 
            description:"The Western Hemisphere faces a severe migratory crisis as economic instability, violence, political controversies, and climate change drive millions to flee their homelands. Migrants journey through dangerous routes, often encountering exploitation, cartel violence, and harsh immigration policies. This crisis highlights deep systemic inequities and the urgent need for comprehensive regional solutions. Furthermore, one of the rising problems is the mortality rates in the migration corridors, the heatmap on the right represents the location of dead or missing migrants in the Western Hemisphere. <br> <br>", 
            image2:  'images/mmp_graph.png',
            description2:"The above image shows the behavior of migrant deads in the western hemispher in previous years. It is evident that the overall behavior depicts a rise in the mortality of the migration corridors. The corresponding full report elaborated by IOM (International Organization for Migration) can be found<a href ='https://missingmigrants.iom.int/2022-americas-overview-missing-migrants-data'> here.</a>", 
            imagecredit: 'Photo credits: <a href="https://www.wjtv.com/news/international/ap-migrant-caravan-regroups-in-mexico-after-government-promises-of-papers-falls-through/">AP Photo/Edgar H. Clemente</a>',
            imagecredit2: 'Photo credits: <a href="https://www.iom.int/news/us-mexico-border-worlds-deadliest-migration-land-route">UN Migration</a>',
            location: {
                center: [-98.5795, 39.8283],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
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
            mapAnimation: 'flyTo',
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
            mapAnimation: 'flyTo',
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
            id: 'Crossed_Territories',
            alignment: 'left',
            hidden: false,
            title: 'Crossed Territories',
            image: 'images/Crossing_Frontiers.jpg',
            description: "The identified migration corridors cross around 420 different municipalities and 22 states which not only represents crossing internal borders of Mexico, but also confronting different migration policies, authorities and jurisdictions as migrants traverse the country.<b> ",
            imagecredit: 'Photo credits: <a href="https://www.azcentral.com/story/mexico/2021/11/08/caravana-de-migrantes-en-mexico-deja-chiapas-e-ingresa-oaxaca/6339297001/">EFE/Juan Manuel Blanco</a>',
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
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
                document.getElementById("crossed_territories").style.visibility = "visible";
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
                 {layer: 'mexico-states', opacity: 1}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: .75}, /*Mexico Train Routes*/
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
                 {layer: 'super-municipality-simple', opacity: 1}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Crossed_Climates',
            alignment: 'left',
            hidden: false,
            title: 'Crossed Climates',
            image: 'images/Crossed_Climates.jpg',
            description: "In addition to the multiplicity of crossed territories, migrants in Mexico traverse diverse climates, from the arid deserts of the north to the humid tropical forests and mountainous terrains of the south. These potentially harsh environments amplify their hardships, exposing them to extreme heat, dehydration, cold nights, and unpredictable weather, often without adequate shelter, supplies, or rest during their journey. The map on the right shows all the different climatic units determined by INEGI in Mexico, additionally, the heatwave is represented as an additional environmental hardship that migrants face along their journey. Furthermore, extreme climate change and weather conditions are expected to play a central role in the behavior of migration in the upcooming years. <b> <a href = 'https://www.nytimes.com/interactive/2020/07/23/magazine/climate-migration.html'>Learn more about it here.</a>.",
            imagecredit: 'Photo credits: Self produced collage</a>',
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
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
                document.getElementById("routes_climate_legend").style.visibility = "visible";
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
                 {layer: 'mexico-weather', opacity: 1}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 1}, /*Mexico Heatwave*/
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
            id: 'Crossed_Height',
            alignment: 'left',
            hidden: false,
            title: 'Changing Topography',
            image: 'images/Crossing_Mountains.jpg',
            description: "Additionally, migrants traveling in caravans through Mexico face shifting topographies, from flat lowlands to steep mountainous regions. As they walk long distances, they cross rugged terrains like the Mexican Valley and Puebla’s mountains, enduring physical strain, altitude challenges, and insecure highways. These conditions exacerbate exhaustion and highlight the dangers of their journey. The map on the right shows the average height of each crossed municipality by the migration corridors. It is clear how the central region of Mexico represents a hilly topography, which can be challending to cross.<b>",
            imagecredit: 'Photo credits: <a href="https://news.un.org/en/story/2018/11/1024882">IOM/Rafael Rodriguez</a>',
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
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
                document.getElementById("routes_height").style.visibility = "visible";
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
                 {layer: 'super-municipality-simple_h', opacity: 1}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'INM_Crimes',
            alignment: 'right',
            hidden: false,
            title: 'Crime and Migrants',
            image: 'images/San_Luis_Crime.jpg',
            description: "Migrants crossing Mexico are exceptionally vulnerable, often targeted by organized crime. They endure robbery, extortion, and kidnapping, frequently forced to pay tolls or coerced into exploitative labor or human trafficking. Criminal groups exploit their lack of legal protections, resources, and dreams, preying on their desperation and fear. Migrants face constant threats of violence, losing belongings, freedom, or even their lives. In recent years, undocumented migration has become a lucrative business for criminal organizations and drug cartels, representing a growing source of revenue.<br><br>The image above shows evidence of a recent case in San Luis Potosi where more than 35 migrants were rescued after being kidnapped by drug cartels. <a href = 'https://www.jornada.com.mx/noticia/2023/04/06/estados/localizan-en-slp-a-35-migrantes-secuestrados-algunos-viajaban-desde-guanajuato-6013'>Learn more about it here.</a>. <br><br>The map on the left represents the amount of registered crimes committed directly towards undocumented migrants from 2016 to 2023 according to the Mexican government. The information is assumed to be highly underestimated.",
            imagecredit: 'Photo credits: <a href="https://aristeguinoticias.com/0704/mexico/aristegui-en-vivo-localizan-a-51-migrantes-en-slp-china-rechaza-trafico-de-fentanilo-israel-ataca-franja-de-gaza-y-mas/">codigosanluisi</a>',
            location: {
                center: [-91.70083, 23.8],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
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
                document.getElementById("INM_legend").style.visibility = "visible";
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
                 {layer: 'mexico-states-inm', opacity: 1}, /*Mexico Stare Crime INM*/
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
            id: 'CNDH Crimes',
            alignment: 'right',
            hidden: false,
            title: 'A Tragic Decade',
            image: 'images/Kidnaps_Decade.jpg',
            description: "Kidnappings of migrants in Mexico have surged in recent years, with organized crime increasingly targeting them for their vulnerability. Civil organizations and migrants have begun to protest, demanding government action against rising insecurity. These groups call for stronger protections, enforcement, and policies to address the violence and exploitation migrants face daily. The map on the left shows data retrieved from a report created by the National Commission for Human Rights (CNDH) that registered the number of kidnaps against migrants in a period from 2011 to 2020. <b> <a href = 'https://www.cndh.org.mx/documento/informe-especial-de-la-cndh-sobre-el-estado-que-guarda-el-trafico-y-el-secuestro-en'>Read the full report here.</a>. <br><br> Notice how the map considers only kidnaps and not any other type of crime, it can be assumed a high level of discrepancy between the information officially released by the Mexican government and the one comming from CNDH",
            imagecredit: 'Photo credits: <a href="https://www.cronica.com.mx/nacional/inseguridad-crimen-organizado-evitaron-migrantes-regresaran-mexico-monreal.html">La Crónica de Hoy</a>',
            location: {
                center: [-91.70083, 23.8],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
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
                document.getElementById("CNDH_legend").style.visibility = "visible";
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
                 {layer: 'mexico-states-cndh', opacity: 1}, /*Mexico State Crime CNDH*/
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
            id: 'Insecurity_Rates',
            alignment: 'left',
            hidden: false,
            title: 'Insecure Journey',
            image: 'images/Culiacan_Insecurity.jpg',
            description: "Recent data from INEGI highlights Mexico's growing insecurity perception across the country, with significant increases in cities like Tapachula, Chiapas, and León, Guanajuato. Tapachula was the city with the highest perception of insecurity, it is especially relevant as it is a key transit and entry point for migrants. Furthermore, migrants often cross other high-risk cities, which include including Mexico City, León, Tijuana, and Tuxtla Gutiérrez, where they encounter threats from organized crime and local violence. These cities are critical points on migration corridors, unfortunately they exacerbate the dangers of the migration journey, underscoring the need for urgent measures to protect vulnerable populations and address the growing insecurity that impacts both migrants and residents in these regions. <a href = 'https://en.www.inegi.org.mx/programas/ensu/'>Read the full report here.</a>",
            description2: "The map on the right has processed the data released by INEGI and represents the level of insecurity perception along the population of each urban settlement that was evaluated. These values are constantly measured and their variability represents once again the uncertainties and challenges that migrants might face in their journey. ",
            imagecredit: 'Photo credits: <a href="https://www.proceso.com.mx/nacional/estados/2024/8/30/despues-de-jornada-violenta-culiacan-regresa-la-normalidad-335804.html">José Betanzos/Cuartoscuro</a>',
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
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
                document.getElementById("routes_insecurity_legend").style.visibility = "visible";
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
                 {layer: 'Train_Migration_Routes', opacity: .75}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
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
            id: 'Insecurity_Rates_CDMX',
            alignment: 'left',
            hidden: false,
            title: 'Unsafe Capital',
            image: 'images/Mexico_City_Insecurity.jpg',
            description: "Mexico City has a high insecurity perception and criminal rate, driven by high inequality and urban challenges. Surrounding municipalities like Ecatepec, Tlalnepantla, and Naucalpan are particularly dangerous, plagued by violence, theft, and organized crime. These areas highlight the social disparities fueling insecurity, impacting both residents and vulnerable migrant populations.",
            imagecredit: 'Photo credits: <a href="https://enfoquenoticias.com.mx/presentan-reporte-sobre-percepcion-de-inseguridad-en-la-cdmx/">Enfoque Noticias</a>',
            location: {
                center: [-99.802, 19.565],
                zoom: 8.5,
                pitch: 0.00,
                bearing: 0.00
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
                document.getElementById("routes_insecurity_legend").style.visibility = "visible";
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
                 {layer: 'Train_Migration_Routes', opacity: .75}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: .5}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Insecurity_Rates_Bajio',
            alignment: 'left',
            hidden: false,
            title: 'Critial Bajio',
            image: 'images/Bajio.jpg',
            description: "El Bajío has become one of Mexico’s most dangerous regions, with León and Irapuato experiencing alarmingly high insecurity perceptions. These cities are hotspots for violence, extortion, and crime, fueled by intense conflicts between the Jalisco Nueva Generación Cartel and the Santa Rosa de Lima Cartel. Their battles for territorial control over drug routes and illegal markets have escalated violence, severely affecting local communities. This cartel presence underscores the urgent need for stronger security measures in the region. <a href = 'https://insightcrime.org/news/irapuato-symbol-rising-violence-mexico-mid-sized-cities/'>Learn more about it here.</a>",
            imagecredit: 'Photo credits: <a href="https://www.eluniversal.com.mx/estados/guanajuato-asesinan-precandidato-panista/">Cuartoscuro/a>',
            location: {
                center: [-103, 21],
                zoom: 8.4,
                pitch: 0.00,
                bearing: 0.00
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
                document.getElementById("routes_insecurity_legend").style.visibility = "visible";
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
                 {layer: 'Train_Migration_Routes', opacity: .75}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: .5}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Dead and Encounters',
            alignment: 'left',
            hidden: false,
            title: 'Dead and Encounters',
            image: 'images/Migrants_Juarez.webp',
            description: "The Missing Migrants Project (MMP), a database by the UN's International Organization for Migration (IOM), has been documenting deaths and disappearances of migrants globally since 2014. It has highlighted the US-Mexico border as the deadliest land migration route in the world. In 2022, 686 deaths and disappearances were recorded in this region, representing nearly half of the 1,457 incidents across the Americas. The actual numbers are likely higher due to incomplete reporting, especially from areas like the Sonoran and Chihuahuan Deserts, where harsh conditions are significantly dangerous and challenging.<br><br>The IOM has expressed that these alarming figures point to a lack of safe migration pathways, emphasizing the need for international cooperation to address irregular migration and improve safety measures. Enhanced data collection and humanitarian assistance remain critical for preventing further tragedies and supporting affected families. <a href = 'https://missingmigrants.iom.int/'>Learn more about it here.</a> <br><br>",
            image2: 'images/GN_Encounters.jpg',
            description2: "Under President López Obrador, Mexico implemented stricter migration policies, largely in response to U.S. pressure. Facing a U.S. threat to impose tariffs on Mexican imports in 2019, Mexico intensified enforcement along its southern border to handle undocumented migration. The National Guard (Guardia Nacional) and agents from the National Institute of Migration (INM) have worked together to intercept undocumented migrants, often using checkpoints and patrols. This strategy has drawn criticism for prioritizing U.S. demands over humanitarian concerns, as migrants face detention and deportation. The policy reflects the broader militarization of migration enforcement in Mexico, aligning with U.S. border control objectives. <a href = 'https://elpais.com/mexico/2020-10-02/mexico-moviliza-a-agentes-de-migracion-en-la-frontera-sur-ante-el-avance-de-la-caravana.html'>Learn more about how it started.</a>",
            imagecredit: 'Photo credits: <a href="https://www.infobae.com/mexico/2023/03/29/identificaron-a-ocho-presuntos-responsables-por-el-incendio-en-ciudad-juarez-chihuahua/">Luis Torres</a>',
            imagecredit2: 'Photo credits: <a href="https://elpais.com/internacional/2020/01/20/actualidad/1579542765_701688.html">EFE/El Pais/a>',
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
                document.getElementById("routes_dead_legend").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 1}, /*Migrants Encounters by INM*/
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
            id: 'Dead per Type',
            alignment: 'left',
            hidden: false,
            title: 'When? How? Who?',
            image: 'images/Animal_Politico.jpg',
            description2: "The map on the right shows the data classified by cuase of dead and the amount of people involved in the incident. Furthermore, after a brief analysis, the number of incidents has been rising in the last years, peaking on 2022. <br><br>Additionally, there is a clear relationship between the railroad infrastructure and the locations of incidents, which are particularly present in the southern and central regions of Mexico. <br><br>Lastly, the overall data hihgly concentrates in the sonoran decert, passing the U.S.-Mexico border.",
            image2: 'images/Cover_Image_B.webp',
            imagecredit: 'Photo credits: <a href="https://www.cnbc.com/2021/12/10/truck-crash-in-mexico.html">Sergio Hernandez|AFP</a>',
            imagecredit2: 'Photo credits: <a href="https://www.whio.com/news/trending/mexico-crash-53-killed-truck-smuggling-migrants-overturns-officials-say/RIGNHEXD35HTBOK26HI576MKLI/">Alfredo Pacheco</a>',
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
                document.getElementById("routes_deadtype_legend").style.visibility = "visible";
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
                 {layer: 'Train_Migration_Routes', opacity: .5}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 1}, /*Missing Migrants by Cause of Dead*/
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
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            title: 'Cartel Control',
            image: 'images/Cartel_Map_T.png',
            imagecredit:`Self produced visualization with information retrieved from El Universal. The original data was aggregated and interpretated. <a href="https://interactivos.eluniversal.com.mx/2023/mapa-crimen-organizado/">Get the Data</a>`, 


            description: `<br><br><b>What did I just see?</b>
                            <br><br>As mentioned, migrants in Mexico face a multifactorial increasing danger. They have to cross multiple territories, navigate different political contexts, and face the constant threat of being kidnapped and forcibly recruited by drug cartels. As a vulnerable population, migrants receive inadequate protection, partly due to the pressures from the United States for Mexico to control and stop migration.
                            <br><br>This study acquires relevance due to the Mexican government’s lack of attention and seriousness in addressing the issue. During her campaign, President Claudia Sheinbaum did not provide a clear position on migration, underscoring a lack of concrete plans to confront the growing crisis. On top of that, her recent security strategy seems to give continuity to the failed one implemented by López Obrador.  Furthermore, the escalation in cartel violence in the last quarter of 2024 presents even more significant risks to migrants. Cartels now have undeniable territorial control, especially in the south of Mexico, the entry point of thousands of migrants.
                            <br><br>The following section aims to reveal the multiple challenges migrants encounter when crossing Mexican territory, including often overlooked factors such as drug cartel territorial control, poverty rates, and insecurity perception across different regions. The research examines the various tolls, checkpoints, borders, and environments that migrants must navigate across Mexico, but focuses mainly on the intersection of criminal activity and cartel violence along key migration routes. While the study encompasses the entire Mexican territory, it concentrates on areas through which migration corridors pass and bifurcate. Furthermore, it changes to a smaller scale where it seems appropriate, one criteria has been where a more significant concentration of deaths is identified.
                            <br><br>The primary goal is to visually, graphically, and physically illustrate the correlation between violence and migration in Mexico. By mapping out regions where specific cartels operate and where higher migrant death rates occur, this exercise highlight the implicit and explicit costs of crossing the country. The project explores whether there are patterns linking territorial conditions to migrant deaths and other hardships. Ultimately, this tool can be informative for migrants and policymakers, helping them identify risks and better understand the geographic correlation between insecurity and migration.
                            <br><br>The following buttons can direct you to four specific areas of interest across Mexican territory.  
                            `,
            description2:`
                        <br>
                        <button id="ChiapasButton">Go to Chiapas</button>
                        <button id="MexicoButton">Go to Mexico City</button>
                        <button id="MonterreyButton">Go to Monterrey</button>
                        <button id="HermosilloButton">Go to Hermosillo</button>
                    `,
            location: {
                center: [-100, 22.31081],
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
            id: 'Chiapas',
            alignment: 'left',
            hidden: false,
            title: 'Chiapas - The beginning',
            image: 'images/Tapachula_Start.webp',
            description: "Chiapas marks the starting point for many migrants entering Mexico, especially through Tapachula near the Guatemala border. This state is a frequent crossing for migrant caravans, which gather in large groups seeking safety in numbers as they begin their northbound journeys. Its position makes it a critical migration corridor.",
            imagecredit: 'Photo credits: <a href="https://www.20minutos.es/noticia/5187659/0/mexico-crisis-migratoria-1-200-migrantes-salen-desde-sur-mexicano-para-unirse-caravana-mas-numerosa-ano/">LA PRESSE</a>',
            location: {
                center: [-93.67435, 15.78751],
                zoom: 7.40,
                pitch: 31.22,
                bearing: -35.99,
                speed: 1,
                curve: .5,
                
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
                document.getElementById("routes_dead_legend_z").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 1}, /*Migrants Encounters by INM*/
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
            id: 'Chiapas-BiVariant',
            alignment: 'left',
            hidden: false,
            title: 'Historicly poor, recently insecure',
            image: 'images/Tapachula_Insecure.webp',
            description: "Chiapas, historically one of Mexico’s poorest states, has recently faced escalating violence due to drug cartel activity. Groups like the Jalisco Nueva Generación and others exploit the state's strategic location for trafficking routes. This has raised insecurity, affecting residents and migrants crossing the region, making it increasingly dangerous. The bivariant map on the right represents the conditions at every municipality of the region.",
            image2: 'images/PovertyChart.jpg',
            imagecredit: 'Photo credits: <a href="https://www.eluniversal.com.co/palante-chamos-y-chamas/2024/10/27/inseguridad-y-crisis-migratoria-desbordan-la-frontera-sur-de-mexico-en-2024/">EFE</a>',
            imagecredit2: 'Photo credits: <a href="https://www.imf.org/en/News/Articles/2022/01/24/cf-fostering-inclusion-in-mexico">IMF</a>',
            location: {
                center: [-93.67435, 15.78751],
                zoom: 7.40,
                pitch: 31.22,
                bearing: -35.99,
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
                document.getElementById("bivariate_legend").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .8}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Chiapas-CriminalRate',
            alignment: 'left',
            hidden: false,
            title: 'Rising violence ',
            image: 'images/TapachulaRisingViolence.jpg',
            description: "Chiapas faces rising crime and insecurity due to cartel activity, poverty, and weak governance. Tapachula, border city, now has the highest insecurity perception in Mexico. Violence has escalated to such an extent that residents of border towns are fleeing to Guatemala for safety. Organized crime, extortion, and territorial disputes worsen conditions, impacting locals and migrants. This crisis underscores the need for comprehensive security measures to protect vulnerable populations and stabilize the region. <a href = 'https://www.latimes.com/world-nation/story/2024-08-22/drug-cartels-are-fighting-for-turf-in-the-mexican-state-of-chiapas-villagers-are-fleeing-to-guatemala'>Learn more about how it here.</a>",
            imagecredit: 'Photo credits: <a href="https://www.elfinanciero.com.mx/estados/2024/10/21/fresnillo-ya-no-es-la-ciudad-mas-insegura-de-mexico-tapachula-toma-su-lugar/">Cuartoscuro</a>',
            location: {
                center: [-93.67435, 15.78751],
                zoom: 7.40,
                pitch: 31.22,
                bearing: -35.99,
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
                document.getElementById("crime_rates_legend").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 1}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Chiapas-Cartels',
            alignment: 'left',
            hidden: false,
            title: 'Combat for the migrant smuggling market',
            image: 'images/Chiapas_Cartel.jpg',
            description: "In Chiapas, escalating violence between the Sinaloa Cartel and Jalisco Nueva Generación Cartel reflects a fierce battle for dominance over lucrative trafficking routes for drugs and human smuggling. These groups exploit the state’s proximity to the Guatemalan border, using it as a key entry point for contraband. This ongoing conflict has led to widespread insecurity, terrorizing local communities and migrants.",
            imagecredit: 'Photo credits: <a href="https://english.elpais.com/international/2023-09-25/drug-cartel-turf-battles-cut-off-towns-in-southern-mexico-state-of-chiapas.html">RR. SS.</a>',
            location: {
                center: [-93.67435, 15.78751],
                zoom: 7.40,
                pitch: 31.22,
                bearing: -35.99,
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
                document.getElementById("Drug_Cartel_legend").style.visibility = "visible";
                document.getElementById("Cartel_Conflict").style.visibility = "hidden";
                document.getElementById("support_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 1}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 1}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .1}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Chiapas-Cartel-Index',
            alignment: 'left',
            hidden: false,
            title: 'Conflict',
            image: 'images/Chiapas_Conflictivity.jpg',
            description: "Rising crime and cartel violence in Chiapas have sparked civil protests, with communities demanding peace and effective governance. Citizens, local organizations, and religious groups have united in marches and demonstrations, urging authorities to restore safety and address impunity. These manifestations highlight growing frustration with insecurity and governmental inaction.",
            imagecredit: 'Photo credits: <a href="https://elpais.com/mexico/2024-02-13/chiapas-se-desangra-en-un-conflicto-armado-no-reconocido-desde-2021.html">Cuartoscuro</a>',
            location: {
                center: [-93.67435, 15.78751],
                zoom: 7.40,
                pitch: 31.22,
                bearing: -35.99,
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
                document.getElementById("Cartel_Conflict").style.visibility = "visible";
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
                 {layer: 'simple-drugcartels-index', opacity: 1}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .25}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },

        {
            id: 'MexicoCity',
            alignment: 'left',
            hidden: false,
            title: 'Mexico City - The Capital',
            image: 'images/Naucalpan_Periferico.jpeg',
            description: "Mexico City serves as a major attractor for migrants, often seen as a mandatory stop or destination full of opportunities. Many migrants pass through the city in their journey to northern Mexico or the U.S., drawn by its economic prospects and expansive labor market. However, for some, it becomes a temporary refuge offering employment, services, or support networks. Its centrality in the migration corridors makes it a hub, but challenges like insecurity and poverty also pose significant challenges for migrants.",
            imagecredit: 'Photo credits: <a href="https://www.milenio.com/estados/migrantes-caminan-periferico-norte-buscan-llegar-queretaro">Jorge Carballo</a>',
            location: {
                center: [-99.20939, 19.11733],
                zoom: 7.61,
                pitch: 40,
                bearing: -23.38,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup.remove();
                popup2.remove();
                popup3.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "visible";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend_z").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 1}, /*Migrants Encounters by INM*/
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
            id: 'MexicoCity-BiVariant',
            alignment: 'left',
            hidden: false,
            title: 'Wealthy?',
            image: 'images/MexicoCity_Poverty.jpg',
            description: "Mexico City faces significant challenges, including high insecurity, inequality, and poverty, which stress its social and urban fabric. The influx of migrants, drawn by economic opportunities or as part of northbound journeys, has further stressed the city’s resources and infrastructure. Rising crime rates and limited access to affordable housing or services exacerbate these issues, affecting both locals and migrants. This complex interplay of factors evidences the need for inclusive policies to address these intersecting crises.",
            imagecredit: 'Photo credits: <a href="https://www.ibtimes.com/mexicos-economy-rising-poverty-inequality-undermine-pena-nietos-economic-agenda-2080010">Reuters/Edgard Garrido</a>',
            location: {
                center: [-99.20939, 19.11733],
                zoom: 7.61,
                pitch: 40,
                bearing: -23.38,
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
                document.getElementById("bivariate_legend").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .8}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'MexicoCity-CriminalRate',
            alignment: 'left',
            hidden: false,
            title: 'Capital at risk',
            image: 'images/Mexico_City_Insecurity.jpg',
            description: "Mexico City faces high crime rates due to the challenges that a metropolis of such size represents, particularly in areas like Tepito, Iztapalapa, Ecatepec, and Naucalpan, which are hotspots for violent crime, extortion, and drug trafficking. These neighborhoods suffer from gang activity and limited police presence, fueling insecurity. This violence disproportionately impacts vulnerable populations, including migrants seeking safety or transit.",
            imagecredit: 'Photo credits: <a href="https://enfoquenoticias.com.mx/presentan-reporte-sobre-percepcion-de-inseguridad-en-la-cdmx/">Enfoque Noticias</a>',
            location: {
                center: [-99.20939, 19.11733],
                zoom: 7.61,
                pitch: 40,
                bearing: -23.38,
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
                document.getElementById("crime_rates_legend").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 1}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'MexicoCity-Cartels',
            alignment: 'left',
            hidden: false,
            title: 'Battle for the capital',
            image: 'images/MexicoCity_Harfuch.jpg',
            description: "Mexico City is contested by several drug cartels, including Unión Tepito, Cartel Jalisco Nueva Generación (CJNG), and smaller local groups, battling for control over drug distribution and extortion networks. These violent confrontations escalate insecurity in the capital. A clear example of cartel power in the capital was the 2020 assassination attempt on Omar García Harfuch, then the city's security chief, attributed to CJNG. These groups exploit Mexico City's strategic location and potential profits in illicit markets.",
            imagecredit: 'Photo credits: <a href="https://www.dw.com/en/mexico-city-security-chief-injured-in-assassination-attempt/a-53957088">picture-alliance/AP/R</a>',
            location: {
                center: [-99.20939, 19.11733],
                zoom: 7.61,
                pitch: 40,
                bearing: -23.38,
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
                document.getElementById("Drug_Cartel_legend").style.visibility = "visible";
                document.getElementById("Cartel_Conflict").style.visibility = "hidden";
                document.getElementById("support_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 1}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 1}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .1}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'MexicoCity-Cartel-Index',
            alignment: 'left',
            hidden: false,
            title: 'Conflict',
            image: 'images/MexicoCity_Operation.jpg',
            description: 'The outskirts of Mexico City, such as Naucalpan, are hotspots for cartel disputes, which exploit weak governance. Corruption is highly present in those locations, as highlighted by the recent operation "Enjambre," where Naucalpan’s security director was arrested for colluding with organized crime. This incident reveals how authorities often enable cartel activities, exacerbating violence and impunity in the region. Such corruption demands security efforts, leaving communities vulnerable to escalating crime',
            imagecredit: 'Photo credits: <a href="https://www.plenglish.com/news/2024/11/23/officials-linked-to-crime-arrested-in-mexico-state/">Prensa Latina</a>',
            location: {
                center: [-99.20939, 19.11733],
                zoom: 7.61,
                pitch: 40,
                bearing: -23.38,
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
                document.getElementById("Cartel_Conflict").style.visibility = "visible";
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
                 {layer: 'simple-drugcartels-index', opacity: 1}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .1}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },

        {
            id: 'Monterrey - Almost there',
            alignment: 'left',
            hidden: false,
            title: 'Monterrey',
            image: 'images/Migrants_Monterrey.jpg',
            description: 'Monterrey, as the third largest city in Mexico, serves as a critical stop for migrants in northern region, given its proximity to key border crossings like Nuevo Laredo, Piedras Negras, and Reynosa. Migrants gather here to plan their journeys or seek temporary shelter and resources before continuing to their destination. Monterrey’s infrastructure and strategic location make it a focal point for migration, but also expose migrants to risks such as exploitation and organized crime. Its role demonstrates  the complexities of migration through northern Mexico and its dangerousness.',
            imagecredit: 'Photo credits: <a href="https://www.excelsior.com.mx/nacional/parte-de-monterrey-caravana-migrante-tiene-como-destino-la-frontera/1521335">Cuartoscuro</a>',
            location: {
                center: [-100.82375, 25.75723],
                zoom: 7.32,
                pitch: 36.97,
                bearing: 0.00,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup.remove();
                popup2.remove();
                popup3.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "visible";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend_z").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 1}, /*Migrants Encounters by INM*/
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
            id: 'Monterrey-BiVariant',
            alignment: 'left',
            hidden: false,
            title: 'Wealthy but risky',
            image: 'images/Monterrey_Rich.jpg',
            description: "Monterrey is considered as one of Mexico’s wealthiest cities, in fact it is a major industrial hub with extensive manufacturing industries, including automotive, steel and concrete. It includes San Pedro Garza García, Latin America’s wealthiest municipality, known for its affluence, luxury lifestyle, and modern infrastructure. This economic prominence contrasts with regional migration challenges and local inequality.",
            image2: 'images/Monterrey_Insecurity.webp',
            description2:"On the other hand, Monterrey faces significant insecurity challenges, particularly due to the presence of drug cartels like Los Zetas and Cartel del Golfo, which gained power during Felipe Calderón’s presidency. The city saw a surge in violence as cartels fought for control over trafficking routes and local businesses. While Monterrey is wealthy, the rise of organized crime and cartel-related violence has severely impacted its security landscape, creating an undeniable contrast between its economic affluence and the risks faced by residents.",
            imagecredit: 'Photo credits: <a href="https://en.m.wikipedia.org/wiki/File:DelValleCity.jpg">Rick González</a>',
            imagecredit2: 'Photo credits: <a href="https://www.nmas.com.mx/monterrey/inseguridad-en-nuevo-leon-suman-976-homicidios-en-2024/">N+</a>',
            location: {
                center: [-100.82375, 25.75723],
                zoom: 7.32,
                pitch: 36.97,
                bearing: 0.00,
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
                document.getElementById("bivariate_legend").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .8}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Monterrey-CriminalRate',
            alignment: 'left',
            hidden: false,
            title: 'Safe?',
            image: 'images/Monterrey_Horror.jpg',
            description: "In 2024, violence has started to escalate once again in Monterrey, triggering memories of the city's darkest years around 2010, when Los Zetas imposed terror on the metropolitan area. Cartels are battling for control over vital drug trafficking routes and territory. The rise of criminal activity has been linked to the expansion of groups like the Northeast Cartel (Cartel del Noreste) in Nuevo León and surrounding areas, contributing to a resurgence in homicides and police killings. Monterrey’s role as a critical hub for migration and drug shipments intensifies the city's vulnerability to cartel violence. <a href = 'https://insightcrime.org/news/is-northeast-cartel-expansion-driving-killings-of-police-in-nuevo-leon-mexico/'>Learn more about it here.</a>",
            imagecredit: 'Photo credits: <a href="https://www.bbc.com/news/world-latin-america-66911902">EPA</a>',
            location: {
                center: [-100.82375, 25.75723],
                zoom: 7.32,
                pitch: 36.97,
                bearing: 0.00,
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
                document.getElementById("crime_rates_legend").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 1}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Monterrey-Cartels',
            alignment: 'left',
            hidden: false,
            title: 'Battlegrounds',
            image: 'images/Monterrey_Casino.jpg',
            description: "The violence in Monterrey has escalated significantly in 2024, as drug cartels, including the Cartel del Noreste, Cartel del Golfo, and the remnants of Los Zetas, battle for control of the city. This contest for territory, fueled by the desire to control drug trafficking routes, particularly for fentanyl and migrants, has caused a resurgence of violence reminiscent of the worst years of insecurity. Intense rivalries have led to public executions and horror displays, marking Monterrey's return to a period of extreme cartel violence. <a href = 'https://www.eluniversal.com.mx/opinion/hector-de-mauleon/tormenta-perfecta-sobre-monterrey/'>Learn more about the current conditions.</a>",
            imagecredit: 'Photo credits: <a href="https://www.nbcnews.com/id/wbna44282514">Dario Leon/AFP</a>',
            location: {
                center: [-100.82375, 25.75723],
                zoom: 7.32,
                pitch: 36.97,
                bearing: 0.00,
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
                document.getElementById("Drug_Cartel_legend").style.visibility = "visible";
                document.getElementById("Cartel_Conflict").style.visibility = "hidden";
                document.getElementById("support_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 1}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 1}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .1}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Monterrey-Cartel-Index',
            alignment: 'left',
            hidden: false,
            title: 'Conflict',
            image: 'images/Monterrey_Indepe.jpg',
            description: "Monterrey faces complex challenges in 2024, dealing with escalating violence, migration pressures, and inequality. As a major transit point for migrants, the city struggles to provide shelter, jobs, and resources for thousands of people passing through, while local authorities struggle to manage the demand on healthcare, housing, and social services. At the same time, high inequality persists, with affluent neighborhoods contrasting the poverty in more marginalized areas, further exacerbating tensions. These issues are contributing to a volatile social environment in the city.",
            imagecredit: 'Photo credits: <a href="https://www.latimes.com/delos/story/2023-10-12/northern-mexico-la-indepe-cumbias-colombianas-displacement-monterrey">Velia de la Cruz/For De Los</a>',
            location: {
                center: [-100.82375, 25.75723],
                zoom: 7.32,
                pitch: 36.97,
                bearing: 0.00,
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
                document.getElementById("Cartel_Conflict").style.visibility = "visible";
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
                 {layer: 'simple-drugcartels-index', opacity: 1}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .1}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },


        {
            id: 'Hermosillo',
            alignment: 'left',
            hidden: false,
            title: 'Hermosillo - The Last Region',
            image: 'images/Hermosillo_Migrants.webp',
            description: "Hermosillo is a critical hub for migration due to its proximity to the U.S. border and key crossing points like Nogales. The city's shelters are increasingly overwhelmed as expulsions under U.S. immigration policies redirect migrants into northern Mexico. Many migrants face harsh conditions, relying on limited local resources while navigating the dangers of organized crime and extreme desert climates. The pressure on Hermosillo’s infrastructure highlights its central role in migration routes.",
            imagecredit: 'Photo credits: <a href="https://www.telemundo52.com/noticias/mexico/mexico-ofrece-ayudar-a-eeuu-tras-fallo-sobre-el-programa-migratorio/2212967/">EFE</a>',
            location: {
                center: [-113.01459, 29.47249],
                zoom: 7.70,
                pitch: 56.50,
                bearing: -39.20
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup.remove();
                popup2.remove();
                popup3.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "visible";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend_z").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 1}, /*Migrants Encounters by INM*/
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
            id: 'Hermosillo-BiVariant',
            alignment: 'left',
            hidden: false,
            title: 'Calm?',
            image: 'images/Hermosillo_City.jpg',
            description: "The city as well faces significant challenges with poverty and crime, which exacerbate the difficulties for both residents and migrants. Criminal groups exploit the city’s strategic location near the U.S. border, engaging in smuggling and extortion, increasing local insecurity. Many neighborhoods struggle with economic deprivation, limiting opportunities and resources, creating a tense environment for migrants relying on local NGO’s. These overlapping issues complicate the city's ability to address migration effectively while maintaining public safety.",
            imagecredit: 'Photo credits: <a href="https://research.gsd.harvard.edu/mci/hermosillo-new-innovation-models-in-emerging-cities/">IDB/a>',
            location: {
                center: [-113.01459, 29.47249],
                zoom: 7.70,
                pitch: 56.50,
                bearing: -39.20
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
                document.getElementById("bivariate_legend").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .8}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Hermosillo-CriminalRate',
            alignment: 'left',
            hidden: false,
            title: 'Not so calm...',
            image: 'images/Hermosillo_Insecurity.webp',
            description: "Sonora faces escalating insecurity challenges, particularly in municipalities like Hermosillo, Caborca, and others in the northern region. Caborca has become one of the most dangerous areas, with homicide rates rising by 68.42% in 2024, driven by disputes among organized crime groups vying for control of drug and human trafficking routes. Agricultural workers have reported armed confrontations disrupting daily activities, and general fear permeates communities. This violence exacerbates poverty, and migration struggles across the region.",
            imagecredit: 'Photo credits: <a href="https://www.clarin.com/mundo/violencia-narco-sonora-campo-batalla-desierto-mexico-ee-uu-_0_2dMOWf5bZY.html">EFE</a>',
            location: {
                center: [-113.01459, 29.47249],
                zoom: 7.70,
                pitch: 56.50,
                bearing: -39.20
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
                document.getElementById("crime_rates_legend").style.visibility = "visible";
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
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 1}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Hermosillo-Cartels',
            alignment: 'left',
            hidden: false,
            title: 'Cartel de Sinaloa Kingdom',
            image: 'images/Hermosillo_Cartels.jpg',
            description: "The Sinaloa Cartel dominates much of Sonora, leveraging the state's location as a strategic hub for drug production and trafficking into the U.S. Beyond drug smuggling, the cartel represents significant challenges, including violent territorial disputes, extortion, and corruption. The cartel’s operations in Sonora exacerbate local crime rates, deepen insecurity, and destabilize smaller municipalities like Caborca, which face some of the most severe violence. These dynamics severely impact the region’s governance and safety.",
            imagecredit: 'Photo credits: <a href="https://www.dallasnews.com/espanol/al-dia/mexico/2024/02/12/droga-mexico-incautan-metanfetamina/">Agencia Reforma</a>',
            location: {
                center: [-113.01459, 29.47249],
                zoom: 7.70,
                pitch: 56.50,
                bearing: -39.20
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
                document.getElementById("Drug_Cartel_legend").style.visibility = "visible";
                document.getElementById("Cartel_Conflict").style.visibility = "hidden";
                document.getElementById("support_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 1}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 1}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .1}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Hermosillo-Cartel-Index',
            alignment: 'left',
            hidden: false,
            title: 'Conflict',
            image: 'images/Hermosillo_Rescue.webp',
            description: "While the Sinaloa Cartel maintains dominant control in Sonora, the region is not exempt from violence, as rivalries and territorial disputes persist. Similarly, Tijuana experiences severe insecurity due to clashes between the Sinaloa Cartel and the Cartel Jalisco Nueva Generación, contributing to its high homicide rates. These conflicts destabilize communities, leaving both states grappling with crime and insecurity.",
            imagecredit: 'Photo credits: <a href="https://www.jornada.com.mx/noticia/2024/02/09/estados/rescatan-a-259-migrantes-traslados-en-tren-fronterizo-6251">Cuartoscuro</a>',
            location: {
                center: [-113.01459, 29.47249],
                zoom: 7.70,
                pitch: 56.50,
                bearing: -39.20
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
                document.getElementById("Cartel_Conflict").style.visibility = "visible";
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
                 {layer: 'simple-drugcartels-index', opacity: 1}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .1}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },

        {
            id: 'Hope',
            alignment: 'left',
            hidden: false,
            title: 'Who Helps?',
            image: 'images/Shelter_A.jpg',
            description: "The majority of migrant shelters in Mexico are operated by NGOs, which often face significant resource limitations. These non-profit organizations, such as Casa Tochán, Casa Monarca, and the International Red Cross, provide critical humanitarian assistance, including food, shelter, and legal help. However, their capacity is often stretched thin due to the increasing number of migrants passing through the country. Overcrowding is a major issue, particularly in cities like Tapachula and Ciudad Juárez, where shelters are located along the primary migrant routes. Despite these challenges, these NGOs remain central to alleviating the humanitarian crisis, highlighting the urgent need for more government support and international cooperation. <br><br>A positive experience is how in response to the growing influx of migrants, Mexico City's government adapted public infrastructure, such as sports stadiums, to serve as temporary shelters during the peak of migrant caravans. These spaces offered essential resources like food, medical care, and sanitation to those in need. The initiative was a part of a broader effort to manage the migration crisis, as temporary shelters provided a way to address overcrowding in traditional facilities. However, the reliance on non-profits and makeshift shelters underscores the need for a more coordinated, long-term solution to the migration challenge.<br><br> ",
            image2: 'images/Casa_Tochan.jpg',
            description2: '',
            imagecredit: 'Photo credits: <a href="https://www.clarin.com/mundo/caravana-migrantes-descansa-ciudad-mexico-espera-decisiones-seguir-rumbo-unidos_0_wZ9wgv2c1.html">EFE</a>',
            imagecredit2: 'Photo credits: <a href="https://www.lawg.org/south-of-del-rio-the-shelters-welcoming-haitians-in-mexico-city/">Daniella Burgi-Palomino</a>',
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
                document.getElementById("support_legend").style.visibility = "visible";
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
                 {layer: 'migration-infrastructure-5ancfj', opacity: 1}, /*Migration Support Infrastructure*/
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

