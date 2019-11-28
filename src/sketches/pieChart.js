import { colors } from "./utils";

const pieChart = p => {
  const angles = [25, 65, 23, 27, 46, 34, 32, 48, 21, 39];

  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
    p.noStroke();
    p.background(220);
  };

  p.draw = () => {
    pieChart(300, angles);
  };

  const pieChart = (diameter, data) => {
    let lastAngle = 0;
    let i = 0;
    const colorArray = Object.values(colors);

    for (i; i < data.length; i++) {
      if (i > 5) {
        p.fill(colorArray[i - 5]);
      } else {
        p.fill(colorArray[i]);
      }
      p.arc(
        p.width / 2,
        p.height / 2,
        diameter,
        diameter,
        lastAngle,
        lastAngle + p.radians(data[i])
      );
      lastAngle += p.radians(data[i]);
    }
  };
};

export default pieChart;
