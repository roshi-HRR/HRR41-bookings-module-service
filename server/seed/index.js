const faker = require('faker');
const models = require('../models/index.js');
const generator = require('./randDay.js');

let seed = () => {
  let houseArray = [];

  for(let i=0; i<100; i++){
    let name = faker.lorem.word() + ' House';
    houseArray.push(name);
    let dates = [];
    let pricePerGuest = {};

    for(let i=0; i<Math.floor(Math.random()*50+25); i++){
      dates.push(generator.generateDate());
    }

    pricePerGuest['adult'] = (Math.floor(Math.random() * 200) + 50);
    pricePerGuest['child'] = (Math.floor(Math.random() * 200) + 50);
    pricePerGuest['infant'] = Math.floor(Math.random() * 75);

    models.saveHouse(name, Math.floor(Math.random()*300+100), Math.floor(Math.random()*50), Math.floor(Math.random()*50), Math.floor(Math.random()*70), dates, pricePerGuest);
  }

  for(let i=0; i<50; i++){
    let name = faker.internet.userName();

    models.saveUser(name);
  }
}

seed();

//changed