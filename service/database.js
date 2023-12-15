const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const userName = 'dtmehr';
const password = 'Nikeninja04';
const hostname = 'mongodb.com';

const url = `mongodb+srv://dtmehr:Nikeninja04@cluster0.kuo7xke.mongodb.net/`;

const client = new MongoClient(url);

const db = client.db('starup');
const userCollection = db.collection('user');
const cartCollection = db.collection('cart');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}
//works
async function addCart(cart) {
    const result = await cartCollection.insertOne(cart);
    return result;
  }

async function getCartItems() {
    const cursor = cartCollection.find({});
    return cursor.toArray()
  }

  let cartItems = []

// works
apiRouter.post('/addCart', async (req, res) => {
  DB.addCart(req.body);
  const cartItems = await DB.getCartItems();
  res.send(cartItems);
});

// SubmitScore
//works
apiRouter.get('/store', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(braceletList);
});

  module.exports = { addCart, getCartItems, getUser, getUserByToken,};