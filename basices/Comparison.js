//*What's the Difference Between Comparing Primitive Data Types VS Non-Primitive Data Types in JavaScript?//*

//console.log("2" > 1);
//console.log("02" < 1);

//let a = 1;
//let b = 8;

//*In the following example, I use the strict equality operator, ===, //*
//*which checks if the two operands are equal and returns a Boolean as a result://*

//console.log(a === b); // true

//*You can also assign the value of the variable a to another variable, a1, and compare them://

//let aa = 8;
//let bb = 10;

//let a2 = aa;

//console.log(aa === bb); // true

//let a1 = { name: 'Dionysia', age: 29};
//let b1 = {name: 'Lionysia', age:29};

//console.log(a1 === b1); // false


//*Single quotes and double quotes are practically the same and you can use either of them.//*

//*Backticks are generally used when you need to include variables or expressions into a string.//* 
//*This is done by wrapping variables or expressions //*
//*with ${variable or expression} as shown above.//*

//const name2 = 'Radhe';
//const name1 = "Krishna";
//const result = `The Love Ar Name Of ${name2} Or ${name1}`;

//console.log(name2 == name1);

const a1 = 'hello';

//console.log(a1[2]);

//*In JavaScript, strings are immutable. That means the characters of a string cannot be changed. For example,//*

let a2 = 'hello';
a2[0] = 'l';
console.log(a2); // "hello"

const a = 'a';
const b = "A";

console.log(a === b);

//*To find the length of a string, you can use built-in length property. For example,//*s

const s = 'Gajjar Kalapee';
console.log(s.length);

const text1 = 'hello';
const text2 = 'world';
const text3 = '    JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1);

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2);

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3);

// converting the string to an array
const result4 = text1.split();
console.log(result4);

// slicing the string
const result5 = text1.slice(1, 3);
console.log(result5);

