import { colors } from "./utils";

const randomWalkExp = p => {
  let loc;
  p.setup = () => {
    p.frameRate(4);
    p.createCanvas(500, 500);
    p.background(colors.whiteSmoke);
    p.stroke(colors.intlOrange);
    p.strokeWeight(4);
    loc = p.createVector(p.width / 2, p.height / 2);
  };

  p.draw = () => {
    const { stepX, stepY } = exponential();

    loc.x += stepX;
    loc.y += stepY;

    p.point(loc.x, loc.y);
  };

  const exponential = () => {
    while (true) {
      const stepSize = p.random(20);
      const probability = stepSize ^ 2;
      const r2 = p.random(1);

      if (r2 < probability) {
        return {
          stepX: p.random(-stepSize, stepSize),
          stepY: p.random(-stepSize, stepSize)
        };
      }
    }
  };
};

export default randomWalkExp;
