'use strict'
// console.log('do re me fa so la ti do');

const locationsDiv = document.getElementById('location');


//hours of operations
const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Store(location, minCust, maxCust, avgSalePerCust) {
  this.locationVal = location;
  this.minCustVal = minCust;
  this.macCustVal = maxCust;
  this.avgSalePerCustVal = avgSalePerCust;
  this.hrlySalesArrayVal = []; 

 Store.locationsArray.push(this); // not sure if this is right
}
// not sure if any of the following is correct or workable...
Store.locationArray = [];
Store.prototype.cookieSales = function() {
  let dailySales = 0;
  let hourlySales = [];
  for (let i = 0; i < this.hoursOfOperation.length; i++) {
    let randomNumCustPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    hourlySales.push(Math.ceil(randomNumberOfCustomers * this.avgSalePerCust)); 
    dailySales += (Math.ceil(randomNumberOfCustomers * this.avgSalePerCust));
  }
  this.salesPerHour = hourlySales;
  
}

//pretty certain about these
new Store('Seattle', 23, 65, 6.3)
new Store('Tokyo', 3, 24, 1.2)
new Store('Dubai', 11, 38, 3.7)
new Store('Paris', 20, 38, 2.3)
new Store('Lima', 2, 16, 4.6)

console.log(Store.randomNumCustPerHour)

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
      this.hrlySalesArray.push(Math.ceil(this.avgSalePerCust));
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


function makeTable() {
  let body = document.getElementById('locations');
  let tableElem = document.createElement('table');
  let tableBody = document.createElement('tbody');
  for(let i=0; i< Location.appendChild.locationsArray.length; i++) {
    let currentLocation = Location.locationArray[i];
    let rowElem = document.createElement('tr');
    tableBody.appendChild(rowElem);
    let tdElem = document.createElement('td');
    let cityCell = currentLocation.location;
    tdElem.textContent = cityCell;
    rowElem.appendChild(tdElem);
    for(let j = 0; j < currentLocation.hoursOfOperation.length; j++) {
      let cellElem = document.createElement('td');
      cellElem.textContent = currentLocation.salesPerHour[j];
      rowElem.appendChild(cellElem);
    }
    tableBody.appendChild(rowElem);
  }
  tableElem.appendChild(tableBody);
  body.appendChild(tableElem);
  tableElem.setAttribute("border", "3");
}
makeTable();




const locationsArray = [seattle, tokyo, dubai, paris, lima];

function renderAllLocations() {
  for (let i = 0; i < locationsArray.length; i++) {
    const currentLocation = locationsArray[i]
    currentLocation.fillHrlySalesArray()
    renderLocation(currentLocation);
  }
}

renderAllLocations();
