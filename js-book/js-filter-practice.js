const filterEvenNumbers = (numbers) => {
    numbers.filter((number) => number % 2 === 0)
    return filterEvenNumbers(numbers);
}



// Test the function with an example input:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers)
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Should print [2, 4, 6, 8, 10]
