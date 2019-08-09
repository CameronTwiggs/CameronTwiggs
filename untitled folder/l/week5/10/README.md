# **Your Assignment**

* Over the course of this activity you are going to be using constructors to create cars for use within an upcoming auto race

* Each car created using your constructor should have the following properties...

  * Name: The car's name (be creative!) --> String

  * Make: Which company made the car (Ford, GM, etc) --> String  

  * Year: The year the car was made --> Integer

  * Laps: The number of laps competed by the car on the racetrack --> Integer

  * Speed: Abstraction for how fast the car is (a number between 1 and 10, with 1 being super slow and 10 being super fast) --> Integer
  
  * PrintStats: Function which prints all of a car's properties to the screen

  * Once you have created your constructor, create some new cars and print their properties to the screen

  * Fool around and get comfortable with your constructor before moving onto the next parts of the activity

* Now that you feel comfortable with your constructor, it is time to start making this race car constructor a little more reactive by adding in some more methods...

  * stillRacing: Function which compares the number of laps completed by a race car to 100 (total number of laps in a race). If the number of laps completed is equal to or greater than 100, the race is over! And this car wins! So return a value of true, otherwise return a value of false

  * race: Function which takes in a second car's speed * random number (generated between 0 and 3) and subtracts from the first car's speed * a random number generated between 1 and 3. (yes --- the result could be a negative number!) The result is added to the first car's laps.

  * while loop: Using the while loop, race each car against the other (using the race function) until a the race is over (based on the stillRacing function). For each iteration, be sure to execute PrintStats so we can watch the race progress!

  Be sure to reference the CODE WARS demo -- this is a nice pattern to help you think this through

  DEVELOPERS ... time to start the race!!
 

