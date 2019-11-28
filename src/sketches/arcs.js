import { colorsRgb } from "./utils";

const arcs = p => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(220);
  };

  p.draw = () => {
    p.stroke(...colorsRgb.purple, 5);

    p.fill(...colorsRgb.blue, 5);
    p.arc(40, 40, 60, 60, 0, p.radians(90));

    p.fill(...colorsRgb.yellow, 5);
    p.arc(40, 100, 60, 60, p.radians(180), p.radians(270));

    p.fill(...colorsRgb.orange, 5);
    p.arc(100, 40, 60, 60, p.radians(180), p.radians(360));

    p.fill(...colorsRgb.orange, 5);
    p.arc(100, 40, 60, 60, p.radians(180), p.radians(360));

    p.fill(...colorsRgb.green, 5);
    p.arc(160, 40, 60, 60, p.radians(90), p.radians(180));

    p.fill(...colorsRgb.red, 5);
    p.arc(160, 100, 60, 60, p.radians(270), p.radians(360));
  };
};

export default arcs;
