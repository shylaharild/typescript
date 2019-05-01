console.log("It works!");

// strings
let myName = 'Sri';
// myName = 25;

// numbers
let myAge = 27
// myAge = 'Sri'

// boolean
let hasHobbies = true;
// hasHobbies = 1;
// hasHobbies = "false";

// assign types
let myRealAge: number = 30;
// myRealAge = '30';

// array (it is an object)
let hobbies_1 = ["Cooking", "games"];
console.log(hobbies_1)
// hobbies_1 = [100, 200];
let hobbies: any[] = ["Cooking", "games"];
hobbies = [100];
hobbies = [true];

// tuples
let add: [string, number] = ["Malibu Point", 10880];

// enums
enum Colour {
    Red, //0
    Blue = 100, //100
    Green = 2, //101
    Orange //3
}

let myColour: Colour = Colour.Green
console.log(myColour)

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 7};
console.log(car);

// functions
function returnMyName(): string { //the type here refers only to the value that is returned
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void { // cannot return anything if void used 
    console.log("Hello");
    // return myName;
}

// argument types
function multiply(val_1, val_2): number {
    return val_1 * val_2;
}
console.log(multiply(2, 'Sri')); //js provides lof as NaN (Not a Number)

function multiplication(val_1: number, val_2:number): number {
    return val_1 * val_2;
}
// console.log(multiplication(2, 'Sri'));
console.log(multiplication(2, 4));


// function types
let myMultiply: (val1: number, val2: number) => number; // the order of the arguments given in important here
// myMultiply = sayHello;
// myMultiply()
myMultiply = multiplication;
console.log(myMultiply(10, 2));

// objects
let userData: { name: string, age: number } = {
    name: "Sri",
    age: 27
};
// The order is not important while the name of the properties in the object important - (name & age) 
// userData = {
//     a: "Nick",
//     b: 27
// }

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
};
// complex = {};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
};

let myRealRealAge: number | string = 27;
myRealRealAge = '27';
// myRealRealAge = true;

// check types
let finalValue = "A String";
if (typeof finalValue == "number") {
    console.log("Final value is a number");
} else if (typeof finalValue == "string") {
    console.log("Final value is a string");
}

// never type
// This is use to return nothing. It gives only error!
function neverReturns(): never {
    throw new Error('An error!');
}

// Nullable Types
let canBeNull = 12;
// canBeNull = null;
let canAlsoBeNull; //this is undefined not null
canAlsoBeNull = null;