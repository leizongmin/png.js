function loadPNG(url, canvas, callback) {
  if (typeof canvas === 'function') {
    callback = canvas;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = () => {
    const data = new Uint8Array(xhr.response || xhr.mozResponseArrayBuffer);
    const png = new PNG(data);
    if (typeof (canvas && canvas.getContext) === 'function') {
      renderPNG(png, canvas);
    }
    return typeof callback === 'function' ? callback(png) : undefined;
  };

  return xhr.send(null);
}

function renderPNG(png, canvas) {
  canvas.width = png.width;
  canvas.height = png.height;
  const ctx = canvas.getContext('2d');

  if (png.animation) {
    png.decodeFrames(ctx);
    return png.animate(ctx);
  } else {
    const data = ctx.createImageData(png.width, png.height);
    png.copyToImageData(data, png.decodePixels());
    return ctx.putImageData(data, 0, 0);
  }
}
