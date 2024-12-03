const express = require("express");
const router = express.Router();
const groupModel = require("../models/group");

router.get("/", async (req, res) => {
  //   res.send('Welcome to the API');
  const response = await groupModel.find();
  return res.json({ items: response });
});

router.post("/", async (req, res) => {
  try {
    const newGroup = await groupModel.create(req.body); // 將資料存入資料庫
    res.status(201).json(newGroup); // 成功創建後返回新增的資料
  } catch (error) {
    console.error("Error adding group:", error); // 捕捉並顯示錯誤
    res.status(500).json({ error: "Failed to add group" });
  }
});

router.post("/:groupId/join", async (req, res) => {
  const { groupId } = req.params;
  const { userId } = req.body;
  try {
    const group = await groupModel.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    if (group.members.includes(userId)) {
      return res.status(400).json({ error: "User already in group " });
    }

    if (group.members.length >= group.total) {
      return res.status(400).json({ error: "group is full " });
    }

    group.members.push(userId);
    await group.save();

    res.status(200).json({ message: "user added to group ", group });
  } catch (error) {
    console.error("Failed to join group:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/:groupId/drop", async (req, res) => {
  const { groupId } = req.params;
  const { userId } = req.body;
  try {
    const group = await groupModel.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    if (!group.members.includes(userId)) {
      return res.status(400).json({ error: "User is already not in group " });
    }

    if (group.members.length <= 0) {
      return res.status(400).json({ error: "group is empty " });
    }

    group.members = group.members.filter((item) => item.toString() !== userId);
    await group.save();

    res.status(200).json({ message: "user dropped from group ", group });
  } catch (error) {
    console.error("Failed to join group:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:groupId", async (req, res) => {
  const { groupId } = req.params;
  try{
    const result = await groupModel.deleteOne({ _id: groupId }); 
    console.log(result);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Group not found" });
    }

    res.status(200).json({ message: "Group deleted successfully" });
  } catch (error) {
    console.error("Error deleting group:", error);
    res.status(500).json({ error: "Internal server error" });
  }
  
});

module.exports = router;
