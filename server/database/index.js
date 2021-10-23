const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI

mongoose.connect(connectionString, { useNewUrlParser: true}).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

db.once('open', () => {
  console.log("DB connection established successfully")
})

module.exports = db;