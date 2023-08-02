// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// function main [verb, noun]
// return verb + noun
// }

// const main = (verb, noun) => verb + noun;

/////////////////////////////////////

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
//
//     Example output:
//
//     Hello, Mr. Spock

// function sayHello(name) {
//     return 'Hello'
// }

// const sayHello = (name) => {
//     return `Hello, ${name}`
// }
//
// // or
//
// const sayHelloPartTwo = name => `Hello, ${name}`;

///////////////////////////////

// If/else syntax debug

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
//
// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
//
// The function receives one parameter health which will always be a whole number between -10 and 10.


const checkAlive = (health) => {
    if (health > 0) {
        return true
    } else {
        return false
    }
}

// or

const checkAlive = (health) => {
    return health > 0;
}


//////////////////////////

// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
//
//     Find the errors in the code to get the celsius converter working properly.
//
//     To convert fahrenheit to celsius:
//
//     celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

// starting code
function weatherInfo (temp) {
    var c : convert(temp)
    if (c > 0)
        return (c + " is freezing temperature")
    else
        return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
    var celsius = (tempertur) - 32 + (5/9)
    return temperature
}

// my code
const weatherInfo = (temp) => {
    const c = convert
}























