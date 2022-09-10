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
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "robots.txt", "webklip.png"]),
  mimeTypes: { ".png": "image/png", ".txt": "text/plain" },
  _: {
    entry: { "file": "_app/immutable/start-4e6bbda2.js", "imports": ["_app/immutable/start-4e6bbda2.js", "_app/immutable/chunks/index-f07d0395.js", "_app/immutable/chunks/singletons-5481ce68.js", "_app/immutable/chunks/index-dff0491a.js", "_app/immutable/chunks/index-d9e95725.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/14.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/15.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/16.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/17.js")))
    ],
    routes: [
      {
        id: "(public)",
        pattern: /^\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 3], "errors": [1, null], "leaf": 6 },
        endpoint: null
      },
      {
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0], "errors": [1], "leaf": 16 },
        endpoint: null
      },
      {
        id: "todos",
        pattern: /^\/todos\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0], "errors": [1], "leaf": 17 },
        endpoint: null
      },
      {
        id: "(auth)/auth/login",
        pattern: /^\/auth\/login\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 2], "errors": [1, null], "leaf": 4 },
        endpoint: null
      },
      {
        id: "(auth)/auth/signup",
        pattern: /^\/auth\/signup\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 2], "errors": [1, null], "leaf": 5 },
        endpoint: null
      },
      {
        id: "(public)/manage/contribution",
        pattern: /^\/manage\/contribution\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 3], "errors": [1, null], "leaf": 7 },
        endpoint: null
      },
      {
        id: "(public)/manage/plan",
        pattern: /^\/manage\/plan\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 3], "errors": [1, null], "leaf": 8 },
        endpoint: null
      },
      {
        id: "(public)/manage/withdraw",
        pattern: /^\/manage\/withdraw\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 3], "errors": [1, null], "leaf": 9 },
        endpoint: null
      },
      {
        id: "(public)/overview/general",
        pattern: /^\/overview\/general\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 3], "errors": [1, null], "leaf": 10 },
        endpoint: null
      },
      {
        id: "(public)/profile/general-info",
        pattern: /^\/profile\/general-info\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 3], "errors": [1, null], "leaf": 11 },
        endpoint: null
      },
      {
        id: "(public)/profile/notifications",
        pattern: /^\/profile\/notifications\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 3], "errors": [1, null], "leaf": 12 },
        endpoint: null
      },
      {
        id: "(public)/profile/payment",
        pattern: /^\/profile\/payment\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 3], "errors": [1, null], "leaf": 13 },
        endpoint: null
      },
      {
        id: "(public)/profile/security",
        pattern: /^\/profile\/security\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 3], "errors": [1, null], "leaf": 14 },
        endpoint: null
      },
      {
        id: "(public)/profile/settings",
        pattern: /^\/profile\/settings\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 3], "errors": [1, null], "leaf": 15 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
