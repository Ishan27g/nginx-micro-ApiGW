
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dotenv = require('dotenv');
dotenv.config();


// mongodb environment variables
const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT
} = process.env;


// Connection URL
const url =`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}`;
// Database Name
const dbName = `${MONGO_DB}`;

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to MongoDB server");

  const db = client.db(dbName);

  setTimeout(() => {  
    console.log("Ending connection now!"); 
    client.close();
}, 20000);


});
