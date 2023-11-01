let vehicles = [

    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3

    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

// Which vehicles are RED?

let redVehicles = [];
let numVehicles = vehicles.length;

for (let i = 0; i < numVehicles; i++) {
    let vehicleInfo = vehicles[i];
    if (vehicleInfo.color == "Red") {

        redVehicles.push(vehicleInfo.licenseNo);
    }
}

console.log('Here is a list of all the red vehicles by license number: ');
for (let i = 0; i < redVehicles.length; i++) {
    console.log(redVehicles[i]);
}

// Which vehicles have registration that are expired?

let expiredReg = []

for (let i = 0; i < numVehicles; i++) {
    let vehicleInfo = vehicles[i];
    if (vehicleInfo.registrationExpires < new Date()) {

        expiredReg.push(vehicleInfo.licenseNo);
    }
}
console.log('Here is a list of all the expired registrations by license number: ');
for (let i = 0; i < expiredReg.length; i++) {
    console.log(expiredReg[i]);
}

// Which vehicles have a capacity of at least 6 people?

let seatCapacity = [];

for (i = 0; i < numVehicles; i++) {
    let vehicleInfo = vehicles[i];
    if (vehicleInfo.capacity >= 6) {

        seatCapacity.push(vehicleInfo.licenseNo);
    }
}

console.log('Here is a list of the vehicle with a seat capacity of at least 6: ');
for (let i = 0; i < seatCapacity.length; i++) {
    console.log(seatCapacity[i]);
}

// Which vehicles have license plates that end with "222"?

let licPlate222 = [];

for (let i = 0; i < numVehicles; i++) {
    let vehicleInfo = vehicles[i];
    let licPlate = vehicleInfo.licenseNo;

    if (licPlate.endsWith("222")) {
        if (!licPlate222.includes(licPlate)) {
            licPlate222.push(licPlate);
        }
    }
}


console.log('These are the license plate numbers that end with "222": ');
for (let i = 0; i < licPlate222.length; i++) {
    console.log(licPlate222[i]);
}

