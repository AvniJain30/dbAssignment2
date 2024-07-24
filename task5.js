function longestString(strings) {
    // Step 1: Filter out the longest string length
    const maxLength = strings.reduce((max, str) => Math.max(max, str.length), 0);

    // Step 2: Filter strings that have this length
    const longestStrings = strings.filter(str => str.length === maxLength);

    // Step 3: Return the first string (if any) from the filtered longest strings
    return longestStrings[0];
}

// Example usage:
const strings = ["apple", "banana", "orange", "kiwi", "strawberry"];
const longest = longestString(strings);
console.log(longest); // Output: "strawberry"
