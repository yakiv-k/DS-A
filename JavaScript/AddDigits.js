var addDigits = function(num) {
// input is digit
// must take number and split into digits
let result;
// condition: while input number is not processed into a single digit, continue
    while (result > 9 || result == undefined) {
    let numArr = num.toString().split("").map(digit => Number(digit));
    // convert to string and split and store
    // convert to digits array
    // loop through digits array and add values to separate variable
    let sum = 0
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
      num = sum
    result = sum
    // take the sum and reassign it to ref variable for process condition
    }
    return result;
};