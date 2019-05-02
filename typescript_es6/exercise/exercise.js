"use strict";
// Exercise 1
var double_1 = function (value) { return value * 2; };
console.log(double_1(10));
// Exercise 2
var greet_1 = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello, " + name);
};
greet_1();
greet_1("Anna");
// Exercise 3
var numbers_1 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers_1));
// Exercise 4
var newArray_1 = [55, 20];
newArray_1.push.apply(newArray_1, numbers_1);
console.log(newArray_1);
// Exercise 5
var testResults_1 = [3.89, 2.99, 1.38];
var result_1 = testResults_1[0], result_2 = testResults_1[1], result_3 = testResults_1[2];
console.log(result_1, result_2, result_3);
// Exercise 6
var scientist_1 = { firstName_1: "Will", experience_1: 12 };
var firstName_1 = scientist_1.firstName_1, experience_1 = scientist_1.experience_1;
console.log(firstName_1, experience_1);
// console.log(name_1, exp);
