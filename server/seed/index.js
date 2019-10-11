const faker = require('faker');
const models = require('../models/index.js');

let seed = () => {
  for(let i=0; i<100; i++){
    let name = faker.lorem.word() + ' House';
    let dates = [];
    let pricePerGuest = {};

    for(let i=0; i<Math.floor(Math.random()*50); i++){
      dates.push(faker.date.future().toString());
    }

    pricePerGuest['adult'] = (Math.floor(Math.random() * 200) + 50);
    pricePerGuest['child'] = (Math.floor(Math.random() * 200) + 50);
    pricePerGuest['infant'] = Math.floor(Math.random() * 75);

    models.save(name, dates, pricePerGuest);
  }
}

seed();
