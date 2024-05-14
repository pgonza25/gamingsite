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
var profile_svc_exports = {};
__export(profile_svc_exports, {
  default: () => profile_svc_default
});
module.exports = __toCommonJS(profile_svc_exports);
var import_mongoose = require("mongoose");
const ProfileSchema = new import_mongoose.Schema(
  {
    id: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    avatar: String,
    favorites: [String]
  },
  { collection: "user-profiles" }
);
const ProfileModel = (0, import_mongoose.model)("Profile", ProfileSchema);
function index() {
  return ProfileModel.find();
}
function get(id) {
  return ProfileModel.find({ id }).then((list) => list[0]).catch((err) => {
    throw `${id} Not Found`;
  });
}
function create(profile) {
  const p = new ProfileModel(profile);
  return p.save();
}
function update(userid, profile) {
  return ProfileModel.findOne({ id: userid }).then((found) => {
    if (!found)
      throw `${userid} Not Found`;
    else
      return ProfileModel.findByIdAndUpdate(
        found._id,
        profile,
        {
          new: true
        }
      );
  }).then((updated) => {
    if (!updated)
      throw `${userid} not updated`;
    else
      return updated;
  });
}
var profile_svc_default = { index, get, create, update };
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
