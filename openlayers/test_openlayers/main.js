import GeoJSON from 'ol/format/GeoJSON.js';
import Map from 'ol/Map.js';
import Stamen from 'ol/source/Stamen.js';
import VectorSource from 'ol/source/Vector.js';
import View from 'ol/View.js';
import {Heatmap as HeatmapLayer, Tile as TileLayer} from 'ol/layer.js';
import {useGeographic} from 'ol/proj';

const blur = document.getElementById('blur');
const radius = document.getElementById('radius');

useGeographic();

const vector = new HeatmapLayer({
  source: new VectorSource({
    format: new GeoJSON(),
    url: 'https://raw.githubusercontent.com/lacser-itsbog/poc-maps/master/data/random-sample.geojson',
    
  }),
  blur: parseInt(blur.value, 10),
  radius: parseInt(radius.value, 10),
  weight: function (feature) {
    const probability = parseFloat(feature.get('probability'));
    return probability;
  },
});

const raster = new TileLayer({
  source: new Stamen({
    layer: 'toner',
  }),
});

const view = new View({
    center: [0,0],
    zoom: 12,
  });

let map = new Map({
  layers: [raster, vector],
  target: 'map',
  view: view,
});
const size = map.getSize();
view.centerOn([-74.247892,4.6486259], size, [size[0]/4, size[1]/2]);

blur.addEventListener('input', function () {
  vector.setBlur(parseInt(blur.value, 10));
});

radius.addEventListener('input', function () {
  vector.setRadius(parseInt(radius.value, 10));
});
