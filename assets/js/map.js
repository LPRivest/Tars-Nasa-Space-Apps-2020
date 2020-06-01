// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlbGxhcjc3NyIsImEiOiJja2F1Ynp1ZGUwN2dvMnFvOHo5eG9pNzNyIn0.R_jbBLRk8tbb7OIh0D5tHA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-120, 50],
        zoom: 2
    });


// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);


var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
map.on('load', function() {
    // Add a geojson point source.
    // Heatmap layers also work with a vector tile source.
    map.addSource('covid_data', {
        'type': 'geojson',
        'data':
            'https://raw.githubusercontent.com/LPRivest/Tars-Nasa-Space-Apps-2020/frontend_development/parks_covid.geojson'
    });

    map.addLayer(
        {
            'id': 'covid-parks-heat',
            'type': 'heatmap',
            'source': 'covid_data',
            'maxzoom': 9,
            'paint': {
                // Increase the heatmap weight based on frequency and property risk
                'heatmap-weight': [
                    'interpolate',
                    ['linear'],
                    ['get', 'risk'],
                    0,
                    0,
                    6,
                    1
                ],
                // Increase the heatmap color weight weight by zoom level
                // heatmap-intensity is a multiplier on top of heatmap-weight
                'heatmap-intensity': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0,
                    1,
                    9,
                    3
                ],
                // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                // Begin color ramp at 0-stop with a 0-transparancy color
                // to create a blur-like effect.
                'heatmap-color': [
                    'interpolate',
                    ['linear'],
                    ['heatmap-density'],
                    0,
                    'rgba(33,102,172,0)',
                    0.2,
                    'rgb(103,169,207)',
                    0.4,
                    'rgb(209,229,240)',
                    0.6,
                    'rgb(253,219,199)',
                    0.8,
                    'rgb(239,138,98)',
                    1,
                    'rgb(178,24,43)'
                ],
                // Adjust the heatmap radius by zoom level
                'heatmap-radius': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0,
                    2,
                    9,
                    20
                ],
                // Transition from heatmap to circle layer by zoom level
                'heatmap-opacity': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    7,
                    1,
                    9,
                    0
                ]
            }
        },
        'waterway-label'
    );

    map.addLayer(
        {
            'id': 'covid-point',
            'type': 'circle',
            'source': 'covid_data',
            'minzoom': 7,
            'paint': {
                // Size circle radius by risk rating and zoom level
                'circle-radius': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    7,
                    ['interpolate', ['linear'], ['get', 'risk'], 1, 1, 6, 4],
                    16,
                    ['interpolate', ['linear'], ['get', 'risk'], 1, 5, 6, 50]
                ],
                // Color circle by risk rating
                'circle-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'risk'],
                    1,
                    'rgba(33,102,172,0)',
                    2,
                    'rgb(129, 230, 138)',
                    3,
                    'rgb(192, 227, 95)',
                    4,
                    'rgb(227, 223, 95)',
                    5,
                    'rgb(227, 187, 95)',
                    6,
                    'rgb(227, 152, 95)',
                    7,
                    'rgb(227, 128, 95)',
                    8,
                    'rgb(227, 95, 95)',
                    9,
                    'rgb(230, 64, 64)',
                    10,
                    'rgb(240, 26, 26)',
                ],
                'circle-stroke-color': 'white',
                'circle-stroke-width': 1,
                // Transition from heatmap to circle layer by zoom level
                'circle-opacity': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    7,
                    0,
                    8,
                    1
                ]
            }
        },
        'waterway-label'
    );
});