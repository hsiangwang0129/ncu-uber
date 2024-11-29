const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    start: String,
    end: String,
    month: Number, // 使用 Number
    date: Number,  // 使用 Number
    total: Number, // 使用 Number
    hasIn: Number, // 使用 Number
    name: String
});

const groupModel = mongoose.model("Group", groupSchema);
module.exports = groupModel;
