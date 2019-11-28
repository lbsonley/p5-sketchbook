const mapTranslation = p => {
  const color1 = "#FFC65E";
  const color2 = "#E8A356";
  const color3 = "#FFA36B";
  const color4 = "#E87956";
  const color5 = "#FF6D5E";
  const color6 = "#E86556";

  p.setup = () => {
    p.createCanvas(600, 600);
    p.noStroke();
  };

  p.draw = () => {
    p.background(255, 30);
    let trappedX = p.map(p.mouseX, 0, p.width, 200, 400);
    let trappedY = p.map(p.mouseY, 0, p.width, 200, 400);
    let trappedX2 = p.map(p.mouseX, 0, p.width, 50, 550);
    let trappedY2 = p.map(p.mouseY, 0, p.width, 50, 550);
    p.fill(color1);
    p.circle(trappedX2, trappedY2, 30, 30);
    p.fill(color2);
    p.circle(600 - trappedX2, 600 - trappedY2, 30, 30);
    p.fill(color3);
    p.circle(trappedY2, trappedX2, 30, 30);
    p.fill(color4);
    p.circle(600 - trappedY2, 600 - trappedX2, 30, 30);
  };
};

export default mapTranslation;
