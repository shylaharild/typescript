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
