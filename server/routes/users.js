const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.post("/", async (req, res) => {
  try {
    // Check if the email exists
    console.log("Request body:", req.body);
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }
    res.status(200).json({ message: "Email exists", user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    // Check if the email exists
    console.log("Request body email:", req.body.email);
    console.log("Request body password:", req.body.password);
    const user = await userModel.findOne({
      email: req.body.email,
      password: String(req.body.password),
    });
    if (!user) {
      return res.status(404).json({ error: "Password wrong" });
    }
    res.status(200).json({ message: "Password correct", name:user.name , id:user.id});
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const newGroup = await userModel.create(req.body); // 將資料存入資料庫
    res.status(201).json(newGroup); // 成功創建後返回新增的資料
  } catch (error) {
    console.error("Error adding group:", error); // 捕捉並顯示錯誤
    res.status(500).json({ error: "Failed to add group" });
  }
});

router.get("/", async (req, res) => {
  res.status(200).send("OK");
});

module.exports = router;
