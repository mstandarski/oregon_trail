(function () {
  // 'use strict';

  function Traveler(fname) {

    var name = fname;
    var food = 0;
    var isHealthy = true;  //come back to this - health is not defined anywhere

    this.getName = function () {
      return name;
    }
    this.getFood = function () {
      return food;
    }
    this.getHealth = function() {
      return isHealthy;
    }

    this.setFood = function(newFood){
      food = newFood;
    }

    this.setHealth = function(newHealth) {
    isHealthy = newHealth;
    }


  }

  function Wagon(capacity) {

    var capacity = capacity;
    var passengers = []

    this.getCapacity = function () {
      return capacity;
    }

    this.setPassenger = function (newPassenger) {
      if (passengers.length <= capacity){
        passengers.push(newPassenger);
        } else {
        console.log("too many people!");
      }
    }
    this.getPassengers = function () {
      return passengers;
    }
  }

  //getter allows info to flow out (throws info over the fence)
  //setter allows info to flow in (throws info over the fence)


  function makeTraveler (fname){
    let traveler = new Traveler(fname);
    return traveler;

  }

  function makeWagon(capacity) {
    let wagon = new Wagon(capacity)
    return wagon;
  }

  // hunt(traveler)
  // 50% chance to increase the traveler's food by 100 (successful hunt), and 50% to increase it by 0 (unsuccessful hunt).

  function hunt(traveler) {
    if (Math.round(Math.random()) == 1) {
      traveler.setFood(traveler.getFood() + 100);
    }
  }
// The below is another way to write the hunt function
// let x = traveler.getFood();
// let y = x + 100;
// traveler.setFood(y);


  function eat(traveler) {
    traveler.setFood(traveler.getFood() - 20)
    if (traveler.getFood() < 20) {
      traveler.setHealth(false);
    }
  }


  function join(wagon, passenger){
    wagon.setPassenger(passenger);

  }


  // quarantine(wagon)
  // Return true if there is at least one unhealthy person in the wagon. Return false if not.

  function quarantine(wagon) {
    let wagonPassengers = wagon.getPassengers();
    for (var i = 0; i < wagonPassengers.length; i++) {
    if (!wagonPassengers[i].getHealth()) {
             return true;
         }
     }
  }




  // food(wagon)
  // Return the total amount of food among all occupants of the wagon.

  function food(wagon){
    let total = 0;
    let wagonPassengers = wagon.getPassengers();
    for (var i = 0; i < wagonPassengers.length; i++) {
      total = total + wagonPassengers[i].getFood();
    }
    return total;
  }






//  THE BELOW IS COPIED FROM THE NEWLINE INSTRUCTIONS
  // Create a wagon called 'wagon'
   let wagon = makeWagon(5);
  // Create a traveler with the name 'Henrietta' called 'traveler'
   let traveler = makeTraveler('Henrietta');
  // Create a traveler with the name 'Juan' called 'traveler2'
   let traveler2 = makeTraveler('Juan');
  hunt(traveler); // maybe get more food
  eat(traveler2);
  eat(traveler2); // juan is hungry
   join(wagon, traveler);
   join(wagon, traveler2);

  console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
  console.log(food(wagon)); // print juan's food + henrietta's food




})();
