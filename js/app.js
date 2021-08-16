'use strict'

console.log('do re me fa so la ti do');

// What are we going to display?
// Min & Max Customer & Avg Cookie/Sale from 6am-7pm (13 hours)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random - use Math.random() for the formulas
// calculate the min/max cust and avg cookie and have them display in an unordered list on the sales.html

// set up object literals for store locations

const salmonDiv = document.getElementById('salmonCookies');

const seattle = {
  location: 'Seattle',
  avgCustomer: null,
  avgSale: 6.3,
  getCustomer: function () {
    this.avgCustomer = `${_randCust(23, 65)} customers`;
  }
}

const tokyo = {
  location: 'Tokyo',
  avgCustomer: null,
  avgSale: 1.2,
  getCustomer: function() {
    this.avgCustomer = `${_randCust(3, 24)} customers`;
  }
}

const dubai = {
  location: 'Dubai',
  avgCustomer: null,
  avgSale: 3.7,
  getCustomer: function () {
    this.avgCustomer = `${_randCust(11, 38)} customers`;
  }
}

const paris = {
  location: 'Paris',
  avgCustomer: null,
  avgSale:2.3,
  getCustomer: function () {
    this.avgCustomer = `${_randCust(20, 38)} customers`;
  }
}

const lima = {
  location: 'Lima',
  avgCustomer: null,
  avgSale: 4.6,
  getCustomer: function () {
    this.avgCustomer = `${_randCust(20, 38)} customers`;
  }
}

