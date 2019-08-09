

// Lets review es6 syntax and some new capabilities for working with arrays and objects

// lets look at es6 syntax for a function

function oldWay(x){
    if (x=='old'){
        return 'new';
    }
}



const newWay = (x) => {
    if (x == "new"){
        return 'glad we have the new';
    }
};


console.log(oldWay("old"));
console.log(newWay('new'));


// copy an object
let pet = {
    name: 'Spot',
    age: 15,
    fur: 'brown'
};

///// combine arrays using spread
const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];

let combine = [...spreadableOne, ...spreadableTwo];

// create an array Array.from('a string')
let helloArray = Array.from("Hello");
console.log(helloArray);
console.log(Array.from(combine));
// double and increment - functions are first class citizens
const db1 = (x) => {
     return 2*x;
}


console.log(db1(2));

const inc = (x) =>{
    return x + 1;
}

console.log(inc(1));

console.log(inc(db1(100)));


// map - generating an array from an array
let data = [{name: 'spot', age: 15},
            {name: 'rusty', age: 1},
            {name: 'kitty', age: 6},
            {name: 'spencer', age: 12} ]
let newarr = data.map((d) => {

console.log(`This is what i got ${JSON.stringify(d)}`);

    if (d.name == "rusty"){
        d.owner = "me";
        return d;
    }
    else{
        return d;
    }
});


let realnewarr = data.filter((d) => {
    return d.name === "kitty";
});

console.log(newarr);
// filter data in an array  use = and ===


/*
*/
