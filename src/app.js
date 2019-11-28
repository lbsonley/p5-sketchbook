import "./styles/index.scss";

import page from "page";
import { init, routes, render } from "./routes";
import sum from "./scripts/index.js";

// Middleware for initializing/resetting routing context
page("*", init.ctx);

// Routes
page("/", "/sketchbook");
page("/sketchbook", routes.sketchbook);
page("/sketchbook/:sketch", routes.sketch);

// Middleware for compiling templates and updating DOM
page("*", render.content);
page("/sketchbook/:sketch", render.sketch);
page("/sketchbook/:sketch", render.activeLink);
page("/sketchbook/:sketch", render.code);

// Init Page.js
page();
