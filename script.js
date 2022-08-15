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
const arr = ["apples", "oranges", "bananas", "grapes", "strawberries"];

//console.log(arr)
arr.push("lemon"); // adds an element to the end of the array
//console.log(arr)
arr.pop(); //removes an element from the end of the array
//console.log(arr)
arr.unshift("lime"); // adds an item to the beginning of the array
//console.log(arr)
arr.shift();
//console.log(arr)// removes and item from the beginning of the array

const arr1 = ["a", "b", "c", "d"];
const arr2 = [1, 2, 3, 4];
//console.log(arr1.concat(arr2))// Add the two arrays arr2 at the end
//console.log(arr1.join(''))// creates a string from the elements
//console.log(arr1.reverse())// reverses the order of the array

let arr3 = [5, 3, 4, 1, 2];
//console.log(arr3.sort())// puts the elements in order
let arr4 = ["a", "b", "c", "d", "e", "f", "g", "h"];
//console.log(arr4.slice(1,5))// Makes a new array that starts at the first index and ends BEFORE the second index

let arr5 = [1, 2, 3, 4, 5, "a", "b", "c"];
arr5.splice(4, 1, "monkey"); // replaces 5 with 'monkey'console.log(arr5)

let cities = [
    "Nashville",
    "Atlanta",
    "New York",
    "Seatle",
    "Minneapolis",
    "Chicgo",
];
//console.log(cities.length)// gives the number of elements in the array
//cities.forEach(city => console.log(city))

// the .map method creates a new array
const helloCities = cities.map((city) => {
    return `Hello  ${city}`;
});

//console.log(helloCities)
//console.log(cities)

/* ------------------------------------------------------------------------------EX_5  -         */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruitString = fruits.toString();
//console.log(fruitString);
// document.getElementById("demo").innerHTML = fruitString;
// document.getElementById("demo").innerHTML = fruits.toString();

/* ------------------------------------------------------------------------------Basic Function Practice  -         */

// 1.Create a function that console logs the string "FUNctions are fun!"
const string = () => {
    console.log("FUNctions are fun!");
};
//string();

/* --------------------------------------------------*/
//2.Create a function that adds two numbers (just like in the content document) and returns the sum.
//3. Invoke the function with two numbers of your choice.
const sum = (a, b) => {
    return a + b;
};
const result = sum(5, 3);
//console.log(result);

/* --------------------------------------------------*/
// 4. Create another function that multiplies two numbers and returns the product.  Invoke this function.
const multiplies_1 = (a, b) => {
    return a * b;
};
//console.log(multiplies_2(5, 6));

/* --------------------------------------------------*/
// 5. Create another function that adds two numbers and then multiplies the sum by a third number.

const multiplies_2 = (a, b, c) => {
    return (a + b) * c;
};
//console.log(multiplies_2(1, 2, 3))

/* --------------------------------------------------*/
//  Complete this task by invoking the other two math functions within your new function.
// Test this function by invoking it and console logging the output.

//const multiplies_3 = (sum(a,b), c) => {
const multiplies_3 = (a, b, c) => {
    return multiplies_1(sum(a, b) * c);
};
//console.log(multiplies_2(2, 4, 6));

/* ------------------------------------------------------------------------------Array Methods Practice  -         */
/* ------------------------------------Array Methods   -         */
/* For each of the sections, consider the array and the method.  What would you expect the output to be? */
let letters = ["l", "s", "a", "r", "d", "f"];
//console.log(letters.sort())    //[ 'a', 'd', 'f', 'l', 'r', 's' ]

//console.log(letters.pop()); //f
//console.log(letters); /* [ 'l', 's', 'a', 'r', 'd' ] */

//console.log(letters.push('q'))   //7
//console.log(letters);
/*[
  'l', 's', 'a',
  'r', 'd', 'f',
  'q'
]*/

//console.log(letters.shift())   //1
//console.log(letters); //[ 's', 'a', 'r', 'd', 'f' ]

//console.log(letters.unshift('y'))   //7
//console.log(letters);
/* [
        'y', 'l', 's',
        'a', 'r', 'd',
        'f'
      ] */

//console.log(letters.slice(1, 2))   //[ 's' ]
//console.log(letters);
/* [ 'l', 's', 'a', 'r', 'd', 'f' ] */

