console.log("LET & CONST");

// let & const
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable)

const maxLevels = 100; // the value assigned to constant cannot be changed
console.log(maxLevels);
// maxLevels = 101;

// Block Scope
function reset() {
    // console.log(variable);
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("Arrow Functions!");
// arrow function with multiple parameters
const addNumbers = function(val1: number, val2: number): number {
    return val1 + val2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (val1: number, val2: number) => val1 * val2;
console.log(multiplyNumbers(10, 3));

// arrow function witn no parameter
const greet = () => {
    console.log("Hi!");
};
greet();

// arrow function with one parameter
const greetFriend = (friend: string) => console.log("Hello, " + friend);
greetFriend('Sri');

const greetAnotherFriend = friend => console.log("Hello, " + friend); 
// The above would require to set noImplicitAny to false in tsconfig

// Default Parameters
console.log("Default Parameters!");
// The parameter has the default value set when defined
const countdown = (val1: number = 10): void => {
    console.log(val1)
    while(val1 > 0) {
        val1--;
    }
    console.log("Done!", val1)
};
countdown(20);
countdown();

// Rest & Spread
console.log("Rest and Spread!");
const numbers = [1, 10, 99, -5];
console.log(Math.max(10, 99, -789, 990)); // the numbers here are just list of numbers not array
// console.log(Math.max(numbers));  // This wont work as the numbers are in array which is an object
console.log(Math.max(...numbers)); // spread operator ... will spread the array into list

//  when ... is used inside the function to build the parameter dynamically, it becomes Rest Operator
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Sri", 2, 5, 8));

// Rest Parameters & Tuples
function printInformation(name: string, age: number) {
    console.log('My name is ' + name + ' and my age is ' + age + 'years');
}
printInformation('Sri', 27);

function printInfo(...info: [string, number]) {
    console.log('My name is ' + info[0] + ' and my age is ' + info[1] + 'years');
}
printInfo('Sri', 27);

