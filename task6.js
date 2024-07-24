function capitalizeFirstLetter(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Capitalize the first letter of each word using map
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the capitalized words back into a sentence
    const capitalizedSentence = capitalizedWords.join(' ');

    return capitalizedSentence;
}

// Example usage:
const sentence = "hello world, how are you?";
const capitalized = capitalizeFirstLetter(sentence);
console.log(capitalized); // Output: "Hello World, How Are You?"
