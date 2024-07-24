function calculateTotalScore(scoresArray) {
    let totalScore = 0;

    // Iterate over each object in the array using forEach
    scoresArray.forEach(obj => {
        // Add the score property of each object to the totalScore
        totalScore += obj.score;
    });

    return totalScore;
}

// Example usage:
const scores = [
    { score: 85 },
    { score: 90 },
    { score: 75 },
    { score: 95 }
];

const totalScore = calculateTotalScore(scores);
console.log("Total Score:", totalScore); // Output: Total Score: 345
