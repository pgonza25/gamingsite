"use strict";
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
var profiles_svc_exports = {};
__export(profiles_svc_exports, {
  default: () => profiles_svc_default,
  get: () => get
});
module.exports = __toCommonJS(profiles_svc_exports);
let profiles = [
  {
    id: "pablo",
    name: "Pablo Gonzalez",
    avatar: "/data/avatars/avatar.jpeg",
    favorites: ["God of War Ragnarok", "The Last of Us Part 2", "Metal Gear Solid: Peace Walker"]
  },
  {
    id: "bryson",
    name: "Bryson",
    avatar: "dummyimgdata",
    favorites: ["Ghost of Tsushima", "Gran Turismo 7", "Super Mario Wonder"]
  },
  {
    id: "danako",
    name: "Danako",
    avatar: "moredummydata",
    favorites: ["Uncharted 4", "Helldivers 2", "Spider-Man 2"]
  }
];
function get(id) {
  return profiles.find((t) => t.id === id);
}
var profiles_svc_default = { get };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  get
});
