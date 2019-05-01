console.log("It works!");
// strings
var myName = 'Sri';
// myName = 25;
// numbers
var myAge = 27;
// myAge = 'Sri'
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// hasHobbies = "false";
// assign types
var myRealAge = 30;
// myRealAge = '30';
// array (it is an object)
var hobbies_1 = ["Cooking", "games"];
console.log(hobbies_1);
// hobbies_1 = [100, 200];
var hobbies = ["Cooking", "games"];
hobbies = [100];
hobbies = [true];
// tuples
var add = ["Malibu Point", 10880];
// enums
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Blue"] = 100] = "Blue";
    Colour[Colour["Green"] = 2] = "Green";
    Colour[Colour["Orange"] = 3] = "Orange"; //3
})(Colour || (Colour = {}));
var myColour = Colour.Green;
console.log(myColour);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 7 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello");
    // return myName;
}
// argument types
function multiply(val_1, val_2) {
    return val_1 * val_2;
}
console.log(multiply(2, 'Sri')); //js provides lof as NaN (Not a Number)
function multiplication(val_1, val_2) {
    return val_1 * val_2;
}
// console.log(multiplication(2, 'Sri'));
console.log(multiplication(2, 4));
// function types
var myMultiply; // the order of the arguments given in important here
// myMultiply = sayHello;
// myMultiply()
myMultiply = multiplication;
console.log(myMultiply(10, 2));
// objects
var userData = {
    name: "Sri",
    age: 27
};
// The order is not important while the name of the properties in the object important - (name & age) 
// userData = {
//     a: "Nick",
//     b: 27
// }
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var myRealRealAge = 27;
myRealRealAge = '27';
// myRealRealAge = true;
// check types
var finalValue = "A String";
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
else if (typeof finalValue == "string") {
    console.log("Final value is a string");
}
