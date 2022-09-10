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
  P: () => PlanItem
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
var import_i18n = require("./i18n.js");
const PlanItem_svelte_svelte_type_style_lang = "";
const css = {
  code: ".plan__item.small.svelte-16ab0b7 .plan_name.svelte-16ab0b7{font-size:var(--text-font-small);line-height:var(--text-line-height-small)}.plan__item.small.svelte-16ab0b7 .plan_money.svelte-16ab0b7{font-size:var(--text-size-big);line-height:var(--text-line-big)}.plan__item.small.svelte-16ab0b7 .plan_persentage.svelte-16ab0b7{font-size:var(--text-font-xsmall);line-height:var(--text-line-height-xsmall)}.plan__item.small.svelte-16ab0b7 .contr.svelte-16ab0b7{margin-bottom:0}.plan__item.svelte-16ab0b7 div.svelte-16ab0b7:first-child{margin-bottom:0.7rem}.plan__item.safe.svelte-16ab0b7.svelte-16ab0b7{background:var(--primary-color)}.plan__item.adventure.svelte-16ab0b7.svelte-16ab0b7{background:var(--secondary-color)}.plan__item.founder.svelte-16ab0b7.svelte-16ab0b7{background:var(--third-color)}",
  map: null
};
const PlanItem = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_index.a)(import_i18n.t, (value) => $t = value);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `<div class="${"plan__item b-radius-8 p-1_5 box_shadow-medium text-white " + (0, import_index.e)($$props.planClass, true) + " " + (0, import_index.e)($$props.planFontClass, true) + " svelte-16ab0b7"}"><div class="${"d-flex justify-sb align-base svelte-16ab0b7"}"><div class="${"text-3 plan_name svelte-16ab0b7"}">${(0, import_index.e)($$props.planName)}</div>
		<div class="${"text-2 plan_money svelte-16ab0b7"}">$${(0, import_index.e)($$props.planMoney)}</div></div>
	<div class="${"d-flex justify-sb align-base svelte-16ab0b7"}"><div class="${"text-xsm contr svelte-16ab0b7"}">${(0, import_index.e)($t("CONTRIBUTION"))}</div>
		<div class="${"text-3 plan_persentage svelte-16ab0b7"}">${(0, import_index.e)($$props.planPersentage)}%</div></div>
</div>`;
});
