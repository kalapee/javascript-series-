let mark = "88"

//console.log(typeof mark);
//console.log(typeof(mark));

let valueInNumber = Number(mark)
//console.log(typeof valueInNumber);

// "88" => 88
// "88abc" => NaN
// true => 1; false => 0

let isLogi = 8

let BooleanIsLogi = Boolean(isLogi)
//console.log(BooleanIsLogi);

let isLogien = 0

let BooleanIsLogien = Boolean(isLogien)
//console.log(isLogien);

// 1 => true; 0 => false
// "" => false
// "kalapee" => true

let nextNumber = 88

let stringNumber = String(nextNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//onst quantity = "11.50";

//*If we used the typeof operator on quantity, then it will return the type of string.//===

//console.log(typeof quantity);

//*We can check that it is now a number by using the typeof operator again.//===

//console.log(typeof Number (quantity));

//const marak = "88";

//*If you tried to pass in a value that cannot be converted into a number, then the return value would be NaN (Not a Number).//===

//console.log(Number("awesome"));

//console.log(typeof Number(marak));

//console.log(Number("awesome"));

//*How to convert a string to a number in JavaScript using the parseFloat() function
//The parseFloat() function will take in a value and return a floating point number. Examples of floating point numbers would be 12.99 or 3.14.

//If we modify our example from earlier to use parseFloat(), then the result would be the floating point number of 12.99.//===

//console.log(parseFloat(quantity));

const quantity = "12";

//*The unary plus operator (+) will convert a string into a number. The operator will go before the operand.//===

console.log(+quantity);

//*How to convert a string to a number in JavaScript by multiplying the string by the number 1
//*Another way to convert a string into a number is to use a basic math operation. You can multiply the string value by 1 and it will return a number.//==

console.log(quantity * 1);

const quantity1 = "awesome";
console.log(quantity1 * 1);

//*How to convert a string to a number in JavaScript by dividing the string by the number 1
//*Instead of multiplying by 1, you can also divide the string by 1. JavaScript is converting our string value to a number and then performing that mathematical operation.//===

const quantity2 = "10.5";
console.log(quantity2 / 1);

//*JavaScript by subtracting the number 0 from the string
//*Another method would be to subtract 0 from the string. Like before, JavaScript is converting our string value to a number and then performing that mathematical operation.//===

const quantity3 = "19";
console.log(quantity3 - 0);

//*But if we use two bitwise NOT operators (~), then it will convert our string to a number.//===

console.log(~19);

const quantity4 = "19.99";

//*This method will not work for floating point numbers because the result would be an integer.//===

console.log(~~quantity4);

const quantity5 = "2700000000";

console.log(~quantity5);

const quantity6 = "0.4";

//*How to convert a string to a number in JavaScript using the Math.floor() function
//Another way to convert a string to a number is to use the Math.floor() function. This function will round the number down to the nearest integer.//===

console.log(Math.floor(quantity6));

const quantity7 = "8.18";

//*How to convert a string to a number in JavaScript using the Math.ceil() function
//*The Math.ceil() function will round a number up to the nearest integer.//===

console.log(Math.ceil(quantity7));

const quantity8 = "0.9";

//*How to convert a string to a number in JavaScript using the Math.round() function
//*The Math.round() function will round the number to the nearest integer.

//*If I have the value of 6.3, then Math.round() will return 6.//===

console.log(Math.round(quantity8));

const quantity9 = "99.5";

console.log(Math.round(quantity9));

//*******************How to Convert a String to a Number in JavaScript************************//

//*using the Number() function
//*using the parseInt() function
//*using the parseFloat() function
//*using the unary plus operator (+)
//*multiplying the string by the number 1
//*dividing the string by the number 1
//*subtracting the number 0 from the string
//*using the bitwise NOT operator (~)
//*using the Math.floor() function
//*using the Math.ceil() function
//*using the Math.round() function