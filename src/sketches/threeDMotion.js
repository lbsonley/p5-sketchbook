import { colors } from "./utils";

class Mover {
  constructor(p, props) {
    this.p = p;
    this.shape = props.shape;
    this.size = props.size;
    this.location = props.location;
    this.velocity = props.velocity;
    this.stroke = props.stroke;
    this.fill = props.fill;
  }

  update() {
    this.location.add(this.velocity);
  }

  checkEdges() {
    const { location, velocity } = this;
    if (location.x > 100 || location.x < -100) velocity.x *= -1;
    if (location.y > 100 || location.y < -100) velocity.y *= -1;
    if (location.z > 110 || location.z < -110) velocity.z *= -1;
  }

  display() {
    const { p, shape, size, location, stroke, fill } = this;

    p.push();

    p.noStroke();
    if (stroke) p.stroke(stroke.color).strokeWeight(stroke.weight);

    p.noFill();
    if (fill) p.fill(fill);

    p.translate(location.x, location.y, location.z);
    p.rotateX(p.millis() / 1000);
    p.rotateY(p.millis() / 1000);

    switch (shape) {
      case "box":
        p.box(location.x, location.y, size.width, size.height);
        break;
      case "sphere":
        p.sphere(size.width, 12, 12);
        break;
      default:
        p.rect(location.x, location.y, size.width, size.height);
        break;
    }

    p.pop();
  }
}

const threeDMotion = p => {
  let loc = p.createVector(0, 0, 0);
  let vel = p.createVector(4, 3, 7);
  let locRev = p.createVector(0, 0, 0);
  let velRev = p.createVector(-4, -3, -7);
  let sphere1;
  let sphere2;

  p.setup = () => {
    p.createCanvas(600, 600, p.WEBGL);
    p.perspective();
    p.smooth();

    sphere1 = new Mover(p, {
      shape: "sphere",
      size: { height: 50, width: 50 },
      location: loc,
      velocity: vel,
      fill: colors.bittersweetShimmer,
      stroke: { color: colors.whiteSmoke, weight: 1 }
    });

    sphere2 = new Mover(p, {
      shape: "sphere",
      size: { height: 50, width: 50 },
      location: locRev,
      velocity: velRev,
      fill: colors.mellowApricot,
      stroke: { color: colors.whiteSmoke, weight: 1 }
    });
  };

  p.draw = () => {
    p.background(colors.deepSpaceSparkle);

    p.rotateX(p.mouseX / 10);
    p.rotateY(p.mouseY / 10);

    p.noFill();
    p.strokeWeight(4);
    p.stroke(colors.vanilla);
    p.box(250);

    sphere1.update();
    sphere1.checkEdges();
    sphere1.display();

    sphere2.update();
    sphere2.checkEdges();
    sphere2.display();
  };
};

export default threeDMotion;
