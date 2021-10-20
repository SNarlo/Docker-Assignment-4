const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_DOCKER;

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;