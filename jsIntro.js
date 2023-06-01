// ACTIVITY 1 dotNotation

// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("   |   |   ");

// grid = `
//     |   |
//     |   |
//     |   |
// -------------
//     |   |
//     |   |
//     |   |
// -------------
//     |   |   
//     |   |
//     |   |
// `;
// console.log(grid);

// ACTIVITY 1 variables

// let myName = "Toni";
// let myAge = 31;
// let myColour = "purple";

// console.log(`My name is ${myName}. My age is ${myAge}, and my favourite colour is ${myColour}.`);

// STRETCH

// myName = "Dave";
// myAge = 21;
// myColour = "orange";

// console.log(`My name is ${myName}. My age is ${myAge}, and my favourite colour is ${myColour}.`);

// ACTIVITY 2 variables

// let myBreakfast = "eggs";
// let myLunch = "pasta";
// let myDinner = "pizza";

// console.log(`For breakfast I will eat ${myBreakfast}. For lunch I will eat ${myLunch}, and for dinner I will eat ${myDinner}.`);

// STRETCH

// myBreakfast = "toast";
// myLunch = "potato salad";
// myDinner = "McDonalds";

// console.log(`For breakfast I will eat ${myBreakfast}. For lunch I will eat ${myLunch}, and for dinner I will eat ${myDinner}.`);

// ACTIVITY 3 variables

// const oneDay = 24 * 60 * 60 * 1000;
// let todayDate = new Date(2022, 3, 15);
// const myBirthday = new Date(2022, 9, 23);

// let diffDays = Math.round(Math.abs((todayDate - myBirthday) / oneDay));

// console.log(`There are ${diffDays} days until my birthday!`);

// ACTIVITY 4 variables

// let space1 = "X";
// let space2 = "O";
// let space3 = " ";
// let space4 = "X";
// let space5 = "X";
// let space6 = " ";
// let space7 = "O";
// let space8 = " ";
// let space9 = " ";

// board = `
//    |   |   
//  ${space1} | ${space2} | ${space3} 
//    |   |   
// -----------
//    |   |   
//  ${space4} | ${space5} | ${space6} 
//    |   |   
// -----------
//    |   |   
//  ${space7} | ${space8} | ${space9} 
//    |   |   
// `;
// console.log(board);

// ACTIVITY 1 ifElse + STRETCH

// let age = "20";
// let country = "UK";

// if (age > 17 && country == "UK") {
//     console.log("Yes, I can serve you.")
// }
// else {
//     console.log("Sorry, I can't serve you.")
// }

// ACTIVITY 2 ifElse

// let topping1 = "sweetcorn";

// switch(topping1){
//     case "cheese":
//     case "sweetcorn":
//         console.log("This is an important ingredient for my pizza!");
//         break;
//     case "peppers":
//     case "pineapple":
//         console.log(`I don''t mind having ${topping1} on my pizza.`);
//         break;
//     default:
//         console.log(`${topping1} should not be on a pizza!`);
// }

// ACTIVITY 3 ifElse

// let password = "pasword";

// if (password.length < 8){
//     console.log("Your password is too short!");
// }
// else {
//     console.log(password);
// }

// ACTIVITY 4 ifElse

// let num = 4;

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("This number is divisible by 3 or 5.");
// }
// else {
//     console.log("This number is neither divisible by 3 or 5.");
// }

// ACTIVITY 5 ifElse

// let num = 4;

// if (num % 3 == 0 && num % 5 == 0){
//     console.log("fizz buzz");
// }
// else if (num % 3 == 0) {
//     console.log("fizz");
// }
// else if (num % 5 == 0) {
//     console.log("buzz");
// }
// else {
//     console.log(num)
// }

// ACTIVITY 6 ifElse

// let num = 3785;
// let numReverse = num.toString().split("").reverse().join('');

// if (num == numReverse) {
//     console.log("It's a palindrome!");
// }
// else {
//     console.log("It's not a palindrome!");
// }

// ACTIVITY 7 ifElse

// let time = 12;
// let placeOfWork = "Maccies";
// let townOfHome = "Liverpool";

// if (time < 8) {
//     console.log(`I am at home in ${townOfHome}.`);
// }
// else if (time >= 8 && time < 9) {
//     console.log(`I am commuting to work at ${placeOfWork}.`);
// }
// else if (time >= 9){
//     console.log(`I am at work at ${placeOfWork}.`)
// }
// else {
//     console.log("I'm lost.")
// }

