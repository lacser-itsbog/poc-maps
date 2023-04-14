# Test: OpenLayers

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/lacser-itsbog/poc-maps/tree/master/openlayers/test_openlayers)

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

It is completely free, Open Source JavaScript, released under the 2-clause BSD License (also known as the FreeBSD). It can combine maps from different sources (for instance Google Maps, Yahoo Maps, ...). WIth OpenLayers you can create web applications to visualise a dynamic map.

### Usability

This is an open source project with good documentation and examples available in its website. Compared to other tools seems to have a limited availability of examples for some use cases.

### Performance

We don't know yet the amount of data to show on the map, so we need a library that supports showing data at different scales, ideally in a progressive fashion.

### Support for different formats

OpenLayers supports GeoJSON, GML, GPX, KML, OSMXML, TopoJSON, EsriJSON, among others.

## References

- [OpenLayers Documentation](https://openlayers.org/doc/)
