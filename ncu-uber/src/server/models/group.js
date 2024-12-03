const mongoose = require("mongoose");

// const groupSchema = new mongoose.Schema({
//     start: String,
//     end: String,
//     month: Number, // 使用 Number
//     date: Number,  // 使用 Number
//     total: Number, // 使用 Number
//     hasIn: Number, // 使用 Number
//     name: String
// });

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true }, // 群組名稱
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // 發起者
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // 成員列表
  start: { type: String, required: true }, // 出發地
  end: { type: String, required: true }, // 目的地
  dateTime: {type: String, required: true},
  total: {type :Number, required: true},
});

const groupModel = mongoose.model("Group", GroupSchema);
module.exports = groupModel;
