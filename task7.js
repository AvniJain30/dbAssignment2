function findPassedStudents(students) {
    // Using filter to find students who passed (scored 60 or above)
    const passedStudents = students.filter(student => student.score >= 60);
    return passedStudents;
}

// Example usage:
const students = [
    { name: "Alice", score: 70 },
    { name: "Bob", score: 55 },
    { name: "Charlie", score: 85 },
    { name: "David", score: 45 },
    { name: "Eve", score: 60 }
];
const passed = findPassedStudents(students);
console.log(passed);
