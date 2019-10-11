const express = require('express');
const app = express();
const port = 3000;

const models = require('./models/index.js');
const parser = require('body-parser');


app.use(parser.json());

app.get('/houses', (req, res) => {
  models.get((err, results) => {
    res.send(results);
  })
});

app.get('/houses/:name', (req, res) => {
  models.getHouseByName(req.params.name, (err, results) => {
    res.send(results);
  })
})

app.post('/houses/:name', (req, res) => {
  models.save(req.params.name, req.body.availableDates, req.body.pricePerGuest);
  res.end("Worked");
})

app.listen(port, () => {console.log(`Listening on port ${port}!`)});

