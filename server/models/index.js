const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb://localhost/booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

let hotelSchema = mongoose.Schema({
  name: String,
  unavailable_dates: Array,
  price_per_guest: Object
});

let Hotel = mongoose.model('Hotel', hotelSchema);

let get = (callback) => {
  Hotel.find({}, (err, docs) => {
    callback(err, docs);
  })
}

let getHouseByName = (name, callback) => {
  Hotel.find({name: name}, (err, docs) => {
    callback(err, docs);
  })
}

//right now, we're just posting the dates that are unavailable when someone books a house since there's currently no authentication

let save = (name, unavailableDates, pricePerGuest) => {
  const hotel = new Hotel({name: name, unavailable_dates: unavailableDates, price_per_guest: pricePerGuest});

  hotel.save(err => {
    if(!err){
      console.log("success");
    }
    else{
      console.log("You suck");
    }
  })
}

module.exports.get = get;
module.exports.getHouseByName = getHouseByName
module.exports.save = save;