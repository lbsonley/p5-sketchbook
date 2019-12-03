import { colors } from "./utils";

class Walker {
  constructor(p, loc, color) {
    this.p = p;
    this.loc = loc;
    this.color = color;
  }

  step() {
    const { p, loc } = this;
    // 0, -4 or 4
    const stepX = (p.floor(p.random(3)) - 1) * 4;
    const stepY = (p.floor(p.random(3)) - 1) * 4;
    loc.x += stepX;
    loc.y += stepY;
  }

  display() {
    const { p, loc, color } = this;
    p.stroke(color);
    p.strokeWeight(2);
    p.point(loc.x, loc.y);
  }
}

/**
 * @description sketch demonstrating random walk
 */
const randomWalk = p => {
  let loc;
  let walkerRand;

  p.setup = () => {
    p.createCanvas(600, 600);
    p.background(colors.asparagus);
    loc = p.createVector(p.width / 2, p.height / 2);
    walkerRand = new Walker(p, loc, colors.whiteSmoke);
  };

  p.draw = () => {
    walkerRand.display();
    walkerRand.step();
  };
};

export default randomWalk;
