

// see Readme for directions

function Animal(raining, noise, name, age) {
  this.age = age;
  this.name = name;
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

var dogs = new Animal(true, "Woof!", "Donny", 10);
var cats = new Animal(false, "Meow!" ,"Cassy", 10.5);
var snake = new Animal(true, "SSSSSSS", "Sammy", 11);


Animal.prototype.Jump = function (){
  console.log(`wooooshh $(this.noise)`)
}