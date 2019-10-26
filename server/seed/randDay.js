const moment = require('moment');

let generateDate = () => {
  let randNumber = Math.ceil(Math.random()*12);
  let daysInMonth = moment().month(moment().month() + randNumber).daysInMonth();
  let day = moment().date()
  let randDay;

  if(randNumber === 0){
    randDay = Math.ceil(Math.random() * (daysInMonth-day)+day);
  }
  else{
    randDay = Math.ceil(Math.random() * daysInMonth);
  }

  let randYear = moment().month(moment().month() + randNumber).format('YYYY');
  let randMonth = moment().month(moment().month() + randNumber).format('M');

  return randMonth + '-' + randDay + '-' + randYear;
}

module.exports.generateDate = generateDate;