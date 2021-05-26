'use strict';
const Home = require('./controllers/home');

module.exports = [
  // we’re going to define our routes here
  {
    method: 'GET',
    path: '/',
    handler: Home.main,
    config: {
      description: 'Main page and stuff'
    }
  },
  {
    method: 'POST',
    path: '/',
    handler: Home.create,
    config: {
      description: 'Main page and stuff'
    }
  },
  {
    method: 'GET',
    path: '/orders',
    handler: Home.orders,
    config: {
      description: 'Main page and stuff'
    }
  }
];
