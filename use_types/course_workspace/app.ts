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
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply()
myMultiply = multiplication;
console.log(myMultiply(10, 2));
