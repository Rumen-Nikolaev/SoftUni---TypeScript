function createPersonObject(firstName: string, lastName: string, age: string): void {
    const create = {
        firstName: firstName,
        lastName: lastName,
        age: parseInt(age, 10);
    }

    console.log(`firstName: ${create.firstName}`);
    console.log(`lastName: ${create.lastName}`);
    console.log(`age: ${create.age}`);
}

createPersonObject("Peter", "Pan", "20");
