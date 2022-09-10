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
var import_globalStore = require("../../../../../chunks/globalStore.js");
var import_index3 = require("../../../../../chunks/index3.js");
const css$8 = {
  code: "svg.white.svelte-14ronmp path.svelte-14ronmp{fill:var(--white)}svg.seed.svelte-14ronmp path.svelte-14ronmp{fill:var(--secondary-color)}svg.eucalyptus.svelte-14ronmp path.svelte-14ronmp{fill:var( --membership-grey-2)}svg.sequoia.svelte-14ronmp path.svelte-14ronmp{fill:var( --membership-grey-3)}",
  map: null
};
const StatusIcon = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<svg class="${(0, import_chunks.e)((0, import_chunks.k)($$props.bgColor), true) + " svelte-14ronmp"}" width="${"14"}" height="${"14"}" viewBox="${"0 0 14 14"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M7 0.875C3.61758 0.875 0.875 3.61758 0.875 7C0.875 10.3824 3.61758 13.125 7 13.125C10.3824 13.125 13.125 10.3824 13.125 7C13.125 3.61758 10.3824 0.875 7 0.875ZM7 12.0859C4.1918 12.0859 1.91406 9.8082 1.91406 7C1.91406 4.1918 4.1918 1.91406 7 1.91406C9.8082 1.91406 12.0859 4.1918 12.0859 7C12.0859 9.8082 9.8082 12.0859 7 12.0859Z"}" fill="${"#0085FF"}" class="${"svelte-14ronmp"}"></path><path d="${"M6.34375 4.59375C6.34375 4.7678 6.41289 4.93472 6.53596 5.05779C6.65903 5.18086 6.82595 5.25 7 5.25C7.17405 5.25 7.34097 5.18086 7.46404 5.05779C7.58711 4.93472 7.65625 4.7678 7.65625 4.59375C7.65625 4.4197 7.58711 4.25278 7.46404 4.12971C7.34097 4.00664 7.17405 3.9375 7 3.9375C6.82595 3.9375 6.65903 4.00664 6.53596 4.12971C6.41289 4.25278 6.34375 4.4197 6.34375 4.59375ZM7.32812 6.125H6.67188C6.61172 6.125 6.5625 6.17422 6.5625 6.23438V9.95312C6.5625 10.0133 6.61172 10.0625 6.67188 10.0625H7.32812C7.38828 10.0625 7.4375 10.0133 7.4375 9.95312V6.23438C7.4375 6.17422 7.38828 6.125 7.32812 6.125Z"}" fill="${"#0085FF"}" class="${"svelte-14ronmp"}"></path></svg>`;
});
const GeneralPlan_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".general__plan--item.svelte-dp5evi.svelte-dp5evi{filter:drop-shadow(0px 6px 14px rgba(3, 22, 2, 0.14))}.plan--item--top.svelte-dp5evi.svelte-dp5evi{padding:0.5625rem 1.25rem;border-radius:8px 8px 0px 0px;font-weight:var(--font-weight-bold);text-transform:uppercase}.plan--item--main.svelte-dp5evi.svelte-dp5evi{padding:1.24rem 1.5rem 1.5rem 1.5rem;color:var(--text-secondary-color)}.row.svelte-dp5evi.svelte-dp5evi:first-child{margin-bottom:0.5rem}.general__plan--item.safe.svelte-dp5evi.svelte-dp5evi{background:#bcdef0}.general__plan--item.safe.svelte-dp5evi .plan--item--top.svelte-dp5evi{background:#338df3}.general__plan--item.adventure.svelte-dp5evi.svelte-dp5evi{background:#dce9d3}.general__plan--item.adventure.svelte-dp5evi .plan--item--top.svelte-dp5evi{background:#6cc800}.general__plan--item.founder.svelte-dp5evi.svelte-dp5evi{background:#f1e2fa}.general__plan--item.founder.svelte-dp5evi .plan--item--top.svelte-dp5evi{background:#8336e4}@media only screen and (min-width: 992px) and (max-width: 1200px){.total.svelte-dp5evi.svelte-dp5evi{display:block}}",
  map: null
};
const GeneralPlan = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$result.css.add(css$7);
  $$unsubscribe_t();
  return `<div class="${"general__plan--item b-radius-8 text-sm " + (0, import_chunks.e)($$props.className, true) + " svelte-dp5evi"}"><div class="${"plan--item--top text-white svelte-dp5evi"}">${(0, import_chunks.e)($$props.planName)}</div>
	<div class="${"plan--item--main svelte-dp5evi"}"><div class="${"row d-flex justify-sb align-center svelte-dp5evi"}"><div class="${"text-xsm"}">${(0, import_chunks.e)($t("OVERVIEW_CONTRIBUTION"))}</div>
			<span class="${"text-big "}">${(0, import_chunks.e)($$props.currencySymbol)}${(0, import_chunks.e)($$props.contribution)}</span></div>
		<div class="${"row d-flex justify-sb align-center svelte-dp5evi"}"><div class="${"text-xsm"}">${(0, import_chunks.e)($t("OVERVIEW_REVENUE"))}</div>
			<span class="${"text-big"}">${(0, import_chunks.e)($$props.currencySymbol)}${(0, import_chunks.e)($$props.revenue)}</span></div>
		<div class="${"row d-flex justify-sb total mt-1_25 align-center svelte-dp5evi"}"><div class="${"text-3"}">${(0, import_chunks.e)($t("OVERVIEW_TOTAL_SAFE"))}</div>
			<span class="${"text-2"}">+${(0, import_chunks.e)($$props.currencySymbol)}${(0, import_chunks.e)($$props.totalSafe)}</span></div></div>
</div>`;
});
const MembershipChat_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".chat__main.svelte-1fwgaop{max-width:96px}.smallChat.svelte-1fwgaop{position:relative;filter:drop-shadow(0px 7px 20px rgba(62, 107, 44, 0.14))}canvas.svelte-1fwgaop{position:relative;z-index:10;width:96px !important;height:96px !important}.smallChat.svelte-1fwgaop::before{content:'';position:absolute;border-radius:50%;top:0;left:0;width:96px;height:96px;z-index:1;border-radius:50%;background:white}.smallChat.svelte-1fwgaop::after{content:'';position:absolute;border:6.5px solid #6cc800;opacity:4%;border-radius:50%;top:0;left:0;width:83px;height:83px;z-index:1}.smallChat.eucalyptus.svelte-1fwgaop::after{border-color:var(--membership-grey-2)}.smallChat.sequoia.svelte-1fwgaop::after{border-color:var(--membership-grey-3)}.chat-top-head.svelte-1fwgaop{margin-bottom:0.25rem}.chat-label.svelte-1fwgaop:before{content:'';position:absolute;top:0;left:0px;bottom:0;margin:auto;width:10px;height:2px;border-radius:8px;z-index:2;background:var(--white)}.chat-label.green.svelte-1fwgaop:before{background:var(--secondary-color)}.chat-label.green.svelte-1fwgaop{margin-bottom:0.25rem}@media only screen and (max-width: 1199px){.chat__main.svelte-1fwgaop{margin:auto}}",
  map: null
};
const MembershipChat = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { chartName, className, chartValue } = $$props;
  let myChartCircle;
  if ($$props.chartName === void 0 && $$bindings.chartName && chartName !== void 0)
    $$bindings.chartName(chartName);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.chartValue === void 0 && $$bindings.chartValue && chartValue !== void 0)
    $$bindings.chartValue(chartValue);
  $$result.css.add(css$6);
  return `<div class="${"chat__main svelte-1fwgaop"}"><div class="${"smallChat " + (0, import_chunks.e)(className, true) + " svelte-1fwgaop"}"><canvas width="${"96"}" height="${"96"}" class="${"svelte-1fwgaop"}"${(0, import_chunks.d)("this", myChartCircle, 0)}></canvas></div>
</div>`;
});
const MembershipItem_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".chat__item--head.svelte-13pdcoi span.svelte-13pdcoi{margin-right:0.25rem}.chat__item--footer.svelte-13pdcoi span.svelte-13pdcoi{display:block}.seed.svelte-13pdcoi.svelte-13pdcoi{color:var(--secondary-color)}.eucalyptus.svelte-13pdcoi.svelte-13pdcoi{color:var(--membership-grey-2)}.sequoia.svelte-13pdcoi.svelte-13pdcoi{color:var(--membership-grey-3)}#tooltip.svelte-13pdcoi.svelte-13pdcoi{padding:0.75rem 0.75rem 1.125rem 0.75rem;background:var(--white);z-index:10;color:#5f5f5f;max-width:215px;font-weight:var(--font-weight-normal)}#tooltip.svelte-13pdcoi.svelte-13pdcoi::after{content:'';position:absolute;top:-5px;right:100px;border-radius:2px;transform:rotate(45deg);border-top:7px solid white;border-bottom:7px solid transparent;border-left:7px solid white;border-right:7px solid transparent}@media only screen and (max-width: 991px){.chat__item.svelte-13pdcoi.svelte-13pdcoi{width:49%;margin:auto auto 2rem auto}}@media only screen and (min-width: 992px) and (max-width: 1199px){.chat__item.svelte-13pdcoi.svelte-13pdcoi{width:33%}.chat__item--head.svelte-13pdcoi.svelte-13pdcoi{font-size:var(--text-line-height-xxsmall)}}",
  map: null
};
const MembershipItem = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  let { chartName, className, chartValue, totalSafe } = $$props;
  if ($$props.chartName === void 0 && $$bindings.chartName && chartName !== void 0)
    $$bindings.chartName(chartName);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.chartValue === void 0 && $$bindings.chartValue && chartValue !== void 0)
    $$bindings.chartValue(chartValue);
  if ($$props.totalSafe === void 0 && $$bindings.totalSafe && totalSafe !== void 0)
    $$bindings.totalSafe(totalSafe);
  $$result.css.add(css$5);
  $$unsubscribe_t();
  return `<div class="${"chat__item svelte-13pdcoi"}"><div class="${"chat__item--head d-flex justify-cc text-5 " + (0, import_chunks.e)(className, true) + " svelte-13pdcoi"}"><span class="${"svelte-13pdcoi"}">${(0, import_chunks.e)(chartName)}</span>
		<div>${(0, import_chunks.v)(StatusIcon, "StatusIcon").$$render($$result, { bgColor: className }, {}, {})}</div>
		${``}</div>
	<div class="${"chat__item--main mt-0_5"}">${(0, import_chunks.v)(MembershipChat, "MembershipChat").$$render($$result, { chartName, className, chartValue }, {}, {})}</div>
	<div class="${"chat__item--footer text-center mt-1 svelte-13pdcoi"}"><span class="${"text-3 " + (0, import_chunks.e)(className, true) + " svelte-13pdcoi"}">$${(0, import_chunks.e)(totalSafe)}</span>
		<span class="${"text-xsm mt-0_25 svelte-13pdcoi"}">${(0, import_chunks.e)($t("OVERVIEW_TOTAL_SAFE"))}</span></div>
</div>`;
});
const MembershipMain_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".eucalyptus__btn.svelte-1w6xmsg{appearance:none;padding:0.375rem 1.5rem;border:none;background:#5f8575;border-radius:53px}.eucalyptus__btn.svelte-1w6xmsg:hover{background:#5f8575da}.eucalyptus__btn.svelte-1w6xmsg:active{background:#5f8575}@media only screen and (max-width: 991px){.chat__items.svelte-1w6xmsg{flex-wrap:wrap}}@media only screen and (max-width: 1199px){.chat-top.svelte-1w6xmsg{display:block}.column.svelte-1w6xmsg:last-child{margin-top:0.5rem}}",
  map: null
};
const MembershipMain = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$result.css.add(css$4);
  $$unsubscribe_t();
  return `<div class="${"chat-top d-flex justify-sb align-top mb-1_5 text-second svelte-1w6xmsg"}"><div class="${"column svelte-1w6xmsg"}"><div class="${"row text-3 chat-top-head"}">${(0, import_chunks.e)($t("OVERVIEW_STATUS"))}</div>
		<div class="${"row d-flex align-top text-sm"}"><span class="${"mt-0_25"}">${(0, import_chunks.e)($t("OVERVIEW_SINCE"))} 2021</span></div></div>
	<div class="${"column svelte-1w6xmsg"}"><div><button class="${"eucalyptus__btn text-white text-xsm svelte-1w6xmsg"}">${(0, import_chunks.e)($t("OVERVIEW_EUCALYPTUS"))}</button></div></div></div>
<div class="${"chat__items text-center d-flex justify-sb mt-2 svelte-1w6xmsg"}">${(0, import_chunks.v)(MembershipItem, "MembershipItem").$$render(
    $$result,
    {
      chartName: $t("OVERVIEW_SEED"),
      className: "seed",
      chartValue: $$props.seedVal,
      totalSafe: $$props.seedTotal
    },
    {},
    {}
  )}
	${(0, import_chunks.v)(MembershipItem, "MembershipItem").$$render(
    $$result,
    {
      chartName: $t("OVERVIEW_EUCALYPTUS"),
      className: "eucalyptus",
      chartValue: $$props.eucalyptusVal,
      totalSafe: $$props.eucalyptusTotal
    },
    {},
    {}
  )}
	${(0, import_chunks.v)(MembershipItem, "MembershipItem").$$render(
    $$result,
    {
      chartName: $t("OVERVIEW_SEQUOIA"),
      className: "sequoia",
      chartValue: $$props.sequoiaVal,
      totalSafe: $$props.sequoiaTotal
    },
    {},
    {}
  )}
</div>`;
});
const SaveProjectionChart_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.chat-label.svelte-1ylvo5.svelte-1ylvo5{display:block;font-size:12px;line-height:18px;appearance:none;background-color:transparent;border:none;color:var(--white);padding-left:1rem;position:relative}.chat-top-head.svelte-1ylvo5.svelte-1ylvo5{margin-bottom:0.25rem}.chat-label.svelte-1ylvo5.svelte-1ylvo5:before{content:'';position:absolute;top:0;bottom:0;left:0px;margin:auto;width:10px;height:2px;border-radius:8px;z-index:2;background:var(--white)}.chat-label.green.svelte-1ylvo5.svelte-1ylvo5:before{background:var(--secondary-color)}.chat-label.svelte-1ylvo5.svelte-1ylvo5{margin-bottom:0.25rem}@media only screen and (max-width: 1199px){.chat-top.svelte-1ylvo5.svelte-1ylvo5{display:block}.chat-top.svelte-1ylvo5>div.svelte-1ylvo5:last-child{display:flex;margin-top:1rem}.chat-label.svelte-1ylvo5.svelte-1ylvo5:last-child{margin-left:24px}}",
  map: null
};
const SaveProjectionChart = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  ({
    labels: $$props.yearsArray,
    datasets: [
      {
        data: $$props.currentTraject,
        backgroundColor: "#6cc800",
        borderColor: "white",
        pointStyle: "circle",
        pointRadius: 4,
        pointHoverRadius: 5,
        color: "white",
        tooltipText: "some text"
      },
      {
        data: $$props.prevTraject,
        pointBackgroundColor: "#6cc800",
        borderColor: "#6cc800",
        pointBorderColor: "white",
        backgroundColor: "#6cc800",
        color: "#6cc800",
        pointRadius: 4,
        pointHoverRadius: 5,
        pointStyle: "circle",
        tooltipText: "some text 2"
      }
    ]
  });
  $$result.css.add(css$3);
  $$unsubscribe_t();
  return `<div class="${"chat-top d-flex justify-sb align-top text-white mb-1_5 svelte-1ylvo5"}"><div class="${"column svelte-1ylvo5"}"><div class="${"row text-3 chat-top-head svelte-1ylvo5"}">${(0, import_chunks.e)($t("OVERVIEW_SAVING_PROJECTION"))}</div>
		<div class="${"row d-flex align-top text-sm"}"><span class="${"mr-0_5"}">${(0, import_chunks.e)($t("OVERVIEW_TOTAL_SAVE_5"))}</span>${(0, import_chunks.v)(StatusIcon, "StatusIcon").$$render($$result, { bgColor: "white" }, {}, {})}</div></div>
	<div class="${"column svelte-1ylvo5"}"><button class="${"chat-label green svelte-1ylvo5"}">${(0, import_chunks.e)($t("OVERVIEW_CURRENT_TRAJECTORY"))}</button>
		<button class="${"chat-label svelte-1ylvo5"}">${(0, import_chunks.e)($t("OVERVIEW_PREV_TRAJECTORY"))}</button></div></div>
<div><canvas id="${"myChart"}" width="${"500"}" height="${"253"}"></canvas>
</div>`;
});
const WithdrawChart_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".chart__wrapper.svelte-1g5a351{max-width:580px;position:relative;padding-left:150px;margin-top:20px}.chart__wrapper.svelte-1g5a351::before{content:'';position:absolute;top:0;left:0px;bottom:0;margin:auto;width:780px;height:1px;background:rgb(188, 222, 240);background:linear-gradient(\n			90deg,\n			rgba(188, 222, 240, 0) 0%,\n			rgba(3, 50, 70, 1) 50%,\n			rgba(188, 222, 240, 0) 100%\n		);z-index:-1}@media screen and (max-width: 1280px){.chart__wrapper.svelte-1g5a351{max-width:480px;padding-left:80px}.chart__wrapper.svelte-1g5a351::before{width:580px}canvas.svelte-1g5a351{width:400px}}@media only screen and (max-width: 991px){.chart__wrapper.svelte-1g5a351{padding:0 2rem;overflow:hidden}.chart__wrapper.svelte-1g5a351::before{max-width:100%}}@media only screen and (min-width: 992px) and (max-width: 1200px){.chart__wrapper.svelte-1g5a351{max-width:50%;padding-left:0}.chart__wrapper.svelte-1g5a351::before{max-width:100%}}",
  map: null
};
const WithdrawChart = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  new Date("11/08/2021").getTime();
  new Date("10/05/2021").getTime();
  new Date("6/06/2021").getTime();
  localStorage.getItem("lang");
  $$result.css.add(css$2);
  return `<div class="${"chart__wrapper d-flex align-center svelte-1g5a351"}"><canvas id="${"line-chart"}" height="${"80"}" width="${"500"}" class="${"svelte-1g5a351"}"></canvas>
</div>`;
});
const WithdrawMain_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".withdraw__body.svelte-1mrt2xe{padding:1.5rem 2rem 2rem 2rem}.withdraw.svelte-1mrt2xe{color:var(--text-secondary-color);text-align:right}@media only screen and (max-width: 991px){.withdraw__body.svelte-1mrt2xe{display:block;margin-bottom:4rem;padding-left:1rem;padding-right:1rem}}@media only screen and (max-width: 1199px){}@media only screen and (min-width: 992px) and (max-width: 1200px){.withdraw.svelte-1mrt2xe{max-width:50%}}",
  map: null
};
const WithdrawMain = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  let { totalWithdraw } = $$props;
  if ($$props.totalWithdraw === void 0 && $$bindings.totalWithdraw && totalWithdraw !== void 0)
    $$bindings.totalWithdraw(totalWithdraw);
  $$result.css.add(css$1);
  $$unsubscribe_t();
  return `<div class="${"withdraw__body white_box d-flex justify-sb mt-2 svelte-1mrt2xe"}">${(0, import_chunks.v)(WithdrawChart, "WithdrawChart").$$render($$result, {}, {}, {})}
	<div class="${"withdraw svelte-1mrt2xe"}"><div class="${"text-3 "}">${(0, import_chunks.e)($t("OVERVIEW_WITHDRAWS_DETAILS"))}</div>
		<div class="${"text-4 mt-1"}">$1,680</div>
		<div class="${"text-sm"}">${(0, import_chunks.e)($t("OVERVIEW_TOTAL"))}</div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".saving-projection.svelte-1h6u6dj{background:#287393;min-height:391px;overflow:hidden}.membership-status.svelte-1h6u6dj{background:rgba(95, 133, 117, 0.14);min-height:391px;overflow:hidden}@media only screen and (max-width: 1199px){.saving-projection.svelte-1h6u6dj,.membership-status.svelte-1h6u6dj{padding:2rem 1rem}}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $globalData, $$unsubscribe_globalData;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_globalData = (0, import_chunks.a)(import_globalStore.g, (value) => $globalData = value);
  $$result.css.add(css);
  $$unsubscribe_t();
  $$unsubscribe_globalData();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)($t("GENERAL"))}</title>`, ""}<meta name="${"description"}" content="${"General page"}" data-svelte="svelte-1frh31h">`, ""}

<div class="${"grid-3 mb-2"}">${(0, import_chunks.v)(GeneralPlan, "GeneralPlan").$$render(
    $$result,
    {
      className: "safe",
      planName: $t("SAFE_PLAN_BIG"),
      currencySymbol: $globalData.data.currencySymbol,
      contribution: $globalData.data.contributions.safePlan.contribution,
      revenue: $globalData.data.contributions.safePlan.revenue,
      totalSafe: $globalData.data.contributions.safePlan.totalSafe
    },
    {},
    {}
  )}
	${(0, import_chunks.v)(GeneralPlan, "GeneralPlan").$$render(
    $$result,
    {
      className: "adventure",
      planName: $t("ADVENTURE_BIG"),
      currencySymbol: $globalData.data.currencySymbol,
      contribution: $globalData.data.contributions.adventurePlan.contribution,
      revenue: $globalData.data.contributions.adventurePlan.revenue,
      totalSafe: $globalData.data.contributions.adventurePlan.totalSafe
    },
    {},
    {}
  )}
	${(0, import_chunks.v)(GeneralPlan, "GeneralPlan").$$render(
    $$result,
    {
      className: "founder",
      planName: $t("FOUNDER_BIG"),
      currencySymbol: $globalData.data.currencySymbol,
      contribution: $globalData.data.contributions.founderPlan.contribution,
      revenue: $globalData.data.contributions.founderPlan.revenue,
      totalSafe: $globalData.data.contributions.founderPlan.totalSafe
    },
    {},
    {}
  )}</div>
<div class="${"grid-2"}"><div class="${"saving-projection p-2 b-radius-8 box_shadow-medium svelte-1h6u6dj"}"><div class="${"saving-projection-wrapper"}">${(0, import_chunks.v)(SaveProjectionChart, "SaveProjectionChart").$$render(
    $$result,
    {
      yearsArray: [2022, 2023, 2024, 2025, 2026, 2027],
      currentTraject: [0, 1200, 13437, 19437, 23437, 30437],
      prevTraject: [0, 282, 502, 635, 24437, 33437]
    },
    {},
    {}
  )}</div></div>
	<div class="${"membership-status p-2 b-radius-8 box_shadow-medium svelte-1h6u6dj"}">${(0, import_chunks.v)(MembershipMain, "MembershipMain").$$render(
    $$result,
    {
      seedVal: 33,
      seedTotal: 400,
      eucalyptusVal: 67,
      eucalyptusTotal: 800,
      sequoiaVal: 0,
      sequoiaTotal: 0
    },
    {},
    {}
  )}</div></div>
${(0, import_chunks.v)(WithdrawMain, "WithdrawMain").$$render($$result, {}, {}, {})}`;
});
