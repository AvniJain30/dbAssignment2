// Helper function to check if a number is prime
function isPrime(n) {
    if (n <= 1)
        return false;

    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;

    return true;
}

// Function to filter out prime numbers from an array
function getPrimes(numbers) {
    // Using filter to create a new array containing only prime numbers
    const primeNumbers = numbers.filter(number => isPrime(number));
    return primeNumbers;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = getPrimes(numbers);
console.log(primeNumbers); // Output: [2, 3, 5, 7]
