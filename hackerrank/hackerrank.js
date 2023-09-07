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


// Viral Advertising


// code



const viralAdvertising = (n) => {
    let totalOfLikes = 0;
    let shared = 5;
    for (let i = 0; i < n; i++) {
        totalOfLikes = Math.floor(shared / 2) + totalOfLikes;
        shared = Math.floor(shared / 2) * 3
    }
    return totalOfLikes
}





////////////////////////////////////////////////////////////// COMMON INTERVIEW QUESTIONS /////////////////////////////////////////////////////////////////







//
// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//
//     Example
//
//
// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
//
//     Function Description
//
// Complete the sockMerchant function in the editor below.
//
//     sockMerchant has the following parameter(s):
//
// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns
//
// int: the number of pairs
// Input Format
//
// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.
//
//     Constraints
//
// where
// Sample Input
//
// STDIN                       Function
// -----                       --------
//     9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output
//
// 3
// Explanation
//
// sock.png
//
// There are three pairs of socks.


// code

const sockMerchant = (n, ar) => {
    let totalPairs = 0;
    ar.sort();
    for (let i =0; i < n;) {
        if (ar[i] === ar[i +1]) {
            totalPairs ++;
            i = i + 2;
        } else {
            i++;
        }
    }
    return totalPairs;
}






//////////////////////////// Counting Valleys /////////////////////////////////////////



// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:
//
//     A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
//     A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
//     Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
//
//     Example
//
//
//
// The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.
//
//     Function Description
//
// Complete the countingValleys function in the editor below.
//
//     countingValleys has the following parameter(s):
//
// int steps: the number of steps on the hike
// string path: a string describing the path
// Returns
//
// int: the number of valleys traversed
// Input Format
//
// The first line contains an integer , the number of steps in the hike.
//     The second line contains a single string , of  characters that describe the path.
//
//     Constraints
//
// Sample Input
//
// 8
// UDDDUDUU
// Sample Output
//
// 1
// Explanation
//
// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:
//
//     _/\      _
//    \    /
// \/\/
// The hiker enters and leaves one valley.



const countingValleys = (steps, path) => {
    let valleyCounter = 0;
    let seaLevel = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] === "U") {
            seaLevel++
            if (seaLevel === 0) {
                valleyCounter++
            }
        } else {
            seaLevel--
        }

    }
    return valleyCounter
}
////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////// Jumping on the Clouds ////////////////////////////////////////////////////////


// Problem	Submissions	Leaderboard	Discussions	Editorial
// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.
//
// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.
//
// Example
//
// Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .
//
// Function Description
//
// Complete the jumpingOnClouds function in the editor below.
//
// jumpingOnClouds has the following parameter(s):
//
// int c[n]: an array of binary integers
// Returns
//
// int: the minimum number of jumps required
// Input Format
//
// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .
//
// Constraints
//
// Output Format
//
// Print the minimum number of jumps needed to win the game.
//
// Sample Input 0
//
// 7
// 0 0 1 0 0 1 0
// Sample Output 0
//
// 4
// Explanation 0:
// The player must avoid  and . The game can be won with a minimum of  jumps:
//
// jump(2).png
//
// Sample Input 1
//
// 6
// 0 0 0 0 1 0
// Sample Output 1
//
// 3
// Explanation 1:
// The only thundercloud to avoid is . The game can be won in  jumps:
//
// jump(5).png


// my code
function jumpingOnClouds(c) {
    let totalJumps = 0;
    const numToFilter = 1;
    const filteredArr = c.filter((element, index) => !numToFilter.includes(index));

}
















































































































































































