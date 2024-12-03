const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db.js')



const app = require('./server.js');
const PORT = process.env.PORT || 4000;



connectDB()

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

