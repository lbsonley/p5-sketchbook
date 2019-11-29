import { colors } from "./utils";

const basicMotion = p => {
  let x = 125;
  let y = 163;
  let xSpeed = 10;
  let xLen = 42;
  let ySpeed = 15;
  let yLen = 50;
  let limitXHigh = x + xLen;
  let limitXLow = x - xLen;
  let limitYHigh = y + yLen;
  let limitYLow = y - yLen;

  p.setup = () => {
    p.createCanvas(640, 300);
    p.background(colors.vanilla);
    p.smooth();
    p.frameRate(45);
  };

  p.draw = () => {
    p.background(colors.vanilla);

    // make a box to contain bouncing circle
    p.rectMode(p.CENTER);
    p.stroke(colors.sandyBrown);
    p.strokeWeight(4);
    p.noFill();
    p.rect(125, 163, xLen * 2 + 30, yLen * 2 + 30);

    // set the circle in motion
    x += xSpeed;
    y += ySpeed;

    // check if circle has reached a boundary
    // reverse direction of travel
    if (x > limitXHigh || x < limitXLow) {
      xSpeed *= -1;
    }

    if (y > limitYHigh || y < limitYLow) {
      ySpeed *= -1;
    }

    // draw circle
    p.fill(colors.deepSpaceSparkle);
    p.noStroke();
    p.circle(x, y, 20, 20);
  };
};

export default basicMotion;
