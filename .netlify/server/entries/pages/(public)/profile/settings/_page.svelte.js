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
var import_i18n = require("../../../../../chunks/i18n.js");
var import_axios = require("../../../../../chunks/axios.js");
var import_index3 = require("../../../../../chunks/index3.js");
var import_navigation = require("../../../../../chunks/navigation.js");
var import_axios2 = require("axios");
const SettingsLanguage_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "select.svelte-1a32jvt{-webkit-appearance:none;padding:23px 30px;width:100%;border-radius:10px;border-color:var(--border-color);text-transform:uppercase;background-image:url('../../../../lib/assets/img/dd-arrow.svg');background-repeat:no-repeat;background-position:right 30px top 18px;cursor:pointer}",
  map: null
};
const SettingsLanguage = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $$unsubscribe_locale;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_locale = (0, import_chunks.a)(import_i18n.l, (value) => value);
  $$result.css.add(css$2);
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `<div class="${"b-radius-8 settings_card"}"><div class="${"text-3 settings_card--head"}">${(0, import_chunks.e)($t("SETTINGS.LANG"))}</div>
	<select class="${"svelte-1a32jvt"}">${(0, import_chunks.l)(import_i18n.a, (l) => {
    return `<option${(0, import_chunks.d)("value", l, 0)}>${(0, import_chunks.e)(l)}</option>`;
  })}</select>
</div>`;
});
const ToogleCheckbox_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.round__checkbox.svelte-ivxy6a.svelte-ivxy6a{width:24px;height:24px}.switch.svelte-ivxy6a.svelte-ivxy6a{position:relative;display:inline-block;width:20px;height:10px}.switch.svelte-ivxy6a input.svelte-ivxy6a{opacity:0;width:0;height:0}.slider.svelte-ivxy6a.svelte-ivxy6a{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--green-dark-color);-webkit-transition:0.4s;transition:0.4s;border-radius:34px}.slider.svelte-ivxy6a.svelte-ivxy6a:before{position:absolute;content:"";height:7px;width:7px;left:2px;bottom:1.5px;background-color:white;-webkit-transition:0.4s;transition:0.4s;border-radius:50%}input.svelte-ivxy6a:checked+.slider.svelte-ivxy6a{background-color:var(--primary-color)}input.svelte-ivxy6a:focus+.slider.svelte-ivxy6a{box-shadow:0 0 1px var(--primary-color)}input.svelte-ivxy6a:checked+.slider.svelte-ivxy6a:before{-webkit-transform:translateX(9px);-ms-transform:translateX(9px);transform:translateX(9px)}',
  map: null
};
const ToogleCheckbox = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"round__checkbox d-flex align-center justify-cc svelte-ivxy6a"}"><label class="${"switch svelte-ivxy6a"}"><input type="${"checkbox"}" class="${"svelte-ivxy6a"}">
      <span class="${"slider svelte-ivxy6a"}"></span></label>
  </div>`;
});
const SettingsNotifications = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="${"b-radius-8 settings_card"}"><div class="${"text-3 settings_card--head"}">${(0, import_chunks.e)($t("NOTIFICATIONS"))}</div>
	<div class="${"notification__list"}"><div class="${"notification d-flex align-center justify-sb mb-0_625"}"><div class="${"text-sm"}">${(0, import_chunks.e)($t("SETTINGS.CONTRIBUTION_ALERTS"))}</div>
			${(0, import_chunks.v)(ToogleCheckbox, "ToogleCheckbox").$$render($$result, {}, {}, {})}</div>
		<div class="${"notification d-flex align-center justify-sb mb-0_625"}"><div class="${"text-sm"}">${(0, import_chunks.e)($t("SETTINGS.NEWS_AND_UPDATES"))}</div>
			${(0, import_chunks.v)(ToogleCheckbox, "ToogleCheckbox").$$render($$result, {}, {}, {})}</div>
		<div class="${"notification d-flex align-center justify-sb mb-0_625"}"><div class="${"text-sm"}">${(0, import_chunks.e)($t("SETTINGS.WITHDRAW_ALERTS"))}</div>
			${(0, import_chunks.v)(ToogleCheckbox, "ToogleCheckbox").$$render($$result, {}, {}, {})}</div>
		<div class="${"notification d-flex align-center justify-sb mb-0_625"}"><div class="${"text-sm"}">${(0, import_chunks.e)($t("SETTINGS.PAYMENT_ISSUES"))}</div>
			${(0, import_chunks.v)(ToogleCheckbox, "ToogleCheckbox").$$render($$result, {}, {}, {})}</div>
		<div class="${"notification d-flex align-center justify-sb "}"><div class="${"text-sm"}">${(0, import_chunks.e)($t("SETTINGS.ACCOUNT_STATUS"))}</div>
			${(0, import_chunks.v)(ToogleCheckbox, "ToogleCheckbox").$$render($$result, {}, {}, {})}</div></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".settings_main.svelte-qs0j4e.svelte-qs0j4e{color:var(--green-dark-color);height:100%;background:var(--white);min-height:78vh}.settings_main.svelte-qs0j4e .grid-2.svelte-qs0j4e{margin-right:170px}button.btn.confirm.settings_btn.svelte-qs0j4e.svelte-qs0j4e:disabled{border-color:#d8d8d8;padding:13px;width:233px;margin-left:auto}.settings_card{background:var(--white);border:1px solid;border-color:var(--grey-color);padding:2.125rem 2rem 2rem 2rem}.settings_card--head{margin-bottom:0.875rem}@media only screen and (max-width: 1280px){.settings_main.svelte-qs0j4e .grid-2.svelte-qs0j4e{margin-right:14vw}}@media only screen and (max-width: 991px){.settings_main.svelte-qs0j4e.svelte-qs0j4e,.settings_card{padding:2rem 1rem}.settings_main.svelte-qs0j4e.svelte-qs0j4e{margin-bottom:4rem}.settings_main.svelte-qs0j4e .grid-2.svelte-qs0j4e{margin:0}.settings_btn.svelte-qs0j4e.svelte-qs0j4e{margin-top:2rem}}@media only screen and (min-width: 992px) and (max-width: 1199px){.settings_main.svelte-qs0j4e .grid-2.svelte-qs0j4e{margin:0}}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)($t("SETTINGS"))}</title>`, ""}<meta name="${"description"}"${(0, import_chunks.d)("content", $t("SETTINGS"), 0)} data-svelte="svelte-dxf74r">`, ""}

<div class="${"settings_main box_shadow-medium b-radius-8 p-2 d-flex flex-col justify-sb svelte-qs0j4e"}"><div><div class="${"text-3 mb-1_5"}">${(0, import_chunks.e)($t("SETTINGS"))}</div>
		<div class="${"grid-2 svelte-qs0j4e"}">${(0, import_chunks.v)(SettingsNotifications, "SettingsNotifications").$$render($$result, {}, {}, {})}
			${(0, import_chunks.v)(SettingsLanguage, "SettingsLanguage").$$render($$result, {}, {}, {})}</div></div>
	<button class="${"btn confirm settings_btn svelte-qs0j4e"}" disabled>${(0, import_chunks.e)($t("SETTINGS.CLOSING_AN_ACCOUNT"))}</button>
</div>`;
});
