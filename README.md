# Maps POC

This repository contains a set of tests and results used to evaluate different map visualisation libraries. The aim is to compare them to implement the visualisation of the results of the IT project.

## Purpose

We are comparing different libraries against the following requirements:

- **License and cost**: We'd prefer a library that minimises the license costs, and has fewer usage restrictions.
- **Usability**: We need to display heat maps of data over a map of Bogotá. Given the nature of the data, we need the library to support street data for Bogotá.
- **Performance**: We don't know yet the amount of data to show on the map, so we need a library that supports showing data at different scales, ideally in a progressive fashion.
- **Support for different formats**: We will decide later on the format used to export the geospatial data, but ideally, the library needs to support multiple formats (i.e. [KML](https://www.ogc.org/standard/kml/), [GeoJSON](https://geojson.org/), [OSM](https://wiki.openstreetmap.org/wiki/OSM_file_formats), ...)

## Options and results

- [Google Maps API](googlemaps/)
- [OpenLayers](openlayers/)
- [Bing Maps](bingmaps/)
- [ArcGIS](arcgis/)
