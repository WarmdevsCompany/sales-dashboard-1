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
  T: () => ThreeDotsIcon,
  c: () => confirmModalState,
  m: () => modalClassName,
  p: () => profileEditForm
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
var import_index3 = require("./index3.js");
const css = {
  code: ".dots.svelte-rsjl2t{width:24px;height:24px}span.svelte-rsjl2t{width:4px;height:4px;background-color:var(--white)}span.green.svelte-rsjl2t{background-color:var(--green-dark-medium)}span.svelte-rsjl2t:before,span.svelte-rsjl2t:after{content:'';width:4px;height:4px;position:absolute;background-color:inherit;border-radius:50%}span.svelte-rsjl2t:before{top:-8px}span.svelte-rsjl2t:after{bottom:-8px}",
  map: null
};
const ThreeDotsIcon = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"dots d-flex justify-cc align-center  svelte-rsjl2t"}"><span class="${"relative b-radius-50 " + (0, import_index.e)($$props.bgColor, true) + " svelte-rsjl2t"}"></span>
</div>`;
});
const modalClassName = (0, import_index3.w)("greenForm");
const confirmModalState = (0, import_index3.w)(false);
const profileEditForm = (0, import_index3.w)(null);
