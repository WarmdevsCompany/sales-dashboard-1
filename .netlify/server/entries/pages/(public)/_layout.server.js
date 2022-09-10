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
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index2 = require("../../../chunks/index2.js");
var import_navigation = require("../../../chunks/navigation.js");
var import_i18n = require("../../../chunks/i18n.js");
var import_chunks = require("../../../chunks/index.js");
var import_index3 = require("../../../chunks/index3.js");
function privateApi(resource, esiToken) {
  if (esiToken) {
    return fetch(`${import_navigation.v.privatePath}/${resource}`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: esiToken
      }
    });
  } else {
    (0, import_navigation.g)("/auth/login");
  }
}
async function load({ locals }) {
  if (!locals.esiToken) {
    throw (0, import_index2.r)(307, "/auth/login");
  } else {
    const rawResponse = await privateApi("/getGeneralInfo", locals.esiToken);
    const response = await rawResponse.json();
    if (rawResponse.status == 200) {
      return {
        general: response
      };
    } else if (rawResponse.status == 401) {
      return {
        status: 302,
        redirect: "/auth/login"
      };
    }
  }
}
