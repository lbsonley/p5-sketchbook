import { colors } from "./utils";

const perlinNoise = p => {
  let t = 0;
  let nValues = [];
  let slider;

  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(colors.whiteSmoke);
    p.frameRate(20);
    p.stroke(colors.deepSpaceSparkle);
    p.strokeWeight(2);
    slider = p.createSlider(0.01, 0.1, 0.01, 0.01);
    slider.parent("sketch");
    slider.style("width", "50px");
    slider.style("position", "absolute");
    slider.style("top", "0");
    slider.style("left", "0");
    console.log(slider);
  };

  p.draw = () => {
    let n = p.noise(t);
    nValues.push(p.map(n, 0, 1, 0, p.height));
    nValues.forEach((val, i) => p.point(i, val));
    t += slider.value();
    if (nValues.length > 500) {
      nValues = [];
    }
  };
};

export default perlinNoise;
