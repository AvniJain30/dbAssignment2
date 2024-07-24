function averageOfSquaredOddNumbers(numbers) {
    // Step 1: Filter odd numbers
    const oddNumbers = numbers.filter(num => num % 2 !== 0);

    // Step 2: Square each odd number
    const squaredOddNumbers = oddNumbers.map(num => num ** 2);

    // Step 3: Calculate the sum of squared odd numbers
    const sum = squaredOddNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Step 4: Calculate the average
    const average = sum / squaredOddNumbers.length;

    return average;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = averageOfSquaredOddNumbers(numbers);
console.log(result); // Output: 25 // Explanation: (1^2 + 3^2 + 5^2 + 7^2 + 9^2) / 5 = 25
