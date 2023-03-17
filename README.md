# Maps POC

This repository contains a set of tests and results used to evaluate different map visualisation libraries. The aim is to compare them to implement the visualisation of the results of the IT project. You can find the results of each test in their respective folder.

## Purpose

We are comparing different libraries against the following requirements:

- License and cost: We'd prefer a library that minimises the license costs, and has fewer usage restrictions.
- Usability: We need to display heat maps of data over a map of Bogotá. Given the nature of the data we need the library to support street data for Bogotá.
- Performance: We don't know yet the amount of data that will be use dto display information in the map, so we need a library that support showing data at different scales, and ideally in a progressive fashion.
- Support for different formats: We will decide later the format used to export the geo-spatial data, but it's ideal that the library supports multiple formats (i.e. KML, GeoJSON, OSM, ...)

## Options and results

- [Google Maps API](plain_js/test_gmaps/)
- [OpenLayers](nodejs/test_openlayers/)
- [Bing Maps](bingmaps/)
