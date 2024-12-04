const express = require('express');
const app = express();
const cors = require('cors');


// Middleware
app.use(express.json());
app.use(cors());



const groupRoutes = require('./routes/groups');
const userRoutes = require('./routes/users');

app.use('/api/groups', groupRoutes);
app.use('/api/users',userRoutes)


module.exports = app;