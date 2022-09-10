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
var import_Dropdown = require("../../../../../chunks/Dropdown.js");
var import_logo_green = require("../../../../../chunks/logo-green.js");
var import_i18n = require("../../../../../chunks/i18n.js");
var import_globalStore = require("../../../../../chunks/globalStore.js");
var import_Preloader = require("../../../../../chunks/Preloader.js");
var import_axios = require("../../../../../chunks/axios.js");
var import_PlanItem = require("../../../../../chunks/PlanItem.js");
var import_index3 = require("../../../../../chunks/index3.js");
var import_navigation = require("../../../../../chunks/navigation.js");
var import_axios2 = require("axios");
const css$3 = {
  code: `.container-checkbox.svelte-y3v97c.svelte-y3v97c.svelte-y3v97c{display:block;position:relative;padding-left:2rem;cursor:pointer;color:var( --text-color);font-size:var(--text-font-xsmall);line-height:var(--text-line-height);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container-checkbox.svelte-y3v97c input.svelte-y3v97c.svelte-y3v97c{position:absolute;opacity:0;cursor:pointer;height:auto}.container-checkbox.svelte-y3v97c .checkmark.svelte-y3v97c.svelte-y3v97c{position:absolute;top:0;left:0;height:24px;width:24px;background-color:white;border:1px solid #DDDDDD;border-radius:3px}.container-checkbox.svelte-y3v97c .checkmark.svelte-y3v97c.svelte-y3v97c:after{content:"";position:absolute;display:none}.container-checkbox.svelte-y3v97c input.svelte-y3v97c:checked~.checkmark.svelte-y3v97c:after{display:block}.container-checkbox.svelte-y3v97c .checkmark.svelte-y3v97c.svelte-y3v97c:after{content:'';left:1px;top:1px;width:20px;height:20px;background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.08335 13.8212L3.92251 10.6604C3.76535 10.5086 3.55484 10.4246 3.33635 10.4265C3.11785 10.4284 2.90884 10.516 2.75433 10.6705C2.59982 10.825 2.51218 11.034 2.51029 11.2525C2.50839 11.471 2.59238 11.6815 2.74418 11.8387L6.49418 15.5887C6.65045 15.7449 6.86238 15.8327 7.08335 15.8327C7.30432 15.8327 7.51624 15.7449 7.67251 15.5887L16.8392 6.42203C16.991 6.26486 17.075 6.05436 17.0731 5.83586C17.0712 5.61736 16.9835 5.40835 16.829 5.25384C16.6745 5.09934 16.4655 5.0117 16.247 5.0098C16.0285 5.0079 15.818 5.09189 15.6608 5.24369L7.08335 13.8212Z' fill='url(%23paint0_linear_3977_12665)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_3977_12665' x1='17.0731' y1='5.00977' x2='1.10406' y2='13.0343' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF2E00'/%3E%3Cstop offset='1' stop-color='%23FF6B00'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")}@media only screen and (max-width: 991px){.container-checkbox.svelte-y3v97c.svelte-y3v97c.svelte-y3v97c{text-align:left;font-size:var(--text-font-xxsmall);line-height:var(--text-line-height-xxsmall)}}`,
  map: null
};
const Checkbox = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { group = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { checkboxStatus = false } = $$props;
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checkboxStatus === void 0 && $$bindings.checkboxStatus && checkboxStatus !== void 0)
    $$bindings.checkboxStatus(checkboxStatus);
  $$result.css.add(css$3);
  return `<label class="${"container-checkbox svelte-y3v97c"}"><input type="${"checkbox"}"${(0, import_chunks.d)("value", value, 0)} class="${"svelte-y3v97c"}"${~group.indexOf(value) ? (0, import_chunks.d)("checked", true, 1) : ""}${(0, import_chunks.d)("checked", checkboxStatus, 1)}>
  <span class="${"checkmark svelte-y3v97c"}"></span>
  ${slots.default ? slots.default({}) : ``}
</label>`;
});
const ChangeForm_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "form.svelte-127907i{margin:0.875rem auto 0 auto;max-width:721px}.dropdown__wrapper.svelte-127907i{min-width:207px}.input__wrapper.svelte-127907i{max-width:207px}input[type='number'].svelte-127907i{min-width:207px}input.error.svelte-127907i::placeholder{color:var(--red-color)}.svelte-127907i::placeholder{color:var(--green-dark-medium)}.absolute.svelte-127907i{position:absolute;top:0;z-index:2;background-color:var(--white);width:100%;height:100%;border-radius:10px}@media only screen and (max-width: 991px){form.svelte-127907i{display:block}.input__wrapper.svelte-127907i{max-width:100%}.confirm.svelte-127907i{margin-top:2rem;width:100%}.dropdown__label.svelte-127907i{padding-top:18px}}@media only screen and (min-width: 992px) and (max-width: 1199px){form.svelte-127907i{gap:1vw;grid-gap:1vw}.input__wrapper.svelte-127907i{width:100%;max-width:28%}input[type='number'].svelte-127907i,.dropdown__wrapper.svelte-127907i{min-width:0}}",
  map: null
};
const ChangeForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalData;
  let $t, $$unsubscribe_t;
  $$unsubscribe_globalData = (0, import_chunks.a)(import_globalStore.g, (value) => value);
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  let { disabledState: disabledState2 } = $$props;
  let { errorState: errorState2 } = $$props;
  let requrring;
  let requrringArray = [];
  let amountValue = null;
  if ($$props.disabledState === void 0 && $$bindings.disabledState && disabledState2 !== void 0)
    $$bindings.disabledState(disabledState2);
  if ($$props.errorState === void 0 && $$bindings.errorState && errorState2 !== void 0)
    $$bindings.errorState(errorState2);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form class="${"d-flex justify-sb align-bottom svelte-127907i"}"><div class="${"input__wrapper svelte-127907i"}"><label for="${"amount"}" class="${"label svelte-127907i"}">${(0, import_chunks.e)($t("MANAGE_AMOUNT"))}</label>
		<input type="${"number"}" id="${"amount"}" placeholder="${"0"}" min="${"20"}" max="${"9999"}" maxlength="${"4"}" ${disabledState2 || errorState2 ? "disabled" : ""} class="${["svelte-127907i", ""].join(" ").trim()}"${(0, import_chunks.d)("value", amountValue, 0)}>
		<small class="${"svelte-127907i"}"></small></div>
	<div class="${"input__wrapper svelte-127907i"}"><div class="${"dropdown__label label svelte-127907i"}">${(0, import_chunks.e)($t("MANAGE_RECURRING"))}</div>
		<div class="${"dropdown__wrapper  svelte-127907i"}">${requrringArray.length === 0 ? `<div class="${"relative svelte-127907i"}">${(0, import_chunks.v)(import_Dropdown.D, "Dropdown").$$render(
      $$result,
      {
        itemsData: requrringArray,
        disabled: disabledState2 || errorState2,
        activeItem: requrring
      },
      {
        activeItem: ($$value) => {
          requrring = $$value;
          $$settled = false;
        }
      },
      {}
    )}
					<div class="${"absolute d-flex align-center justify-cc svelte-127907i"}">${(0, import_chunks.v)(import_Preloader.P, "Preloader").$$render(
      $$result,
      {
        loaderWidth: 2,
        loaderHeight: 2,
        borderWidth: 0.2
      },
      {},
      {}
    )}</div></div>` : `<div class="${"svelte-127907i"}">${(0, import_chunks.v)(import_Dropdown.D, "Dropdown").$$render(
      $$result,
      {
        itemsData: requrringArray,
        disabled: disabledState2 || errorState2,
        activeItem: requrring
      },
      {
        activeItem: ($$value) => {
          requrring = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`}</div></div>
	<button class="${"btn confirm svelte-127907i"}" ${disabledState2 || errorState2 ? "disabled" : ""}>${(0, import_chunks.e)($t("CONFIRM_CHANGES"))}</button>
