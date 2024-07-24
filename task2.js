function sumOfArray(numbers) {
    // Using reduce to accumulate the sum of all elements in 'numbers'
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const totalSum = sumOfArray(numbers);
console.log(totalSum); // Output: 15
