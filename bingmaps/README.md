# Bing Maps API

To use the Bing Maps API you need to [create a new developer account](https://www.microsoft.com/en-us/maps/create-a-bing-maps-key#basic). Once you create an account, you'll need to create an API key that you can use to authenticate your requests to the API. Save this key in a secure place, DON'T SHARE IT.

## Usage

Try it in [![JSFiddle](https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40)](https://jsfiddle.net/gh/get/library/pure/lacser-itsbog/poc-maps/tree/main/bingmaps/test_bingmaps)

You can find some samples on the [Bing Maps Samples page](https://samples.bingmapsportal.com/). The Bing Maps V8 Web Control provides support for different features:

- To load GeoJSON data, you can use `GeoJSON.read(geojsonObject)` or `GeoJSON.readFromUrl(url,callback)`.
- To create a new HeatMap, you can use the `HeatMapLayer(locations,options)` function.

## Evaluation

### License and cost

Bing Maps API provides different [licensing options](https://www.microsoft.com/en-us/maps/licensing/licensing-options/). You can use a developer license (free) or an enterprise license.

- [Basic Key](https://www.microsoft.com/en-us/maps/licensing#developerLicense): Free with fewer than 125.000 transactions per calendar year on websites and mobile apps that are not on/for the Windows Phone.

- [Enterprise License](https://www.microsoft.com/en-us/maps/licensing#EnterpriseLicense): available without restriction. Pricing details are not public.

### Usability

Bing Maps have complete coverage for Bogotá and provides two possible views: Aerial and Roads. The API documentation is good and is available [here](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/creating-and-hosting-map-controls/)

### Performance

We don't know yet the amount of data to show on the map, so we need a library that supports showing data at different scales, ideally in a progressive fashion.

### Support for different formats

Bing Maps supports the following formats:

- GeoJSON
- GeoXML: KML, KMZ, GeoRSS, GML, and GPX

## References

- [GeoJSON Module](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/modules/geojson-module/)
- [Heat Map Module](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/modules/heat-map-module/heatmaplayer-class)
- [Traffic Module](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/modules/traffic-module)
