(function () {


//this is the constructor method of making an object
//only if I want to pass in parameters when creating the object
//This is a 'skelton' for any Traveler you'd like to creat in the future.
//This method is useful if you plan on making more than one object.  In other words,
//this method allows us to make several different Traveler's without a lot of redundent code.
  function Traveler(){

    this.amount;
    this.name;
    this.isHealthy;


  }

travelerOne = new Traveler()


//object literal.  This is like a 'one time use' object.  You'd need to c&p the below four lines
//with different values on the right side of the '=' to create a new Traveler.
//to create more than one Traveler with this method would mean a lot of redundent code.
Traveler = {};
Traveler.amount = 5;
Traveler.name = "bob"
Traveler.isHealthy = true;

Traveler = {};
Traveler.amount = 5;
Traveler.name = "joe"
Traveler.isHealthy = true;
Traveler.isHungry = function () {

}


//ES6 way to create an object is as follows.  Note: this way does not work in Internet Explorer.
class Traveler {
  //optional constructor.  The items in the () are parameters
  constructor(amount, name, isHealthy) {
    this.amount = amount;
  }
  //the below line is a 'method'
  makesBed(){

  }
  eats(){

  }
}

travelerOne = new Traveler();

class Nomad extends Traveler {
  constructor() {

  }
}

})();
