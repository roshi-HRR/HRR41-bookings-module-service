const express = require('express');
const app = express();
const port = 3000;

const models = require('./models/index.js');
const parser = require('body-parser');


app.use(parser.json());
app.use(express.static(__dirname + '/../public'));

app.get('/api/houses', (req, res) => {
  models.getHouses((err, results) => {
    try{
      res.send(results);
    }
    catch(err){
      console.error(err);
    }
  })
});

app.get('/api/houses/:id', (req, res) => {
  models.getHouseById(req.params.id, (err, results) => {
    try{
      res.send(results);
    }
    catch(err){
      console.error(err);
    }
  })
})

app.get('/api/users', (req, res) => {
  models.getUsers((err, results) => {
    try{
      res.send(results);
    }
    catch(err){
      console.error(err);
    }
  })
})

app.post('/api/houses', (req, res) => {
  models.saveHouse(req.body.name, req.body.initialPrice, req.body.availableDates, req.body.pricePerGuest);
  res.end("Worked");
})

app.post('/api/users', (req, res) => {
  models.saveUser(req.body.name);
  res.end("Worked");
});

app.put('/api/users/:house', (req, res) => {
  models.saveHotelToUser(req.body.name, req.params.house, req.body.totalPrice);
  res.end("worked");
})

app.listen(port, () => {console.log(`Listening on port ${port}!`)});

//changed
