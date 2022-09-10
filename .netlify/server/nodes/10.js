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
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  server: () => server,
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
var server = __toESM(require("../entries/pages/(public)/overview/general/_page.server.js"));
const index = 10;
const component = async () => (await Promise.resolve().then(() => __toESM(require("../entries/pages/(public)/overview/general/_page.svelte.js")))).default;
const file = "_app/immutable/components/pages/(public)/overview/general/_page.svelte-01e3db00.js";
const imports = ["_app/immutable/components/pages/(public)/overview/general/_page.svelte-01e3db00.js", "_app/immutable/chunks/index-f07d0395.js", "_app/immutable/chunks/i18n-75eb3224.js", "_app/immutable/chunks/index-dff0491a.js", "_app/immutable/chunks/StatusIcon-86b20357.js", "_app/immutable/chunks/globalStore-6ac1fdad.js"];
const stylesheets = ["_app/immutable/assets/_page-702d569d.css", "_app/immutable/assets/StatusIcon-4f117b98.css"];
