// Object prototype chain and prototypal inheritance
/*

/1. Create a Person constructor that has three properties: name, job, and age.
/2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
/3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
/4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
/5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false.
    And give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
/6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now."
    and "Mark would love to take on a new responsibility." if the programmer is not busy.
/7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
/8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?

Bonus - ES6 Syntax: Use ES6 Syntax in your answer.
  Feel free to add on new methods or properties to incorporate the syntax.
*/

function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    
  
    // method which prints all of the stats for our guy
    this.printStats = function() {
      console.log( 
     `Name: ${this.name}
      Job: ${this.job}
      Age: ${this.age}`);
    };
}
var heroOfTime = new Person("Link", "Hero Of Time", "10/17");

heroOfTime.printStats();

function exercise() {
    return "Saving all of Hyrule sure does work up a sweat";
}
function fetchJob() {
    return `${this.name} is the ${this.job}`;
}

function Programmer(name, job, age, languages, busy) {
    Person.call(this, name, job, age);
    this.languages = languages;
    busy = true;

    this.printStats = function() {
        console.log( 
       `Name: ${this.name}
        Job: ${this.job}
        Age: ${this.age}
        Languages: ${this.languages}`);
      };
}

heroOfTime.languages = "SheikahScript, HylianTML, Triforce++";

heroOfTime.printStats();

function completeTask(){
    busy = false;
    console.log("Just like that, Ganon is defeated once more!");
}

function acceptNewTask(){
    busy = true;
    console.log("Ganon's evil has invaded Hyrule once more, Another adventure awaits!" );
}

function offerNewTask(){
    if (Programmer.busy = false){
        console.log("Link readily accepts the oncoming challenge!");
    }
    else {
        console.log("Hyrule is at stake! There's no time for sidequests!");
    }
}
function learnLanguage(){

}
function listLanguages(){
    
}