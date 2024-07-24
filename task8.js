function createInstanceCounter() {
    let count = 0; // Private variable to hold the count for each instance

    // Inner function that increments the count and returns it
    return function() {
        count++;
        return count;
    };
}

// Example usage:
const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2
