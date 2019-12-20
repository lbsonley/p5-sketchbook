import p5 from "p5";
import { colors } from "./utils";

const height = 500;
const width = 500;

const perlinAcceleration = p => {
  const mover = Accelerator(p);
  p.setup = () => {
    p.createCanvas(width, height);
  };

  p.draw = () => {
    p.background(colors.wintergreenDream);
    mover.checkEdges();
    mover.update();
    mover.display();
  };
};

const Accelerator = p => {
  const loc = p.createVector(width / 2, height / 2);
  const vel = p.createVector(0, 0);
  const size = p.createVector(40, 40);
  const offset = p.createVector(0, 10000);
  const step = p.createVector(0.03, 0.03);
  let noise;
  let acc;

  function update() {
    offset.add(step);
    vel.add(acc);
    vel.limit(10);
    loc.add(vel);
  }

  function checkEdges() {
    acc = p.createVector(
      p.map(p.noise(offset.x), 0, 1, -1, 1),
      p.map(p.noise(offset.y), 0, 1, -1, 1)
    );
    if (loc.x > width - 40 || loc.x < 0 + 40) {
      vel.x *= -1;
    }
    if (loc.y > height - 40 || loc.y < 0 + 40) {
      vel.y *= -1;
    }
  }

  function display() {
    p.push();
    p.strokeWeight(4);
    p.stroke(colors.pictonBlue);
    p.fill(colors.darkPurple);
    p.circle(loc.x, loc.y, size.x, size.y);
    p.pop();
  }

  return {
    update,
    display,
    checkEdges
  };
};

export default perlinAcceleration;
