

### Demo
* More on the Power of Constructors -- and Algorithms

* Time for the Code Wars

* In this demo note how we use
- a constructor to create our developer objects (remeber, there is difference between copying a object and cloning an object)
- functions which have been composed with algorithms. Yes .. we're just making this all up but think about how an algorithms can be designed and compased to rate customer loyalty, identify fraud, score tests, or create prices on scarce goods
- functions to interogate and update the value of properties of other objects

* Ultimately, we want to create a recursive function by using a while loop. The loop keeps executing until some condition is true

## Welcome to the Code Wars!






Note that a while loop will continue to execute until the condition is satisfied
With our objects, we can compose something like this
----

while (senior.isCoding() === true && junior.isCoding() === true) {
  // code reviews - reduces code
  senior.refactor(junior);
  junior.refactor(senior);
  // write some code - increase code base
  senior.writeCode()
  junior.writeCode();
  // prints stats to show changes
  senior.printStats();
  junior.printStats();
}

----



