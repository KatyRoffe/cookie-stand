'use strict'
// console.log('do re me fa so la ti do');

// to do :: make better notes
// better yet, create new repo to house all these demos and add notes on every line to put in plain english what it does
// drink more water
// sleep better
// cry less

// added prototypey and tabley things per demo follow along. read through again to get a better understanding of the lines and figure out what is out of order. after nap. 

const locationsDiv = document.getElementById('location');


//hours of operations
const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Location(location, minCust, maxCust, avgSalePerCust) {
  this.locationVal = location;
  this.minCustVal = minCust;
  this.macCustVal = maxCust;
  this.avgSalePerCustVal = avgSalePerCust;
  this.hrlySalesArrayVal = []; 

 Location.locationsArray.push(this); // this pushes new locations to the list, "global list" 
}
Location.prototype.randomNumCustPerHour = function() { // individual items of the list
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
 } 

 Location.prototype.fillHrlySalesArray = function() {
   for (let i=0; i < hoursOfOperation.length; i++) {
     let salesPerHour = this.randomNumCustPerHour() * this.avgSalesPerCust;
     this.hrlySalesArary.push(math.ceil(salesPerHour));
   }
 }

//pretty certain about these
new Store('Seattle', 23, 65, 6.3)
new Store('Tokyo', 3, 24, 1.2)
new Store('Dubai', 11, 38, 3.7)
new Store('Paris', 20, 38, 2.3)
new Store('Lima', 2, 16, 4.6)

console.log(Store.randomNumCustPerHour)


// adds data to each stores hrlysalesArray
function fillHrlySalesArrayAllLocations() {
  for (let i = 0; i < Location.renderAllLocations.length; i++) {
    const currentLocation = Location.allLocations[i];
    currentLocation.fillHrlySalesArray();
  }
}

// //seattle
// const seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgSalePerCust: 6.3,
//   hrlySalesArray: [],
  
//   randomNumCustPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillHrlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumCustPerHour() * this.avgSalePerCust;
//       this.hrlySalesArray.push(Math.ceil(this.avgSalePerCust));
//     }
//   }
// }
  
// //tokyo
// const tokyo = { 
//   location: "Tokyo",
//   minCust: 3,
//   maxCust: 24,
//   avgSalePerCust: 1.2,
//   hrlySalesArary: [],

//   randomNumCustPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillHrlySalesArray: function () {
//     for (let i=0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumCustPerHour() * this. avgSalePerCust;
//       this.hrlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// //dubai
// const dubai = {
//   location: "Dubai",
//   minCust: 11,
//   maxCust: 38,
//   avgSalePerCust: 3.7,
//   hrlySalesArray: [],

//   randomNumCustPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillHrlySalesArray: function () {
//     for (let i=0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumCustPerHour() * this.avgSalePerCust;
//       this.hrlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// //paris
// const paris = {
//   location: "Paris",
//   minCust: 20,
//   maxCust: 38,
//   avgSalePerCust: 2.3,
//   hrlySalesArray: [],

//   randomNumCustPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillHrlySalesArray: function () {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumCustPerHour() * this.avgSalePerCust;
//       this.hrlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// //lima
// const lima = { 
//   location: "Lima",
//   minCust: 20,
//   maxCust: 38,
//   avgSalePerCust: 2.3,
//   hrlySalesArary: [],

//   randomNumCustPerHour: function () {
//     return Math.floor(Math.random () * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillHrlySalesArray: function () {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//     let salesPerHour = this.randomNumCustPerHour() * this.avgSalesPerCust;
//     this.hrlySalesArary.push(Math.ceil(salesPerHour));
//     }
//   }
// }


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


//code updates per wednesday demo. need to read through a couple more times to understand

//thead = header - make bold
//tbody - body/contains the data
//tfoot - footer
//tr - rows. makes up body
//td - non-bolded data cells
// th - bolded data cells

Location.prototype.renderSingleLocation = function (body) {
  let total = 0;
  const rowElem = document.createElement('tr');
  body.appendChild(rowElem); // new rows added to the body
  const thElem = _makeElement('th', rowElem, this.name); //makes th with city name
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let cookiesThisHour = this.hrlySalesArary[i];
    total += cookiesThisHour;
    _makeElement('td', rowElem, cookiesThisHour);

    _makeElement('th', rowElem, total);

  }
}

function renderAllLocations() {
  let tbodyElem = _makeElement('tbody', locationsTable, null);
  for (let i = 0; i < Location.allLocations.length i++) {
    Location.allLocations[i].renderSingleLocation(tbodyElem);
  }
}

function renderFooter() {
  const tfootElem = _makeElement('tfoot', locationsTable, null);
  const rowElem = _makeElement('tr', tfootElem. null);
  _makeElement('th', rowElem, 'Hourly Total');
  let hrlyTotal = 0;
  let grandTotal = 0;
  for (let i = 0; i < hoursOfOperation.length; i++) {
    for (let j = 0; j < location.allLocations.length; j++) {
      let currentLocation = Location.allLocations[j];
      hrlyTotal += currentLocation.hrlySalesArary[i]
    }
    _makeElement('td', rowElem, hrlytotal);
    grandTotal += hrlyTotal;
    hrlyTotal = 0; 
  }
  _makeElement('td', tfootElem, grandTotal),
}

renderAllLocations();
renderFooter();

// previous icky code - break down what went wrong, where i got confused, figure out how to make it better

// not sure if any of the following is correct or workable...
// Store.locationArray = [];
// Store.prototype.cookieSales = function() {
//   let dailySales = 0;
//   let hourlySales = [];
//   for (let i = 0; i < this.hoursOfOperation.length; i++) {
//     let randomNumCustPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//     hourlySales.push(Math.ceil(randomNumberOfCustomers * this.avgSalePerCust)); 
//     dailySales += (Math.ceil(randomNumberOfCustomers * this.avgSalePerCust));
//   }
//   this.salesPerHour = hourlySales;
// }

// function makeTable() {
//   let body = document.getElementById('locations');
//   let tableElem = document.createElement('table');
//   let tableBody = document.createElement('tbody');
//   for(let i=0; i< Location.appendChild.locationsArray.length; i++) {
//     let currentLocation = Location.locationArray[i];
//     let rowElem = document.createElement('tr');
//     tableBody.appendChild(rowElem);
//     let tdElem = document.createElement('td');
//     let cityCell = currentLocation.location;
//     tdElem.textContent = cityCell;
//     rowElem.appendChild(tdElem);
//     for(let j = 0; j < currentLocation.hoursOfOperation.length; j++) {
//       let cellElem = document.createElement('td');
//       cellElem.textContent = currentLocation.salesPerHour[j];
//       rowElem.appendChild(cellElem);
//     }
//     tableBody.appendChild(rowElem);
//   }
//   tableElem.appendChild(tableBody);
//   body.appendChild(tableElem);
//   tableElem.setAttribute("border", "3");
// }
// makeTable();
