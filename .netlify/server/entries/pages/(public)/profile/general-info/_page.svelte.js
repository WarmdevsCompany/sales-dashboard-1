var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../../../../chunks/index.js");
var import_Modal = require("../../../../../chunks/Modal.js");
var import_i18n = require("../../../../../chunks/i18n.js");
var import_profileStore = require("../../../../../chunks/profileStore.js");
var import_logo_green = require("../../../../../chunks/logo-green.js");
var import_create_form = require("../../../../../chunks/create-form.js");
var yup = __toESM(require("yup"));
var import_Dropdown = require("../../../../../chunks/Dropdown.js");
var import_flatpickr = require("flatpickr");
var import_VerifyCodeForm = require("../../../../../chunks/VerifyCodeForm.js");
var import_EyePW_ico = require("../../../../../chunks/EyePW_ico.js");
var import_index3 = require("../../../../../chunks/index3.js");
var import_lite = require("dequal/lite");
const addImage = "/_app/immutable/assets/image-add-b328db28.svg";
const border = "data:image/png;base64,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";
const BrowseImg_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".browse__wrapper.svelte-199xpf7.svelte-199xpf7{width:303px;height:286px;position:relative;z-index:2;padding:61px 2rem}.ava-image.svelte-199xpf7.svelte-199xpf7{position:absolute;top:0;left:0;bottom:0;right:0;width:95%;height:100%;max-width:100%;border-radius:50%;object-fit:cover}.browse--head.svelte-199xpf7.svelte-199xpf7{margin-top:2.125rem;color:var(--green-dark-medium);font-weight:var(--font-weight-medium)}.text-blue.svelte-199xpf7.svelte-199xpf7{font-weight:var(--font-weight-bold)}.supported-files.svelte-199xpf7.svelte-199xpf7{color:#a8a8a8;font-size:12px;line-height:18px}.add-placeholder.svelte-199xpf7.svelte-199xpf7{height:76px;width:76px}.browse-border.svelte-199xpf7.svelte-199xpf7,.browse__wrapper.svelte-199xpf7 input.svelte-199xpf7{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;z-index:-1}.browse__wrapper.svelte-199xpf7 input.svelte-199xpf7{border:none;background:transparent;color:transparent;z-index:99;cursor:pointer}.browse__wrapper.svelte-199xpf7 input.svelte-199xpf7::-webkit-file-upload-button{visibility:hidden}@media only screen and (max-width: 1280px){.browse__wrapper.svelte-199xpf7.svelte-199xpf7{width:24.2vw;height:22.7vw;padding:4vw 1rem;min-width:225px;min-height:227px}.browse--head.svelte-199xpf7.svelte-199xpf7{margin-top:2vw}}@media only screen and (max-width: 991px){.browse__wrapper.svelte-199xpf7.svelte-199xpf7{width:100%;min-height:286px}.add-placeholder.svelte-199xpf7.svelte-199xpf7{margin-top:auto}.supported-files.svelte-199xpf7.svelte-199xpf7{margin-bottom:auto}}",
  map: null
};
const BrowseImg = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$result.css.add(css$6);
  $$unsubscribe_t();
  return `<div class="${"browse__wrapper d-flex flex-col align-center svelte-199xpf7"}">${`<img${(0, import_chunks.d)("src", addImage, 0)} alt="${"browse"}" class="${"add-placeholder svelte-199xpf7"}">
    <div class="${"browse--head text-sm text-center svelte-199xpf7"}">${(0, import_chunks.e)($t("PROFILE.GENERAL.DROP"))} <span class="${"text-blue svelte-199xpf7"}">${(0, import_chunks.e)($t("PROFILE.GENERAL.BROWSE"))}</span></div>
    <div class="${"supported-files svelte-199xpf7"}">${(0, import_chunks.e)($t("PROFILE.GENERAL.SUPPORTS"))}: JPG, JPEG2000, PNG</div>
    <img${(0, import_chunks.d)("src", border, 0)} alt="${"border"}" class="${"browse-border svelte-199xpf7"}">`}
  <input type="${"file"}" class="${"svelte-199xpf7"}">
</div>`;
});
const Tooltip_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".title.svelte-xj72gq{display:block}.tooltip.svelte-xj72gq{box-shadow:0px 14px 30px rgba(0, 0, 0, 0.14);background:white;padding:1.875rem 1.5rem;position:absolute;top:-50px;z-index:3;width:auto;color:var(--black)}@media only screen and (max-width: 1130px) and (min-width: 991px){.tooltip.svelte-xj72gq{width:200px;top:-60px}}",
  map: null
};
const Tooltip = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_profileEditForm;
  let $$unsubscribe_modalClassName;
  $$unsubscribe_profileEditForm = (0, import_chunks.a)(import_profileStore.p, (value) => value);
  $$unsubscribe_modalClassName = (0, import_chunks.a)(import_profileStore.m, (value) => value);
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$5);
  $$unsubscribe_profileEditForm();
  $$unsubscribe_modalClassName();
  return `<div>${slots.default ? slots.default({}) : ``}</div>

${``}`;
});
const GeneralInfo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".svelte-1w9w10k.svelte-1w9w10k{color:var(--green-dark-medium)}label.label.svelte-1w9w10k.svelte-1w9w10k{color:var(--label--color)}input.svelte-1w9w10k.svelte-1w9w10k{pointer-events:none;user-select:none}.grid-2.svelte-1w9w10k.svelte-1w9w10k{grid-gap:24px}.contact.svelte-1w9w10k.svelte-1w9w10k{margin-top:2.125rem;padding-bottom:4.5rem}@media only screen and (max-width: 1100px){.contact.svelte-1w9w10k .input__wrapper.svelte-1w9w10k{grid-column-start:1;grid-column-end:3}}@media only screen and (max-width: 991px){.grid-2.svelte-1w9w10k.svelte-1w9w10k{grid-gap:10px}.mob_fix.svelte-1w9w10k.svelte-1w9w10k{margin-top:10px}.contact.svelte-1w9w10k.svelte-1w9w10k{padding-bottom:2rem}}",
  map: null
};
const GeneralInfo = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$result.css.add(css$4);
  $$unsubscribe_t();
  return `<div class="${"svelte-1w9w10k"}"><div class="${"text-3 mb-1 svelte-1w9w10k"}">${(0, import_chunks.e)($t("PROFILE.GENERAL.TITLE"))}</div>
	<div class="${"input__wrapper svelte-1w9w10k"}"><label for="${"name"}" class="${"label svelte-1w9w10k"}">${(0, import_chunks.e)($t("USER_NAME"))}</label>
		<div class="${"relative svelte-1w9w10k"}"><input class="${" svelte-1w9w10k"}" type="${"text"}" value="${"Antonin"}">
			<div class="${"abs__input__dots svelte-1w9w10k"}">${(0, import_chunks.v)(Tooltip, "Tooltip").$$render(
    $$result,
    {
      title: $t("CHANGE_USER_NAME"),
      width: 280,
      formName: "userName"
    },
    {},
    {
      default: () => {
        return `${(0, import_chunks.v)(import_profileStore.T, "ThreeDotsIcon").$$render($$result, { bgColor: "green" }, {}, {})}`;
      }
    }
  )}</div></div></div>
	<div class="${"grid-2 mt-1_5 svelte-1w9w10k"}"><div class="${"input__wrapper svelte-1w9w10k"}"><label for="${"name"}" class="${"label svelte-1w9w10k"}">${(0, import_chunks.e)($t("FIRST_NAME"))}</label>
			<div class="${"relative svelte-1w9w10k"}"><input class="${" svelte-1w9w10k"}" type="${"text"}" value="${"Jonh"}">
				<div class="${"abs__input__dots svelte-1w9w10k"}">${(0, import_chunks.v)(Tooltip, "Tooltip").$$render(
    $$result,
    {
      title: $t("CHANGE_FIRST_NAME"),
      width: 208,
      formName: "firstName"
    },
    {},
    {
      default: () => {
        return `${(0, import_chunks.v)(import_profileStore.T, "ThreeDotsIcon").$$render($$result, { bgColor: "green" }, {}, {})}`;
      }
    }
  )}</div></div></div>
		<div class="${"input__wrapper svelte-1w9w10k"}"><label for="${"name"}" class="${"label svelte-1w9w10k"}">${(0, import_chunks.e)($t("LAST_NAME"))}</label>
			<div class="${"relative svelte-1w9w10k"}"><input class="${" svelte-1w9w10k"}" type="${"text"}" value="${"Antonin"}">
				<div class="${"abs__input__dots svelte-1w9w10k"}">${(0, import_chunks.v)(Tooltip, "Tooltip").$$render(
    $$result,
    {
      title: $t("CHANGE_LAST_NAME"),
      width: 265,
      formName: "lastName"
    },
    {},
    {
      default: () => {
        return `${(0, import_chunks.v)(import_profileStore.T, "ThreeDotsIcon").$$render($$result, { bgColor: "green" }, {}, {})}`;
      }
    }
  )}</div></div></div></div>
	<div class="${"grid-2 mt-3 mob_fix svelte-1w9w10k"}"><div class="${"input__wrapper svelte-1w9w10k"}"><label for="${"name"}" class="${"label svelte-1w9w10k"}">${(0, import_chunks.e)($t("GENDER"))}</label>
			<div class="${"relative svelte-1w9w10k"}"><input class="${" svelte-1w9w10k"}" type="${"text"}"${(0, import_chunks.d)("value", $t("MALE"), 0)}>
				<div class="${"abs__input__dots svelte-1w9w10k"}">${(0, import_chunks.v)(Tooltip, "Tooltip").$$render(
    $$result,
    {
      title: $t("CHANGE_GENDER"),
      width: 215,
      formName: "gender"
    },
    {},
    {
      default: () => {
        return `${(0, import_chunks.v)(import_profileStore.T, "ThreeDotsIcon").$$render($$result, { bgColor: "green" }, {}, {})}`;
      }
    }
  )}</div></div></div>
		<div class="${"input__wrapper svelte-1w9w10k"}"><label for="${"name"}" class="${"label svelte-1w9w10k"}">${(0, import_chunks.e)($t("DATE_OF_BIRTH"))}</label>
			<div class="${"relative svelte-1w9w10k"}"><input class="${" svelte-1w9w10k"}" type="${"text"}" value="${"01 July 1992"}">
				<div class="${"abs__input__dots svelte-1w9w10k"}">${(0, import_chunks.v)(Tooltip, "Tooltip").$$render(
    $$result,
    {
      title: $t("CHANGE_DATE_OF_BIRTH"),
      width: 290,
      formName: "dob"
    },
    {},
    {
      default: () => {
        return `${(0, import_chunks.v)(import_profileStore.T, "ThreeDotsIcon").$$render($$result, { bgColor: "green" }, {}, {})}`;
      }
    }
  )}</div></div></div></div></div>
<div class="${"contact svelte-1w9w10k"}"><div class="${"text-3 mb-1  svelte-1w9w10k"}">${(0, import_chunks.e)($t("PROFILE.GENERAL.CONTACT"))}</div>
	<div class="${"grid-2  svelte-1w9w10k"}"><div class="${"input__wrapper svelte-1w9w10k"}"><label for="${"name"}" class="${"label svelte-1w9w10k"}">Email</label>
			<div class="${"relative svelte-1w9w10k"}"><input class="${" svelte-1w9w10k"}" type="${"email"}" value="${"Contact@esi.com"}">
				<div class="${"abs__input__dots svelte-1w9w10k"}">${(0, import_chunks.v)(Tooltip, "Tooltip").$$render(
    $$result,
    {
      title: $t("CHANGE_EMAIL"),
      width: 225,
      formName: "email"
    },
    {},
    {
      default: () => {
        return `${(0, import_chunks.v)(import_profileStore.T, "ThreeDotsIcon").$$render($$result, { bgColor: "green" }, {}, {})}`;
      }
    }
  )}</div></div></div></div>
</div>`;
});
const FirstNameForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="${"mt-1"}">${(0, import_chunks.e)($t("PROFILE_NAMES_CHANGE"))}</div>
<div class="${"modal_main-row"}"><form class="${"mt-1_5"}"><input type="${"text"}"${(0, import_chunks.d)("placeholder", $t("PROFILE_EDIT_FN"), 0)} class="${"mb-0_625"}">
    <input type="${"text"}"${(0, import_chunks.d)("placeholder", $t("PROFILE_EDIT_LN"), 0)}>
    <button class="${"btn _218"}">${(0, import_chunks.e)($t("CONTINUE"))}</button></form></div>`;
});
const UserNameForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $confirmModalState, $$unsubscribe_confirmModalState;
  let $t, $$unsubscribe_t;
  let $form, $$unsubscribe_form;
  $$unsubscribe_confirmModalState = (0, import_chunks.a)(import_profileStore.c, (value) => $confirmModalState = value);
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  const { form, errors, state, handleChange, handleSubmit } = (0, import_create_form.c)({
    initialValues: { userName: "" },
    validationSchema: yup.object().shape({
      userName: yup.string().min(3, $t("USER_NAME_RANGE")).max(20, $t("USER_NAME_RANGE")).required($t("ENTER_USER_NAME"))
    }),
    onSubmit: () => {
      (0, import_chunks.f)(import_profileStore.c, $confirmModalState = true, $confirmModalState);
      $$props.submitChanges;
    }
  });
  $$unsubscribe_form = (0, import_chunks.a)(form, (value) => $form = value);
  $$unsubscribe_errors = (0, import_chunks.a)(errors, (value) => $errors = value);
  $$unsubscribe_errors();
  $$unsubscribe_confirmModalState();
  $$unsubscribe_t();
  $$unsubscribe_form();
  return `<div class="${"mt-1"}">${(0, import_chunks.e)($t("CHANGE_USER_NAME"))}</div>
