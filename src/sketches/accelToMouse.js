import p5 from "p5";
import { colors } from "./utils";

const accelToMouse = p => {
  let acc;

  p.setup = () => {
    p.createCanvas(500, 500);
    acc = new AcceleratorCluster(p);
  };

  p.draw = () => {
    p.background(colors.japaneseIndigo);
    acc.update();
    acc.display();
  };
};

const AcceleratorCluster = p => {
  const xOff = 10;
  const yOff = 1000;
  const numObjects = 4;
  const locs = [];
  const vel = p.createVector(0, 0);
  let dir;
  let accel;

  for (let i = 0; i < numObjects; i++) {
    const x = p.map(p.noise(xOff + i * 30), 0, 1, 0, p.width);
    const y = p.map(p.noise(yOff + i * 30), 0, 1, 0, p.height);
    locs.push(p.createVector(x, y));
  }

  const update = () => {
    const mouse = p.createVector(p.mouseX, p.mouseY);

    locs.forEach(loc => {
      dir = p5.Vector.sub(mouse, loc);
      dir.normalize();
      dir.mult(0.65);

      accel = dir;

      vel.add(accel);
      vel.limit(10);
      loc.add(vel);
    });
  };

  const display = () => {
    p.strokeWeight(4);
    p.stroke(colors.jet);
    p.fill(colors.vividRedTangelo);
    locs.forEach(loc => {
      p.rect(loc.x, loc.y, 40, 30);
    });
  };

  return {
    update,
    display
  };
};

export default accelToMouse;
