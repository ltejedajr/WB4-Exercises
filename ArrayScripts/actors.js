"use strict";

let academyMember = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },

    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

// Who is the Academy Member whose ID is 187?

let numMembers = academyMember.length;

for (let i = 0; i < numMembers; i++) {
    let memberInfo = academyMember[i];
    if (memberInfo.memID == "187") {

        let memName = memberInfo.name;
        console.log('The Academy member whose ID is 187 is: ' + memName + '.');
    }
}

// Who has been in at least 3 films?

let threeFilms = []

for (let i = 0; i < numMembers; i++) {
    let memberInfo = academyMember[i];
    if (memberInfo.films.length >= 3) {

        threeFilms.push(memberInfo.name);
    }
}

console.log('These Academy members have been in at least 3 films: ');
for (let i = 0; i < threeFilms.length; i++) {
    console.log(threeFilms[i]);
}

// Who has a name that starts with "Bob"?

let namesBob = []

for (let i = 0; i < numMembers; i++) {
    let memberInfo = academyMember[i];
    if (memberInfo.name.includes("Bob")) {

        namesBob.push(memberInfo.name);

    }
}

console.log('These are the Academy members which have names that start with "Bob": ');
for (let i = 0; i < namesBob.length; i++) {
    console.log(namesBob[i]);
}

// Which Academy members have been in a film that starts with "A"?

let filmsStartWithA = []

for (let i = 0; i < numMembers; i++) {
    let memberInfo = academyMember[i];
    let films = memberInfo.films;

    for (let i = 0; i < films.length; i++) {
        if (films[i].indexOf("A") == 0) {
            if (!filmsStartWithA.includes(memberInfo.name)) {
                filmsStartWithA.push(memberInfo.name);
            }
        }

    }
}


console.log('These are the Academy members which have been in a film that starts with "A": ');
for (let i = 0; i < filmsStartWithA.length; i++) {
    console.log(filmsStartWithA[i]);
}
