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
  D: () => Dropdown
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
const Dropdown_ico_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "svg.svelte-15o6byj{position:absolute;right:30px;top:23px;z-index:2}svg.active.svelte-15o6byj{transform:rotate(180deg)}",
  map: null
};
const Dropdown_ico = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" class="${(0, import_index.e)((0, import_index.k)($$props.class), true) + " svelte-15o6byj"}"><path d="${"M4.29279 7.30529C4.48031 7.11782 4.73462 7.0125 4.99979 7.0125C5.26495 7.0125 5.51926 7.11782 5.70679 7.30529L11.9998 13.5983L18.2928 7.30529C18.385 7.20978 18.4954 7.1336 18.6174 7.08119C18.7394 7.02878 18.8706 7.00119 19.0034 7.00004C19.1362 6.99888 19.2678 7.02419 19.3907 7.07447C19.5136 7.12475 19.6253 7.199 19.7192 7.29289C19.8131 7.38679 19.8873 7.49844 19.9376 7.62133C19.9879 7.74423 20.0132 7.87591 20.012 8.00869C20.0109 8.14147 19.9833 8.27269 19.9309 8.39469C19.8785 8.5167 19.8023 8.62704 19.7068 8.71929L12.7068 15.7193C12.5193 15.9068 12.265 16.0121 11.9998 16.0121C11.7346 16.0121 11.4803 15.9068 11.2928 15.7193L4.29279 8.71929C4.10532 8.53176 4 8.27745 4 8.01229C4 7.74712 4.10532 7.49282 4.29279 7.30529Z"}" fill="${"#032B01"}"></path></svg>`;
});
const Dropdown_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropdown__wrapper.svelte-11gyevj.svelte-11gyevj{position:relative;width:100%;height:70px}.dropdown__wrapper.disabled.svelte-11gyevj.svelte-11gyevj,.dropdown__wrapper.disabled.svelte-11gyevj .svelte-11gyevj{background:var(--grey-color);border-radius:10px;user-select:none;pointer-events:none}.dropdown.svelte-11gyevj.svelte-11gyevj{position:absolute;width:100%;cursor:pointer;background-color:var(--white-color);border:1px solid var(--border-color);border-radius:10px;overflow:hidden}.dropdown.error.svelte-11gyevj.svelte-11gyevj{border-color:var(--red-color)}.dropdown__items.svelte-11gyevj.svelte-11gyevj{display:none}.dropdown__item.svelte-11gyevj.svelte-11gyevj{position:relative;padding:12px 30px;transition:all ease-in 0.3s;text-align:left}.dropdown__item--current.svelte-11gyevj.svelte-11gyevj{padding:22px 30px;text-align:left;background:var(--white)}.dropdown__item.svelte-11gyevj.svelte-11gyevj:hover{background-color:var(--grey-color-lightest)}.dropdown.active.svelte-11gyevj.svelte-11gyevj{background-color:var(--white);padding:11px 0}.dropdown.active.svelte-11gyevj .dropdown__item--current.svelte-11gyevj{display:none}.dropdown.active.svelte-11gyevj .dropdown__items.svelte-11gyevj{display:block}",
  map: null
};
const Dropdown = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let { disabled } = $$props;
  let { itemsData = [] } = $$props;
  let { activeItem = itemsData[0] } = $$props;
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.itemsData === void 0 && $$bindings.itemsData && itemsData !== void 0)
    $$bindings.itemsData(itemsData);
  if ($$props.activeItem === void 0 && $$bindings.activeItem && activeItem !== void 0)
    $$bindings.activeItem(activeItem);
  $$result.css.add(css);
  return `<div class="${["dropdown__wrapper svelte-11gyevj", disabled ? "disabled" : ""].join(" ").trim()}"><div class="${[
    "dropdown  svelte-11gyevj",
    " "
  ].join(" ").trim()}">${(0, import_index.v)(Dropdown_ico, "Dropdown_ico").$$render($$result, { class: "" }, {}, {})}
    <div class="${"dropdown__item--current svelte-11gyevj"}">${(0, import_index.e)(activeItem)}</div>
    <div class="${"dropdown__items svelte-11gyevj"}">${(0, import_index.l)(itemsData, (item) => {
    return `<div style="${"position:relative"}" class="${"svelte-11gyevj"}"><div class="${"dropdown__item svelte-11gyevj"}">${(0, import_index.e)(item)}</div>
        </div>`;
  })}</div></div>
</div>`;
});
