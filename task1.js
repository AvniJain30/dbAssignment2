function cubesOfNumbers(numbers) {
    // Using map to create a new array where each element is the cube of the corresponding element from 'numbers'
    const cubes = numbers.map(num => num ** 3);
    return cubes;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const cubesArray = cubesOfNumbers(numbers);
console.log(cubesArray); // Output: [1, 8, 27, 64, 125]
