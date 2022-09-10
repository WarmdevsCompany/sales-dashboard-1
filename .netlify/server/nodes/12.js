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
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
const index = 12;
const component = async () => (await Promise.resolve().then(() => __toESM(require("../entries/pages/(public)/profile/notifications/_page.svelte.js")))).default;
const file = "_app/immutable/components/pages/(public)/profile/notifications/_page.svelte-5705d73f.js";
const imports = ["_app/immutable/components/pages/(public)/profile/notifications/_page.svelte-5705d73f.js", "_app/immutable/chunks/index-f07d0395.js", "_app/immutable/chunks/index-76d72bff.js", "_app/immutable/chunks/clickOutside-49bd38ee.js", "_app/immutable/chunks/profileStore-eedff8bd.js", "_app/immutable/chunks/index-dff0491a.js", "_app/immutable/chunks/notificationsStore-fe064ff3.js", "_app/immutable/chunks/i18n-75eb3224.js", "_app/immutable/chunks/axios-ffe0753b.js", "_app/immutable/chunks/_commonjsHelpers-e864563f.js", "_app/immutable/chunks/navigation-43937b83.js", "_app/immutable/chunks/singletons-5481ce68.js", "_app/immutable/chunks/ThreeDotsIcon-429448d1.js", "_app/immutable/chunks/Preloader-75f26b12.js"];
const stylesheets = ["_app/immutable/assets/_page-99ded72c.css", "_app/immutable/assets/ThreeDotsIcon-d63bcb6e.css", "_app/immutable/assets/Preloader-5a7b792e.css"];
