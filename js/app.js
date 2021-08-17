'use strict'

// console.log('do re me fa so la ti do');

// What are we going to display?
// Min & Max Customer & Avg Cookie/Sale from 6am-7pm (13 hours)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random - use Math.random() for the formulas
// calculate the min/max cust and avg cookie and have them display in an unordered list on the sales.html

// set up object literals for store locations

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const salmonDiv = document.getElementById('salmonCookies');

const seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  randomCustPerHour: function(min, max) {
    min = Math.ceil(min);
    min = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  dailySales: function () {
    let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
    let hourlyCookieTotal = randomCust*this.avgCookieSale
    hourlyCookieTotal = Math.round(hourlyCookieTotal)
    console.log(hourlyCookieTotal)
  }
}
seattle.dailySales()

const tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  randomCustPerHour: function(min, max) {
    min = Math.ceil(min);
    min = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  dailySales: function () {
    let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
    let hourlyCookieTotal = randomCust*this.avgCookieSale
    hourlyCookieTotal = Math.round(hourlyCookieTotal)
    console.log(hourlyCookieTotal)
  }
}
tokyo.dailySales()

const dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  randomCustPerHour: function(min, max) {
    min = Math.ceil(min);
    min = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  dailySales: function () {
    let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
    let hourlyCookieTotal = randomCust*this.avgCookieSale
    hourlyCookieTotal = Math.round(hourlyCookieTotal)
    console.log(hourlyCookieTotal)
  }
}
dubai.dailySales()

const paris = {
  location: 'Paros',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  randomCustPerHour: function(min, max) {
    min = Math.ceil(min);
    min = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  dailySales: function () {
    let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
    let hourlyCookieTotal = randomCust*this.avgCookieSale
    hourlyCookieTotal = Math.round(hourlyCookieTotal)
    console.log(hourlyCookieTotal)
  }
}
paris.dailySales()

const lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  randomCustPerHour: function(min, max) {
    min = Math.ceil(min);
    min = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  dailySales: function () {
    let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
    let hourlyCookieTotal = randomCust*this.avgCookieSale
    hourlyCookieTotal = Math.round(hourlyCookieTotal)
    console.log(hourlyCookieTotal)
  }
}

lima.dailySales()

