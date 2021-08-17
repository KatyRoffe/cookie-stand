'use strict'
// console.log('do re me fa so la ti do');

const cookieDiv = document.getElementById('salmonCookies');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
  },  
  salesPerHour: [],
  currentSalesPerHour: function() {
  for(let i = 0; i < hours.length; i++) {
    this.salesPerHour.push(this.dailySales())
  }
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
  },  
  salesPerHour: [],
  currentSalesPerHour: function() {
  for(let i = 0; i < hours.length; i++) {
    this.salesPerHour.push(this.dailySales())
  }
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
  },  
  salesPerHour: [],
  currentSalesPerHour: function() {
  for(let i = 0; i < hours.length; i++) {
    this.salesPerHour.push(this.dailySales())
  }
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
  },  
  salesPerHour: [],
  currentSalesPerHour: function() {
  for(let i = 0; i < hours.length; i++) {
    this.salesPerHour.push(this.dailySales())
  }
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
  },  
  salesPerHour: [],
  currentSalesPerHour: function() {
  for(let i = 0; i < hours.length; i++) {
    this.salesPerHour.push(this.dailySales())
  }
}
}

lima.dailySales()

function renderCookies(seattle)
  const articleElement = document.createElement('article');
  cookieDiv.appendChild(articleElement); //sets up article
  
  const h3Element = document.createElement('h2')
  articleElement.appendChild(h3Element); // sets up h3 element
  
  const ulElem = document.getElementById(ul)
  articleElement.appendChild.dailySales(ulElement); // sets up ul element


