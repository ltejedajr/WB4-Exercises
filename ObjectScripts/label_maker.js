"use strict";

let myInfo = {
    name: "Lawrence",
    address: "Calle 77 Sur #32-50",
    city: "Sabaneta",
    state: "Colombia",
    zip: "10040"
};

function printContact(info) {
    console.log("Name: " + info.name);
    console.log("Address: " + info.address);
    console.log("City: " + info.city);
    console.log("State: " + info.state);
    console.log("ZIP: " + info.zip);
}

// Call the function and pass the myInfo object as an argument
printContact(myInfo);
