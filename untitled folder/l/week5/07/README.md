

### Demo
* The Power of Constructor Functions

* Lets create objects from a blueprint!


* We use the new keyword to clone an object which inherits properties and methods from the constructor

* When a function is created in JavaScript, JavaScript engine adds a prototype property to the function. This prototype property is an object (called as prototype object) which has a constructor property by default. Constructor property points back to the function on which prototype object is a property. We can access the function’s prototype property using the syntax functionName.prototype.

The JavaScript prototype property allows you to add new properties to object constructors:

----
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

----



