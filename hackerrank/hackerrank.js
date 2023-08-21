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


///////////////////////////////////////// A Very Big Sum /////////////////////////////////////////

// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
//
//     Function Description
//
// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.
//
//     aVeryBigSum has the following parameter(s):
//
// int ar[n]: an array of integers .
//     Return
//
// long: the sum of all array elements
// Input Format
//
// The first line of the input consists of an integer .
//     The next line contains  space-separated integers contained in the array.
//
//     Output Format
//
// Return the integer sum of the elements in the array.
//
//     Constraints
//
//
// Sample Input
//
// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output
//
// 5000000015
// Note:
//
//     The range of the 32-bit integer is .
//     When we add several integer values, the resulting sum might exceed the above range. You might need to use long int C/C++/Java to store such sums.


// const aVeryBigSum = (ar) => {
//     return eval(ar.join("+"));
// }






//////////////////////////////////////////////////////// Diagonal Difference /////////////////////////////////////////////

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
// For example, the square matrix  is shown below:
//
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
//
//     Function description
//
// Complete the  function in the editor below.
//
//     diagonalDifference takes the following parameter:
//
//     int arr[n][m]: an array of integers
// Return
//
// int: the absolute diagonal difference
// Input Format
//
// The first line contains a single integer, , the number of rows and columns in the square matrix .
//     Each of the next  lines describes a row, , and consists of  space-separated integers .
//
//     Constraints
//
// Output Format
//
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
//
// Sample Input
//
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
//
// 15
// Explanation
//
// The primary diagonal is:
//
//     11
// 5
// -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4
//
// The secondary diagonal is:
//
// 4
// 5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15
//
// Note: |x| is the absolute value of x








// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
// For example, the square matrix  is shown below:
//
// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal = 1 + 5 + 9 = 15

// The right to left diagonal = 3 + 5 + 9 = 17

// The right to left diagonal = 15 - 17 = 2.


/////// code below ///////

const diagonalDifference = (arr) => {
    let sumArrA = 0;
    let sumArrB = 0;
    const arrDiagArrA = arr.map((row, i) => row[i]);
        for (let num of arrDiagArrA) {
            sumArrA += num
        }
    const arrDiagArrB = [...arr].reverse().map((row, i) => row[i]);
    for (let num of arrDiagArrB) {
        sumArrB += num
    }
   return Math.abs(sumArrA - sumArrB);
}

// one liner for the code above
// Math.abs((arr.map((row, i) => row[i])).reduce((a, b) => a + b) - ([...arr].reverse().map((row, i) => row[i])).reduce((a, b) => a + b));