<div class="${"modal_main-row"}"><form class="${"mt-1_5"}"><input type="${"text"}"${(0, import_chunks.d)("placeholder", $t("ENTER_USER_NAME"), 0)} autocomplete${(0, import_chunks.h)(($errors.userName ? "error" : "").trim())}${(0, import_chunks.d)("value", $form.userName, 0)}>
    ${$errors.userName ? `<small class="${"error_text last"}">${(0, import_chunks.e)($errors.userName)}</small>` : ``}
    <button class="${"btn _218"}">${(0, import_chunks.e)($t("CONTINUE"))}</button></form></div>`;
});
const emailrRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const EmailForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $confirmModalState, $$unsubscribe_confirmModalState;
  let $t, $$unsubscribe_t;
  let $form, $$unsubscribe_form;
  $$unsubscribe_confirmModalState = (0, import_chunks.a)(import_profileStore.c, (value) => $confirmModalState = value);
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  const { form, errors, state, handleChange, handleSubmit } = (0, import_create_form.c)({
    initialValues: { email: "" },
    validationSchema: yup.object().shape({
      email: yup.string().matches(emailrRegEx, $t("INCORRECT_EMAIL")).required($t("ENTER_EMAIL"))
    }),
    onSubmit: () => {
      (0, import_chunks.f)(import_profileStore.c, $confirmModalState = true, $confirmModalState);
      $$props.submitChanges;
    }
  });
  $$unsubscribe_form = (0, import_chunks.a)(form, (value) => $form = value);
  $$unsubscribe_errors = (0, import_chunks.a)(errors, (value) => $errors = value);
  $$unsubscribe_errors();
  $$unsubscribe_confirmModalState();
  $$unsubscribe_t();
  $$unsubscribe_form();
  return `<div class="${"mt-1"}">${(0, import_chunks.e)($t("CHANGE_EMAIL"))}</div>
