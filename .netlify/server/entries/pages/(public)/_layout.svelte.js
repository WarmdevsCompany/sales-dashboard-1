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
  default: () => Layout
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../../chunks/index.js");
var import_globalStore = require("../../../chunks/globalStore.js");
var import_i18n = require("../../../chunks/i18n.js");
var import_axios = require("../../../chunks/axios.js");
var import_index3 = require("../../../chunks/index3.js");
var import_navigation = require("../../../chunks/navigation.js");
var import_axios2 = require("axios");
const Status_svelte_svelte_type_style_lang = "";
const Notification_svelte_svelte_type_style_lang = "";
const NotificationsTooltip_svelte_svelte_type_style_lang = "";
const HeaderPagesTooltip_svelte_svelte_type_style_lang = "";
const Header_svelte_svelte_type_style_lang = "";
const OverviewIcon_svelte_svelte_type_style_lang = "";
const AvatarIcon_svelte_svelte_type_style_lang = "";
const logo = "/_app/immutable/assets/logo-06933ea8.svg";
const ManageIcon_svelte_svelte_type_style_lang = "";
const ProfileIcon_svelte_svelte_type_style_lang = "";
const Sidebar_svelte_svelte_type_style_lang = "";
const Loader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".loading.svelte-le02ke{position:fixed;left:0;top:0;width:100%;height:100%;background-color:var(--green-dark-color);color:var(--white)}",
  map: null
};
const Loader = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"loading d-flex justify-cc align-center svelte-le02ke"}"><img class="${"logo_bg"}"${(0, import_chunks.d)("src", logo, 0)} alt="${"esi logo"}">
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-tmu81z{flex:1;display:flex;padding:0.5rem 1.25rem;width:100%;margin:0 auto;min-height:100vh;box-sizing:border-box}.main-content.svelte-tmu81z{width:100%}.logo_bg.svelte-tmu81z{position:fixed;top:270px;left:68px;z-index:-1}@media only screen and (max-width: 991px){.logo_bg.svelte-tmu81z{display:none}main.svelte-tmu81z{flex-wrap:wrap}.main-content.svelte-tmu81z{margin:0}}@media only screen and (min-width: 992px){.main-content.svelte-tmu81z{width:calc(100% - 237px - 1.25rem)}}",
  map: null
};
const Layout = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $globalData, $$unsubscribe_globalData;
  $$unsubscribe_globalData = (0, import_chunks.a)(import_globalStore.g, (value) => $globalData = value);
  let { data } = $$props;
  (0, import_chunks.f)(import_globalStore.g, $globalData = data.general, $globalData);
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_globalData();
  return `${$$result.head += `<link href="${"https://fonts.googleapis.com/css?family=Gelasio"}" rel="${"stylesheet"}" data-svelte="svelte-1j7bo9w">`, ""}

<main class="${"svelte-tmu81z"}">${`${(0, import_chunks.v)(Loader, "Loader").$$render($$result, {}, {}, {})}`}
</main>`;
});