// ACTIVITY 8 ifElse

// let textFunky = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let indexArray = [textFunky.lastIndexOf("a"), textFunky.lastIndexOf("e"), textFunky.lastIndexOf("i"), textFunky.lastIndexOf("o"), textFunky.lastIndexOf("u")];
// let highestIndex = Math.max(...indexArray);

// console.log(`The last instance of a vowel is at position: ${highestIndex}, and it is the letter ${textFunky.charAt(highestIndex)}.`);

// ACTIVITY 9 ifElse

// let word = "sausags";

// if (word.charAt(0) == word.slice(-1)) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }

// ACTIVITY 10 ifElse

// let num1 = 5;
// let num2 = 20;

// if ((num1 + num2) % 2 == 0) {
//     console.log(num1 + num2)
// }
// else {
//     console.log(num1 * num2)
// }

// ACTIVITY 1 array + STRETCH

// let favouriteSongs = [
//     "Somewhere Beyond the Sea - Bobby Darin",
//     "At Last - Etta James",
//     "Scar Tissue - RHCP",
// ];

// console.log(favouriteSongs);

// favouriteSongs.push("Like a Prayer - Madonna", "Disparate Youth - Santigold");

// console.log(favouriteSongs);

// favouriteSongs.pop();

// console.log(favouriteSongs);

// ACTIVITY 2 array

// favouriteSongs.unshift("Disparate Youth - Santigold");

// console.log(favouriteSongs);

// ACTIVITY 1 loops

// let favFilms = [
//     "BASEKetball",
//     "Fight Club",
//     "Princess Mononoke",
//     "Sin City",
//     "Drive My Car",
// ];

// console.log(favFilms);

// favFilms.push("Dune", "Beetlejuice");

// console.log(favFilms);

// for (let i = 0; i < favFilms.length; i++) {
//     console.log(favFilms[i]);
// }

// ACTIVITY 2 loops

// for (let i = 0; i < 6; i++){
//     console.log(Math.ceil(Math.random()*50));
// }

// ACTIVITY 3 Loops

// for (let i = 9; i >= 0; i--){
//     console.log([i]);
// }

// ACTIVITY 4 loops

// let filmsFour = ["Fight Club", "Jaws", "Ghostbusters", "Tokyo Drift"];

// for (let i = 0; i < filmsFour.length; i++){
//     console.log(filmsFour[i]);
// }

// if (filmsFour[2] == "Ghostbusters"){
//     console.log("Yay, it's Ghostbusters!");
// }
// else {
//     console.log("Boo! We want Ghostbusters!");
// }

// ACTIVITY 5 loops

// for (let i = 0; i < 6; i++){
//     let randNum = Math.ceil(Math.random()*30);
//         if (randNum % 7 == 0) {
//             console.log(`The number ${randNum} is divisible by 7!`)
//         }
//         else {
//             console.log(`The number ${randNum} is not divisible by 7!`)
//          }
// }

// ACTIVITY 6 loops

// let bobsFollowers = ["Dave", "Phil", "Bryan", "Randy"];
// let hannahsFollowers = ["Sandra", "Bryan", "Phil", "Stacy"];

// for (let i in bobsFollowers) {
//     for (let j in hannahsFollowers) {
//         if (bobsFollowers[i] == hannahsFollowers[j]) {
//             console.log(bobsFollowers[i]);
//         }
//     }
// }

// ACTIVITY 7 loops

// For loop example:

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Standard For loops are versatile. You clearly control and define where they start and end, and the incrementation you want to apply. Useful when you already know how many times you want to execute a loop.

// While loop example:

// let myHeight = 100;

// while (myHeight < 200) {
//     console.log("Pretty short there, buddy!");
//     myHeight+=10;
// }

// console.log("My, you're a tall one!");

// While loops are useful for when we don't know how many times we want to execute a loop beforehand.

// Do...While loop example:

// let result = "";
// let i = 0;

// do {
//     i = i+1;
//     result = result + i;
// } while (i < 5);

// console.log(result);

// Do...While loops can be easier to read than While loops, and always execute at least once even if the condition isn't met.

// ACTIVITY 1 functions

