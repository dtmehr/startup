const { MongoClient } = require('mongodb');

const config = require('./dbConfig.json');

const userName = 'dtmehr';
const password = 'Nikeninja04';
const hostname = 'mongodb.com';

const url = `mongodb+srv://dtmehr:Nikeninja04@cluster0.kuo7xke.mongodb.net/`;

const client = new MongoClient(url);

const db = client.db('starup');
const cartCollection = db.collection('cart');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

//works
async function addCart(cart) {
    const result = await cartCollection.insertOne(cart);
    return result;
  }

async function getCartItems() {
    const cursor = cartCollection.find({});
    return cursor.toArray()
  }

  module.exports = { addCart, getCartItems};