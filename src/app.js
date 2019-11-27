import "./styles/index.scss";

import page from "page";
import { init, routes, render } from "./routes";
import sum from "./scripts/index.js";

page("*", init.ctx);
page("/", routes.home);
page("/sketchbook", routes.sketchbook);
page("/sketchbook/:sketch", routes.sketch);

page("*", render.content);
page();
