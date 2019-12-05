import { colors } from "./utils";

const perlinWalker = p => {
  let walker;
  p.setup = () => {
    p.createCanvas(400, 400);
    p.stroke(245, 245, 245, 90);
    p.strokeWeight(8);
    walker = new PerlinWalker(p);
  };

  p.draw = () => {
    p.background(colors.deepSpaceSparkle);
    walker.walk();
    walker.display();
  };
};

/**
 * @description factory function to create Perlin Walker
 */
function PerlinWalker(p) {
  let tx = 0;
  let ty = 10000;
  let stepX;
  let stepY;
  const loc = p.createVector(p.width / 2, p.height / 2);

  function calcStepSize() {
    const stepSize = p.random(0, 5);
    stepX = p.map(p.noise(tx), 0, 1, -stepSize, stepSize);
    stepY = p.map(p.noise(ty), 0, 1, -stepSize, stepSize);
  }

  function walk() {
    calcStepSize();
    loc.x += stepX;
    loc.y += stepY;

    tx += 0.2;
    ty += 0.2;
  }

  function display() {
    p.point(loc.x, loc.y);
  }

  return {
    walk,
    display
  };
}

export default perlinWalker;
