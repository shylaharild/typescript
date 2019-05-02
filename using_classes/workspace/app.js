"use strict";
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Cool guys!");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Sri', 'sri.l');
console.log(person.name, person.userName);
person.printAge();
// person.setType('DevOps'); // this won't work with private method
