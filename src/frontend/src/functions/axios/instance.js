const axios = require('axios');

const myprojectClient = axios.create({
  baseURL: 'http://myUrl_myproject:myPort/',
  timeout: 1000
});

export default myprojectClient;
