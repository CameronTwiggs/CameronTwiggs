function Car(name,make,year,speed) {
    this.name = name;
    this.make = make;
    this.year = year;
    this.speed = speed;
    this.laps = 0;
    this.printStats = function() {
        console.log(`
        Name: ${this.name}
        Make: ${this.make}
        Year: ${this.year}
        Laps: ${this.laps}
        Speed: ${this.speed}
        
        `);
      };
    this.stillRacing = function() {
        if (this.laps > 100) {
            console.log('Done Racing');
            return false;
        }
        else{
            console.log("Still Racing");
            return true;
        }
    };
    this.race = function(car) {
        if (this.speed > 5) {
            this.factor = 10;
        }
        else {
            this.factor = 3;
        }
        this.lap += this.factor * (Math.floor(Math.random()*3));
    }
}

var Car1 = new Car("Cameron", "Cameron", 2002, 4);
var Car2 = new Car("Bradnon", "Brandon", 2002, 8)


console.log(Car1.race)


Car1.race(Car2);

Car1.printStats()
console.log(Math.floor(Math.random()*3))