const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString')

const URI = 'https://jsonplaceholder.typicode.com/users';

const getData = async () => {
  try {
    const response = await axios.get(URI);
    const userIds = response.data.map(user => user.id)
    return mapArrToString(userIds);
  } catch (e) {

  }
}

module.exports = getData;