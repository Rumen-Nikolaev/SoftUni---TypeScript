function calculateArea(length: number, width: number): number {
    return length * width;
}

let length: number = 5; 
let width: number = 3;  

let area = calculateArea(length, width);
console.log("The area of the rectangle is: " + area);
