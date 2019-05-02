class Person {
    public name: string;
    private type: string;
    protected age: number = 27;

    constructor(name: string, public userName: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Cool guys!");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person('Sri', 'sri.l')
console.log(person.name, person.userName);
person.printAge();
// person.setType('DevOps'); // this won't work with private method

// Inheritance
class Sri extends Person {
    // name = "Sri";

    constructor(user_name: string) {
        super("Sri", user_name);
        this.age = 30;
    }
}

const sri = new Sri("saran");
console.log(sri);