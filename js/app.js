'use strict'
// console.log('do re me fa so la ti do');

const locationsDiv = document.getElementById('location');

const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


//seattle
const seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSalePerCust: 6.3,
  hrlySalesArray: [],
  
  randomNumCustPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHrlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumCustPerHour() * this.avgSalePerCust;
      this.hrlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}
  
//tokyo
const tokyo = { 
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgSalePerCust: 1.2,
  hrlySalesArary: [],

  randomNumCustPerHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHrlySalesArray: function () {
    for (let i=0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumCustPerHour() * this. avgSalePerCust;
      this.hrlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

//dubai
const dubai = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgSalePerCust: 3.7,
  hrlySalesArray: [],

  randomNumCustPerHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHrlySalesArray: function () {
    for (let i=0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumCustPerHour() * this.avgSalePerCust;
      this.hrlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

//paris
const paris = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgSalePerCust: 2.3,
  hrlySalesArray: [],

  randomNumCustPerHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHrlySalesArray: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumCustPerHour() * this.avgSalePerCust;
      this.hrlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

//lima
const lima = { 
  location: "Lima",
  minCust: 20,
  maxCust: 38,
  avgSalePerCust: 2.3,
  hrlySalesArary: [],

  randomNumCustPerHour: function () {
    return Math.floor(Math.random () * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHrlySalesArray: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
    let salesPerHour = this.randomNumCustPerHour() * this.avgSalesPerCust;
    this.hrlySalesArary.push(Math.ceil(salesPerHour));
    }
  }
}

function _makeElement(tag, parent, text){
  const element = document.createElement(tag);
  parent.appendChild(element);
  if(text) {
    element.textContent = text;
  }
  return element;
}

function renderLocation(location) {
  let total = 0;
  const articleElem = _makeElement('article', locationsDiv, null);
  _makeElement('h3', articleElem, location.name);
  const ulElem = _makeElement('ul', articleElem, null);
  for (let i = 0; i < hoursOfOperation.length; i++) {
    const text = `${hoursOfOperation[i]}: ${location.hrlySalesArray[i]} cookies`;
    total += location.hrlySalesArray[i];
    _makeElement('li', ulElem, text);
  }
  let totalString = `Total: ${total} cookies`; 
  _makeElement('li', ulElem, totalString);
}

const locationsArray = [seattle, tokyo, dubai, paris, lima];

function renderAllLocations() {
  for (let i = 0; i < locationsArray.length; i++) {
    const currentLocation = locationsArray[i]
    currentLocation.fillHrlySalesArray()
    renderLocation(currentLocation);
  }
}

renderAllLocations();

