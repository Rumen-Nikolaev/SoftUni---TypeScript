class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    printInfo(): void {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

function main() {
    const inputLines = [
        "Peter 12",
        "Sofia 33",
    ];

    for (const line of inputLines) {
        const [name, ageStr] = line.split(" ");
        const age = parseInt(ageStr, 10);

        const person = new Person(name, age);
        person.printInfo(); 
    }
}

main();
