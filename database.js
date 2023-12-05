const { MongoClient } = require('mongodb');

const config = require('./dbConfig.json');

const userName = 'dtmehr';
const password = 'Nikeninja04';
const hostname = 'mongodb.com';

const url = `mongodb+srv://dtmehr:Nikeninja04@cluster0.kuo7xke.mongodb.net/`;

const client = new MongoClient(url);