/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: { lat: 4.6482975, lng: -74.107807 }, // Bogotá: 4.6482975,-74.107807,11z
    mapTypeId: 'satellite',
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    map: map,
    radius: 30,
  });
  fetch("https://raw.githubusercontent.com/lacser-itsbog/poc-maps/master/data/random-sample.geojson")
  	.then(function(response) { return response.json(); })
    .then(function(data){
      let locations = [];
      data.features.forEach(function(feature) {
      	var location = { 
        	location: new google.maps.LatLng({
            	lat: feature.geometry.coordinates[1],
            	lng: feature.geometry.coordinates[0]
          }), 
          weight: feature.properties.probability };
        locations.push(location);
      });
      heatmap.setData(locations);
    })
    .catch(console.error);
  
  document
    .getElementById('toggle-heatmap')
    .addEventListener('click', toggleHeatmap);
  document
    .getElementById('change-gradient')
    .addEventListener('click', changeGradient);
  document
    .getElementById('change-opacity')
    .addEventListener('click', changeOpacity);
  document
    .getElementById('change-radius')
    .addEventListener('click', changeRadius);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)',
  ];

  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

window.initMap = initMap;
