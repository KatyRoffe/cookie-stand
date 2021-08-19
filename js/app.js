'use strict'
// console.log ('do re me fa so la ti do');


// this - keyword referring to the "owner" of the method; 
// push - adds a new item to an array
// Math.floor() rounds down to the nearest integer
// Math.random() returns a random number between 0 and 1

// step 1 - establish the area on the appropriate page (in this case, Sales) where the data should appear. 

const locationsDiv = document.getElementById('locations');
// locationsDiv refers to the <div id="locations"> set up on the sales page. 


// step 2 - establish the hours of operations. make this an array. 

const dailyOpsHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// step 3 - set up an object for each location


// seattle
const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSalesPerCust: 6.3,
  hrlySalesArray: [],
  // this array will be filled with a total for every daily operation hour. it is found by multiplying a random number of customers (randNumOfCust) by the average sales per customer (avgSalesPerCust)

  randNumOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillhrlySalesArray: function() {
    for (let i = 0; i < dailyOpsHours.length; i++) {
      let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
      this.hrlySalesArray.push(Math.ceil(salesPerHour));
      //this loops through the dailyOpsHours array to create a hrlySalesArray 
    }
  }
}

// tokyo
const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSalesPerCust: 1.2,
  hrlySalesArray: [],

  randNumOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillhrlySalesArray: function() {
    for (let i = 0; i < dailyOpsHours.length; i++) {
      let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
      this.hrlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

// dubai
const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSalesPerCust: 3.7,
  hrlySalesArray: [],

  randNumOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillhrlySalesArray: function() {
    for (let i = 0; i < dailyOpsHours.length; i++) {
      let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
      this.hrlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

// paris
const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSalesPerCust: 2.3,
  hrlySalesArray: [],

  randNumOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillhrlySalesArray: function() {
    for (let i = 0; i < dailyOpsHours.length; i++) {
      let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
      this.hrlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

// lima
const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSalesPerCust: 4.6,
  hrlySalesArray: [],

  randNumOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillhrlySalesArray: function() {
    for (let i = 0; i < dailyOpsHours.length; i++) {
      let salesPerHour = this.randNumOfCust() * this.avgSalesPerCust;
      this.hrlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

// step 4 - set up how to get the data onto the Sales page

function _makeElement(tag, parent, text) { //this is a Sara-made function specifically to make adding the elements easier
  const element = document.createElement(tag); // creates an element matching the tag;
  parent.appendChild(element);  //appends the element to the parent
  if (text) {
    element.textContent = text; // if it has text content, then it will add the text content
  }
  return element;
}

// this sets the paramater of a location --> makes all the elements --> adds the location name to the h3 elment --> makes a ul element --> and fills the ul with an li by looping through the hrlySalesArray and adding text content '6am: XX cookies'
function renderLocation(location) {
  let total = 0;
  const articleElem = _makeElement('article', locationsDiv, null);
  _makeElement('h3', articleElem, location.name);
  const ulElem = _makeElement('ul', articleElem, null);
  for (let i = 0; i < dailyOpsHours.length; i++) {
    const text = `${dailyOpsHours[i]}: ${location.hrlySalesArray[i]} cookies`;
    total += location.hrlySalesArray[i];
    _makeElement('li', ulElem, text);
  }
  let totalsString = `Total: ${total} cookies`;
  _makeElement('li', ulElem, totalsString);
}

// step 5 - add a locations array based on the name of the objects
const locationsArray = [seattle, tokyo, dubai, paris, lima];

//step 6 - generate cookie data for each location

// loops through the locationsArray and calls these functions
function renderAllLocations() {
  for (let i = 0; i < locationsArray.length; i++) {
    const currentLocation = locationsArray[i];
    currentLocation.fillhrlySalesArray()
    renderLocation(currentLocation);
  }
}

//calls the function
renderAllLocations();