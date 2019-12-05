import { colors } from "./utils";

const paintSplatter = p => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(colors.whiteSmoke);
    p.frameRate(3);
  };

  p.draw = () => {
    const x = p.randomGaussian(p.width / 2, p.width / 4);
    const y = p.randomGaussian(p.height / 2, p.width / 4);
    const colorCodes = Object.values(colors);
    const colorIndex = p.floor(p.random(colorCodes.length));
    const color = colorCodes[colorIndex];

    p.noStroke();
    p.fill(color);
    p.circle(x, y, 20, 20);
  };
};

export default paintSplatter;
