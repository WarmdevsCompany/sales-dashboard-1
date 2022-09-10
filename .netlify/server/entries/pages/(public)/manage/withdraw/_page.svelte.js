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
var import_Modal = require("../../../../../chunks/Modal.js");
var import_i18n = require("../../../../../chunks/i18n.js");
var import_VerifyCodeForm = require("../../../../../chunks/VerifyCodeForm.js");
var import_logo_green = require("../../../../../chunks/logo-green.js");
var import_index3 = require("../../../../../chunks/index3.js");
var import_create_form = require("../../../../../chunks/create-form.js");
var import_lite = require("dequal/lite");
var import_yup = require("yup");
const WithdrawFooter_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".grid.svelte-1v2foo5.svelte-1v2foo5{grid-column-gap:20px;grid-row-gap:10px;grid-template-columns:1fr auto;text-align:right;color:var(--label--color-secondary)}.grid-item-value.svelte-1v2foo5.svelte-1v2foo5{font-weight:var(--font-weight-bolder)}button.cancel.svelte-1v2foo5.svelte-1v2foo5{width:182px;background:transparent;border:none;color:var(--confirm-btn-disable-text-color)}button.cancel.svelte-1v2foo5.svelte-1v2foo5:hover{background:rgba(0, 0, 0, 0.1)}button.cancel.svelte-1v2foo5.svelte-1v2foo5:active{background:rgba(0, 0, 0, 0.07)}.btn.svelte-1v2foo5.svelte-1v2foo5{width:182px}.btn.confirm-wd.svelte-1v2foo5.svelte-1v2foo5{width:214px}.buttons.svelte-1v2foo5.svelte-1v2foo5{margin-top:2.56rem}.buttons-confirm.svelte-1v2foo5.svelte-1v2foo5{margin-top:4rem}@media only screen and (max-width: 991px){.buttons.svelte-1v2foo5.svelte-1v2foo5{margin-bottom:4rem}.buttons-confirm.svelte-1v2foo5.svelte-1v2foo5{flex-direction:column-reverse;align-items:center}button.cancel.svelte-1v2foo5.svelte-1v2foo5{margin:1rem auto 0 auto}.buttons-confirm.svelte-1v2foo5 button.cancel.svelte-1v2foo5,.btn.confirm-wd.svelte-1v2foo5.svelte-1v2foo5{width:100%}}",
  map: null
};
const WithdrawFooter = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  let { btnAligment = "justify-end" } = $$props;
  let { confirmBtn = "open" } = $$props;
  let { closeModals } = $$props;
  if ($$props.btnAligment === void 0 && $$bindings.btnAligment && btnAligment !== void 0)
    $$bindings.btnAligment(btnAligment);
  if ($$props.confirmBtn === void 0 && $$bindings.confirmBtn && confirmBtn !== void 0)
    $$bindings.confirmBtn(confirmBtn);
  if ($$props.closeModals === void 0 && $$bindings.closeModals && closeModals !== void 0)
    $$bindings.closeModals(closeModals);
  $$result.css.add(css$4);
  $$unsubscribe_t();
  return `<div class="${"mt-1_5"}"><div class="${"grid mobile-block svelte-1v2foo5"}"><div class="${"text-sm"}">${(0, import_chunks.e)($t("MANAGE_TOTAL_WD_AM"))}:</div>
		<div class="${"grid-item-value text-sm svelte-1v2foo5"}">$1,000</div>
		<div class="${"text-sm"}">${(0, import_chunks.e)($t("MANAGE_WD_FEE"))}:</div>
		<div class="${"grid-item-value text-sm svelte-1v2foo5"}">$4</div>
		<div class="${"text-sm"}">${(0, import_chunks.e)($t("MANAGE_TIME_TO_TR"))}:</div>
		<div class="${"grid-item-value text-sm svelte-1v2foo5"}">${(0, import_chunks.e)($t("MANAGE_3_DAYS"))}</div>
		<div class="${"text-sm"}">${(0, import_chunks.e)($t("MANAGE_WD_OF_T"))}:</div>
		<div class="${"grid-item-value text-sm svelte-1v2foo5"}">14%</div></div>
	${confirmBtn === "open" ? `<div class="${"d-flex " + (0, import_chunks.e)(btnAligment, true) + " buttons svelte-1v2foo5"}"><button class="${"btn cancel mr-1_5 svelte-1v2foo5"}">${(0, import_chunks.e)($t("CANCEL"))}</button>

			<div class="${"btn svelte-1v2foo5"}">${(0, import_chunks.e)($t("WITHDRAW"))}</div></div>` : `${confirmBtn === "confirm" ? `<div class="${"d-flex " + (0, import_chunks.e)(btnAligment, true) + " buttons-confirm svelte-1v2foo5"}"><button class="${"btn cancel mr-1_5 svelte-1v2foo5"}">${(0, import_chunks.e)($t("CANCEL"))}</button>

			<div class="${"btn confirm-wd svelte-1v2foo5"}">${(0, import_chunks.e)($t("MANAGE_CONF_WD"))}</div></div>` : ``}`}
</div>`;
});
const css$3 = {
  code: ':root{--accent-color:CornflowerBlue;--gray:#ccc}.group-container.svelte-1yuw58d.svelte-1yuw58d{border-radius:2px;display:flex;flex-direction:row}.legend.svelte-1yuw58d.svelte-1yuw58d{font-weight:bold}label.svelte-1yuw58d.svelte-1yuw58d{cursor:pointer;user-select:none;color:var(--label--color-secondary);line-height:24px;padding:0;margin-bottom:10px}.sr-only.svelte-1yuw58d.svelte-1yuw58d{position:absolute;clip:rect(1px, 1px, 1px, 1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}input[type="radio"].svelte-1yuw58d.svelte-1yuw58d{position:absolute}input[type="radio"].svelte-1yuw58d+label.svelte-1yuw58d{display:flex;align-items:center;position:relative;text-align:left}input[type="radio"]+label.svelte-1yuw58d span.svelte-1yuw58d{line-height:20px;position:relative;display:flex;align-items:center;justify-content:center;margin-right:16px;width:20px;height:20px;background:transparent;border:2px solid #5a7186;border-radius:50%}input[type="radio"]:checked+label.svelte-1yuw58d span.svelte-1yuw58d{border:2px solid #0085ff;border-radius:50%}input[type="radio"]+label.svelte-1yuw58d span .dot.svelte-1yuw58d{position:absolute;width:10px;height:10px;background:#0085ff;border-radius:50%;transform:scale(0)}input[type="radio"]:checked+label.svelte-1yuw58d span .dot.svelte-1yuw58d{opacity:1;transform:scale(1)}input[type="radio"]:focus+label.svelte-1yuw58d span.svelte-1yuw58d{box-shadow:0 0 0 1px var(--accent-color, #282828);border-radius:50%}input[type="radio"].svelte-1yuw58d:disabled+label.svelte-1yuw58d{color:darken(var(--gray, #ccc), 10)}input[type="radio"]:disabled+label.svelte-1yuw58d span.svelte-1yuw58d{background:var(--gray, #ccc)}input[type="radio"]+label.svelte-1yuw58d span.svelte-1yuw58d{transition:background 0.3s ease-out}input[type="radio"]:checked+label.svelte-1yuw58d span.svelte-1yuw58d{transition:background 0.3s ease-in}input[type="radio"]+label.svelte-1yuw58d span .dot.svelte-1yuw58d{transition:transform 0.2s ease-out}input[type="radio"]:checked+label.svelte-1yuw58d span .dot.svelte-1yuw58d{transition:transform 0.2s ease-in}input[type="radio"]:focus+label.svelte-1yuw58d span.svelte-1yuw58d{box-shadow:0 0px 8px var(--accent-color, #282828);border-radius:50%}input[type="radio"].svelte-1yuw58d+label.verify_tab.svelte-1yuw58d{margin-bottom:0}input[type="radio"]+label.verify_tab.svelte-1yuw58d span.svelte-1yuw58d{margin:0 0 0 0.75rem}input[type="radio"]+label.verify_tab.svelte-1yuw58d span.svelte-1yuw58d:first-child{margin:0 1.875rem 0 0.75rem}',
  map: null
};
const Radio = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { legend } = $$props;
  let { userSelected = options[0].value } = $$props;
  let { fontSize = 16 } = $$props;
  let { flexDirection = "column" } = $$props;
  let { verify = false } = $$props;
  let { tabId } = $$props;
  const uniqueID = Math.floor(Math.random() * 100);
  const slugify = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.userSelected === void 0 && $$bindings.userSelected && userSelected !== void 0)
    $$bindings.userSelected(userSelected);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.flexDirection === void 0 && $$bindings.flexDirection && flexDirection !== void 0)
    $$bindings.flexDirection(flexDirection);
  if ($$props.verify === void 0 && $$bindings.verify && verify !== void 0)
    $$bindings.verify(verify);
  if ($$props.tabId === void 0 && $$bindings.tabId && tabId !== void 0)
    $$bindings.tabId(tabId);
  $$result.css.add(css$3);
  return `${verify ? `<div role="${"radiogroup"}" class="${"group-container svelte-1yuw58d"}"${(0, import_chunks.d)("aria-labelledby", `label-${uniqueID}`, 0)} style="${"font-size:" + (0, import_chunks.e)(fontSize, true) + "px; flex-direction:" + (0, import_chunks.e)(flexDirection, true)}"${(0, import_chunks.d)("id", `group-${uniqueID}`, 0)}><div class="${"legend svelte-1yuw58d"}"${(0, import_chunks.d)("id", `label-${uniqueID}`, 0)}></div>
    ${(0, import_chunks.l)(options, ({ value, label, id }) => {
    return `<input class="${"sr-only svelte-1yuw58d"}" type="${"radio"}"${(0, import_chunks.d)("id", slugify(label), 0)}${(0, import_chunks.d)("value", value, 0)}${value === userSelected ? (0, import_chunks.d)("checked", true, 1) : ""}>
      <label${(0, import_chunks.d)("for", slugify(label), 0)} class="${"verify_tab svelte-1yuw58d"}">${(0, import_chunks.e)(label)}
        <span class="${"svelte-1yuw58d"}"><div class="${"dot svelte-1yuw58d"}"></div></span>
       
      </label>`;
  })}</div>` : `<div role="${"radiogroup"}" class="${"group-container svelte-1yuw58d"}"${(0, import_chunks.d)("aria-labelledby", `label-${uniqueID}`, 0)} style="${"font-size:" + (0, import_chunks.e)(fontSize, true) + "px; flex-direction:" + (0, import_chunks.e)(flexDirection, true)}"${(0, import_chunks.d)("id", `group-${uniqueID}`, 0)}><div class="${"legend svelte-1yuw58d"}"${(0, import_chunks.d)("id", `label-${uniqueID}`, 0)}></div>
    ${(0, import_chunks.l)(options, ({ value, label }) => {
    return `<input class="${"sr-only svelte-1yuw58d"}" type="${"radio"}"${(0, import_chunks.d)("id", slugify(label), 0)}${(0, import_chunks.d)("value", value, 0)}${value === userSelected ? (0, import_chunks.d)("checked", true, 1) : ""}>
      <label${(0, import_chunks.d)("for", slugify(label), 0)} class="${"svelte-1yuw58d"}"><span class="${"svelte-1yuw58d"}"><div class="${"dot svelte-1yuw58d"}"></div></span>
        ${(0, import_chunks.e)(label)}
      </label>`;
  })}</div>`}`;
});
const WithdrawManager_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".withdraw__manager.svelte-pvqkiz{color:var(--label--color-secondary);background:#c4cdd7;border:1px solid #5a7186;padding:2.125rem 8.5rem 2.125rem 4rem}.withdraw__main.svelte-pvqkiz{margin-top:2.5rem}.withdraw__input.svelte-pvqkiz{margin-right:2.5rem;font-weight:var(--font-weight-bold);width:100%;max-width:360px}.radio__wrapper.svelte-pvqkiz{min-width:275px}.withdraw__input--body.svelte-pvqkiz{width:100%}@media only screen and (min-width: 0px) and (max-width: 1199px){.withdraw__manager.svelte-pvqkiz{padding:2rem 1rem}.withdraw__input.svelte-pvqkiz{margin-right:1rem}}@media only screen and (max-width: 991px){.withdraw__input--body.svelte-pvqkiz{flex-direction:column-reverse;align-items:flex-start;margin-bottom:20px}.withdraw__label.svelte-pvqkiz{padding-left:1rem}}",
  map: null
};
const WithdrawManager = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  let radioValue;
  const options = [
    {
      value: "0",
      label: `${$t("MANAGE_SAME")} %`
    },
    { value: "1", label: $t("MANAGE_EQ_AM") },
    { value: "2", label: $t("MANAGE_PUT_AM") }
  ];
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"withdraw__manager b-radius-8 box_shadow-medium svelte-pvqkiz"}"><div><div class="${"text-3"}">${(0, import_chunks.e)($t("MANAGE_WD_MANAGER"))}</div>
		<div class="${"text-xsm mt-0_5"}">${(0, import_chunks.e)($t("WHERE_WITHDRAW"))}*
		</div></div>
	<div class="${"withdraw__main d-flex justify-sb align-top mobile-block svelte-pvqkiz"}"><div class="${"d-flex align-center withdraw__input--body mr-2 svelte-pvqkiz"}"><div class="${"withdraw__input svelte-pvqkiz"}"><input class="${""}" type="${"text"}" placeholder="${"1000"}" id="${"name"}" name="${"name"}"></div>
			<div class="${"withdraw__label svelte-pvqkiz"}">${(0, import_chunks.e)($t("OVERVIEW_TOTAL"))}</div></div>
		<div class="${"radio__wrapper svelte-pvqkiz"}">${(0, import_chunks.v)(Radio, "Radio").$$render(
      $$result,
      {
        options,
        fontSize: 16,
        userSelected: radioValue
      },
      {
        userSelected: ($$value) => {
          radioValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const WithdrawPlanItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".plan__item.svelte-e6c7sh{padding:1rem 1rem 2.125rem 1rem}.plan_money.svelte-e6c7sh{font-weight:var(--font-weight-bold)}.plan_persentage.svelte-e6c7sh{font-weight:var(--font-weight-bolder)}.plan__item.safe.svelte-e6c7sh{background:var(--primary-color)}.plan__item.adventure.svelte-e6c7sh{background:var(--secondary-color)}.plan__item.founder.svelte-e6c7sh{background:var(--third-color)}input.withdraw__amount.svelte-e6c7sh{background:#e8e8e8;color:#113535;width:100%;padding:13px 28px;height:50px}",
  map: null
};
const WithdrawPlanItem = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"plan__item b-radius-8 box_shadow-medium text-white " + (0, import_chunks.e)($$props.planClass, true) + " svelte-e6c7sh"}"><div class="${"d-flex justify-sb"}"><div class="${"text-3 plan_name"}">${(0, import_chunks.e)($$props.planName)}</div>
		<div class="${"plan_money svelte-e6c7sh"}">$${(0, import_chunks.e)($$props.planPersentage)}</div></div>
	<div class="${"d-flex justify-sb align-base"}"><div class="${"text-xsm contr"}">${(0, import_chunks.e)($$props.planAvailable)}</div>
		<div class="${"text-3 plan_persentage svelte-e6c7sh"}">${(0, import_chunks.e)($$props.planMoney)}%</div></div>

	<input class="${"withdraw__amount mt-1 svelte-e6c7sh"}" type="${"text"}" placeholder="${"0"}">
</div>`;
});
const WithdrawPlans = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="${"plan__items grid-3 mt-2"}">${(0, import_chunks.v)(WithdrawPlanItem, "WithdrawPlanItem").$$render(
    $$result,
    {
      planClass: "safe",
      planName: $t("MANAGE_SAFE"),
      planAvailable: $t("MANAGE_AV_AM"),
      planMoney: 400,
      planPersentage: 50
    },
    {},
    {}
  )}
	${(0, import_chunks.v)(WithdrawPlanItem, "WithdrawPlanItem").$$render(
    $$result,
    {
      planClass: "adventure",
      planName: $t("MANAGE_ADVENTURE"),
      planAvailable: $t("MANAGE_AV_AM"),
      planMoney: 200,
      planPersentage: 25
    },
    {},
    {}
  )}
	${(0, import_chunks.v)(WithdrawPlanItem, "WithdrawPlanItem").$$render(
    $$result,
    {
      planClass: "founder",
      planName: $t("MANAGE_FOUNDER"),
      planAvailable: $t("MANAGE_AV_AM"),
      planMoney: 200,
      planPersentage: 25
    },
    {},
    {}
  )}</div>`;
});
const modalClassName = (0, import_index3.w)("greenForm");
const confirmModalState = (0, import_index3.w)(false);
const ConfirmModal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".modal_main.svelte-115heyg.svelte-115heyg{margin:0 auto}.form__wrapper.svelte-115heyg.svelte-115heyg{z-index:999;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;padding:2rem;background:#4448;display:flex;align-items:center;justify-content:center}.confirm__form.svelte-115heyg.svelte-115heyg{position:relative;border-radius:10px;background:white;padding:2.125rem;width:100%;max-width:950px;min-height:584px}.close_icon.svelte-115heyg.svelte-115heyg{position:absolute;top:34px;right:34px;width:24px;height:24px;cursor:pointer;transition:transform 0.3s}.close_icon.svelte-115heyg.svelte-115heyg:hover{transform:scale(1.2)}.modal_main.svelte-115heyg .modal_head_medium.svelte-115heyg{color:var(--green-dark-color);margin-top:2.5rem}.modal_main-row.svelte-115heyg.svelte-115heyg{max-width:360px;margin:0 auto 0 auto;color:#000}.last__step--subhead.svelte-115heyg.svelte-115heyg{margin-top:0.625rem}.last__step--body.svelte-115heyg .text-green.svelte-115heyg{font-weight:var(--font-weight-bolder)}.last__step--body.svelte-115heyg .inline.svelte-115heyg{padding:0 0.625rem}.last__step--body.svelte-115heyg.svelte-115heyg{margin:0 auto;max-width:632px}.line.svelte-115heyg.svelte-115heyg{width:100%;height:1px;background:var(--grey-color)}@media only screen and (max-width: 991px){}",
  map: null
};
const ConfirmModal = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $confirmModalState, $$unsubscribe_confirmModalState;
  let $modalClassName, $$unsubscribe_modalClassName;
  let $t, $$unsubscribe_t;
  $$unsubscribe_confirmModalState = (0, import_chunks.a)(confirmModalState, (value) => $confirmModalState = value);
  $$unsubscribe_modalClassName = (0, import_chunks.a)(modalClassName, (value) => $modalClassName = value);
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  let formStep = 1;
  const submitEmailOrPhone = () => formStep = 2;
  const submitVerificationCode = () => {
    (0, import_chunks.f)(confirmModalState, $confirmModalState = true, $confirmModalState);
  };
  const closeModals = (modalId) => {
    (0, import_chunks.f)(confirmModalState, $confirmModalState = false, $confirmModalState);
    formStep = 1;
    (0, import_Modal.g)(modalId).close();
  };
  $$result.css.add(css);
  $$unsubscribe_confirmModalState();
  $$unsubscribe_modalClassName();
  $$unsubscribe_t();
  return `${(0, import_chunks.v)(import_Modal.M, "Modal").$$render(
    $$result,
    {
      id: "withdraw",
      className: $modalClassName
    },
    {},
    {
      default: () => {
        return `<div class="${"modal_main text-center svelte-115heyg"}"><img${(0, import_chunks.d)("src", import_logo_green.g, 0)} alt="${"esi logo img"}">
		<div class="${"modal_head_medium text-1 svelte-115heyg"}">${(0, import_chunks.e)($t("WITHDRAW"))}</div>

		<div class="${"modal_main-row  svelte-115heyg"}"><div class="${"mt-1"}">${(0, import_chunks.e)($t("VERIFY_ACCOUNT"))}</div>
			${formStep === 1 ? `${(0, import_chunks.v)(import_VerifyCodeForm.V, "VerifyTabs").$$render($$result, { sendVerifyCallback: submitEmailOrPhone }, {}, {})}` : `${formStep === 2 ? `${(0, import_chunks.v)(import_VerifyCodeForm.a, "VerifyCodeForm").$$render($$result, { submitVerificationCode }, {}, {})}` : ``}`}</div></div>`;
      }
    }
  )}
${$confirmModalState ? `<div class="${"form__wrapper svelte-115heyg"}"><div class="${"confirm__form text-center svelte-115heyg"}"><img${(0, import_chunks.d)("src", import_logo_green.g, 0)} alt="${"esi logo img"}">
			<div class="${"modal_head_medium text-1"}">${(0, import_chunks.e)($t("WITHDRAW"))}</div>
			<div class="${"text-xsm last__step--subhead mb-1_5 svelte-115heyg"}">${(0, import_chunks.e)($t("WHERE_WITHDRAW"))}*
			</div>
			<div class="${"last__step--body svelte-115heyg"}"><div>${(0, import_chunks.e)($t("SAFE_PLAN_BIG"))}: <span class="${"text-green mobile-block svelte-115heyg"}">$600</span>
					<div class="${"inline svelte-115heyg"}">${(0, import_chunks.e)($t("ADVENTURE_BIG"))}: <span class="${"text-green mobile-block svelte-115heyg"}">$400</span></div>

					${(0, import_chunks.e)($t("FOUNDER_BIG"))}:<span class="${"text-green mobile-block svelte-115heyg"}">$0</span></div>
				<div class="${"line mt-1_5 mb-1_5 svelte-115heyg"}"></div>
				${(0, import_chunks.v)(WithdrawFooter, "WithdrawFooter").$$render(
    $$result,
    {
      btnAligment: "justify-cc",
      confirmBtn: "confirm",
      closeModals
    },
    {},
    {}
  )}</div>
			<img class="${"close_icon svelte-115heyg"}"${(0, import_chunks.d)("src", import_Modal.c, 0)} alt="${"esi close icon"}"></div></div>` : ``}`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Withdraw</title>`, ""}<meta name="${"description"}" content="${"Withdraw page"}" data-svelte="svelte-1hhe896">`, ""}
${(0, import_chunks.v)(WithdrawManager, "WithdrawManager").$$render($$result, {}, {}, {})}
${(0, import_chunks.v)(WithdrawPlans, "WithdrawPlans").$$render($$result, {}, {}, {})}
${(0, import_chunks.v)(WithdrawFooter, "WithdrawFooter").$$render($$result, {}, {}, {})}


${(0, import_chunks.v)(ConfirmModal, "ConfirmModal").$$render($$result, {}, {}, {})}`;
});
