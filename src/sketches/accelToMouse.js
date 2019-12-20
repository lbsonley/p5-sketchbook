import p5 from "p5";
import { colors } from "./utils";

const accelToMouse = p => {
  let acc;
  let mover;

  p.setup = () => {
    p.createCanvas(500, 500);
    p.frameRate(30);
    mover = Mover(p);
    // acc = new AcceleratorCluster(p);
  };

  p.draw = () => {
    p.background(colors.japaneseIndigo);
    // acc.update();
    // acc.display();
    mover.update();
    mover.display();
  };
};

const Mover = p => {
  const size = p.createVector(60, 45);
  const loc = p.createVector(p.random(0, p.width), p.random(0, p.height));
  const vel = p.createVector(0, 0);
  let acc;

  function update() {
    const mouse = p.createVector(p.mouseX, p.mouseY);
    const dir = p5.Vector.sub(mouse, loc);
    // scale accelearation based on magnitude
    const inverse = 1 - 1 / dir.mag();

    dir.normalize();
    dir.mult(0.5 * inverse);

    acc = dir;

    vel.add(acc);
    vel.limit(10);

    loc.add(vel);
  }

  function display() {
    p.strokeWeight(4);
    p.stroke(colors.cosmicLatte);
    p.fill(colors.vividRedTangelo);
    p.rect(loc.x, loc.y, size.x, size.y);
  }

  return {
    display,
    update
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
