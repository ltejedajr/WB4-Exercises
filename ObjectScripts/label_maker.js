"use strict";

let myInfo = {
    name: "Lawrence Tejeda",
    address: "Calle 77 Sur #32-50",
    city: "Sabaneta",
    state: "Colombia",
    zip: "10040"
};

function printContact(info) {
    console.log(info.name);
    console.log(info.address);
    console.log(info.city + ", " + info.state + " " + info.zip);
}

printContact(myInfo);
