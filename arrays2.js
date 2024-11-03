/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) { // return numbers.length % 2 !== 0;
  if (numbers.length % 2 === 0) {
    return false;
  }
  else {
    return true;
  }
}

const arraySample1 = [1, 2, 3];
console.log(isArrayLengthOdd(arraySample1));

const arraySample2 = [1, 2, 3, 4];
console.log(isArrayLengthOdd(arraySample2));

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

const arraySample3 = [1, 2, 3];
console.log(isArrayLengthEven(arraySample3));

const arraySample4 = [1, 2, 3, 4];
console.log(isArrayLengthEven(arraySample4));

/**
* addLailaToArray(instructors):
* - receives array `instructors`
* - returns a new array that's a copy of array `instructors` with additional string "Laila"
*
* e.g.
* addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
*/
function addLailaToArray(instructors) {
  const newArray = instructors; // make a new array
  newArray.push("Laila"); // add name to new array
  return newArray // return vale of new array call newarray 
}
const oldNames = ["Mshary", "Hasan"];
console.log(addLailaToArray(oldNames));

const oldNames2 = ["Mshary", "Hasan", "Ali"];
console.log(addLailaToArray(oldNames2));

/**
* eliminateTeam(teams):
* - receives array `teams`
* - removes the last element from the array and return it
*
* e.g.
* eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
*/
function eliminateTeam(teams) {
  const lastOne = teams.pop();
  // return `${teams} and the eleminated team is ${lastone}`; to return the teams and the elminated team
  // if you return teams, it will return remaining array with remaining teams
  return lastOne
}
const nameOfTeams = ["Brazil", "Germany", "Italy"];
console.log(eliminateTeam(nameOfTeams));
const nameOfTeams2 = ["Brazil", "Germany", "Italy", "England", "Spain"];
console.log(eliminateTeam(nameOfTeams2));


/** ------------------------------------ challange 1 -------------------------------------------------- */

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 === 0) {
    // const evenArray = fruits.slice(0, ((fruits.length / 2))); to show first half
    const evenArray = fruits.slice(((fruits.length / 2)), fruits.length);
    return evenArray;
  }
  else {
    return [];
  }
}

const newList = ["apple", "orange", "banana", "kiwi"];
console.log(secondHalfOfArrayIfItIsEven(newList));

const newList2 = ["apple", "orange", "banana", "kiwi", "Carrots"]; // to test odd numbers
console.log(secondHalfOfArrayIfItIsEven(newList2));

const newList3 = ["apple", "orange", "banana", "kiwi", "Carrots", "tomatoes"];
console.log(secondHalfOfArrayIfItIsEven(newList3));

// another soltuion to be tested later
//   function secondHalfOfArrayIfItIsEven(fruits) {
//     if (numbers.length%2 !== 0){ // it is odd 
// return [];
//       }
//     const halfofarray = fruite.length/2 // for even arrays
//     return fruits.slice(halfofarray);
//   }

//   const newlist = ["apple", "orange", "banana", "kiwi", "kkk"];
//   console.log(secondHalfOfArrayIfItIsEven(newlist));

/** ------------------------------------ challange 2 -------------------------------------------------- */
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */


function youGottaCalmDown(shout) {
  let wordNeeded = shout;
  let locationOfEx = wordNeeded.indexOf("!"); // gives location of ! first one , if non it will set locationofex as -1
  while (locationOfEx !== -1 && wordNeeded.indexOf("!", locationOfEx + 1) !== -1) {
    // locationOfEx !== -1 to check if there is an ! in the string, if yes go inside loop 
    // wordneeded.indexOf("!", locationOfEx + 1) to check the position of the next ! after pervious loction (locationofEx), if no it will resulit in -1 and leave the loop 
    wordNeeded = wordNeeded.slice(0, -1); // Remove the last character
  }

  return wordNeeded;
}
let firstWord = "HI!!!!!!!!!!"
console.log(youGottaCalmDown(firstWord));

let secondWord = "Taylor Schwift!!!!!!!!!!!";
console.log(youGottaCalmDown(secondWord));

let thirdWord = "Hellooooo";
console.log(youGottaCalmDown(thirdWord));

let testWord = "Abdullah Abbas !!"
console.log(youGottaCalmDown(testWord));



/** ------------------------------------ challange 2  from end removal -------------------------------------------------- */
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */

function youGottaCalmDown2(shout) {
  let neededWord = shout;
  let stringCount = neededWord.length;
  let locationOfEx2 = neededWord.indexOf("!");

  while (locationOfEx2 !== -1 && neededWord.indexOf("!", locationOfEx2 +1) !== -1) {
    // locationOfEx !== -1 to check if there is an ! in the string, if yes go inside loop 
    // wordneeded.indexOf("!", locationOfEx + 1) to check the position of the next ! after pervious loction (locationofEx), if no it will resulit in -1 and leave the loop 
    neededWord = neededWord.slice(0, -1); // Remove the last character
  }
  return neededWord;
}

let firstWord2 = "Marhabaaa!!!!!"
console.log(youGottaCalmDown2(firstWord2));

let firstWord3 = "Marhabaaa!!!!! Kuwait !!!!"
console.log(youGottaCalmDown2(firstWord3));
