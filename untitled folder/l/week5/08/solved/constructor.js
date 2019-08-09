
function Animal(name, age, raining, noise) {
  this.name = name;
  this.age = age;
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

Animal.prototype.speak = function(){
  console.log(`Hi my name is ${this.name} and I am ${this.age} years old`)
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dogs = new Animal('spot', 11, true, "Woof!");
var cats = new Animal('kitty', 5, false, "Meow!");
var rabbit = new Animal('bugs', 8, false, "Squeek!");

dogs.speak()
cats.speak()
rabbit.speak()
// lets look at the object
console.log(dogs)