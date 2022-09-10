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
var import_logo_green = require("../../../../../chunks/logo-green.js");
var import_index3 = require("../../../../../chunks/index3.js");
var import_VerifyCodeForm = require("../../../../../chunks/VerifyCodeForm.js");
var import_EyePW_ico = require("../../../../../chunks/EyePW_ico.js");
var import_create_form = require("../../../../../chunks/create-form.js");
var yup = __toESM(require("yup"));
var import_i18n = require("../../../../../chunks/i18n.js");
var import_lite = require("dequal/lite");
const lockImg = "/_app/immutable/assets/padlock-088a0fcb.svg";
const modalClassName = (0, import_index3.w)("greenForm");
const confirmModalState = (0, import_index3.w)(false);
const LoginPassForm_svelte_svelte_type_style_lang = "";
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
const passwordRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const ChangePassForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $confirmModalState, $$unsubscribe_confirmModalState;
  let $t, $$unsubscribe_t;
  let $form, $$unsubscribe_form;
  $$unsubscribe_confirmModalState = (0, import_chunks.a)(confirmModalState, (value) => $confirmModalState = value);
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  const { form, errors, state, handleChange, handleSubmit } = (0, import_create_form.c)({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: yup.object().shape({
      password: yup.string().min(8, $t("PW_RANGE")).max(16, $t("PW_RANGE")).matches(passwordRegEx, $t("PW_CHARS")).required($t("ENTER_USER_PW")),
      confirmPassword: yup.string().min(8, $t("PW_RANGE")).max(16, $t("PW_RANGE")).matches(passwordRegEx, $t("PW_CHARS")).required($t("ENTER_USER_PW")).oneOf([yup.ref("password")], $t("PW_NOT_MATCH"))
    }),
    onSubmit: () => {
      (0, import_chunks.f)(confirmModalState, $confirmModalState = true, $confirmModalState);
    }
  });
  $$unsubscribe_form = (0, import_chunks.a)(form, (value) => $form = value);
  $$unsubscribe_errors = (0, import_chunks.a)(errors, (value) => $errors = value);
  $$unsubscribe_errors();
  $$unsubscribe_confirmModalState();
  $$unsubscribe_t();
  $$unsubscribe_form();
  return `<form class="${"mt-1_5"}"><div class="${"input__wrapper"}"><div class="${"eyeWrapper"}">${(0, import_chunks.v)(import_EyePW_ico.E, "EyePwIco").$$render($$result, { class: $errors.password ? "error" : "" }, {}, {})}</div>
    <input type="${"password"}" class="${["mb-0_625", $errors.password ? "error" : ""].join(" ").trim()}"${(0, import_chunks.d)("placeholder", $t("NEW_PASSWORD"), 0)} autocomplete${(0, import_chunks.d)("value", $form.password, 0)}></div>
  ${$errors.password ? `<small class="${"error_text "}">${(0, import_chunks.e)($errors.password)}</small>` : ``}
  <div class="${"input__wrapper"}"><div class="${"eyeWrapper"}">${(0, import_chunks.v)(import_EyePW_ico.E, "EyePwIco").$$render($$result, { class: $errors.password ? "error" : "" }, {}, {})}</div>
    <input type="${"password"}"${(0, import_chunks.d)("placeholder", $t("REPEAT_PASSWORD"), 0)} autocomplete${(0, import_chunks.h)(($errors.confirmPassword ? "error" : "").trim())}${(0, import_chunks.d)("value", $form.confirmPassword, 0)}></div>
  ${$errors.confirmPassword ? `<small class="${"error_text last"}">${(0, import_chunks.e)($errors.confirmPassword)}</small>` : ``}
  <button class="${"btn _218"}">${(0, import_chunks.e)($t("CONTINUE"))}</button></form>`;
});
const ChangePassModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".modal_main.svelte-7dijxq.svelte-7dijxq{margin:0 auto}.modal_main-body.svelte-7dijxq.svelte-7dijxq{max-width:587px;margin:0 auto}.modal_main.svelte-7dijxq .modal_head_medium.svelte-7dijxq{color:var(--green-dark-color);margin-top:2.5rem}.modal_main-row.svelte-7dijxq.svelte-7dijxq{max-width:360px;margin:0 auto 0 auto;color:#000}.btn.success.svelte-7dijxq.svelte-7dijxq{margin:2.125rem auto 0 auto}.finish__content.svelte-7dijxq.svelte-7dijxq{padding-top:153px;margin:0 auto;max-width:374px}.finish__content.svelte-7dijxq .modal_head_medium.svelte-7dijxq{margin:0}input.mb-0_625{margin-bottom:0.625rem}.form__wrapper.svelte-7dijxq.svelte-7dijxq{z-index:999;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;padding:2rem;background:#4448;display:flex;align-items:center;justify-content:center}.confirm__form.svelte-7dijxq.svelte-7dijxq{position:relative;border-radius:10px;background:white;padding:2.125rem;width:100%;max-width:950px;min-height:584px}.close_icon.svelte-7dijxq.svelte-7dijxq{position:absolute;top:34px;right:34px;width:24px;height:24px;cursor:pointer;transition:transform 0.3s}.close_icon.svelte-7dijxq.svelte-7dijxq:hover{transform:scale(1.2)}",
  map: null
};
const ChangePassModal = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $confirmModalState, $$unsubscribe_confirmModalState;
  let $t, $$unsubscribe_t;
  let $modalClassName, $$unsubscribe_modalClassName;
  $$unsubscribe_confirmModalState = (0, import_chunks.a)(confirmModalState, (value) => $confirmModalState = value);
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$unsubscribe_modalClassName = (0, import_chunks.a)(modalClassName, (value) => $modalClassName = value);
  let formStep = 1;
  let heading = $t("CHANGE_PASSWORD");
  const login = () => formStep = 2;
  $$result.css.add(css$1);
  {
    {
      if (formStep === 4) {
        heading = $t("NEW_PASSWORD");
      }
    }
  }
  $$unsubscribe_confirmModalState();
  $$unsubscribe_t();
  $$unsubscribe_modalClassName();
  return `${(0, import_chunks.v)(import_Modal.M, "Modal").$$render(
    $$result,
    {
      id: "change-password",
      className: $modalClassName
    },
    {},
    {
      default: () => {
        return `<div class="${"modal_main text-center svelte-7dijxq"}"><img${(0, import_chunks.d)("src", import_logo_green.g, 0)} alt="${"esi logo img"}">
    <div class="${"modal_head_medium text-1 svelte-7dijxq"}">${(0, import_chunks.e)(heading)}</div>
    <div class="${"modal_main-body  svelte-7dijxq"}">${formStep === 1 ? `<div class="${"mt-1"}">${(0, import_chunks.e)($t("VERIFY_ACCOUNT"))}</div>
        ${(0, import_chunks.v)(LoginPassForm, "LoginPassForm").$$render($$result, { authDataCallback: login }, {}, {})}` : `${formStep === 2 ? `<div class="${"mt-1"}">${(0, import_chunks.e)($t("VERIFY_ACCOUNT"))}</div>
        <div class="${"modal_main-row svelte-7dijxq"}">${(0, import_chunks.v)(import_VerifyCodeForm.V, "VerifyTabs").$$render($$result, { sendVerifyCallback: () => formStep = 3 }, {}, {})}</div>` : `${formStep === 3 ? `<div class="${"mt-1"}">${(0, import_chunks.e)($t("VERIFY_ACCOUNT"))}</div>
        <div class="${"modal_main-row svelte-7dijxq"}">${(0, import_chunks.v)(import_VerifyCodeForm.a, "VerifyCodeForm").$$render(
          $$result,
          {
            submitVerificationCode: () => formStep = 4
          },
          {},
          {}
        )}</div>` : `${formStep === 4 ? `<div class="${"modal_main-row svelte-7dijxq"}">${(0, import_chunks.v)(ChangePassForm, "ChangePassForm").$$render($$result, {}, {}, {})}</div>` : ``}`}`}`}</div></div>`;
      }
    }
  )}
${$confirmModalState === true ? `<div class="${"form__wrapper svelte-7dijxq"}"><div class="${"confirm__form text-center svelte-7dijxq"}"><div class="${"finish__content svelte-7dijxq"}"><div class="${"modal_head_medium text-1 svelte-7dijxq"}">${(0, import_chunks.e)($t("PROFILE_PW_CHANDED"))}</div>
        <button class="${"btn success svelte-7dijxq"}">${(0, import_chunks.e)($t("BACK"))}</button></div>
      <img class="${"close_icon svelte-7dijxq"}"${(0, import_chunks.d)("src", import_Modal.c, 0)} alt="${"esi close icon"}"></div></div>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".lock_icon.svelte-1bwwnd5.svelte-1bwwnd5{width:76px;height:76px}.change__password.svelte-1bwwnd5.svelte-1bwwnd5{padding-top:152px;color:var(--green-dark-color);height:100%;background:var(--white);min-height:78vh}.change__password.svelte-1bwwnd5 img.svelte-1bwwnd5{margin-bottom:1.6875rem}.change__password--main.svelte-1bwwnd5 button.svelte-1bwwnd5{margin:2.125rem auto 0 auto;width:auto}@media only screen and (max-width: 991px){.change__password.svelte-1bwwnd5.svelte-1bwwnd5{padding-top:4rem;padding-bottom:80px;min-height:0;margin-bottom:7rem}}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)($t("SECURITY"))}</title>`, ""}<meta name="${"description"}"${(0, import_chunks.d)("content", $t("SECURITY"), 0)} data-svelte="svelte-1l71iyx">`, ""}

<div class="${"change__password box_shadow-medium b-radius-8 d-flex justify-cc  svelte-1bwwnd5"}"><div class="${"change__password--main text-center svelte-1bwwnd5"}"><img${(0, import_chunks.d)("src", lockImg, 0)} alt="${"change password"}" class="${"lock_icon svelte-1bwwnd5"}">
		<div class="${"text-3"}">${(0, import_chunks.e)($t("CHANGE_PASSWORD"))}</div>
		<div class="${"text-xsm mt-0_5"}">${(0, import_chunks.e)($t("SETTINGS.LAST_PW_CHANGE"))} - <span class="${"text-green"}">27.07.21</span></div>
		<button class="${"btn svelte-1bwwnd5"}" on>${(0, import_chunks.e)($t("CHANGE_PASSWORD"))}</button></div></div>
${(0, import_chunks.v)(ChangePassModal, "ChangePassModal").$$render($$result, {}, {}, {})}`;
});
