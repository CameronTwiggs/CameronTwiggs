// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Animal(raining, noise, age) {
  this.age = age
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}




Animal.prototype.goToSleep = function() {
  console.log("I AM ASLEEP RAHHHHHH" + this.noise)
};



// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dogs = new Animal(true, "Woof!", 12);
var cats = new Animal(false, "Meow!", 24);
var birds = new Animal(true, "Tweet!", 36);



birds.name = "tweety";
console.log(dogs);
console.log(birds);
dogs.goToSleep();

// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();
birds.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);