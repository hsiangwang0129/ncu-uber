const express = require('express');
const router = express.Router();
const groupModel = require('../models/group'); 

router.get('/', async (req, res) => {
  //   res.send('Welcome to the API');
  const response = await groupModel.find()
  return res.json({items : response})
  });




module.exports = router; 
