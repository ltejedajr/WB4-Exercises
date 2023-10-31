"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];


// When does the PROG200 course start?
let numCourses = courses.length;

for (let i = 0; i < numCourses; i++) {
    let courseInfo = courses[i];
    if (courseInfo.CourseId == "PROG200") {

        let startDate = courseInfo.StartDate;
        console.log("The PROG200 course starts on: " + startDate);
    }
}

// What is the title of the PROJ500 course?
for (let i = 0; i < numCourses; i++) {
    let courseInfo = courses[i];
    if (courseInfo.CourseId == "PROJ500") {

        let title = courseInfo.Title;
        console.log("The title for the PROJ500 course is: " + title);
    }
}

// What are the titles of the courses that cost $50 or less?
let cheaperCourses = [];

for (let i = 0; i < numCourses; i++) {
    let courseInfo = courses[i];
    if (courseInfo.Fee <= 50) {

        cheaperCourses.push(courseInfo.Title);
    }
}

console.log(`The course that cost $50 or less are: `);
for (let i = 0; i < cheaperCourses.length; i++) {
    console.log(cheaperCourses[i]);
}

// What classes meet in "Classroom 1"?

let classroom1 = [];

for (let i = 0; i < numCourses; i++) {
    let courseInfo = courses[i];
    if (courseInfo.Location == "Classroom 1") {

        classroom1.push(courseInfo.Title);
    }
}

console.log(`The courses that meet in "Classroom 1" are: `);
for (let i = 0; i < classroom1.length; i++) {
    console.log(classroom1[i]);
}