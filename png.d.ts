class PNG {
  constructor(data: Uint8Array);
  // decodePixels(): Uint8Array;
  // decodePalette(): Uint8Array;
  // copyToImageData(imageData: Uint8Array, pixels: Uint8Array): void;
  decode(): Uint8Array;
}

export = PNG;
