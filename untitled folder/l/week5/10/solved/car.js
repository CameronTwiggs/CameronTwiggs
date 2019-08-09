// constructor function which can take in a series of values and create objects
// with the properties contained inside
function Car(name, maker, year, laps, speed) {
  this.name = name;
  this.maker = maker;
  this.year = year;
  this.laps = laps;
  this.speed = speed;  

  // method which prints all of the stats for a car
  this.printStats = function() {
    console.log(`Name: ${this.name}
    Make: ${this.maker}
    Year: ${this.year}
    Speed: ${this.speed}
    Laps finished: ${this.laps}`)
    console.log(`-----------------------`)
    
  };
  // method which determines whether or not a car has finsihed the race
  // all cars in the race need to complete 100 laps
  this.stillRacing = function() {
    if (this.laps < 100) {
      let lapsToGo = 100 - this.laps
      console.log(`${this.name} is still in the race!
      Laps finished: ${this.laps}
      Laps To gGo: ${lapsToGo}`)
      console.log(`--------------------------------`)     
      return true;
    }
    console.log(this.name + " has won the race!");
    return false;
  };

  // method which takes in a second object and calculates the number of laps advanced or set back 
  this.race = function(auto) {
      let power2 = auto.speed * (Math.floor(Math.random()*3))
      let power1 = this.speed * (Math.floor(Math.random()*3) + 1)
      let progress = power1 - power2
      auto.laps += progress;
  };
}

// creates two two cars using the car constructor
var car1 = new Car("Speedster", "Porshe", "2019", 0, 10);
var car2 = new Car("RoadWarrior", "Maserati", "2018", 0, 8);


while (car1.stillRacing() === true && car2.stillRacing() === true) {
    // cars race on the track
    car1.race(car2);
    car2.race(car1);
    // prints stats to show changes
    car1.printStats();
    car2.printStats();
  }
  