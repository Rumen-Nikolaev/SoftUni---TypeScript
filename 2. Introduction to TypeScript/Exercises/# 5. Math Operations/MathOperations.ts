function calculate(num1: number, num2: number, operator: string): void {
    let result: number;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero is not allowed.");
                return;
            }
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2; // Exponentiation
            break;
        default:
            console.log("Error: Invalid operator.");
            return;
    }

    console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
}

calculate(10, 5, '+');  
calculate(10, 5, '-');  
calculate(10, 5, '*');  
calculate(10, 5, '/');   
calculate(10, 5, '%');   
calculate(10, 2, '**'); 
calculate(10, 0, '/');  
calculate(10, 5, '^');  
