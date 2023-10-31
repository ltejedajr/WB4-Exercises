"use strict";

// Declare the two arrays of exam scores.

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores= [82, 98, 94, 88, 92, 100, 100];

// Create a new function to find the average scores in the arrays.
function getAverage(scores) {
    let sum = 0;
    
    let numScores = scores.length;
    for (let i = 0; i < numScores; i++) {
        sum += scores[i];
    }

    // Find average by dividing the total of numbers.
    let average = sum / numScores;

    return average;
}

// Calculate the average of the given scores' variables in each array.
    let myScoreAverage = getAverage(myScores);
    let yourScoreAverage = getAverage(yourScores);

    console.log('My score average is ' + myScoreAverage.toFixed(2) + '.')
    console.log('Your score average is ' + yourScoreAverage.toFixed(2) + '.')
