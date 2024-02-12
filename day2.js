/* Given 2 ints, a and b, return True if one if them is 10 or if their sum is 10.


makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true

*/

function makes10(num1, num2) {
  if (num1 === 10 || num2 === 10 || num1 + num2 === 10) {
    return true;
  } else {
    return false;
  }
}

let num1 = 10;
let num2 = 5;
console.log(makes10(num1, num2));

/* 

Given 2 int values, return True if one is negative and one is positive. 
Except if the parameter "negative" is True,then return True only if both are negative.


pos_neg(1, -1, False) → True
pos_neg(-1, 1, False) → True
pos_neg(-4, -5, True) → True

*/

function isNeg(num3, num4, negative) {
  if (negative === false && (num3 > 0 || num4 > 0) && (num3 < 0 || num4 < 0)) {
    return true;
  } else if (negative === true && num3 < 0 && num4 < 0) {
    return true;
  } else {
    return false;
  }
}

let num3 = -1;
let num4 = 5;
let negative = false;

console.log(isNeg(num3, num4, negative));

/* 

Given two int values, return their sum. 
Unless the two values are the same, then return double their sum.


sum_double(1, 2) → 3
sum_double(3, 2) → 5
sum_double(2, 2) → 8

*/

function giveSum(number1, number2) {
  if (number1 === number2) {
    return (number1 + number2) * 2;
  } else {
    return number1 + number2;
  }
}

let number1 = 5;
let number2 = 4;

console.log(giveSum(number1, number2));
