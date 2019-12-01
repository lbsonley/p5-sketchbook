import { colors } from "./utils";

const vectorMotion = p => {
  const locVector = new p.createVector(20, 40);
  const velVector = new p.createVector(10, 3);

  p.setup = () => {
    p.createCanvas(400, 400);
    p.smooth();
    console.log(locVector);
  };

  p.draw = () => {
    p.background(colors.deepSpaceSparkle);

    locVector.add(velVector);
    if (locVector.x > p.width || locVector.x < 0) velVector.x *= -1;
    if (locVector.y > p.height || locVector.y < 0) velVector.y *= -1;

    p.stroke(colors.vanilla);
    p.strokeWeight(4);
    p.fill(colors.bittersweetShimmer);
    p.circle(locVector.x, locVector.y, 50, 50);
  };
};

export default vectorMotion;