// const factorial = (n) => {
//     if ((n === 0 || n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// ACIVITY 2 functions

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}, please!`);
//     orderCount++;
//     console.log(`You are order number: ${orderCount}.`)
// }

// takeOrder("pineapple", "sweetcorn");
// takeOrder("mushroom", "ham");

// ACTIVITY 3 functions

// let balance = 5000;
// let correctPin = 1999;

// const cashMachine = (pin, withdrawAmt) => {
//     let newBalance = balance - withdrawAmt;
//     if (pin == correctPin && balance >= withdrawAmt) {
//         console.log(`You are withdrawing £${withdrawAmt}. Your new balance is £${newBalance}. Have a nice day!`);
//     } else if (pin != correctPin) {
//         console.log("Incorrect pin. Please try again.")
//     } else if (withdrawAmt > balance) {
//         console.log("Insufficient funds.");
//     } else {
//         console.log("Error, please try again.")
//     }
// }

// cashMachine(1999, 400);

// ACTIVITY 1 objects

// const person = {
//     name: "Toni",
//     age: 31,
//     songs: [
//         "Madonna - Like a Prayer",
//         "RHCP - Scar Tissue",
//         "Green Day - When I Come Around",
//         "Nirvana - Smells Like Teen Spirit"
//     ],
//     sayHi(){
//         return `Hello, my name is ${this.name}.`;
//     }
// }

// console.log(person.songs);
// console.log(person.name);
// console.log(person.sayHi());

// ACTIVITY 2 objects

// const pet = {
//     name: "Dave",
//     typeOfPet: "cat",
//     age: 21,
//     colour: "ginger",
//     eat(){
//         return `Your ${this.colour} ${this.typeOfPet} ${this.name} is eating all the food! Big appetite at ${this.age}!`
//     },
//     drink(){
//         return `Your ${this.colour} ${this.typeOfPet} ${this.name} is having a big drink! Being ${this.age} is thirsty work!`
//     }
// }

// console.log(pet.eat());
// console.log(pet.drink());

// ACTIVITY 3 objects 

// drinksOrder = [
//     "Tea",
//     "Coffee",
//     "Orange Juice",
// ];

// foodOrder = [
//     "Fries",
//     "Burger",
//     "Pizza",
// ];


// const coffeeShop = {
//     branch: "Liverpool",
//     drinks: [
//         "Tea",
//         "Coffee",
//         "Coke",
//         "Orange Juice"
//     ],
//     drinkPrices: [
//         1.10,
//         1.20,
//         1.15,
//         0.80,
//     ],    
//     food: [
//         "Pizza",
//         "Fries",
//         "Burger",
//         "Lasagne",
//     ],
//     foodPrices: [
//         4.50,
//         2.20,
//         4.20,
//         4.30,
//     ],
//     drinksOrdered(){
//         drinksReceipt = []
//         for (let i in drinksOrder) {
//             for (let j in this.drinks) {
//                 if (drinksOrder[i] == this.drinks[j]) {
//                     drinksReceipt.push(j);
//                 }
//             }
//         }
//         console.log("----------------------------");
//         console.log("Your drinks order is:\n");
//         sum = 0
//         for (l in drinksReceipt) {
//             console.log(`${coffeeShop.drinks[drinksReceipt[l]]} - £${coffeeShop.drinkPrices[drinksReceipt[l]].toFixed(2)}`);
//             sum += coffeeShop.drinkPrices[drinksReceipt[l]];
//         }
//         console.log("----------------------------");
//         console.log(`Total: £${sum.toFixed(2)}\n`);
//         return(sum);
//     },
//     foodOrdered(){
//         foodReceipt = [];
//         for (let i in foodOrder) {
//             for (let j in this.food) {
//                 if (foodOrder[i] == this.food[j]) {
//                     foodReceipt.push(j);
//                 }
//             }
//         }
//         console.log("----------------------------");
//         console.log("Your food order is:\n");
//         sum = 0
//         for (l in foodReceipt) {
//             console.log(`${coffeeShop.food[foodReceipt[l]]} - £${coffeeShop.foodPrices[foodReceipt[l]].toFixed(2)}`);
//             sum += coffeeShop.foodPrices[foodReceipt[l]];
//         }
//         console.log("----------------------------");
//         console.log(`Total: £${sum.toFixed(2)}\n`);
//         return(sum);
//     }
        
// }

// let drinkSum = coffeeShop.drinksOrdered();
// let foodSum = coffeeShop.foodOrdered();

// console.log(`Left to pay: £${foodSum + drinkSum}`);