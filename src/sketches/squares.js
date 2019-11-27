const squares = p => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(220);
  };

  p.draw = () => {
    p.fill(50);
    p.rect(200, 200, 160, 160);
    p.fill(80);
    p.rect(200, 200, 120, 120);
    p.fill(110);
    p.rect(200, 200, 80, 80);
    p.fill(140);
    p.rect(200, 200, 40, 40);
  };
};

export default squares;
