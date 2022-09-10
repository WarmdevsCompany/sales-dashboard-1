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
  V: () => VerifyTabs,
  a: () => VerifyCodeForm
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
var import_create_form = require("./create-form.js");
var yup = __toESM(require("yup"));
var import_i18n = require("./i18n.js");
var import_lite = require("dequal/lite");
const Radio_svelte_svelte_type_style_lang = "";
const VerifyEmail = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $t, $$unsubscribe_t;
  let $form, $$unsubscribe_form;
  $$unsubscribe_t = (0, import_index.a)(import_i18n.t, (value) => $t = value);
  const { form, errors, state, handleChange, handleSubmit } = (0, import_create_form.c)({
    initialValues: { email: "" },
    validationSchema: yup.object().shape({
      email: yup.string().email().required($t("ENTER_EMAIL"))
    }),
    onSubmit: () => {
      $$props.sendVerifyCallback();
    }
  });
  $$unsubscribe_form = (0, import_index.a)(form, (value) => $form = value);
  $$unsubscribe_errors = (0, import_index.a)(errors, (value) => $errors = value);
  $$unsubscribe_errors();
  $$unsubscribe_t();
  $$unsubscribe_form();
  return `<form class="${"mt-1_5"}"><input type="${"email"}" placeholder="${"Email"}" autocomplete${(0, import_index.h)(($errors.email ? "error" : "").trim())}${(0, import_index.d)("value", $form.email, 0)}>
  ${$errors.email ? `<small class="${"error_text last"}">${(0, import_index.e)($errors.email)}</small>` : ``}
  <button class="${"btn _218"}">${(0, import_index.e)($t("SEND"))}</button></form>`;
});
const VerifyTabs = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_index.a)(import_i18n.t, (value) => $t = value);
  let { sendVerifyCallback } = $$props;
  let { activeTabValue = 1 } = $$props;
  let radioValue;
  console.log(radioValue);
  [
    { value: "email", id: 1, label: "Email" },
    {
      value: "phone",
      id: 2,
      label: $t("PHONE")
    }
  ];
  if ($$props.sendVerifyCallback === void 0 && $$bindings.sendVerifyCallback && sendVerifyCallback !== void 0)
    $$bindings.sendVerifyCallback(sendVerifyCallback);
  if ($$props.activeTabValue === void 0 && $$bindings.activeTabValue && activeTabValue !== void 0)
    $$bindings.activeTabValue(activeTabValue);
  $$unsubscribe_t();
  return `<div class="${"mt-1_5"}"></div>

  
    ${(0, import_index.v)(VerifyEmail, "VerifyEmail").$$render($$result, { sendVerifyCallback }, {}, {})}
  
`;
});
const VerifyCodeForm = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $t, $$unsubscribe_t;
  let $form, $$unsubscribe_form;
  $$unsubscribe_t = (0, import_index.a)(import_i18n.t, (value) => $t = value);
  const { form, errors, state, handleChange, handleSubmit } = (0, import_create_form.c)({
    initialValues: { code: "" },
    validationSchema: yup.object().shape({
      code: yup.number().required($t("ENTER_CODE"))
    }),
    onSubmit: () => {
      $$props.submitVerificationCode();
    }
  });
  $$unsubscribe_form = (0, import_index.a)(form, (value) => $form = value);
  $$unsubscribe_errors = (0, import_index.a)(errors, (value) => $errors = value);
  $$unsubscribe_errors();
  $$unsubscribe_t();
  $$unsubscribe_form();
  return `<form class="${"mt-1_5"}"><input type="${"number"}"${(0, import_index.d)("placeholder", $t("SETTINGS_VERIFY_CODE"), 0)} autocomplete${(0, import_index.h)(($errors.code ? "error" : "").trim())}${(0, import_index.d)("value", $form.code, 0)}>
  ${$errors.code ? `<small class="${"error_text last"}">${(0, import_index.e)($errors.code)}</small>` : ``}
  <button class="${"btn _218"}">${(0, import_index.e)($t("CONTINUE"))}</button></form>`;
});
