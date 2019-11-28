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
  circles: {
    module: circles,
    code: circlesCode
  },
  squares: {
    module: squares,
    code: squaresCode
  },
  repeatingShapes: {
    module: repeatingShapes,
    code: repeatingShapesCode
  },
  recursion: {
    module: recursion,
    code: recursionCode
  },
  createGraphics: {
    module: createGraphics,
    code: createGraphicsCode
  },
  mapTranslation: {
    module: mapTranslation,
    code: mapTranslationCode
  },
  pieChart: {
    module: pieChart,
    code: pieChartCode
  },
  arcs: {
    module: arcs,
    code: arcsCode
  }
};
