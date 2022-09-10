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
var import_profileStore = require("../../../../../chunks/profileStore.js");
var import_index3 = require("../../../../../chunks/index3.js");
var import_i18n = require("../../../../../chunks/i18n.js");
var import_axios = require("../../../../../chunks/axios.js");
var import_Preloader = require("../../../../../chunks/Preloader.js");
var import_navigation = require("../../../../../chunks/navigation.js");
var import_axios2 = require("axios");
let notificationList = (0, import_index3.w)([]);
let loading = (0, import_index3.w)(false);
const SearchIcon = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M10.8866 3.36667C12.3307 3.36535 13.7428 3.79236 14.9441 4.5937C16.1455 5.39503 17.0822 6.53467 17.6357 7.86846C18.1893 9.20224 18.3348 10.6702 18.0539 12.0867C17.7729 13.5032 17.0782 14.8046 16.0575 15.8262C15.0369 16.8478 13.7362 17.5437 12.3199 17.8259C10.9037 18.1081 9.43555 17.9639 8.10126 17.4116C6.76697 16.8593 5.62647 15.9236 4.82404 14.723C4.02161 13.5224 3.59331 12.1108 3.59331 10.6667C3.60206 8.73444 4.37307 6.88374 5.73875 5.51681C7.10443 4.14988 8.95442 3.37719 10.8866 3.36667ZM10.8866 2C9.17254 2 7.49693 2.50829 6.0717 3.4606C4.64647 4.4129 3.53565 5.76645 2.87969 7.35008C2.22373 8.9337 2.0521 10.6763 2.3865 12.3575C2.72091 14.0386 3.54633 15.5829 4.75838 16.7949C5.97044 18.007 7.51469 18.8324 9.19586 19.1668C10.877 19.5012 12.6196 19.3296 14.2032 18.6736C15.7869 18.0177 17.1404 16.9068 18.0927 15.4816C19.045 14.0564 19.5533 12.3808 19.5533 10.6667C19.5533 8.36812 18.6402 6.16372 17.0149 4.53841C15.3896 2.91309 13.1852 2 10.8866 2Z"}" fill="${"#053900"}"></path><path d="${"M23.3333 22.1928L18.42 17.2461L17.4733 18.1861L22.3867 23.1328C22.4484 23.1949 22.5217 23.2443 22.6026 23.2781C22.6834 23.3119 22.77 23.3295 22.8576 23.3298C22.9452 23.3301 23.032 23.3132 23.1131 23.2799C23.1941 23.2467 23.2678 23.1978 23.33 23.1361C23.3922 23.0744 23.4415 23.001 23.4754 22.9202C23.5092 22.8394 23.5267 22.7527 23.527 22.6651C23.5273 22.5775 23.5104 22.4907 23.4772 22.4097C23.4439 22.3286 23.395 22.2549 23.3333 22.1928Z"}" fill="${"#053900"}"></path></svg>`;
});
const FilterIcon = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M3 15.75C3 15.5511 3.07902 15.3603 3.21967 15.2197C3.36032 15.079 3.55109 15 3.75 15H8.25C8.44891 15 8.63968 15.079 8.78033 15.2197C8.92098 15.3603 9 15.5511 9 15.75C9 15.9489 8.92098 16.1397 8.78033 16.2803C8.63968 16.421 8.44891 16.5 8.25 16.5H3.75C3.55109 16.5 3.36032 16.421 3.21967 16.2803C3.07902 16.1397 3 15.9489 3 15.75ZM3 11.25C3 11.0511 3.07902 10.8603 3.21967 10.7197C3.36032 10.579 3.55109 10.5 3.75 10.5H14.25C14.4489 10.5 14.6397 10.579 14.7803 10.7197C14.921 10.8603 15 11.0511 15 11.25C15 11.4489 14.921 11.6397 14.7803 11.7803C14.6397 11.921 14.4489 12 14.25 12H3.75C3.55109 12 3.36032 11.921 3.21967 11.7803C3.07902 11.6397 3 11.4489 3 11.25ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z"}" fill="${"#053900"}"></path></svg>`;
});
const FilterTooltip_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".tooltip.svelte-u2s6o3.svelte-u2s6o3{box-shadow:0px 14px 30px rgba(0, 0, 0, 0.14);background:var(--white);padding:1.875rem 1.5rem;position:absolute;top:-50px;z-index:3;width:auto;color:var(--black)}ul.svelte-u2s6o3 li.svelte-u2s6o3:hover{cursor:pointer;text-decoration:underline}ul.svelte-u2s6o3 li.svelte-u2s6o3:not(:last-child){margin-bottom:15px}@media only screen and (max-width: 1130px) and (min-width: 991px){.tooltip.svelte-u2s6o3.svelte-u2s6o3{width:200px;top:-60px}}",
  map: null
};
const FilterTooltip = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_notificationList;
  let $$unsubscribe_loading;
  let $$unsubscribe_modalClassName;
  let $$unsubscribe_t;
  $$unsubscribe_notificationList = (0, import_chunks.a)(notificationList, (value) => value);
  $$unsubscribe_loading = (0, import_chunks.a)(loading, (value) => value);
  $$unsubscribe_modalClassName = (0, import_chunks.a)(import_profileStore.m, (value) => value);
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => value);
  $$result.css.add(css$4);
  $$unsubscribe_notificationList();
  $$unsubscribe_loading();
  $$unsubscribe_modalClassName();
  $$unsubscribe_t();
  return `<div>${slots.default ? slots.default({}) : ``}</div>

${``}`;
});
const FilterPanel_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".filter-wrapper.svelte-1azace.svelte-1azace{margin-right:10px}.filter-wrapper.svelte-1azace>.svelte-1azace:not(:last-child){margin-right:18px}.btn__filter.svelte-1azace.svelte-1azace{background-color:var(--white);border:1px solid var(--border-color);padding:21px 24.5px;font-size:var(--text-font-normal)}.btn__filter.svelte-1azace span.svelte-1azace{margin-left:10px}.search__icon.svelte-1azace.svelte-1azace{top:0;bottom:0;margin:auto 0 auto 30px}input#search.svelte-1azace.svelte-1azace{padding-left:64px}input#search.svelte-1azace.svelte-1azace::placeholder{color:var(--grey-color)}@media only screen and (max-width: 991px){.filters.svelte-1azace button span.svelte-1azace{display:none}.filter-wrapper.svelte-1azace.svelte-1azace{flex-wrap:wrap;flex-direction:column-reverse;align-items:flex-end;width:100%;margin:0}.filter-wrapper.svelte-1azace .search.svelte-1azace{margin:1rem 0;width:100%}}",
  map: null
};
const FilterPanel = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$result.css.add(css$3);
  $$unsubscribe_t();
  return `<div class="${"filter-wrapper d-flex align-center svelte-1azace"}"><div class="${"search svelte-1azace"}"><form id="${"search-form"}" class="${"relative"}"><span class="${"search__icon absolute d-flex align-center svelte-1azace"}">${(0, import_chunks.v)(SearchIcon, "SearchIcon").$$render($$result, {}, {}, {})}</span>
      <input id="${"search"}" type="${"search"}" placeholder="${(0, import_chunks.e)($t("SEARCH"), true) + "..."}" class="${"box_shadow-medium b-radius-10 svelte-1azace"}"></form></div>
  <div class="${"filters relative svelte-1azace"}">${(0, import_chunks.v)(FilterTooltip, "FilterTooltip").$$render($$result, { width: 220 }, {}, {
    default: () => {
      return `<button class="${"btn__filter box_shadow-medium b-radius-10 d-flex align-center svelte-1azace"}">${(0, import_chunks.v)(FilterIcon, "FilterIcon").$$render($$result, {}, {}, {})}
        <span class="${"svelte-1azace"}">${(0, import_chunks.e)($t("SETTINGS.FILTERS"))}</span></button>`;
    }
  })}</div>
</div>`;
});
const ItemTooltip_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".tooltip.svelte-1ieuu5t.svelte-1ieuu5t{box-shadow:0px 14px 30px rgba(0, 0, 0, 0.14);background:white;padding:1.875rem 1.5rem;position:absolute;top:-50px;z-index:3;width:auto;color:var(--black)}ul.svelte-1ieuu5t li.svelte-1ieuu5t:hover{cursor:pointer;text-decoration:underline}ul.svelte-1ieuu5t li.svelte-1ieuu5t:not(:last-child){margin-bottom:15px}@media only screen and (max-width: 1130px) and (min-width: 991px){.tooltip.svelte-1ieuu5t.svelte-1ieuu5t{width:200px;top:-60px}}",
  map: null
};
const ItemTooltip = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_notificationList;
  let $$unsubscribe_modalClassName;
  let $$unsubscribe_t;
  $$unsubscribe_notificationList = (0, import_chunks.a)(notificationList, (value) => value);
  $$unsubscribe_modalClassName = (0, import_chunks.a)(import_profileStore.m, (value) => value);
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => value);
  $$result.css.add(css$2);
  $$unsubscribe_notificationList();
  $$unsubscribe_modalClassName();
  $$unsubscribe_t();
  return `<div>${slots.default ? slots.default({}) : ``}</div>

${``}`;
});
const NotificationItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".notifications__item.unreaded.svelte-1avvrrx .title.svelte-1avvrrx{cursor:pointer}.notifications__item.svelte-1avvrrx .title.svelte-1avvrrx,.notifications__item.svelte-1avvrrx .description.svelte-1avvrrx,.notifications__item.svelte-1avvrrx .date.svelte-1avvrrx{color:var(--black)}.notifications__item.muted.svelte-1avvrrx .title.svelte-1avvrrx,.notifications__item.muted.svelte-1avvrrx .description.svelte-1avvrrx,.notifications__item.muted.svelte-1avvrrx .date.svelte-1avvrrx{color:#838383}.notifications__item.svelte-1avvrrx .title.svelte-1avvrrx::after{content:' ';background:var(--grey-color);width:4px;height:4px;display:block;border-radius:50%;margin-left:8px}.notifications__item.unreaded.svelte-1avvrrx .title.svelte-1avvrrx::after{background:var(--red-color)}.notifications__item.svelte-1avvrrx.svelte-1avvrrx{color:#838383;padding:24px 32px;background-color:var(--white);margin-bottom:10px}.date.svelte-1avvrrx.svelte-1avvrrx{margin-top:auto;margin-bottom:0;font-weight:var(--font-weight-normal)}.description.svelte-1avvrrx.svelte-1avvrrx{max-width:608px;font-weight:var(--font-weight-normal)}.dots.svelte-1avvrrx.svelte-1avvrrx{cursor:pointer}@media only screen and (max-width: 991px){.notifications__item.svelte-1avvrrx.svelte-1avvrrx{padding:72px 1rem 40px 1rem}.date.svelte-1avvrrx.svelte-1avvrrx{position:absolute;top:2rem;left:1rem}.dots.svelte-1avvrrx.svelte-1avvrrx{position:absolute;top:2rem;left:auto;right:1rem}}",
  map: null
};
const NotificationItem = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { objAttributes = {} } = $$props;
  if ($$props.objAttributes === void 0 && $$bindings.objAttributes && objAttributes !== void 0)
    $$bindings.objAttributes(objAttributes);
  $$result.css.add(css$1);
  return `<li class="${"notifications__item box_shadow-medium mt-1_25 b-radius-8 relative " + (0, import_chunks.e)(objAttributes.status ? objAttributes.status : "unreaded", true) + " svelte-1avvrrx"}"><div class="${"d-flex justify-sb"}"><div class="${"title d-flex align-center text-3 mb-1 svelte-1avvrrx"}">${(0, import_chunks.e)(objAttributes.name)}</div>
		<div class="${"relative dots svelte-1avvrrx"}">${(0, import_chunks.v)(ItemTooltip, "ItemTooltip").$$render(
    $$result,
    {
      id: objAttributes.idobject,
      status: objAttributes.status,
      width: 240
    },
    {},
    {
      default: () => {
        return `${(0, import_chunks.v)(import_profileStore.T, "ThreeDotsIcon").$$render($$result, { bgColor: "green" }, {}, {})}`;
      }
    }
  )}</div></div>
	<div class="${"d-flex justify-sb text-5"}"><div class="${"description svelte-1avvrrx"}">${(0, import_chunks.e)(objAttributes.text)}</div>
		<div class="${"date svelte-1avvrrx"}">${(0, import_chunks.e)(objAttributes.date.replace(/ [\s\S]+/, ""))}</div></div>
</li>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".notifications__empty.svelte-1068dc7{padding:24px 32px;background-color:var(--white);margin-bottom:10px}@media only screen and (max-width: 991px){.title.svelte-1068dc7{position:absolute;top:20px;padding-right:80px;font-size:var(--text-font-small)}ul.svelte-1068dc7{margin-bottom:4rem}}@media only screen and (min-width: 992px) and (max-width: 1199px){.nowrap.svelte-1068dc7{flex-wrap:nowrap}}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $loading, $$unsubscribe_loading;
  let $notificationList, $$unsubscribe_notificationList;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_loading = (0, import_chunks.a)(loading, (value) => $loading = value);
  $$unsubscribe_notificationList = (0, import_chunks.a)(notificationList, (value) => $notificationList = value);
  $$result.css.add(css);
  $$unsubscribe_t();
  $$unsubscribe_loading();
  $$unsubscribe_notificationList();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)($t("NOTIFICATIONS"))}</title>`, ""}<meta name="${"description"}"${(0, import_chunks.d)("content", $t("NOTIFICATIONS"), 0)} data-svelte="svelte-7wcwg9">`, ""}

<div class="${"d-flex justify-sb flex-wrap align-center relative nowrap svelte-1068dc7"}"><div class="${"text-3 title svelte-1068dc7"}">${(0, import_chunks.e)($t("SETTINGS.NOTIFICATIONS_AND_NEWS"))}</div>
	${(0, import_chunks.v)(FilterPanel, "FilterPanel").$$render($$result, {}, {}, {})}</div>
${$loading ? `<div class="${"notifications__empty box_shadow-medium mt-1_25 b-radius-8 svelte-1068dc7"}">${(0, import_chunks.v)(import_Preloader.P, "Preloader").$$render(
    $$result,
    {
      loaderWidth: 2,
      loaderHeight: 2,
      borderWidth: 0.2
    },
    {},
    {}
  )}</div>` : `${!$notificationList.length ? `<div class="${"notifications__empty box_shadow-medium mt-1_25 b-radius-8 svelte-1068dc7"}">${(0, import_chunks.e)($t("SETTINGS.NO_NOTIFICATIONS"))}</div>` : `<ul id="${"notifications"}" class="${"svelte-1068dc7"}">${(0, import_chunks.l)($notificationList, (item) => {
    return `${(0, import_chunks.v)(NotificationItem, "NotificationItem").$$render($$result, { objAttributes: item }, {}, {})}`;
  })}</ul>`}`}`;
});
