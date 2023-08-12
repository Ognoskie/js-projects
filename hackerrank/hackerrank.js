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

function plusMinus(arr) {
    let plus = 0;
    let minus = 0;
    let zero = 0;

    for (let i = 0; i > arr.length; i++) {
        if (1 >= arr) {
            return ++plus;
        } else if (-1 <= arr) {
            return ++minus;
        } else {
            return ++zero;
        }
    }
    console.log(plus.toFixed(6));
    console.log(minus.toFixed(6));
    console.log(zero.toFixed(6));

}
plusMinus();