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