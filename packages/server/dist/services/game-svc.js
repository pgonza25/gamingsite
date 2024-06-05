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
var game_svc_exports = {};
__export(game_svc_exports, {
  default: () => game_svc_default
});
module.exports = __toCommonJS(game_svc_exports);
var import_mongoose = require("mongoose");
const GameSchema = new import_mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    platform: { type: String, required: true, trim: true },
    playstate: String,
    rating: Number
  },
  { collection: "games" }
);
const GameModel = (0, import_mongoose.model)("Game", GameSchema);
function create(game) {
  const g = new GameModel(game);
  return g.save();
}
function index() {
  return GameModel.find();
}
var game_svc_default = { index, create };
