function getSecondHalfSorted(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    
    const startIndex = Math.ceil(sortedArray.length / 2);
    
    return sortedArray.slice(startIndex);
}


console.log(getSecondHalfSorted([5, 3, 8, 1, 2])); 
console.log(getSecondHalfSorted([10, 7, 3, 5, 9, 4])); 
