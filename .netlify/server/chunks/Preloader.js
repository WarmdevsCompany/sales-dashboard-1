var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  P: () => Preloader
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
const css = {
  code: ".loader__wrapper.svelte-t56bbv{height:100%;display:grid;place-items:center}.loader.svelte-t56bbv{border-radius:50%;border:solid;border-color:var(--custor-scroll-tumb);border-top-color:var(--plan-safe-bg );box-sizing:border-box;background:transparent;animation:svelte-t56bbv-loading 1s linear infinite}@keyframes svelte-t56bbv-loading{0%{transform:rotate(0deg)}0%{transform:rotate(360deg)}}",
  map: null
};
const Preloader = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"loader__wrapper svelte-t56bbv"}"><div class="${"loader svelte-t56bbv"}" style="${"width: " + (0, import_index.e)($$props.loaderWidth, true) + "rem; height: " + (0, import_index.e)($$props.loaderHeight, true) + "rem; border-width: " + (0, import_index.e)($$props.borderWidth, true) + "rem;"}"></div>
</div>`;
});