</form>`;
  } while (!$$settled);
  $$unsubscribe_globalData();
  $$unsubscribe_t();
  return $$rendered;
});
const Change_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".change__body.svelte-1txevgm.svelte-1txevgm{background:var(--white-secondary);border:1px solid var(--green-medium-color);padding:2.125rem 2rem 3.25rem 2rem}.change__body.disabled.svelte-1txevgm.svelte-1txevgm{background:var(--white-third);border:1px solid var(--grey-color);padding:2.125rem 2rem 3.25rem 2rem}.change__body.error.svelte-1txevgm.svelte-1txevgm{background:var(--error-bg-color);border:1px solid var(--red-color);padding:2.125rem 2rem 3.25rem 2rem}.modal_main.svelte-1txevgm.svelte-1txevgm{max-width:687px;margin:0 auto}.modal_main.confirm.svelte-1txevgm.svelte-1txevgm{padding-top:81px;padding-bottom:50px}.modal_main.svelte-1txevgm .modal_head_medium.svelte-1txevgm{color:var(--green-dark-color)}.modal_main-row.svelte-1txevgm.svelte-1txevgm{max-width:507px;margin:1.5rem auto 0 auto;color:#000;flex-direction:column;align-items:center;gap:10px}.modal_main-row.svelte-1txevgm span.svelte-1txevgm{margin-left:0.25rem}.btn.secondary.svelte-1txevgm.svelte-1txevgm{width:224px;margin:2.125rem auto 0 auto;transition:none}.modal-bootom-text.svelte-1txevgm.svelte-1txevgm{font-weight:var(--font-weight-medium);color:'#323232'}@media only screen and (max-width: 991px){.change__body.svelte-1txevgm.svelte-1txevgm{padding:2rem 1rem 3rem 1rem}}@media only screen and (min-width: 992px) and (max-width: 1199px){.change__body.svelte-1txevgm.svelte-1txevgm{padding:2rem 1rem}}",
  map: null
};
let disabledState = false;
let errorState = false;
const Change = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $globalData, $$unsubscribe_globalData;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_globalData = (0, import_chunks.a)(import_globalStore.g, (value) => $globalData = value);
  $$result.css.add(css$1);
  $$unsubscribe_t();
  $$unsubscribe_globalData();
  return `<div class="${"change__body b-radius-8 text-center text-dark-green box_shadow-medium " + (0, import_chunks.e)("", true) + " " + (0, import_chunks.e)("", true) + " svelte-1txevgm"}"><div class="${"text-3"}">${(0, import_chunks.e)($t("MANAGE_CHANGE_CONTRIBUTIONS"))}</div>
	<div class="${"text-xsm mt-0_5"}">${(0, import_chunks.e)($t("MANAGE_RECURRING_CONTRIBUTION"))}*
	</div>
	<div class="${"text-xsm mt-0_25"}">${(0, import_chunks.e)($t("MANAGE_NEXT_RECURRING_CONTRIBUTION"))}</div>
	${(0, import_chunks.v)(ChangeForm, "ChangeForm").$$render($$result, { disabledState, errorState }, {}, {})}</div>
