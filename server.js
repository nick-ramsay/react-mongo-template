const express = require("express");

const {MongoClient} = require('mongodb');
const mongoose = require("mongoose");

const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Setting headers for CORS Policies
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//MongoDB Atlas UN/PW: dbRmt/lq1D1578G1w05c0g

//mongodb+srv://dbRmt:lq1D1578G1w05c0g@cluster0.qufx7.mongodb.net/<dbname>?retryWrites=true&w=majority

// Add routes, both API and view 
app.use(routes);

// Connect to the Mongo DB

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react-mongo-template", { useNewUrlParser: true, useUnifiedTopology: true });

//const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://dbRmt:lq1D1578G1w05c0g@cluster0.qufx7.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react-mongo-template", { useNewUrlParser: true, useUnifiedTopology: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});