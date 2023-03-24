# Test: ArcGIS

Try it in [JSFiddle](https://jsfiddle.net/gh/get/library/pure/lacser-itsbog/poc-maps/tree/main/arcgis/test_arcgis)

## Usage

First you'll need to create a new ArcGIS account and upgrade it to an ArcGIS Developer account. Then, you can create a new API key to start using the APIS.

## Evaluation

### License and cost

[Pricing](https://developers.arcgis.com/pricing/) for ArcGIS depends on the amount of data/requests you use oin your application.

Service                | Free            | Additional
---------------------- | --------------- | --------------------------
Basemap layers         | 2,000,000 tiles | USD$0.15 per 1000 tiles
Geocode not stored     | 20,000 geocodes | USD$0.5 per 1,000 geocodes
Geocode stored         | -               | USD$4.0 per 1,000 geocodes
Storage: Tile and data | 5 Gb            | USD$0.12 per Gb

The developer license is free, individual licenses start on 500k COP.

### Usability

The documentation is really good, it offers API documentation, tutorials and examples. For the end user there are different options that could make the interaction smoother. But probably for the initial use cases of the ITS project are not needed.

### Performance

We don't know yet the amount of data to show on the map, so we need a library that supports showing data at different scales, ideally in a progressive fashion.

### Support for different formats

The ArcGIS Maps SDK for JavaScript supports [different data formats](https://developers.arcgis.com/javascript/latest/layers-and-data/). Each layer type also exposes a different set of capabilities for displaying data stored in an external file format.

- CSVLayer: CSV files. May require large download depending on the number of features.
- KMLLayer: KML data source.
- GeoJSONLayer: GeoJSON files. Each GeoJSON Layer accepts a single geometry type.
- GeoRSSLayer: GeoRSS feeds.
- OpenStreetMapLayer: OpenStreetMap tile services.
- BingMapsLayer: Bing Spatial Data Service

## References

- [ArcGIS Developers Portal](https://developers.arcgis.com/)
- [ArcGIS HeatMaps](https://developers.arcgis.com/javascript/latest/visualization/high-density-data/heatmap/)
