const express = require('express');
const app = express();
const cors = require('cors');


// Middleware
app.use(express.json());
app.use(cors());



const groupRoutes = require('./routes/groups');
const userRoutes = require('./routes/users');
const coffeeRoutes = require('./routes/coffee');

app.use('/api/groups', groupRoutes);
app.use('/api/users',userRoutes)
app.use('/api/coffee', coffeeRoutes);

module.exports = app;