${(0, import_chunks.v)(import_Modal.M, "Modal").$$render($$result, { id: "confirm" }, {}, {
    default: () => {
      return `<div class="${"modal_main confirm text-center svelte-1txevgm"}"><img${(0, import_chunks.d)("src", import_logo_green.g, 0)} alt="${"esi logo img"}">
		<div class="${"modal_head_medium mt-2 svelte-1txevgm"}">${(0, import_chunks.e)($t("MANAGE_UPDATED"))}</div>
		<div class="${"modal_main-row d-flex justify-sb align-bottom svelte-1txevgm"}"><div class="${"text-xsm d-flex align-center mobile-block"}">${(0, import_chunks.e)($t("MANAGE_NEW_CONTRIBUTION"))}:
				<span class="${"text-3 text-blue mobile-block svelte-1txevgm"}">${(0, import_chunks.e)($globalData.data.currencySymbol)}${(0, import_chunks.e)($globalData.data.membershipStatus.amount)}/mo</span></div>
			<div class="${"text-xsm d-flex align-center mobile-block"}">${(0, import_chunks.e)($t("MANAGE_NEXT_CONTRIBUTION"))}:
				<span class="${"text-3 text-blue mobile-block svelte-1txevgm"}">01 Jul 2022</span></div></div>
		<p class="${"mt-1 modal-bootom-text svelte-1txevgm"}">${(0, import_chunks.e)($t("MANAGE_REVIEW"))}</p>
		<button class="${"btn secondary mb-1 svelte-1txevgm"}">${(0, import_chunks.e)($t("CLOSE"))}</button></div>`;
    }
  })}`;
});
const PlansMain = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $globalData, $$unsubscribe_globalData;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_globalData = (0, import_chunks.a)(import_globalStore.g, (value) => $globalData = value);
  $$unsubscribe_t();
  $$unsubscribe_globalData();
  return `<div class="${"plan__items grid-3 mt-2"}">${(0, import_chunks.v)(import_PlanItem.P, "PlanItem").$$render(
    $$result,
    {
      planClass: "safe",
      planName: $t("MANAGE_SAFE"),
      planMoney: $globalData.data.membershipStatus.greenSafeTotal,
      planPersentage: $globalData.data.membershipStatus.greenSafe
    },
    {},
    {}
  )}
  ${(0, import_chunks.v)(import_PlanItem.P, "PlanItem").$$render(
    $$result,
    {
      planClass: "adventure",
      planName: $t("MANAGE_ADVENTURE"),
      planMoney: $globalData.data.membershipStatus.greenAdventureTotal,
      planPersentage: $globalData.data.membershipStatus.greenAdventure
    },
    {},
    {}
  )}
  ${(0, import_chunks.v)(import_PlanItem.P, "PlanItem").$$render(
    $$result,
    {
      planClass: "founder",
      planName: $t("MANAGE_FOUNDER"),
      planMoney: $globalData.data.membershipStatus.greenFounderTotal,
      planPersentage: $globalData.data.membershipStatus.greenFounder
    },
    {},
    {}
  )}</div>`;
});
const TakeBreak_svelte_svelte_type_style_lang = "";
const css = {
  code: ".take__break.svelte-1tk8jnq.svelte-1tk8jnq{background:var(--white);padding:2.31rem}.contribution__btns.svelte-1tk8jnq.svelte-1tk8jnq{width:100%;max-width:721px;margin-right:auto;margin-left:auto}.modal_main.svelte-1tk8jnq.svelte-1tk8jnq{max-width:780px;margin:0 auto}.modal_main.pause.svelte-1tk8jnq.svelte-1tk8jnq{padding-top:26px;padding-bottom:50px}.modal_main.stop.svelte-1tk8jnq.svelte-1tk8jnq{padding-top:84px;padding-bottom:50px}.modal_main.restart.svelte-1tk8jnq.svelte-1tk8jnq{padding-top:30px;padding-bottom:50px}.modal_main.svelte-1tk8jnq .modal_head_medium.svelte-1tk8jnq{color:var(--green-dark-color)}.btn.confirm.pause__modal--btn.svelte-1tk8jnq.svelte-1tk8jnq,.btn.confirm.stop__modal--btn.svelte-1tk8jnq.svelte-1tk8jnq{width:100%;margin:1.5rem auto 0 auto;transition:none}.restart__modal--btn.svelte-1tk8jnq.svelte-1tk8jnq{width:100%;margin:2rem auto 0 auto;transition:none;max-width:282px}.pause__modal--main.svelte-1tk8jnq.svelte-1tk8jnq,.stop__modal--main.svelte-1tk8jnq.svelte-1tk8jnq{width:100%;max-width:282px;margin:0 auto}.restart__modal--main.svelte-1tk8jnq.svelte-1tk8jnq{width:100%;max-width:608px;margin:0 auto}.dropdown__head.svelte-1tk8jnq.svelte-1tk8jnq{margin-top:2.75rem;padding:10px}.terms__checkbox.svelte-1tk8jnq.svelte-1tk8jnq{max-width:500px;margin:1.375rem auto 0 auto}@media only screen and (max-width: 991px){.contribution__btns.svelte-1tk8jnq.svelte-1tk8jnq{display:block}.contribution__btns.svelte-1tk8jnq .btn.svelte-1tk8jnq{margin-left:auto;margin-right:auto;margin-bottom:50px}.contribution__btns.svelte-1tk8jnq .btn.svelte-1tk8jnq:last-child{margin-bottom:0}.take__break.svelte-1tk8jnq.svelte-1tk8jnq{margin-bottom:4rem}}",
  map: null
};
const TakeBreak = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  let stopCheckboxValue = false;
  let chackboxErrorStatus = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (stopCheckboxValue) {
          chackboxErrorStatus = false;
        }
      }
    }
    $$rendered = `<div class="${"b-radius-8 box_shadow-medium take__break text-center text-dark-green mt-2 svelte-1tk8jnq"}"><div class="${"text-3"}">${(0, import_chunks.e)($t("MANAGE_TAKE_BREAK"))}</div>
	<div class="${"text-xsm mt-0_5"}">${(0, import_chunks.e)($t("MANAGE_PSR"))}</div>

	<div class="${"contribution__btns d-flex justify-sb mt-1_5 svelte-1tk8jnq"}"><button class="${"btn pause mb-1 svelte-1tk8jnq"}">${(0, import_chunks.e)($t("MANAGE_PAUSE"))}</button>
		<button class="${"btn stop mb-1 svelte-1tk8jnq"}">${(0, import_chunks.e)($t("MANAGE_STOP"))}</button>
		<button class="${"btn restart mb-1 svelte-1tk8jnq"}">${(0, import_chunks.e)($t("MANAGE_RES"))}</button></div></div>
