// Exercise 1
const double_1 = (value: number) => value * 2;
console.log(double_1(10));

// Exercise 2
const greet_1 = (name: string = "Max") => {
    console.log("Hello, " + name);
};
greet_1();
greet_1("Anna");

// Exercise 3
const numbers_1: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers_1));

// Exercise 4
const newArray_1 = [55, 20];
newArray_1.push(...numbers_1)
console.log(newArray_1);

// Exercise 5
const testResults_1 = [3.89, 2.99, 1.38];
const [result_1, result_2, result_3] = testResults_1;
console.log(result_1, result_2, result_3);

// Exercise 6
const scientist_1 = {firstName_1: "Will", experience_1: 12};
const {firstName_1, experience_1} = scientist_1;
console.log(firstName_1, experience_1);
// console.log(name_1, exp);