"use strict";

/*let a = 15;
console.log(a);

let number = 2;
const leftBorderWidth = 1;

number = 10;
console.log(number);

console.log(-4/0);
console.log("string" * 5); // not an number

let und;
console.log(und);

const obj = {
    name: "Constanta",
    age: 25,
    isMarried: true
};

console.log(obj.name);
console.log(obj["name"]); // is not used anymore

let arr = ['plum.jpg', 6,  {}, []];
console.log(arr[1]); // 6

const secArray = [1, 2, 3];
console.log(secArray[1]); // 2

const object = {
    a: 1, 
    b: 2
};

object.c = '1234';
console.log(object.c);
console.log(object['b']);

const arrObj = {
    a: "a",
    '2': "b",
    3: "c",
    abc: {
        one: [{}, {}],
        two: "blabla"
    }
};

// alert("Hello");

// const result = confirm("Are you 18+ years?");
// console.log(result);

// const answer = +prompt("Do you have 18th?", "18");
// console.log(answer + 5);

const answers = [];

answers[0] = prompt("How is your name?", "");
answers[1] = prompt("Surname?", "");
answers[2] = prompt("Age?", "");
console.log(typeof(answers));

const category = 'toys';

// console.log('http://toys.com/'+ category);
console.log(`http://toys.com/${category}/5`);

const userName = "Constanta";
alert(`Hi dear user, ${userName}`);

// console.log('arr' + " - object");
// console.log(4 + " - object");
// console.log(4 + +"5");

let incr = 10,
    decr = 10;

// incr++;
// decr--;
  
// console.log(incr, decr);

++incr;
--decr;

console.log(++incr, --decr);

console.log(5%2);

console.log(2 * 4 === '8');

const isChecked = true,
    isClose = false;

console.log(isChecked && !isClose);*/

/*
let numberOfFilms = +prompt("How many movies you've already watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt("What was the last movie you watched?", ""),
    rate = prompt("How much do you rate it?", ""),
    lastMovie2 = prompt("What was the last movie you watched?", ""),
    rate2 = prompt("How much do you rate it?", "");

personalMovieDB.movies[lastMovie] = rate;
personalMovieDB.movies[lastMovie2] = rate2;

console.log(numberOfFilms);
console.log(personalMovieDB);
console.log(personalMovieDB.movies);
*/

/*
if (9 != 9) {
    console.log("Ok");
} else {
    console.log("Error");
}

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Too much");
} else {
    console.log("Ok");
}

(num === 50) ? console.log("OK") : console.log("Error");

switch (num) {
    case 49:
        console.log("Error");
        break;
    case 50:
        console.log("OK");
        break;
    default:
        console.log("Not this time");
        break;
}

const hamburger = 3;
const fries = 1;
const cola = 0;

if ((hamburger === 3 && cola === 1) && fries) {
    console.log("We're well-fed");
} else {
    console.log("We're leaving this restaurant");
}

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
} while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

//
// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

//
let result = "";
const triangleLength = 7;

for (let i = 1; i < triangleLength; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

//
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${i}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}*/

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let j = 20; j >= 10; j--) {
    if (j === 13) {
        break;
    } else {
        console.log(j);
    }
}

for (let k = 2; k <= 10; k++) {
    if (k % 2 === 0) {
        console.log(k);
    } 
}


let start = 2;

do {
    if (start % 2 === 0) {
        console.log(start);
    }
    start++;
} while (start < 11);