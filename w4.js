
//////////////////////First Don't reapet yourself////////////////////
function Cat(name) {
    this.name = name; 
  }
  
  Cat.prototype = {
    constructor: Cat 
    
  };
  
  function Bear(name) {
    this.name = name; 
  }
  
  Bear.prototype = {
    constructor: Bear 
   
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
    
 };
  
//////////////////////////////Second  Understand the Prototype Chain////////////////////////////
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // => true
  
  // Fix the code below so that it evaluates to true
   Object.prototype.isPrototypeOf(Dog.prototype);

   console.log(Object.prototype.isPrototypeOf(Dog.prototype));
  
////////////////////////////////third    Inherit Behaviors from a Supertype///////////////////////////////
function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck=Object.create(Animal.prototype); 
let beagle=Object.create(Animal.prototype) ;

duck.eat(); 
beagle.eat();  
