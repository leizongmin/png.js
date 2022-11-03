# png.js

A PNG decoder in JS for the [Web-interoperable Runtime](https://wintercg.org/).

## Usage

Install the module using npm:

```bash
npm i png-js
```

Require the module and decode a PNG:

```bash
const PNG = require('png-js');
PNG.decode('some.png', function(pixels) {
    // pixels is a 1d array (in rgba order) of decoded pixel data
});
```
