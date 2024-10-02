function evenPositionElment(arr: string[]): void {
    let evenElements: string[] = [];

    for(let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenElements.push(arr[i]);
        }
    }

    const result = evenElements.join(' ');

    console.log(result);
}

evenPositionElment(['20', '30', '40', '50', '60']);
