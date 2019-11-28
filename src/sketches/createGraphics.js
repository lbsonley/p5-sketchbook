const createGraphics = p => {
  let layeredCanvas;
  p.setup = () => {
    p.createCanvas(400, 600);
    layeredCanvas = p.createGraphics(200, 300);
  };

  p.draw = () => {
    const purpleRgb = [178, 0, 255, 12];
    const purple = "#b200ff";
    const yellow = "#ffff33";

    p.noStroke();
    p.fill(...purpleRgb);
    p.rect(0, 0, p.width, p.height);

    p.fill(yellow);
    p.circle(p.mouseX, p.mouseY, 30, 30);

    layeredCanvas.background(yellow);
    layeredCanvas.strokeWeight(3);
    layeredCanvas.stroke(purple);
    layeredCanvas.noFill();
    layeredCanvas.circle(p.mouseX - 100, p.mouseY - 150, 30, 30);
    p.image(layeredCanvas, 100, 150);
  };
};

export default createGraphics;
