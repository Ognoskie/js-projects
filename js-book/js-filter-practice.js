const filterEvenNumbers = (numbers) => {
    return numbers.filter((number) => number % 2 === 0)
}



// Test the function with an example input:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers)
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Should print [2, 4, 6, 8, 10]


const searchActivityByLocation = (activities, searchLocation) => {
    return activities.filter(activity => {
        return activity.location.toLowerCase().includes(searchLocation.toLowerCase());
    })
}

// ask steve why do i have to return line 16 when i am returning line 15 already and line 16 is within line 15 brackets


// another filter problem by chat

const words = ["apple", "banana", "cherry", "date", "fig", "grape"];
const minLength = 5;


const filterByLength = (strings, minLength) => {
    return words.filter((word) => word <= minLength);
}


// Test the function with an example input:
const filteredWords = filterByLength(words, minLength);
console.log(filteredWords); // Should print ["banana", "cherry"]
