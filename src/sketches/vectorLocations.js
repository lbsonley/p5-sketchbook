import p5 from "p5";
import { colors } from "./utils";

const vectorLocations = p => {
  p.setup = () => {
    p.createCanvas(600, 600);
  };

  p.draw = () => {
    p.background(colors.cosmicLatte);

    const center = p.createVector(p.width / 2, p.height / 2);
    const offCenterLT = p.createVector(p.width / 4, p.height / 4);
    const offCenterRB = p.createVector((p.width / 4) * 3, (p.height / 4) * 3);
    const mouse = p.createVector(p.mouseX, p.mouseY);

    mouse.sub(center);
    const { halfMouse, mouseAndAHalf } = calculateMousePositions(mouse);
    const m = mouse.mag();

    p.noStroke();
    p.fill(colors.asparagus);
    p.rect(0, 0, m, 10);

    p.strokeWeight(3);

    // vector from center, center to mouse distance from center
    // magnitude is shown by green bar at top of canvas
    p.push();
    p.stroke(colors.asparagus);
    p.translate(center.x, center.y);
    p.line(0, 0, mouse.x, mouse.y);
    p.pop();

    // vector from left, center to 1.5 mouse distance from center
    p.push();
    p.stroke(colors.mellowApricot);
    p.translate(offCenterLT.x, center.y);
    p.line(0, 0, mouseAndAHalf.x, mouseAndAHalf.y);
    p.pop();

    // vector from right, center to 0.5 mouse distance from center
    p.push();
    p.stroke(colors.intlOrange);
    p.translate(offCenterRB.x, center.y);
    p.line(0, 0, halfMouse.x, halfMouse.y);
    p.pop();

    // normalized vector from center, top, magnitude is always 25
    p.push();
    p.stroke(colors.intlOrange);
    p.translate(center.x, offCenterLT.y);
    const normalizedVector = mouse.normalize().mult(25);
    p.line(0, 0, normalizedVector.x, normalizedVector.y);
    p.pop();
  };

  const calculateMousePositions = mouse => {
    return {
      mouseAndAHalf: p5.Vector.mult(mouse, 1.5),
      halfMouse: p5.Vector.div(mouse, 2)
    };
  };
};

export default vectorLocations;