<div class="${"modal_main-row"}"><form class="${"mt-1_5"}"><input type="${"text"}"${(0, import_chunks.d)("placeholder", $t("NEW_EMAIL"), 0)} autocomplete${(0, import_chunks.h)(($errors.email ? "error" : "").trim())}${(0, import_chunks.d)("value", $form.email, 0)}>
    ${$errors.email ? `<small class="${"error_text last"}">${(0, import_chunks.e)($errors.email)}</small>` : ``}
    <button class="${"btn _218"}">${(0, import_chunks.e)($t("CONTINUE"))}</button></form></div>`;
});
const GenderForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="${"mt-1"}">${(0, import_chunks.e)($t("CHANGE_GENDER"))}</div>
<div class="${"modal_main-row"}"><form class="${"mt-1_5"}">${(0, import_chunks.v)(import_Dropdown.D, "Dropdown").$$render($$result, { itemsData: [$t("MALE"), $t("FEMALE")] }, {}, {})}
    <button class="${"btn _218"}">${(0, import_chunks.e)($t("CONTINUE"))}</button></form></div>`;
});
const DateOfBirthForm_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".date-input.svelte-5vw19b{position:relative;padding:0}input.date.svelte-5vw19b{text-align:left}input.date.svelte-5vw19b::placeholder{color:#000}input.date.svelte-5vw19b:before{color:#000;content:attr(placeholder) !important;display:block;padding:23px 30px}",
  map: null
};
const DateOfBirthForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  let datePicker;
  let selectedDate = new Date();
  $$result.css.add(css$3);
  $$unsubscribe_t();
  return `<div class="${"mt-1"}">${(0, import_chunks.e)($t("CHANGE_DATE_OF_BIRTH"))}</div>
<div class="${"modal_main-row"}"><form class="${"mt-1_5"}"><div class="${"input-sv small date-input svelte-5vw19b"}"><input class="${"date svelte-5vw19b"}"${(0, import_chunks.d)("placeholder", selectedDate || `${$t("DATE_OF_BIRTH")}*`, 0)}${(0, import_chunks.d)("this", datePicker, 0)}></div>
    <button class="${"btn _218"}">${(0, import_chunks.e)($t("CONTINUE"))}</button></form>
</div>`;
});
const loginPassForm_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".btn.login.svelte-s6hmrb{width:229px;margin:0;transition:none}.forgot__pass.svelte-s6hmrb{padding:1.25rem}.forgot__btn.svelte-s6hmrb{appearance:none;border:none;background-color:transparent;padding:0;width:auto;margin:0;color:#ababab;font-weight:var(--font-weight-normal)}.form__bottom.svelte-s6hmrb{margin-top:2.125rem}@media only screen and (max-width: 991px){.btn.login.svelte-s6hmrb{width:100%}}",
  map: null
};
const LoginPassForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $t, $$unsubscribe_t;
  let $form, $$unsubscribe_form;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  let { authDataCallback } = $$props;
  const { form, errors, state, handleChange, handleSubmit } = (0, import_create_form.c)({
    initialValues: { userName: "", password: "" },
    validationSchema: yup.object().shape({
      userName: yup.string().required($t("ENTER_USER_NAME")),
      password: yup.string().required($t("ENTER_USER_PW"))
    }),
    onSubmit: () => {
      authDataCallback();
    }
  });
  $$unsubscribe_form = (0, import_chunks.a)(form, (value) => $form = value);
  $$unsubscribe_errors = (0, import_chunks.a)(errors, (value) => $errors = value);
  if ($$props.authDataCallback === void 0 && $$bindings.authDataCallback && authDataCallback !== void 0)
    $$bindings.authDataCallback(authDataCallback);
  $$result.css.add(css$2);
  $$unsubscribe_errors();
  $$unsubscribe_t();
  $$unsubscribe_form();
  return `<form class="${"mt-1_5"}"><input type="${"text"}"${(0, import_chunks.d)("placeholder", $t("USER_NAME"), 0)} class="${["mb-0_625", $errors.userName ? "error" : ""].join(" ").trim()}" autocomplete${(0, import_chunks.d)("value", $form.userName, 0)}>
  ${$errors.userName ? `<small class="${"error_text"}">${(0, import_chunks.e)($errors.userName)}</small>` : ``}
  <div class="${"input__wrapper"}"><div class="${"eyeWrapper"}">${(0, import_chunks.v)(import_EyePW_ico.E, "EyePwIco").$$render($$result, { class: $errors.password ? "error" : "" }, {}, {})}</div>
    <input type="${"password"}"${(0, import_chunks.d)("placeholder", $t("PW"), 0)} autocomplete${(0, import_chunks.h)(($errors.password ? "error" : "").trim())}${(0, import_chunks.d)("value", $form.password, 0)}></div>
  ${$errors.password ? `<small class="${"error_text last"}">${(0, import_chunks.e)($errors.password)}</small>` : ``}

  <div class="${"form__bottom d-flex justify-sb svelte-s6hmrb"}"><div class="${"forgot__pass svelte-s6hmrb"}"><button class="${"btn forgot__btn svelte-s6hmrb"}">${(0, import_chunks.e)($t("FORGOT_PW"))}</button></div>
    <button class="${"btn login svelte-s6hmrb"}">${(0, import_chunks.e)($t("LOGIN"))}</button></div>
</form>`;
});
const GeneralModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".modal_main.svelte-apq265.svelte-apq265{margin:0 auto}.modal_main-body.svelte-apq265.svelte-apq265{max-width:587px;margin:0 auto}.modal_main.svelte-apq265 .modal_head_medium.svelte-apq265{color:var(--green-dark-color);margin-top:2.5rem}.modal_main-row.svelte-apq265.svelte-apq265{max-width:360px;margin:0 auto 0 auto;color:#000}.btn.success.svelte-apq265.svelte-apq265{margin:2.125rem auto 0 auto}.finish__content.svelte-apq265.svelte-apq265{padding-top:141px;margin:0 auto;max-width:374px}.finish__content.svelte-apq265 .modal_head_medium.svelte-apq265{margin:0}.form__wrapper.svelte-apq265.svelte-apq265{z-index:999;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;padding:2rem;background:#4448;display:flex;align-items:center;justify-content:center}.confirm__form.svelte-apq265.svelte-apq265{position:relative;border-radius:10px;background:white;padding:2.125rem;width:100%;max-width:950px;min-height:584px}.close_icon.svelte-apq265.svelte-apq265{position:absolute;top:34px;right:34px;width:24px;height:24px;cursor:pointer;transition:transform 0.3s}.close_icon.svelte-apq265.svelte-apq265:hover{transform:scale(1.2)}",
  map: null
};
const GeneralModal = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $confirmModalState, $$unsubscribe_confirmModalState;
  let $modalClassName, $$unsubscribe_modalClassName;
  let $t, $$unsubscribe_t;
  let $profileEditForm, $$unsubscribe_profileEditForm;
  $$unsubscribe_confirmModalState = (0, import_chunks.a)(import_profileStore.c, (value) => $confirmModalState = value);
  $$unsubscribe_modalClassName = (0, import_chunks.a)(import_profileStore.m, (value) => $modalClassName = value);
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_profileEditForm = (0, import_chunks.a)(import_profileStore.p, (value) => $profileEditForm = value);
  let formStep = 1;
  const login = () => formStep = 2;
  const submitNewName = () => {
    (0, import_chunks.f)(import_profileStore.c, $confirmModalState = true, $confirmModalState);
  };
  $$result.css.add(css$1);
  $$unsubscribe_confirmModalState();
  $$unsubscribe_modalClassName();
  $$unsubscribe_t();
  $$unsubscribe_profileEditForm();
  return `${(0, import_chunks.v)(import_Modal.M, "Modal").$$render(
    $$result,
    {
      id: "general-info",
      className: $modalClassName
    },
    {},
    {
      default: () => {
        return `<div class="${"modal_main text-center svelte-apq265"}"><img${(0, import_chunks.d)("src", import_logo_green.g, 0)} alt="${"esi logo img"}">
    <div class="${"modal_head_medium text-1 svelte-apq265"}">${(0, import_chunks.e)($t("WELCOME"))}</div>
    <div class="${"modal_main-body  svelte-apq265"}">${formStep === 1 ? `<div class="${"mt-1"}">${(0, import_chunks.e)($t("VERIFY_ACCOUNT"))}</div>

        ${(0, import_chunks.v)(LoginPassForm, "LoginPassForm").$$render($$result, { authDataCallback: login }, {}, {})}` : `${formStep === 2 ? `<div class="${"mt-1"}">${(0, import_chunks.e)($t("VERIFY_ACCOUNT"))}</div>
        <div class="${"modal_main-row svelte-apq265"}">${(0, import_chunks.v)(import_VerifyCodeForm.V, "VerifyTabs").$$render($$result, { sendVerifyCallback: () => formStep = 3 }, {}, {})}</div>` : `${formStep === 3 ? `<div class="${"mt-1"}">${(0, import_chunks.e)($t("VERIFY_ACCOUNT"))}</div>
        <div class="${"modal_main-row svelte-apq265"}">${(0, import_chunks.v)(import_VerifyCodeForm.a, "VerifyCodeForm").$$render(
          $$result,
          {
            submitVerificationCode: () => formStep = 4
          },
          {},
          {}
        )}</div>` : `${formStep === 4 ? `${$profileEditForm === "userName" ? `${(0, import_chunks.v)(UserNameForm, "UserNameForm").$$render($$result, { submitChanges: submitNewName }, {}, {})}` : `${$profileEditForm === "firstName" ? `${(0, import_chunks.v)(FirstNameForm, "FirstNameForm").$$render($$result, { submitChanges: submitNewName }, {}, {})}` : `${$profileEditForm === "gender" ? `${(0, import_chunks.v)(GenderForm, "GenderForm").$$render($$result, { submitChanges: submitNewName }, {}, {})}` : `${$profileEditForm === "dob" ? `${(0, import_chunks.v)(DateOfBirthForm, "DateOfBirthForm").$$render($$result, { submitChanges: submitNewName }, {}, {})}` : `${$profileEditForm === "email" ? `${(0, import_chunks.v)(EmailForm, "EmailForm").$$render($$result, { submitChanges: submitNewName }, {}, {})}` : ``}`}`}`}`}` : ``}`}`}`}</div></div>`;
      }
    }
  )}
${$confirmModalState === true ? `<div class="${"form__wrapper svelte-apq265"}"><div class="${"confirm__form text-center svelte-apq265"}"><div class="${"finish__content svelte-apq265"}"><div class="${"modal_head_medium text-1 svelte-apq265"}">${(0, import_chunks.e)($t("PROFILE_UPDATED"))}</div>
        <button class="${"btn success svelte-apq265"}">${(0, import_chunks.e)($t("BACK"))}</button></div>
      <img class="${"close_icon svelte-apq265"}"${(0, import_chunks.d)("src", import_Modal.c, 0)} alt="${"esi close icon"}"></div></div>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".modal_main-row{max-width:360px;margin:0 auto 0 auto;color:#000}.profile__wrapper.svelte-48r66k{background:var(--white)}.general.svelte-48r66k{flex-grow:1}@media only screen and (max-width: 991px){.profile__wrapper.svelte-48r66k{flex-wrap:wrap;padding:2rem 20px;margin-bottom:4rem}.general.svelte-48r66k{margin-top:24px;margin-left:0}}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)($t("PROFILE.GENERAL.TITLE"))}</title>`, ""}<meta name="${"description"}"${(0, import_chunks.d)("content", $t("PROFILE.GENERAL.TITLE"), 0)} data-svelte="svelte-9l4ydj"><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"}" data-svelte="svelte-9l4ydj">`, ""}

<div class="${"profile__wrapper box_shadow-medium p-2 b-radius-8 d-flex svelte-48r66k"}">${(0, import_chunks.v)(BrowseImg, "BrowseImg").$$render($$result, {}, {}, {})}
	<div class="${"ml-2 general svelte-48r66k"}">${(0, import_chunks.v)(GeneralInfo, "GeneralInfo").$$render($$result, {}, {}, {})}</div></div>

${(0, import_chunks.v)(GeneralModal, "GeneralModal").$$render($$result, {}, {}, {})}`;
});
