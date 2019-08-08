// const stuff = "String"
// stuff = "Moe"
// thats not gonna work

const fellowship =  ["bingo", "bongo", "Max","Cameorn","Hannah","Bong"]

fellowship.forEach(name => console.log("Hello "+ name))


//map is like foreach but returns a new array 
const Capname = fellowship.map( name => name.toUpperCase());
console.log(Capname, fellowship)


//filter returns a new array
const onlybingo = fellowship.filter(name => name.toLowerCase() === "bingo")
console.log(onlybingo)
// some looks for specific letters
// const HasB = fellowship.some()


const every = fellowship.every(name => name[name.length - 1] === "n")
console.log(every)



const sayHello = (name) => {
    console.log(`Hello ${name}`)
} 

sayHello("tim");
sayHello();


