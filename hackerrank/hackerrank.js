/////////////////////////////////// plus and minus ////////////////////////////////////////////////
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.
//
//     Input Format
//
// The first line contains an integer, , the size of the array.
//     The second line contains  space-separated integers that describe
// Print the following  lines, each to  decimals:
//
//     proportion of positive values
// proportion of negative values
// proportion of zeros

// my code
// function plusMinus(arr) {
//     let positive = 0;
//     let negative = 0;
//     let zero = 0;
//
//     for (let i = 0; i > arr.length; i++) {
//         if (1 >= arr) {
//             return ++positive;
//         } else if (-1 <= arr) {
//             return ++negative;
//         } else {
//             return ++zero;
//         }
//     }
//     console.log(positive.toFixed(6));
//     console.log(negative.toFixed(6));
//     console.log(zero.toFixed(6));
//
// }

// correct code

// function plusMinus(arr) {
//   let positive = [];
//   let negative = [];
//   let zero = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zero.push(arr[i]);
//     } else if (arr[i] < 0) {
//       negative.push(arr[i]);
//     } else {
//       positive.push(arr[i]);
//     }
//   }
//
//   console.log(positive.length / arr.length);
//   console.log(negative.length / arr.length);
//   console.log(zero.length / arr.length);
// }
//

//////////////////////////////////////// Mini-Max-Sum exercise /////////////////////////////////////////////////

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//
//     Example
//
// The minimum sum is  and the maximum sum is . The function prints
//
// 16 24
// Function Description
//
// Complete the miniMaxSum function in the editor below.
//
//     miniMaxSum has the following parameter(s):
//
// arr: an array of  integers
// Print
//
// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.
//
//     Input Format
//
// A single line of five space-separated integers.
//
//     Constraints
//
//
// Output Format
//
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)
//
// Sample Input
//
// 1 2 3 4 5
// Sample Output
//
// 10 14
// Explanation
//
// The numbers are , , , , and . Calculate the following sums using four of the five integers:
//
//     Sum everything except , the sum is .
//     Sum everything except , the sum is .
//     Sum everything except , the sum is .
//     Sum everything except , the sum is .
//     Sum everything except , the sum is .
//     Hints: Beware of integer overflow! Use 64-bit Integer.
//
//     Need help to get started? Try the Solve Me First problem



// 1. sorting the arr
// 2. loop over while adding all elements and asigning to sum var
// 3. for min, minus the last element from sum
// 4. for max, minus the first element from sum

// function miniMaxSum(arr) { let min = 0; let max = 0; let sum = 0;
//
//     let sortedArr = arr.sort((a, b) => a - b);
//
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     min = sum - arr[arr.length - 1];
//     max = sum - arr[0];
//
//     console.log(min, max);
// }

// const miniMaxSum = (arr) => {
// let min = 0;
// let max = 0;
// let sum = 0;
//
// let sortArr = arr.sort((a, b) => a - b);
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     min = sum - arr[arr.length - 1];
//     max = sum - arr[0];
//
//     console.log(min, max);
// }


///////////////////////////////////////// Time conversion /////////////////////////////////////////

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//
//     Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
//
//     Example
//
//
// Return '12:01:00'.
//
//
//     Return '00:01:00'.
//
//     Function Description
//
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
//
//     timeConversion has the following parameter(s):
//
// string s: a time in  hour format
// Returns
//
// string: the time in  hour format
// Input Format
//
// A single string  that represents a time in -hour clock format (i.e.:  or ).
//
// Constraints
//
// All input times are valid


function timeConversion(s) {


}

















