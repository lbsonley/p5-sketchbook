import { colors } from "./utils";

const randomAccelerator = p => {
  let accelerator;
  p.setup = () => {
    p.createCanvas(400, 400);
    accelerator = new Accelerator(p);
  };

  p.draw = () => {
    accelerator.update();
    accelerator.display();
  };
};

const Accelerator = p => {
  let xOff = 0;
  let yOff = 10000;
  let location = p.createVector(p.width / 2, p.height / 2);
  let velocity = p.createVector(0, 0);
  let acceleration;

  const update = () => {
    let x = p.map(p.noise(xOff), 0, 1, -2, 2);
    let y = p.map(p.noise(yOff), 0, 1, -2, 2);
    if (location.x < p.width / 6) {
      velocity.x = 0;
      x = p.map(p.noise(xOff), 0, 1, 0, 2);
    }
    if (location.x > (5 * p.width) / 6) {
      velocity.x = 0;
      x = p.map(p.noise(xOff), 0, 1, -2, 0);
    }
    if (location.y < p.height / 6) {
      velocity.y = 0;
      y = p.map(p.noise(yOff), 0, 1, 0, 2);
    }
    if (location.y > (5 * p.height) / 6) {
      velocity.y = 0;
      y = p.map(p.noise(yOff), 0, 1, -2, 0);
    }

    acceleration = p.createVector(x, y);
    velocity.add(acceleration);
    velocity.limit(1);
    location.add(velocity);

    xOff += 0.01;
    yOff += 0.01;
  };

  const display = () => {
    p.background(colors.darkPurple);
    p.noStroke();
    p.fill(colors.portlandOrange);
    p.circle(
      p.constrain(location.x, 0, p.width),
      p.constrain(location.y, 0, p.height),
      30,
      30
    );
    p.noFill();
    p.stroke(colors.jet);
    p.rect(66 - 25, 66 - 25, 268 + 50, 268 + 50);
  };

  return {
    update,
    display
  };
};

export default randomAccelerator;
