// constructor function which can take in a series of values and create objects
// with the properties contained inside

// CODE WARS


var RoundNumber = 1;

function Engineer(name, profession, tenure, totalCode) {
  this.name = name;
  this.profession = profession;
  this.tenure = tenure;
  this.totalCode = totalCode;  

  // method which prints all of the stats for our engineer
  this.printStats = function() {
    console.log("Round: " + RoundNumber);
    console.log(`
  Name: ${this.name}
  Profession: ${this.profession}
  Tenure: ${this.tenure}
  Total Code: ${this.totalCode}
  Factor: ${this.factor}
  
  -------------`);
  RoundNumber++
  };
  // method which determines whether or not an engineer has laid down the 
  // required code
  this.isCoding = function() {
    if (this.totalCode < 1000) {
      console.log(this.name + " is still coding!");
      console.log("\n-------------\n");
      return true;
    }
    console.log(this.name + " has finished the web site!");
    return false;
  };

  // method which takes in a second object and decrease the total code
  // by conducting a review and making them refactor.
  // Note the algorithms that have been designed!!
  this.refactor = function(dev2) {
    if (this.tenure > 5) {
      this.factor = 10; }
    else {
      this.factor = 2;
    }
    dev2.totalCode -= this.factor * (Math.floor(Math.random()*5));  
  };

  // method which increases this character's stats when called
  this.writeCode = function() {
    if (this.tenure > 5) {
      this.factor = 50; }
    else {
      this.factor = 10;
    }
    this.totalCode += this.factor * (Math.floor(Math.random()*5));    
  };
}

// creates two unique characters using the "character" constructor
var senior = new Engineer("Machine", "web", 10, 0);
var junior = new Engineer("Rocket", "backend", 1, 0);
var master = new Engineer("Cameron", "master", 100, 0);



while (senior.isCoding() && junior.isCoding() ){
   senior.refactor(junior);
   junior.refactor(senior);
  
   senior.writeCode();
   junior.writeCode();
  
   senior.isCoding();
   junior.isCoding();
  
   senior.printStats();
   junior.printStats();
  
}