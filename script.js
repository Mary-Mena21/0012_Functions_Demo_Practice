const myFunctionArgument = (myArgument) => {
    console.log(`The value of my argument is: ${myArgument}`);
};
/* -----------------------------------------------EX_1----------------- */
const Sum = (num1, num2) => {
    return num1 + num2;
};

const five = Sum(3, 2);
// This will log 5console.log(five)

AddOneToSum = (num1, num2) => {
    const sum = Sum(num1, num2);
    return sum + 1;
};
const six = AddOneToSum(2, 3);
//console.log(six)

/* -----------------------------------------------EX_2----------------- */
const cake = { progress: "not started" };

const mixCakeBatter = () => {
    const ingredientsNeeded = [
        "flour",
        "sugar",
        "eggs",
        "baking soda",
        "baking powder",
        "salt",
        "milk",
    ];

    cake.progress = "mixed";
    //console.log(ingredientsNeeded);
};

//console.log(ingredients);
// console.log(cake.progress);

// mixCakeBatter();

// console.log(cake.progress);

/* -----        ------------------------------EX_3----------------- */
/*var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// expected output: 2

console.log(y);
// expected output: 1
 */
/* --------------------------------------------------- */
let x = 1;
let y = 1;

if (true) {
    let x = 2;
    let y = 2;
}

//console.log(x);
// expected output: 2

//console.log(y);
// expected output: 1

/* -----------------------------------EX_4------------------------ */
const yellowChairMaker = (chairMaterial) => {
    const chairObject = {
        type: "Chair",
        color: "Yellow",
        material: chairMaterial,
        price: 49.29,
    };
    //console.log(chairObject);
    return chairObject;
};

const returnedChairObject = yellowChairMaker("Oak");

const chairStringMaker = (chairObject) => {
    const stringRepresentation = `The ${chairObject.color}, ${chairObject.material} ${chairObject.type} costs $${chairObject.price}`;

    return stringRepresentation;
};

const returnedChairString = chairStringMaker(returnedChairObject);

//console.log(returnedChairString)
//"The Yellow, Oak Chair costs $49.29"

/* -----------------------------------EX_5------------------------ */
const arr = ['apples', 'oranges', 'bananas', 'grapes', 'strawberries']

//console.log(arr)
arr.push('lemon') // adds an element to the end of the array
//console.log(arr)
arr.pop()//removes an element from the end of the array
//console.log(arr)
arr.unshift('lime')// adds an item to the beginning of the array
//console.log(arr)
arr.shift()
//console.log(arr)// removes and item from the beginning of the array

const arr1 = ['a', 'b', 'c', 'd']
const arr2 = [1, 2, 3, 4]
//console.log(arr1.concat(arr2))// Add the two arrays arr2 at the end
//console.log(arr1.join(''))// creates a string from the elements
//console.log(arr1.reverse())// reverses the order of the array

let arr3 = [5, 3, 4, 1, 2]
//console.log(arr3.sort())// puts the elements in order
let arr4 =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//console.log(arr4.slice(1,5))// Makes a new array that starts at the first index and ends BEFORE the second index

let arr5 = [1, 2, 3, 4, 5, 'a', 'b', 'c']
arr5.splice(4, 1, 'monkey')// replaces 5 with 'monkey'console.log(arr5)

let cities = ['Nashville', 'Atlanta', 'New York', 'Seatle', 'Minneapolis', 'Chicgo']
//console.log(cities.length)// gives the number of elements in the array
//cities.forEach(city => console.log(city))

// the .map method creates a new array
const helloCities = cities.map(city =>  {
  return `Hello  ${city}`
})

//console.log(helloCities)
//console.log(cities)

/* ------------------------------------------------------------------------------EX_5  -         */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruitString = fruits.toString();
console.log(fruitString);
// document.getElementById("demo").innerHTML = fruitString;
// document.getElementById("demo").innerHTML = fruits.toString();

/* ------------------------------------------------------------------------------Basic Function Practice  -         */
