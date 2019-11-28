import p5 from "p5";

import circles from "./circles";
import circlesCode from "!!raw-loader!./circles";
import squares from "./squares";
import squaresCode from "!!raw-loader!./squares";
import repeatingShapes from "./repeatingShapes";
import repeatingShapesCode from "!!raw-loader!./repeatingShapes";
import recursion from "./recursion";
import recursionCode from "!!raw-loader!./recursion";
import createGraphics from "./createGraphics";
import createGraphicsCode from "!!raw-loader!./createGraphics";
import mapTranslation from "./mapTranslation";
import mapTranslationCode from "!!raw-loader!./mapTranslation";
import pieChart from "./pieChart";
import pieChartCode from "!!raw-loader!./pieChart";
import arcs from "./arcs";
import arcsCode from "!!raw-loader!./arcs";

export default {
  arcs: {
    module: arcs,
    code: arcsCode
  },
  pieChart: {
    module: pieChart,
    code: pieChartCode
  },
  mapTranslation: {
    module: mapTranslation,
    code: mapTranslationCode
  },
  createGraphics: {
    module: createGraphics,
    code: createGraphicsCode
  },
  recursion: {
    module: recursion,
    code: recursionCode
  },
  repeatingShapes: {
    module: repeatingShapes,
    code: repeatingShapesCode
  },
  squares: {
    module: squares,
    code: squaresCode
  },
  circles: {
    module: circles,
    code: circlesCode
  }
};
