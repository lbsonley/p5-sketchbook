import Hogan from "hogan.js";
import p5 from "p5";
import { defaultView, sidebar } from "../views";
import sketches from "../sketches";
import sidebarLinks from "./sidebarLinks";

export const init = {
  ctx: function initCtx(ctx, next) {
    ctx.data = {};
    ctx.partials = {};
    next();
  }
};

export const routes = {
  sketchbook: function(ctx, next) {
    ctx.partials.content = sidebar;
    ctx.data.title = "Sketchbook";
    // ctx.data.pageContent =
    //   "It snowed and snowed and snowed until we could barely see out the windows. So we climbed on the roof, strapped in to our floatiest boards and enjoyed the deep powder snow.";
    ctx.data.sidebarLinks = sidebarLinks;
    next();
  }
};

export const render = {
  content: function(ctx, next) {
    const el = document.querySelector("#content");
    const template = Hogan.compile(ctx.partials.content);
    const content = template.render(ctx.data, ctx.partials);
    el.innerHTML = content;

    // if we are viewing a sketch, go on to render the sketch
    if (ctx.params.sketch) next();
  },
  sketch: function(ctx) {
    const sketch = ctx.params.sketch;
    const el = document.querySelector("#sketch");
    el.innerHTML = "";
    new p5(sketches[sketch], "sketch");
  }
};
