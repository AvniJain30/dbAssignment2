function calculate(num1, num2, operation) {
    // Return a new Promise
    return new Promise((resolve, reject) => {
        // Perform the corresponding operation based on 'operation'
        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject("Division by zero is not allowed");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Invalid operation. Please choose 'add', 'subtract', 'multiply', or 'divide'.");
        }
    });
}

// Example usage:
calculate(10, 5, 'add')
    .then(result => {
        console.log("Result:", result); // Output: 15
    })
    .catch(error => {
        console.error("Error:", error);
    });

calculate(10, 0, 'divide')
    .then(result => {
        console.log("Result:", result); // This block will not be executed due to rejection
    })
    .catch(error => {
        console.error("Error:", error); // Output: Error: Division by zero is not allowed
    });

calculate(7, 3, 'invalid')
    .then(result => {
        console.log("Result:", result); // This block will not be executed due to rejection
    })
    .catch(error => {
        console.error("Error:", error); // Output: Error: Invalid operation. Please choose 'add', 'subtract', 'multiply', or 'divide'.
    });
