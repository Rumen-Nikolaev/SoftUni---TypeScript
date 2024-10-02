function sumOfNumbers(N: string, M: string): void {
    let numN = parseInt(N);
    let numM = parseInt(M);
    let sum = 0;

    for(let i = numN; i <= numM; i++) {
        sum += i;
    }

    console.log(`The sum of all numbers ${numN} and ${numN} is ${sum}`);
}

sumOfNumbers("5", "10");
