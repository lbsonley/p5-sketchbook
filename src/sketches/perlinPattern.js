const perlinPattern = p => {
  // variables for parameters to perlin noise
  let xOff;
  let yOff;
  let zOff;

  p.setup = () => {
    p.createCanvas(400, 400);
    xOff = 0;
    zOff = 0;
  };

  p.draw = () => {
    // get pixel density
    let d = p.pixelDensity();

    // compute number of pixels
    // multiply by four to account for four color values (RGBA) per pixel
    let width = 4 * d * p.width;
    let height = d * p.height;

    p.loadPixels();
    for (let i = 0; i < width; i += 4) {
      // reset y parameter for each row of pixels
      yOff = 0;
      for (let j = 0; j < height; j += 1) {
        // adjust how noise is generated
        p.noiseDetail(4, 0.5);

        // map noise to a color
        let color = p.map(p.noise(xOff, yOff, zOff), 0, 1, 0, 255);

        // set RGBA colors for each pixel
        p.pixels[i + j * width] = color;
        p.pixels[i + 1 + j * width] = color;
        p.pixels[i + 2 + j * width] = color;
        p.pixels[i + 3 + j * width] = 255;

        // increment y parameter for each column of pixels
        yOff += 0.01;
      }

      // increment x parameter for each row of pixels
      xOff += 0.01;
    }
    p.updatePixels();

    zOff += 0.01;
  };
};

export default perlinPattern;
