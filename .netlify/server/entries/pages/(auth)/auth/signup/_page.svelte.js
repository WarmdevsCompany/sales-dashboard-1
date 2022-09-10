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
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../../../../chunks/index.js");
var import_logo_green = require("../../../../../chunks/logo-green.js");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".greenForm.svelte-3shsvg{display:flex;align-items:center;justify-content:center;width:100%;min-height:100vh;background:linear-gradient(0deg, #053900, #053900), #ffffff}.form__content.svelte-3shsvg{position:relative;background:white;padding:2.125rem;width:100%;max-width:767px;min-height:100vh}.content.svelte-3shsvg{width:100%;margin:0 auto;padding-top:55px}.absolute.svelte-3shsvg{display:none;position:absolute;width:767px;top:0;left:0;right:0;bottom:0;margin:0 auto;z-index:1}.circle_bg.svelte-3shsvg{width:665px;height:665px;background:#00b2ff;position:absolute;border-radius:50%;z-index:-1;opacity:0.05;filter:blur(400px)}.circle_bg.left.svelte-3shsvg{top:77px;left:-465px}.circle_bg.right.svelte-3shsvg{bottom:-152px;right:-545px}.text-1.svelte-3shsvg{color:var(--text-color);margin-top:41px}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"greenForm svelte-3shsvg"}"><div class="${"box_shadow-medium form__content svelte-3shsvg"}"><div class="${"content d-flex flex-col justify-cc align-center svelte-3shsvg"}"><img${(0, import_chunks.d)("src", import_logo_green.g, 0)} alt="${"esi logo img"}">
		<div class="${"text-1 mb-1 svelte-3shsvg"}">Log In</div></div>
	  <div class="${"absolute svelte-3shsvg"}"><div class="${"circle_bg left svelte-3shsvg"}"></div>
		<div class="${"circle_bg right svelte-3shsvg"}"></div></div></div>
  </div>`;
});
