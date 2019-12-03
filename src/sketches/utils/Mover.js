export class Mover {
  constructor(p, props) {
    this.p = p;
    this.shape = props.shape;
    this.size = props.size;
    this.location = props.location;
    this.velocity = props.velocity;
    this.acceleration = props.acceleration;
    this.limit = props.limit;
    this.stroke = props.stroke;
    this.fill = props.fill;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.limit);
    this.location.add(this.velocity);
  }

  checkEdges() {
    const { location, acceleration } = this;
    if (location.x > 100 || location.x < -100) acceleration.x *= -1;
    if (location.y > 100 || location.y < -100) acceleration.y *= -1;
    if (location.z > 110 || location.z < -110) acceleration.z *= -1;
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