${(0, import_chunks.v)(import_Modal.M, "Modal").$$render($$result, { id: "pause" }, {}, {
      default: () => {
        return `<div class="${"modal_main pause text-center svelte-1tk8jnq"}"><img${(0, import_chunks.d)("src", import_logo_green.g, 0)} alt="${"esi logo img"}">
		<div class="${"modal_head_medium mt-2 svelte-1tk8jnq"}">${(0, import_chunks.e)($t("MANAGE_PAUSE_TITLE"))}</div>
		<div class="${"pause__modal--main svelte-1tk8jnq"}"><div class="${"dropdown__head svelte-1tk8jnq"}">${(0, import_chunks.e)($t("MANAGE_CHOOSE_TIMEFRAME"))}</div>
			${(0, import_chunks.v)(import_Dropdown.D, "Dropdown").$$render(
          $$result,
          {
            itemsData: [$t("MANAGE_PAUSE_1"), $t("MANAGE_PAUSE_2"), $t("MANAGE_PAUSE_3")]
          },
          {},
          {}
        )}
			<button class="${"btn confirm pause__modal--btn  svelte-1tk8jnq"}">${(0, import_chunks.e)($t("MANAGE_PAUSE"))}</button></div></div>`;
      }
    })}
${(0, import_chunks.v)(import_Modal.M, "Modal").$$render($$result, { id: "stop" }, {}, {
      default: () => {
        return `<div class="${"modal_main stop text-center svelte-1tk8jnq"}"><img${(0, import_chunks.d)("src", import_logo_green.g, 0)} alt="${"esi logo img"}">
		<div class="${"modal_head_medium mt-2 svelte-1tk8jnq"}">${(0, import_chunks.e)($t("MANAGE_STOP_TITLE"))}</div>
		<div class="${"stop__modal--main  svelte-1tk8jnq"}"><button class="${"btn confirm stop__modal--btn svelte-1tk8jnq"}">${(0, import_chunks.e)($t("MANAGE_STOP"))}</button></div></div>`;
      }
    })}
