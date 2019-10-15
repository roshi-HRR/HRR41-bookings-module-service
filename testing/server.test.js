const axios = require('axios');
const models = require('../server/models/index.js');

// beforeAll(async () => {
//   await axios.post()
// })

describe('Testing api endpoints', () => {
  it('Can GET houses with correct data', async () => {
    let getResults;
    try{
      getResults = await axios.get('http://localhost:3000/api/houses');
    }
    catch(err){
      console.error(err);
    }

    //testing first and second element in array and ensuring correct data is being stored
    expect(Array.isArray(getResults.data)).toBe(true);
    expect(getResults.data[0].name).toBe('harum House');
    expect(getResults.data[0].initialPrice).toBe(381);
    expect(typeof getResults.data[0].price_per_guest).toBe('object');
    expect(Array.isArray(getResults.data[0].unavailable_dates)).toBe(true);

    expect(getResults.data[1].name).toBe('sit House');
    expect(getResults.data[1].initialPrice).toBe(357);
    expect(typeof getResults.data[1].price_per_guest).toBe('object');
    expect(Array.isArray(getResults.data[1].unavailable_dates)).toBe(true);
  })

  it('Can GET single house with correct data', async () => {
    let getResults;
    try{
      getResults = await axios.get('http://localhost:3000/api/houses/5da4d4c202a92569a33dfe7f');
    }
    catch(err){
      console.error(err);
    }

    expect(typeof getResults.data[0]).toBe('object');
    expect(getResults.data[0].name).toBe('libero House');
    expect(getResults.data[0].initialPrice).toBe(109);
    expect(Array.isArray(getResults.data[0].unavailable_dates)).toBe(true);
    expect(typeof getResults.data[0].price_per_guest).toBe('object');
  })

  it('Can GET users with correct data', async () => {
    let getResult;
    try{
      getResults = await axios.get('http://localhost:3000/api/users');
    }
    catch(err){
      console.error(err);
    }

    expect(Array.isArray(getResults.data)).toBe(true);
    expect(getResults.data[0].name).toBe('Estella_Goodwin');
    expect(Array.isArray(getResults.data[0].booked_hotels)).toBe(true);
  })

  it('Can GET a single user with correct data', async () => {
    let getResult;
    try{
      getResults = await axios.get('http://localhost:3000/api/users/')
    }
  })
})