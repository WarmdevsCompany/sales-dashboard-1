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
  l: () => login
});
module.exports = __toCommonJS(stdin_exports);
var import_navigation = require("./navigation.js");
var import_axios = __toESM(require("axios"));
function getCookie(name) {
}
function setCookie(name, value, options = {}) {
}
const esiToken = getCookie() || null;
import_axios.default.defaults.headers.common["Content-Type"] = "application/json";
import_axios.default.defaults.headers.common["accept"] = "application/json";
const publicPath = import_axios.default.create({
  baseURL: import_navigation.v.publicPath
});
const privatePath = import_axios.default.create({
  baseURL: import_navigation.v.privatePath
});
privatePath.defaults.headers.common["Authorization"] = esiToken;
const login = async (body) => {
  try {
    let response = await publicPath.post("/login", {
      login: body.login,
      password: body.password
    });
    if (response.data.status) {
      setCookie("esiToken", response.data.data.token, { secure: true, "max-age": 84600 });
      privatePath.defaults.headers.common["Authorization"] = response.data.data.token;
      (0, import_navigation.g)("/overview/general");
    } else {
      return response.data.errorMessage;
    }
  } catch (error) {
    console.error(error);
  }
};
