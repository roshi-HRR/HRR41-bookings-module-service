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

let userSchema = mongoose.Schema({
  name: String,
  booked_hotels: [{hotel: Object, totalPrice: Number}]
});

let Hotel = mongoose.model('Hotel', hotelSchema);
let User = mongoose.model('User', userSchema);

let getHouses = (callback) => {
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


let saveHouse = (name, unavailableDates, pricePerGuest) => {
  const hotel = new Hotel({name: name, unavailable_dates: unavailableDates, price_per_guest: pricePerGuest});

  hotel.save(err => {
    if(!err){
      console.log("success");
    }
    else{
      console.log("failed");
    }
  })
}

let saveUser = (name) => {
  let user = new User({name: name, booked_hotels: null});

  user.save(err => {
    if(!err){
      console.log("saved new user without hotel");
    }
  })
}

let saveHotelToUser = (userName, houseName, totalPrice) => {
  Hotel.find({name: houseName}, (err, docs) => {
    if(!err){
      console.log("success");
    }
    User.updateOne({name: userName}, {$push: {booked_hotels: {hotel: docs, totalPrice: totalPrice}}}, (err, res) => {
      if(!err){
        console.log("success");
      }
    })
  })
}

module.exports.saveHotelToUser = saveHotelToUser;
module.exports.saveUser = saveUser;
module.exports.getHouses = getHouses;
module.exports.getHouseByName = getHouseByName;
module.exports.saveHouse = saveHouse;

//changed