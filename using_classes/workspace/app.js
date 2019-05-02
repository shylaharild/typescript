"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Inheritance
var Sri = /** @class */ (function (_super) {
    __extends(Sri, _super);
    // name = "Sri";
    function Sri(user_name) {
        var _this = _super.call(this, "Sri", user_name) || this;
        _this.age = 30;
        return _this;
    }
    return Sri;
}(Person));
var sri = new Sri("saran");
console.log(sri);
