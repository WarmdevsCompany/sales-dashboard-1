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
  M: () => Modal,
  c: () => closeIcon,
  g: () => getModal
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
const closeIcon = "/_app/immutable/assets/close-8d142fbb.svg";
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: "#topModal.svelte-tya3sg.svelte-tya3sg{z-index:9999;position:fixed;top:0;left:0;right:0;bottom:0;padding:2rem;background:#4448;display:flex;align-items:center;justify-content:center}#topModal.greenForm.svelte-tya3sg.svelte-tya3sg{z-index:99;position:fixed;top:0;left:0;right:0;bottom:0;padding:0rem;display:flex;align-items:center;justify-content:center}#modal.svelte-tya3sg.svelte-tya3sg{position:relative;border-radius:10px;background:white;padding:2.125rem;width:100%;max-width:950px;min-height:584px;margin-left:257px}.visible.svelte-tya3sg.svelte-tya3sg{visibility:visible !important}#modal.plan__modal.svelte-tya3sg.svelte-tya3sg{padding:0;overflow:hidden;background:transparent}#modal.greenForm.svelte-tya3sg.svelte-tya3sg{padding:0;overflow:hidden;background:linear-gradient(0deg, #053900, #053900), #ffffff;border-radius:0;max-width:none;height:100%;margin:0}#modal.greenForm.svelte-tya3sg #modal-content.svelte-tya3sg{max-width:767px;width:100%;min-height:100%;border-radius:0;margin:0 auto;padding-top:55px;background:var(--white);box-shadow:0px 25px 35px rgba(0, 0, 0, 0.15),\n      inset 0px 0px 35px rgba(255, 255, 255, 0.15);overflow:visible;backdrop-filter:blur(5px);z-index:2;position:relative}#close.svelte-tya3sg.svelte-tya3sg{position:absolute;top:34px;right:34px;width:24px;height:24px;cursor:pointer;transition:transform 0.3s}#close.greenForm.svelte-tya3sg.svelte-tya3sg{display:none}#close.svelte-tya3sg.svelte-tya3sg:hover{transform:scale(1.2)}#modal-content.svelte-tya3sg.svelte-tya3sg{max-width:calc(100vw - 20px);max-height:calc(100vh - 20px);overflow:auto;border-radius:10px}#modal.greenForm.svelte-tya3sg .absolute.svelte-tya3sg{display:block}.absolute.svelte-tya3sg.svelte-tya3sg{display:none;position:absolute;width:767px;top:0;left:0;right:0;bottom:0;margin:0 auto;z-index:1}.circle_bg.svelte-tya3sg.svelte-tya3sg{width:665px;height:665px;background:#00b2ff;position:absolute;border-radius:50%;z-index:-1;opacity:0.05;filter:blur(400px)}.circle_bg.left.svelte-tya3sg.svelte-tya3sg{top:77px;left:-465px}.circle_bg.right.svelte-tya3sg.svelte-tya3sg{bottom:-152px;right:-545px}@media only screen and (max-width: 991px){#modal.svelte-tya3sg.svelte-tya3sg{max-width:100%;max-height:90vh;overflow:auto;margin:auto}#modal-content.svelte-tya3sg.svelte-tya3sg{overflow:hidden}#modal.greenForm.svelte-tya3sg.svelte-tya3sg{max-width:90%;border-radius:0.5rem}#modal.greenForm.svelte-tya3sg #modal-content.svelte-tya3sg{padding-left:20px;padding-right:20px}}",
  map: null
};
let onTop;
const modals = {};
function getModal(id = "") {
  return modals[id];
}
function hideScrollbar() {
  document.body.classList.add("hidden");
}
function showScrollbar() {
  document.body.classList.remove("hidden");
}
const Modal = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let visible = false;
  let prevOnTop;
  let closeCallback;
  let { id = "" } = $$props;
  let { className = "" } = $$props;
  function open(callback) {
    closeCallback = callback;
    if (visible)
      return;
    prevOnTop = onTop;
    hideScrollbar();
    visible = true;
  }
  function close(retVal) {
    if (!visible)
      return;
    onTop = prevOnTop;
    if (onTop == null)
      showScrollbar();
    visible = false;
    if (closeCallback)
      closeCallback(retVal);
  }
  modals[id] = { open, close };
  (0, import_index.o)(() => {
    delete modals[id];
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css);
  return `
${visible ? `<div id="${"topModal"}" class="${(0, import_index.e)((0, import_index.k)(className), true) + " svelte-tya3sg"}"><div id="${"modal"}" class="${"box_shadow-medium " + (0, import_index.e)(className, true) + " svelte-tya3sg"}"><img id="${"close"}" class="${(0, import_index.e)((0, import_index.k)(className), true) + " svelte-tya3sg"}"${(0, import_index.d)("src", closeIcon, 0)} alt="${"esi close icon"}">

      <div id="${"modal-content"}" class="${"svelte-tya3sg"}">${slots.default ? slots.default({}) : ``}</div>
      <div class="${"absolute svelte-tya3sg"}"><div class="${"circle_bg left svelte-tya3sg"}"></div>
        <div class="${"circle_bg right svelte-tya3sg"}"></div></div></div></div>` : ``}`;
});
