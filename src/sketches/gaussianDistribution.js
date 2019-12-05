import { colors } from "./utils";

const gaussianDistribution = p => {
  const counts = {};
  p.setup = () => {
    p.createCanvas(300, 300);
    p.background(colors.whiteSmoke);
  };

  p.draw = () => {
    const x = p.floor(p.randomGaussian(p.width / 2, 25));
    counts[x] = counts[x] ? counts[x] + 1 : 1;
    p.strokeWeight(2);
    p.stroke(colors.intlOrange);
    Object.keys(counts).forEach(key => {
      p.line(x, p.height, x, p.height - counts[x]);
    });
  };
};

export default gaussianDistribution;
