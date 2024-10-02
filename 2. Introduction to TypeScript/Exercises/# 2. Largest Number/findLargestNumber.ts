function findLargestNumber(num1: number, num2: number, num3: number): void {
    let largest = num1;

    if (num2 > largest) {
        largest = num2;
    }

    if (num3 > largest) {
        largest = num3;
    }

    console.log(`The largest number is ${largest}.`);
}

findLargestNumber(5, 10, 7);
