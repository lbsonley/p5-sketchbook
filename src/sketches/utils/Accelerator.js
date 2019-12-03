export class Accelerator {
  constructor(p, props) {
    this.p = p;
    this.size = props.size;
    this.location = props.location;
    this.velocity = props.velocity;
    this.acceleration = props.acceleration;
    this.limit = props.limit;
    this.stroke = props.stroke;
    this.fill = props.fill;
  }

  accelerate() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.limit);
  }

  decelerate() {
    this.velocity.sub(this.acceleration);
    this.velocity.limit(this.limit);
  }

  update() {
    this.location.add(this.velocity);
  }

  checkEdges() {
    const { p, location, velocity, acceleration } = this;
    if (location.x > 560) {
      location.x = 560;
      velocity.x *= -1;
      acceleration.x *= -1;
    } else if (location.x < 0) {
      location.x = 0;
      velocity.x *= -1;
      acceleration.x *= -1;
    }
  }

  display() {
    const { p, shape, size, location, stroke, fill } = this;

    p.push();

    p.noStroke();
    if (stroke) p.stroke(stroke.color).strokeWeight(stroke.weight);

    p.noFill();
    if (fill) p.fill(fill);

    p.rect(location.x, location.y, size.width, size.height);

    p.pop();
  }
}