/* --------------------------------------------------*/
let names = ["John", "Mandeep", "Ruby", "Rose", "Jackson"];
//console.log(names.concat(letters))
/* [
  'John',    'Mandeep',
  'Ruby',    'Rose',
  'Jackson', 'l',
  's',       'a',
  'r',       'd',
  'f'
]
 */

//console.log(names.join(' ')) //John Mandeep Ruby Rose Jackson
//console.log(names.join('')) //JohnMandeepRubyRoseJackson
//console.log(names.join("_")) //John_Mandeep_Ruby_Rose_Jackson

//console.log(names.reverse()) //[ 'Jackson', 'Rose', 'Ruby', 'Mandeep', 'John' ]

/* --------------------------------------------------*/
let superheroes = [
    "Wonder Woman",
    "Captain America",
    "Spiderman",
    "Batman",
    "The Flash",
];
// iterate over superheroes and console log the superhero's name in the following sentance "<NAME> is a superhero!".

/* superheroes.forEach(NAME=> {
         console.log(`${NAME} is a superhero!`); 
}); */
//console.log(NAME);
/* --------------------------------------------------*/

let superheroesDetails = [
    {
        id: 1,
        name: "Wonder Woman",
        isDC: true,
    },
    {
        id: 1,
        name: "Captain America",
        isDC: true,
    },
    {
        id: 1,
        name: "Batman",
        isDC: true,
    },
    {
        id: 1,
        name: "The Flash",
        isDC: true,
    },
    {
        id: 1,
        name: "Spiderman",
        isDC: false,
    },
];

// iterate over superheroesDetails if the superhero is a DC character (isDC = true)  console log "<the heros name> is in the Justice League.".
//  Otherwise console log "<the heros name> is a superhero" in the following sentence "<NAME> is a superhero!".

/* -------------------------------for  of--------------------------------- */

/* for (const hero of superheroesDetails) {
    //console.log(hero);
    if (hero.isDC) {
        console.log(`${hero.name} is in the Justice League`);
    } else {
        console.log(`${hero.name} is a superhero!`);
    }
} */

/* -------------------------------forEach--------------------------------- */
superheroesDetails.forEach(hero => {
        //console.log(hero);
        if (hero.isDC) {
                //console.log(`${hero.name} is in the Justice League`);
            } else {
                //console.log(`${hero.name} is a superhero!`);
            }
});

/* ------------------------------------.map and .filter   -         */
const outfits = [
        {
          id: 1,
          bottoms: "slacks",
          top: "orange",
          shoes: "leather",
          style: "formal",
          own: false
        },
        {
          id: 3,
          bottoms: "jeans",
          top: "t-shirt",
          shoes: "flip flops",
          type: "casual",
          own: true
        },
        {
          id: 2,
          bottoms: "yoga",
          top: "tank top",
          shoes: "flip flops",
          type: "casual",
          own: false
        },
        {
          id: 9,
          bottoms: "skirt",
          top: "blouse",
          shoes: "heals",
          type: "formal",
          own: true
        },
        {
          id: 6,
          bottoms: "shorts",
          top: "tank top",
          shoes: "none",
          type: "casual",
          own: true
        },
        {
          id: 7,
          bottoms: "jeans",
          top: "sweater",
          shoes: "boots",
          type: "casual",
          own: true
        },
        {
          id: 8,
          bottoms: "slacks",
          top: "button down",
          shoes: "dress",
          type: "formal",
          own: false
        },
      ]
      
/* considering the array outfits, use map, filter and find to do the following */
      //Make a copy of outfits called outfitsCopy that can be modified without changing outfits directly.
      //Change a value on outfitsCopy and use console logs to show you did not change outfits//Make a copy (map) of outfits with the added property of accessories.  Make accessories always false.
      //Make a copy (map) of outfits that contains on the properties of id, bottoms, tops and shoes
      //filter outfits to give only outfits that are casual
      // filter outfits to give only outfits that are owned
      // use find to return an outfit that has no shoes
      // use find to return an outfit that has boots//Bonus:// use find to return an outfit that has jeans and a t-shirt
      



/* ------------------------------------copy Array --------------------------------   -         */

      const sheeps = ['Apple', 'Banana', 'Juice', "AAAA"];

// Old way
const cloneSheeps = sheeps.slice();
//console.log(cloneSheeps);

// ES6 way
const cloneSheepsES6 = [sheeps];
//console.log(cloneSheepsES6);

var numbers = [1,2,3,4,5];
var newNumbers = Object.assign([], numbers);
//console.log(newNumbers);