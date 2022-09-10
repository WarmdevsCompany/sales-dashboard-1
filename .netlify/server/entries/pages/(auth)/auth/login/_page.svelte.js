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
var import_logo_green = require("../../../../../chunks/logo-green.js");
var import_EyePW_ico = require("../../../../../chunks/EyePW_ico.js");
var import_create_form = require("../../../../../chunks/create-form.js");
var yup = __toESM(require("yup"));
var import_i18n = require("../../../../../chunks/i18n.js");
var import_axios = require("../../../../../chunks/axios.js");
var import_index3 = require("../../../../../chunks/index3.js");
var import_lite = require("dequal/lite");
var import_navigation = require("../../../../../chunks/navigation.js");
var import_axios2 = require("axios");
const LoginForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "form.svelte-1ltuhl1.svelte-1ltuhl1{width:100%;max-width:587px;color:var(--text-color)}.btn.login.svelte-1ltuhl1.svelte-1ltuhl1{width:229px;margin:0 0 0 auto;transition:none}.forgot__pass.svelte-1ltuhl1.svelte-1ltuhl1{padding:0.875rem}.forgot__btn.svelte-1ltuhl1.svelte-1ltuhl1{appearance:none;border:none;background-color:transparent;padding:0;width:auto;margin:0;color:#ababab;font-weight:var(--font-weight-normal)}.login__btn__wrapper.svelte-1ltuhl1.svelte-1ltuhl1{margin-top:22px}.register__head.svelte-1ltuhl1.svelte-1ltuhl1{font-weight:var(--font-weight-medium)}.register.svelte-1ltuhl1 a.svelte-1ltuhl1{font-weight:var(--font-weight-bolder)}@media only screen and (max-width: 991px){.btn.login.svelte-1ltuhl1.svelte-1ltuhl1{width:100%}}",
  map: null
};
const LoginForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $t, $$unsubscribe_t;
  let $form, $$unsubscribe_form;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  let buttonText = $t("LOGIN");
  let errorMessages = null;
  const { form, errors, state, handleChange, handleSubmit } = (0, import_create_form.c)({
    initialValues: { userName: "", password: "" },
    validationSchema: yup.object().shape({
      userName: yup.string().required($t("ENTER_USER_NAME")),
      password: yup.string().required($t("ENTER_USER_PW"))
    }),
    onSubmit: async (values) => {
      try {
        buttonText = `${$t("LOADING")}...`;
        await (0, import_axios.l)({
          login: values.userName,
          password: values.password
        });
      } catch (e) {
        buttonText = $t("LOGIN");
        errorMessages = e;
      }
    }
  });
  $$unsubscribe_form = (0, import_chunks.a)(form, (value) => $form = value);
  $$unsubscribe_errors = (0, import_chunks.a)(errors, (value) => $errors = value);
  $$result.css.add(css$1);
  $$unsubscribe_errors();
  $$unsubscribe_t();
  $$unsubscribe_form();
  return `<form class="${"mt-1_5 svelte-1ltuhl1"}"><input type="${"text"}"${(0, import_chunks.d)("placeholder", $t("USER_NAME"), 0)} class="${["mb-0_625", $errors.userName ? "error" : ""].join(" ").trim()}" autocomplete${(0, import_chunks.d)("value", $form.userName, 0)}>
	${$errors.userName ? `<small class="${"error_text"}">${(0, import_chunks.e)($errors.userName)}</small>` : ``}
	<div class="${"input__wrapper"}"><div class="${"eyeWrapper"}">${(0, import_chunks.v)(import_EyePW_ico.E, "EyePwIco").$$render($$result, { class: $errors.password ? "error" : "" }, {}, {})}</div>
		<input type="${"password"}"${(0, import_chunks.d)("placeholder", $t("PW"), 0)} autocomplete${(0, import_chunks.h)(($errors.password ? "error" : "").trim())}${(0, import_chunks.d)("value", $form.password, 0)}></div>
	${$errors.password ? `<small class="${"error_text last"}">${(0, import_chunks.e)($errors.password)}</small>` : ``}
	${errorMessages ? `<small class="${"error_text last"}">${(0, import_chunks.e)(errorMessages)}</small>` : ``}
	<div class="${"d-flex justify-sb align-center"}"><div class="${"forgot__pass svelte-1ltuhl1"}"><a href="${"#"}" class="${"forgot__btn svelte-1ltuhl1"}">${(0, import_chunks.e)($t("FORGOT_PW"))}</a></div></div>
	<div class="${"login__btn__wrapper d-flex justify-sb align-center  svelte-1ltuhl1"}"><div class="${"register svelte-1ltuhl1"}"><div class="${"register__head svelte-1ltuhl1"}">${(0, import_chunks.e)($t("NOT_GREENSAVER"))}</div>
			<a href="${"https://esi.webflow.io/subscribe-test"}" class="${"text-green svelte-1ltuhl1"}">${(0, import_chunks.e)($t("START_NOW"))}</a></div>
		<button class="${"btn login svelte-1ltuhl1"}">${(0, import_chunks.e)(buttonText)}</button></div>
</form>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".greenForm.svelte-3shsvg{display:flex;align-items:center;justify-content:center;width:100%;min-height:100vh;background:linear-gradient(0deg, #053900, #053900), #ffffff}.form__content.svelte-3shsvg{position:relative;background:white;padding:2.125rem;width:100%;max-width:767px;min-height:100vh}.content.svelte-3shsvg{width:100%;margin:0 auto;padding-top:55px}.absolute.svelte-3shsvg{display:none;position:absolute;width:767px;top:0;left:0;right:0;bottom:0;margin:0 auto;z-index:1}.circle_bg.svelte-3shsvg{width:665px;height:665px;background:#00b2ff;position:absolute;border-radius:50%;z-index:-1;opacity:0.05;filter:blur(400px)}.circle_bg.left.svelte-3shsvg{top:77px;left:-465px}.circle_bg.right.svelte-3shsvg{bottom:-152px;right:-545px}.text-1.svelte-3shsvg{color:var(--text-color);margin-top:41px}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = (0, import_chunks.a)(import_i18n.t, (value) => $t = value);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `${$$result.head += `${$$result.title = `<title>Login</title>`, ""}<meta name="${"description"}" content="${"Login page"}" data-svelte="svelte-a5zsc6">`, ""}
  <div class="${"greenForm svelte-3shsvg"}"><div class="${"box_shadow-medium form__content svelte-3shsvg"}"><div class="${"content d-flex flex-col justify-cc align-center svelte-3shsvg"}"><img${(0, import_chunks.d)("src", import_logo_green.g, 0)} alt="${"esi logo img"}">
		<div class="${"text-1 mb-1 svelte-3shsvg"}">${(0, import_chunks.e)($t("LOGIN"))}</div>
		${(0, import_chunks.v)(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div>
	  <div class="${"absolute svelte-3shsvg"}"><div class="${"circle_bg left svelte-3shsvg"}"></div>
		<div class="${"circle_bg right svelte-3shsvg"}"></div></div></div>
  </div>`;
});
