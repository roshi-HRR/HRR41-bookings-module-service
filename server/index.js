const express = require('express');
const app = express();
const port = 3000;

const models = require('./models/index.js');
const parser = require('body-parser');


app.use(parser.json());

app.get('/houses', (req, res) => {
  models.getHouses((err, results) => {
    res.send(results);
  })
});

app.get('/houses/:name', (req, res) => {
  models.getHouseByName(req.params.name, (err, results) => {
    res.send(results);
  })
})

app.post('/houses/:name', (req, res) => {
  models.saveHouse(req.params.name, req.body.availableDates, req.body.pricePerGuest);
  res.end("Worked");
})

app.post('/users', (req, res) => {
  models.saveUser(req.body.name);
  res.end("Worked");
});

app.put('/users/:house', (req, res) => {
  models.saveHotelToUser(req.body.name, req.params.house, req.body.totalPrice);
  res.end("worked");
})

app.listen(port, () => {console.log(`Listening on port ${port}!`)});

//changed
