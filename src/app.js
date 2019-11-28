import "./styles/index.scss";

import page from "page";
import { init, routes, render } from "./routes";
import sum from "./scripts/index.js";

page("*", init.ctx);
page("/", "/sketchbook");
page("/sketchbook", routes.sketchbook);
page("/sketchbook/:sketch", routes.sketchbook);

page("*", render.content);
page("/sketchbook/:sketch", render.sketch);
page();
