'use strict';

// console.log ('do re me fa so la ti do');

// this - keyword referring to the "owner" of the method; 
// push - adds a new item to an array
// prototype - a property that makes it possible to add new properties to object constructors
// Math.floor() rounds down to the nearest integer
// Math.random() returns a random number between 0 and 1


// we are converting our objects to constructors
// we are developing a table where the data from the constructors should populate


// step 1 - establish the area on the approprite page (in this case Sales) where the data should appear

const locationsTable = document.getElementById('locations');

const dailyOpsHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// step 2 - create the function that will be the template for the data

function Location(name, minCust, maxCust, avgSalesPerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSalesPerCust = avgSalesPerCust;
  this.hrlySalesArray = [];

  Location.allLocations.push(this); // this adds the new locations we are constructing into the allLocations array
}

Location.allLocations = []; // establishes the allLocations array

//adapt previously established functions to include the prototype property to be  properly included in the constructor

Location.prototype.randNumOfCust = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}

Location.prototype.fillhrlySalesArray = function() {
  for (let i = 0; i < dailyOpsHours.length; i++) {
    let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
    this.hrlySalesArray.push(Math.ceil(salesPerHour));
  }
}

new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);


//this adds data to each store's hrlySalesArray
function fillhrlySalesArrayAllLocations() {
  for (let i = 0; i < Location.allLocations.length; i++) {
    const currentLocation = Location.allLocations[i];
    currentLocation.fillhrlySalesArray();
  }
}
//calls the function
fillhrlySalesArrayAllLocations();

//all this commented out code is held in the method/function Location and the "new Location" lines
// // seattle
// const seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgSalesPerCust: 6.3,
//   hrlySalesArray: [],
//   // this array will be filled with a total for every daily operation hour. it is found by multiplying a random number of customers (randNumOfCust) by the average sales per customer (avgSalesPerCust)

//   randNumOfCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillhrlySalesArray: function() {
//     for (let i = 0; i < dailyOpsHours.length; i++) {
//       let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
//       this.hrlySalesArray.push(Math.ceil(salesPerHour));
//       //this loops through the dailyOpsHours array to create a hrlySalesArray 
//     }
//   }
// }

// // tokyo
// const tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgSalesPerCust: 1.2,
//   hrlySalesArray: [],

//   randNumOfCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillhrlySalesArray: function() {
//     for (let i = 0; i < dailyOpsHours.length; i++) {
//       let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
//       this.hrlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// // dubai
// const dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgSalesPerCust: 3.7,
//   hrlySalesArray: [],

//   randNumOfCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillhrlySalesArray: function() {
//     for (let i = 0; i < dailyOpsHours.length; i++) {
//       let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
//       this.hrlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// // paris
// const paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgSalesPerCust: 2.3,
//   hrlySalesArray: [],

//   randNumOfCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillhrlySalesArray: function() {
//     for (let i = 0; i < dailyOpsHours.length; i++) {
//       let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
//       this.hrlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// // lima
// const lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgSalesPerCust: 4.6,
//   hrlySalesArray: [],

//   randNumOfCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillhrlySalesArray: function() {
//     for (let i = 0; i < dailyOpsHours.length; i++) {
//       let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
//       this.hrlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// step 3 - begin creating table
// create a function to render a table that contains rows of data for every store. 


// sara's little helper element
function _makeElement(tag, parent, text) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}

// when we make the header all cells should be th/bold

// th - table heading
// tr - table row
// td - table data
// thead - table head
// tbody - table body
// tfoot - table footer

// make function that renders the content in rows
// whole thing needs to go in tbody
// needs a new row for every location
// make a th with the city name
// cookies per hour should be tds

Location.prototype.renderSingleLocation = function(body) {
  let total = 0;
  const rowElement = document.createElement('tr');
  body.appendChild(rowElement);
  const thElem = _makeElement('th', rowElement, this.name);
  for (let i = 0; i < dailyOpsHours.length; i++) {
    let cookiesThisHour = this.hrlySalesArray[i];
    total += cookiesThisHour;
    _makeElement('td', rowElement, cookiesThisHour);
  }
  _makeElement('td', rowElement, total)

}
// const locationsArray = [seattle, tokyo, dubai, paris, lima];

// loop through all locations
function renderAllLocations() {
  let tbodyElement = _makeElement('tbody', locationsTable, null);
  for (let i = 0; i < Location.allLocations.length; i++) {
    Location.allLocations[i].renderSingleLocation(tbodyElement);
  }
}

// a function to make a tfoot & append on table in a row
// it should  look at each hour/day and add up all locations cookie sales for the hours
// make a new cell for hour total
// grand total per day
function makeTheFooter() {
  const tfootElement = _makeElement('tfoot', locationsTable, null);
  const rowElement = _makeElement('tr', tfootElement, null);
  _makeElement('th', rowElement, 'Hourly Total');
  let hourlyTotal = 0;
  let grandTotal = 0;
  for (let i = 0; i < dailyOpsHours.length; i++) { // loop through dailyOpsHour (each hour i)
    for (let j = 0; j < Location.allLocations.length; j++) { 
      let currentLocation = Location.allLocations[j];
      hourlyTotal += currentLocation.hrlySalesArray[i]
    }
    // all done counting cookies at stores
    _makeElement('td', rowElement, hourlyTotal);
    grandTotal += hourlyTotal;
    hourlyTotal = 0;
  }
  _makeElement('td', rowElement, grandTotal); // looked at every hour
}

renderAllLocations();
makeTheFooter();