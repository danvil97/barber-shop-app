const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const cors = require('cors');

const cfg = {
  connectionUrl: 'mongodb://localhost:27017/',
  dbName: 'barberShopAppDB',
  port: 8080,
};

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

MongoClient.connect(cfg.connectionUrl, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db(cfg.dbName);
    console.log(`Connected to database named: ${cfg.dbName}`);
    app.listen(cfg.port, () => {
      console.log(`Listening on ${cfg.port}...`);
    });
    app.get('/api/services', (req, res) => {
      const collection = db.collection('services');
      collection.find({}).toArray((err, services) => {
        if (err) return console.log(err);
        res.send(services);
      });
    });
    app.post('/api/user', (req, res) => {
      if (Object.keys(req.body).length !== 0) {
        const collection = db.collection('users');
        const newUser = { ...req.body };

        collection.findOne({ email: req.body.email }, (err, user) => {
          if (err) return console.log(err);
          if (!user) {
            collection.insertOne(newUser, (err, user) => {
              if (err) return console.log(err);
              console.log('1 document inserted');
              const userObject = { ...user.ops[0] };
              delete userObject.password;
              res.send({ user: userObject, message: 'User was created!' });
            });
          } else res.send({ user: null, message: 'User already exists' });
        });
      }
    });
  })
  .catch((error) => console.error(error));
