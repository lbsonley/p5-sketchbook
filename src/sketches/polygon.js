const polygon = p => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(102);

    p.push();
    p.translate(p.width * 0.2, p.height * 0.5);
    p.rotate(p.frameCount / 200.0);
    drawPolygon(0, 0, 82, 3);
    p.pop();

    p.push();
    p.translate(p.width * 0.8, p.height * 0.5);
    p.rotate(p.frameCount / -100.0);
    drawPolygon(0, 0, 70, 7);
    p.pop();
  };

  const drawPolygon = (x, y, radius, nsides) => {
    const angle = p.TWO_PI / nsides;
    let a = 0;
    p.beginShape();
    for (a; a < p.TWO_PI; a += angle) {
      let sx = x + p.cos(a) * radius;
      let sy = y + p.sin(a) * radius;
      p.vertex(sx, sy);
    }
    p.endShape(p.CLOSE);
  };
};

export default polygon;
