/**
 * Create a Drawing using only 2D shapes
 *  arc, ellipse, circle, line, point, quad, rect, square, triangle
 */

const twoD = p => {
  let x = 10;
  let y = 10;
  let i = 1;
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(240);
    p.noStroke();
  };

  p.draw = () => {
    p.fill(Math.floor(Math.random() * 255));
    if (i % 3 === 0) {
      p.triangle(x, y - 5, x + 5, y + 5, x - 5, y + 5);
    } else if (i % 2 === 0) {
      p.rectMode(p.CENTER);
      p.rect(x, y, 10, 10);
    } else {
      p.circle(x, y, 10, 10);
    }

    x += 20;
    if (x > 400) {
      x = 10;
      y += 20;
    }

    if (y > 400) {
      y = 10;
      i += 1;
      p.background(Math.floor(Math.random() * 255));
    }
  };
};

export default twoD;
