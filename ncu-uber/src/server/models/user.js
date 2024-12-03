const mongoose = require("mongoose");
mongoose.set('debug', true); // 啟用調試模式
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String, // 使用 Number

});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
