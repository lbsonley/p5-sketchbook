const recursion = p => {
  p.setup = () => {
    p.noStroke();
    p.noLoop();
    p.createCanvas(400, 400);
    p.background(250);
    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    drawSquares(p.width / 2, 360, 8);
  };

  const drawSquares = (x, size, level) => {
    p.fill((200 / 8) * level);
    p.rect(x, p.height / 2, size, size);
    if (level > 1) {
      level -= 1;
      drawSquares(x - size / 10, size / 1.25, level);
    }
  };
};

export default recursion;
