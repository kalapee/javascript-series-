// Array

const myArr = [1, 2, 3, 4, 5]
const myHeros = ["jignesh", "aman"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// Array Methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(8)

//myArr.shift(0)

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

//const newArr = myArr.join()

//console.log(myArr);
//console.log(typeof newArr);

// slice, splice

//console.log("A" , myArr);

const myn1  = myArr.slice(1, 3)

//console.log(myn1);
//console.log("B" , myArr);

const myn2  = myArr.slice(1, 3)
//console.log(myn2);
//console.log(myn1);

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

const arrayLike = {
    0: "a",
    1: "b",
    length: 2,
  };
  console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
  

