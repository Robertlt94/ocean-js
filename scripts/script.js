// Task 1: Implement a function that calculates total fish caught

// created a variable with an array with the values of 50, 75, and 25
let fishCaught = [50, 75, 25];

// console logged to ensure fishCaught was represented in the console correctly
console.log(fishCaught);

// created a function named calculateFishCaught with the parameter referencing the variable fishCaught
function calculateFishCaught(fishCaught){
    // created a variable to hold the sum of fishes caught that starts at 0 every time
    let totalFish = 0;

    // COMMENTED OUT - returns the value of totalFish after .reduce has gone through and added all the values in the fishCaught array to the starting value of 0
    // return totalFish = fishCaught.reduce((a,b) => a+b, 0);

    // Utilizes the .forEach method to essentially loop through the entire fishCaught array and per the function setting the value of totalFish equal to itself plus the current value that the method is on within the array
    fishCaught.forEach(fish => totalFish += fish);

    // returns the value of totalFish as the result of the function
    return totalFish;
};

// console logs the calculateFishCaught function with the param fishCaught - resulting in a console log equal to totalFish
console.log(calculateFishCaught(fishCaught));

// Task 2: Implement a function to filter out endangered species from a list of fish options

// created a function named filterEndangeredFish with the param named fishes
function filterEndangeredFish(fishes){

    // the function will finish by console logging "I cannot keep these fish: [A, B, C] but I can keep these [X, Y, Z]" 
    
    return console.log(

        // a string to help give the console log some context
        'I cannot keep these fish: ', 

        // utilizes the filter method to find the fishes within the fishes param that has the property of protected equal to true and console logs them
        fishes.filter((fish) => fish.protected),

        // a string to help give the console log some context
        ' but I can keep these: ',

        // utilizes the filter method to find the fishes within the fishes param that has the property of protected equal to false and console logs them
        fishes.filter((fish) => !fish.protected),
    );
}

// FOR TEST PURPOSE - created a array named iCaught with 6 objects/fish that are half protected and half not
let iCaught = [
    { name: "Fish1", protected: true },
    { name: "Fish2", protected: false },
    { name: "Fish3", protected: true },
    { name: "Fish4", protected: false },
    { name: "Fish5", protected: true },
    { name: "Fish6", protected: false }
];

// runs the filterEndangeredFish function with the fishCaught param replaced by the iCaught array of objects/fish above
filterEndangeredFish(iCaught);

// Task 3: Define a class for Research Institutes

// created a class named Research Institute
class ResearchInstitute {

    // params within the constructor class that will be setting up the Research Institutes properties
    constructor( name, location, specialty, size ){
        
        // defines the properties for Research Institute and sets them equal to the params within constructor
        this.name = name;
        this.location = location;
        this.specialty = specialty;
        this.size = size;
    };
};

// test - success
const minnesotaResearchInstitute = new ResearchInstitute('MN Research Institute', 'Twin Cities, MN', 'effects of winter', 'statewide');
console.log(minnesotaResearchInstitute);

// Task 4: Extend the ResearchInstitute class for Marine Research Institute

// extends the Research Institute class by adding Marine Research Institute
class MarineResearchInstitute extends ResearchInstitute{

    // constructor with params that will be properties for Marine Research Institute
    constructor( name, location, specialty, size, waterLocationParam, climate ){
        
        // super allows Marine Research Institute to inherit the properties within the Research Institute class
        super( name, location, specialty, size );

        // defines the properties for Marine Research Institute and sets them equal to the params within constructor
        this.waterLocation = waterLocationParam;
        this.climate = climate;
    }
}

const floridaWaterLabs = new MarineResearchInstitute('Florida Water Labs', 'Florida', 'Warm Water Ecosystems', 'Florida Coast', 'Tampa Bay', 'hot');
console.log(floridaWaterLabs);

// Task 5: implement a class with default parameters for Oceanic Dive Gear

// Creates a class named OceanicDiveGear
class OceanicDiveGear{

    // constructor with params that already have predesignated values for OceanicDiveGear
    constructor( depth = "Deep Sea", type = "Scuba" ){

        // defines the properties for OceanicDiveGear and sets them equal to the params within constructor
        this.depth = depth;
        this.type = type;
    }
}

// test - success
const basicGear = new OceanicDiveGear;
console.log(basicGear);