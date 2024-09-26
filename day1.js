/*  The parameter weekday is True if it is a weekday, 

    and the parameter vacation is true if we are on vacation. 

    We sleep in if it is not a weekday or we're on vacation. 

    Return true if we sleep in.


sleep_in(false, false) → true
sleep_in(true, false) → false
sleep_in(false, true) → true

*/

function sleepIn(weekday, vacation) {
  if (weekday === false || vacation === true) {
    return true;
  } else {
    return false;
  }
}

let weekday = false;
let vacation = false;

console.log(sleepIn(weekday, vacation));
/*
    We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. 

    We are in trouble if they are both smiling or if neither of them is smiling. 

    Return true if we are in trouble.


monkey_trouble(true, true) → true
monkey_trouble(false, false) → true
monkey_trouble(true, false) → false

*/

function monkeyTrouble(a_smile, b_smile) {
  if (a_smile === b_smile) {
    return true;
  } else {
    return false;
  }
}

let a_smile = false;
let b_smile = false;
console.log(monkeyTrouble(a_smile, b_smile));

/*

    Given an int n, return the absolute difference between n and 21,
    except return double the absolute difference if n is over 21.


diff21(19) → 2
diff21(10) → 11
diff21(21) → 0

*/

function diff(n) {
  if (n > 21) {
    return (n - 21) * 2;
  } else if (n < 21) {
    return 21 - n;
  }
}

let n = 23;
console.log(diff(n));

/* 

We have a loud talking parrot. 

The "hour" parameter is the current hour time in the range 0..23.

We are in trouble if the parrot is talking and the hour is before 7 or after 20. 

Return True if we are in trouble.


parrot_trouble(true, 6) → true
parrot_trouble(true, 7) → false
parrot_trouble(false, 6) → false


*/

function talkingParrot(talking, hour) {
  if (hour > 20 || (hour < 7 && talking === true)) {
    return true;
  } else {
    return false;
  }
}

let talking = false;
let hour = 6;

console.log(talkingParrot(talking, hour));

/* 


Given an int n, return True if it is within 10 of 100 or 200.


near_hundred(93) → true
near_hundred(90) → true
near_hundred(89) → false

*/

function near100(num) {
  if ((num >= 90 && num <= 110) || (num >= 190 && num <= 210)) {
    return true;
  } else {
    return false;
  }
}

let num = 206;
console.log(near100(num));
