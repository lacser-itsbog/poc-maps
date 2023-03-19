# Test: OpenLayers

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/lacser-itsbog/poc-maps/tree/openlayers/openlayers/test_openlayers)

This test is based in OpenLayers and Vite.

## Usage

### NodeJS

This requires node 14+. Run the following command inside the `test_openlayers` folder:

```bash
npm install
npm start
```

and then open the address <http://localhost:5173> in your browser.

### Docker

You can run this example using Docker. Run the following commands:

```bash
docker build -t test_openlayers:latest .
docker run test_openlayers
```

and then open the address <http://localhost:5173> in your browser.

## Evaluation

### License and cost

You can use Google Maps Platform with no charge for up to 28.500 map loads. After that you start to pay different rates depending on the API you use. More information here.

### Usability

Google Maps has complete coverage for Colombia and provides two different views: Map and Satellite. The documentation is good and is available here.

### Performance

We don't know yet the amount of data to show on the map, so we need a library that supports showing data at different scales, ideally in a progressive fashion.

### Support for different formats

Google Maps support GeoJSON (using the Data layer), KML and GeoRSS formats. It's recommended to use the Data layer and GeoJSON.

## References

- [OpenLayers Documentation](https://openlayers.org/doc/)
