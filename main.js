/* ------------------------------Functions Data Flow Practice---------------------------------- */
/* ------------------------ Wood Carving ----------------------- */

const createWoodBlock = () => {
    // Return an object with 4 properties.
    return {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute",
    };
};
const createBeautifulCarving = (woodObject) => {
    return `The ${woodBlock.length}-inch,${woodBlock.material} woodblock was carved into a wooden ${woodBlock.purpose}`;
};
// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock();
// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock); // <-- Missing an argument. Fix it.
//console.log(carvingString);

/* ------------------------ MAKE A CAKE ----------------------- */
const makeCake = () => {
    return {
        flour: "All-purpose",
        milk: "1 cup",
        sugar: "1/2 cup",
    };
};
const recipe = makeCake();

const cakeRecipe = (recipe) => {
    return `${recipe.flour} flour, ${recipe.milk} milk and ${recipe.sugar} sugar are required to make a cake.`;
};

const niceCakeRecipe = cakeRecipe(recipe);
//console.log(niceCakeRecipe);

/* -----------------------------Function Math Practice-----Add---------------------------- */
// 1. A function to add two values together. This function needs to define two parameters - the two numbers that you want to add together.
// 3. In the adding function, add the values of the two parameters and return the result
numbers_1 = (a, b) => {
    return a + b;
};
const add = numbers_1(4, 14);
//console.log(add);

/* -----------------------------Function Math Practice-----Multiply---------------------------- */
// 2. A function to multiply a single number by 2. This function takes one parameter - the number you want to multiply by 2.
// 4. In the multiplication function, multiply the value of the single parameter by 2 and return the result.

numbers_2 = (a) => {
    return a * 2;
};
//const multiply = numbers(16);
const multiply = numbers_2(add);
//console.log(multiply);

/* -----------------------------Grading Students Practice--------------------------------- */
//https://www.notion.so/learningthings/Grading-Students-Practice-97951bb3a28e4bae931716775a1a4173
//Remember that to add a new property to an object, you use dot notation and an equals sign after the object is created.

const dog = {
    breed: "Shihtzu",
    age: 1,
    name: "Murph",
};

// Adding a property after creation
dog.neutered = true;
//console.log(dog) >

// In this exercise, you will define four functions. One will create a student object, and the other three will add a grade for a subject to the student object.

/* -----------------------------createStudent()--------------------------------- */
// 1. `createStudent()` should return a new student object. The name of the student, and which grade the student is in, must be passed to the function as arguments. The returned object should have a `name` property and a `grade` property.
createStudent = () => {
    return {
        name: "Sam Brown",
        grade: "3th",
    };
};
const student = createStudent();
//console.log(student);

/* -----------------------------addMathGrade()--------------------------------- DOWN ???????????????????????????? */
// 2. `addMathGrade()` should add a new "math" property to the student with a value of "B".
addMathGrade = () => {
        addMath = student.math = "B";
        return addMath
};
const studentMath = addMathGrade();
console.log(studentMath);

/* -----------------------------addHistoryGrade()---------------------------------*/
// 3. `addHistoryGrade()` should add a new "history" property to the student with a value of "C".



/* -----------------------------addScienceGrade()---------------------------------*/
// 4. `addScienceGrade()` should add a new "science" property to the student with a value of "A".



// 1. Each function should define a parameter to hold the object.
// 2. Each function should be invoked with an object provided as an argument.
// 3. Each function should return the object after the property is added.
// 4. The return value of the function should be stored in a variable.

// Example. The order of the properties are irrelevent.
// {
// 	student: "Andri Alexeandrou",
//         grade: 6,
// 	math: "B",
// 	history: "C",
// 	science: "A",
// }

// 1. Invoke the adding function, provide two values as arguments, and the store what gets returned into a variable.
// 2. Then invoke the multiplication function and provide the variable from the previous step as the argument. Store the result into a variable.
// 3. Use `console.log()` to output the end result of the multiplication function.

// As an example, if you pass 4 and 14 to the first function, then the final output should be 36.
/* -----------------------------Grading Students Practice---------------------------------UP ???????????????????????????? */






/* -----------------------------Making Pottery Practice--------------------------------*/
//https://www.notion.so/learningthings/Making-Pottery-Practice-18cbf0548b774a74b93cd37a86720be9

//
//
//
//
//
//

/* -----------------------------Making Pottery Practice--------------------------------*/
/* ------------------------------------------------------------------------------------*/


