/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map, heatmap, kmlmap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: { lat: 4.6482975, lng: -74.107807 }, // Bogotá: 4.6482975,-74.107807,11z
    mapTypeId: 'satellite',
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    radius: 50,
  });
  kmlmap = new google.maps.KmlLayer('data/kml/2012_Earthquakes_Mag5.kml', {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
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

// Heatmap data: 500 Points
function getPoints() {
  return [
    { location: new google.maps.LatLng(4.6482975, -74.107807), weight: 1 },
    { location: new google.maps.LatLng(4.6502975, -74.107807), weight: 1 },
    { location: new google.maps.LatLng(4.6522975, -74.107807), weight: 3 },
    { location: new google.maps.LatLng(4.6542975, -74.107807), weight: 2 },
    { location: new google.maps.LatLng(4.6562975, -74.107807), weight: 1 },
    { location: new google.maps.LatLng(4.6582975, -74.107807), weight: 1 },
    { location: new google.maps.LatLng(4.6602975, -74.107807), weight: 5 },
    { location: new google.maps.LatLng(4.6622975, -74.107807), weight: 5 },
    { location: new google.maps.LatLng(4.6642975, -74.107807), weight: 2 },
    { location: new google.maps.LatLng(4.6662975, -74.107807), weight: 1 },
    { location: new google.maps.LatLng(4.6682975, -74.107807), weight: 3 },
    { location: new google.maps.LatLng(4.6702975, -74.107807), weight: 4 },
    { location: new google.maps.LatLng(4.6722975, -74.107807), weight: 5 },
    { location: new google.maps.LatLng(4.6742975, -74.107807), weight: 3 },
    { location: new google.maps.LatLng(4.6762975, -74.107807), weight: 5 },
    { location: new google.maps.LatLng(4.6782975, -74.107807), weight: 4 },
    { location: new google.maps.LatLng(4.6802975, -74.107807), weight: 3 },
    { location: new google.maps.LatLng(4.6822975, -74.107807), weight: 3 },
    { location: new google.maps.LatLng(4.6842975, -74.107807), weight: 3 },
    { location: new google.maps.LatLng(4.6862975, -74.107807), weight: 2 },
    { location: new google.maps.LatLng(4.6482975, -74.109807), weight: 4 },
    { location: new google.maps.LatLng(4.6502975, -74.109807), weight: 5 },
    { location: new google.maps.LatLng(4.6522975, -74.109807), weight: 2 },
    { location: new google.maps.LatLng(4.6542975, -74.109807), weight: 5 },
    { location: new google.maps.LatLng(4.6562975, -74.109807), weight: 4 },
    { location: new google.maps.LatLng(4.6582975, -74.109807), weight: 4 },
    { location: new google.maps.LatLng(4.6602975, -74.109807), weight: 1 },
    { location: new google.maps.LatLng(4.6622975, -74.109807), weight: 5 },
    { location: new google.maps.LatLng(4.6642975, -74.109807), weight: 4 },
    { location: new google.maps.LatLng(4.6662975, -74.109807), weight: 4 },
    { location: new google.maps.LatLng(4.6682975, -74.109807), weight: 2 },
    { location: new google.maps.LatLng(4.6702975, -74.109807), weight: 5 },
    { location: new google.maps.LatLng(4.6722975, -74.109807), weight: 5 },
    { location: new google.maps.LatLng(4.6742975, -74.109807), weight: 5 },
    { location: new google.maps.LatLng(4.6762975, -74.109807), weight: 2 },
    { location: new google.maps.LatLng(4.6782975, -74.109807), weight: 1 },
    { location: new google.maps.LatLng(4.6802975, -74.109807), weight: 3 },
    { location: new google.maps.LatLng(4.6822975, -74.109807), weight: 2 },
    { location: new google.maps.LatLng(4.6842975, -74.109807), weight: 5 },
    { location: new google.maps.LatLng(4.6862975, -74.109807), weight: 1 },
  ];
}

window.initMap = initMap;
