"use strict";

let students = [
        {name: "Eridania", scores: [100, 96, 99,92]},
        {name: "Daisy", scores: [92, 89, 96, 100, 94]},
        {name: "Olivia", scores: [86, 72, 92]},
        {name: "LJ", scores: [98, 84, 89, 100, 100, 76]},
        {name: "Lawrence", scores: [89, 100]},
        {name: "Larry", scores: [100, 99, 100, 87]}
];

for(let i = 0; i < students.length; i++) {
    let student = students[i];
    let sum = 0;

    for (let i = 0; i < student.scores.length; i++) {
        sum += student.scores[i];

    }
        let average = sum / student.scores.length;

        console.log(`The average score for ${student.name}: ${average.toFixed(2)}`);

}
