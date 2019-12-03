import { colors, Accelerator } from "./utils";

/**
 * @description Use the Up and Down Arrows to control the acceleration of the red rectangle
 */
const acceleration = p => {
  let location = p.createVector(0, 90);
  let velocity = p.createVector(0, 0);
  let acceleration = p.createVector(0.05, 0.0);
  let car = new Accelerator(p, {
    size: { height: 20, width: 40 },
    location,
    velocity,
    acceleration,
    limit: 20,
    stroke: { color: colors.intlOrange, weight: 2 }
  });

  p.setup = () => {
    p.createCanvas(600, 200);
  };

  p.draw = () => {
    p.background(colors.whiteSmoke);
    car.update();
    car.checkEdges();
    car.display();
  };

  p.keyPressed = () => {
    if (p.keyCode === p.UP_ARROW) {
      car.accelerate();
    } else if (p.keyCode === p.DOWN_ARROW) {
      car.decelerate();
    } else {
      return false;
    }
  };
};

export default acceleration;