${(0, import_chunks.v)(import_Modal.M, "Modal").$$render($$result, { id: "restart" }, {}, {
      default: () => {
        return `<div class="${"modal_main restart text-center svelte-1tk8jnq"}"><img${(0, import_chunks.d)("src", import_logo_green.g, 0)} alt="${"esi logo img"}">
		<div class="${"modal_head_medium mt-2 svelte-1tk8jnq"}">${(0, import_chunks.e)($t("MANAGE_RES_TITLE"))}</div>
		<div class="${"restart__modal--main  svelte-1tk8jnq"}"><div class="${"d-flex justify-sb mt-2 mobile-block"}"><div><div class="${"text-sm"}">${(0, import_chunks.e)($t("MANAGE_TOTAL_SAVE"))}</div>
					<div class="${"restart__value text-green text-2 mt-1_5 svelte-1tk8jnq"}">$7,437</div></div>
				<div><div class="${"text-sm"}">${(0, import_chunks.e)($t("MANAGE_NEXT_RECURRING"))}</div>
					<div class="${"restart__value text-green text-2 mt-1_5 svelte-1tk8jnq"}">$1,000/mo</div></div>
				<div><div class="${"text-sm"}">${(0, import_chunks.e)($t("MANAGE_NEXT_DATE"))}</div>
					<div class="${"restart__value text-green text-2 mt-1_5 svelte-1tk8jnq"}">01 July 2022</div></div></div>
			<div class="${"terms__checkbox svelte-1tk8jnq"}">${(0, import_chunks.v)(Checkbox, "Checkbox").$$render(
          $$result,
          {
            group: "terms",
            value: 1,
            checkboxStatus: stopCheckboxValue
          },
          {
            checkboxStatus: ($$value) => {
              stopCheckboxValue = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${(0, import_chunks.e)($t("MANAGE_AGREE"))}`;
            }
          }
        )}
				${chackboxErrorStatus ? `<small class="${"error_text mt-0_5"}">Fill required field</small>` : ``}</div>

			<button class="${"btn confirm restart__modal--btn svelte-1tk8jnq"}">${(0, import_chunks.e)($t("MANAGE_STOP"))}</button></div></div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)($t("MANAGE_CONTRIBUTIONS"))}</title>`, ""}<meta name="${"description"}" content="${"Contributions page"}" data-svelte="svelte-qf42vb">`, ""}

${(0, import_chunks.v)(Change, "Change").$$render($$result, {}, {}, {})}
${(0, import_chunks.v)(PlansMain, "PlansMain").$$render($$result, {}, {}, {})}
${(0, import_chunks.v)(TakeBreak, "TakeBreak").$$render($$result, {}, {}, {})}`;
});
