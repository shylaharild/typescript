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
