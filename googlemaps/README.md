# Test: Google Maps

Try it in [JSFiddle](https://jsfiddle.net/gh/get/library/pure/wjfatuan/poc-maps/tree/main/googlemaps/test_gmaps)

## Usage

To use the Maps API you require to use the Visualization library. Include the `libraries=visualization` parameter when you first load the API. For example:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
```

## Evaluation

### License and cost

You can use Google Maps Platform with no charge for up to 28.500 map loads. After that you start to pay different rates depending on the API you use. More information [here](https://mapsplatform.google.com/pricing).

### Usability

Google Maps has complete coverage for Colombia and provides two different views: Map and Satellite. The documentation is good and is available [here](https://developers.google.com/maps/documentation/javascript).

### Performance

We don't know yet the amount of data to show on the map, so we need a library that supports showing data at different scales, ideally in a progressive fashion.

### Support for different formats

Google Maps support GeoJSON (using the [Data layer](https://developers.google.com/maps/documentation/javascript/datalayer)), KML and GeoRSS formats. It's [recommended](https://developers.google.com/maps/documentation/javascript/kmllayer) to use the Data layer and GeoJSON.

## References

- [Maps Javascript API: Overview](https://developers.google.com/maps/documentation/javascript/overview#Dynamic)
- [Maps Javascript API: Layers](https://developers.google.com/maps/documentation/javascript/layers)
