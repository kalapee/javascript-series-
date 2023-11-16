//*What's the Difference Between Comparing Primitive Data Types VS Non-Primitive Data Types in JavaScript?//*

console.log("2" > 1);
console.log("02" < 1);

let a = 1;
let b = 8;

//*In the following example, I use the strict equality operator, ===, //*
//*which checks if the two operands are equal and returns a Boolean as a result://*

console.log(a === b); // true

//*You can also assign the value of the variable a to another variable, a1, and compare them://

let aa = 8;
let bb = 10;

let a2 = aa;

//console.log(aa === bb); // true

let a1 = { name: 'Dionysia', age: 29};
let b1 = {name: 'Lionysia', age:29};

console.log(a1 === b1); // false