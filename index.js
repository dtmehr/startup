const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const DB = require('./database.js');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://dtmehr:Nikeninja04@cluster0.kuo7xke.mongodb.net/`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });
const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);



// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

//works
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
//works
let scores = [];
function updateScores(newScore, scores) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }

  return scores;
}


bracelet1 = {
  name: "bracelet1"
}

bracelet2 ={
  name: "bracelet2"
}

bracelet3 = {
  name: "bracelet3"
}

bracelet4 = {
  name: "bracelet4"
}

braceletList = [bracelet1, bracelet2, bracelet3, bracelet4]

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


// test

// apiRouter.get('/cartItems', async (_req, res) => {
//   const cartItems = await DB.getCartItems();
//   console.log(cartItems)
//   res.send(cartItems);
// });

}

main().catch(console.error);