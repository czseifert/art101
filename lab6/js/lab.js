//my transportation array
let myTransport = ['bike', 'feet', 'car'];

//my primary method of transportation
let myMainRide = {
  make: 'Jeep',
  model: 'Gladiator',
  color: 'yellow',
  year: 2021,
  ownIt: true,
};
myMainRide.age = 2021 - myMainRide.year;

//print myTransport
document.writeln ("My Main Ride:" + myTransport + "<br>");

//print myMainRide object
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
