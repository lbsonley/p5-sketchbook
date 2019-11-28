import Hogan from "hogan.js";
import p5 from "p5";
import Prism from "prismjs";
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

/**
 * Define context and templates for each route
 */
export const routes = {
  sketchbook: function(ctx, next) {
    ctx.partials.content = sidebar;
    ctx.data.title = "Sketchbook";
    ctx.data.pageContent =
      "It snowed and snowed and snowed until we could barely see out the windows. So we climbed on the roof, strapped in to our floatiest boards and enjoyed the deep powder snow.";
    ctx.data.sidebarLinks = sidebarLinks;
    next();
  },
  sketch: function(ctx, next) {
    ctx.partials.content = sidebar;
    ctx.data.title = "Sketchbook";
    ctx.data.sidebarLinks = sidebarLinks;
    next();
  }
};

/**
 * DOM Manipulation in order to display page content
 */
export const render = {
  /**
   * @description
   */
  content: function(ctx, next) {
    const loading = document.querySelector("#loading");
    const el = document.querySelector("#content");

    const template = Hogan.compile(ctx.partials.content);
    const content = template.render(ctx.data, ctx.partials);
    el.innerHTML = content;
    loading.style.display = "none";

    // if we are viewing a sketch, go on to render the sketch
    if (ctx.params.sketch) {
      next();
    }
  },
  /**
   * @description
   */
  sketch: function(ctx, next) {
    const sketch = ctx.params.sketch;
    const sketchContainer = document.querySelector("#sketch");

    sketchContainer.innerHTML = "";
    new p5(sketches[sketch].module, "sketch");

    next(sketch);
  },
  /**
   * @description
   */
  activeLink: function(ctx, next) {
    const sketch = ctx.params.sketch;
    const allLinks = document.querySelectorAll("a");
    const activeLink = document.querySelector(
      `a[href="/sketchbook/${sketch}"]`
    );

    allLinks.forEach(link => link.classList.remove("active"));
    if (activeLink) activeLink.classList.add("active");

    next();
  },
  /**
   * @description
   */
  code: function(ctx) {
    const sketch = ctx.params.sketch;
    const codeContainer = document.querySelector("#code");
    codeContainer.innerHTML = "";
    codeContainer.innerHTML = sketches[sketch].code;
    Prism.highlightAll();
  }
};
