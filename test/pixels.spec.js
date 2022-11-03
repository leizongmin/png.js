const PNG = require('../');
const fs = require('fs');

const files = fs.readdirSync('test/images');

function getPixels(Ctor, fileName) {
  const image = new Ctor(fs.readFileSync(`test/images/${fileName}`));
  return image.decodePixels();
}

describe('pixels', () => {
  describe('node', () => {
    test.each(files)('%s', (fileName) => {
      const pixels = getPixels(PNG, fileName);
      expect(pixels).toMatchSnapshot();
    });
  });

  describe('browser', () => {
    test.each(files)('%s', (fileName) => {
      const pixels = getPixels(PNG, fileName);
      expect(pixels).toMatchSnapshot();
    });
  });
});
