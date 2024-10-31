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
if (numbers.length%2 === 0){
  return false;
}
else{
  return true;
}
  }
  
const arraysample1 = [1, 2, 3];
console.log(isArrayLengthOdd(arraysample1));
const arraysample2 = [1, 2, 3, 4];
console.log(isArrayLengthOdd(arraysample2));

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
    if (numbers.length%2 === 0){
        return true;
      }
      else{
        return false;
      }
        }
        
      const arraysample3 = [1, 2, 3];
      console.log(isArrayLengthEven(arraysample3));
      const arraysample4 = [1, 2, 3, 4];
      console.log(isArrayLengthEven(arraysample4));

      /**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
    const newarray = instructors; // make a new array
    newarray.push("Laila"); // add name to new array
    return newarray // return vale of new array call newarray 
  }
  const oldnames = ["Mshary", "Hasan"];
  console.log(addLailaToArray(oldnames));

  const oldnames2 = ["Mshary", "Hasan", "Ali", "jassem"];
  console.log(addLailaToArray(oldnames2));

  /**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
    const lastone = teams.pop();
    // return `${teams} and the eleminated team is ${lastone}`; to return the teams and the elminated team
return teams
  }
const nameofteams = ["Brazil", "Germany", "Italy"];
console.log(eliminateTeam(nameofteams));
const nameofteams2 = ["Brazil", "Germany", "Italy", "England", "Spain"];
console.log(eliminateTeam(nameofteams2));

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
    if (fruits.length%2 === 0){
        const evenarray = fruits.slice(0,((fruits.length/2)));
        return evenarray;
      }
      else{
        return [];
      }
  }

  const newlist = ["apple", "orange", "banana", "kiwi"];
  console.log(secondHalfOfArrayIfItIsEven(newlist));
  const newlist2 = ["apple", "orange", "banana", "kiwi", "Carrots"]; // to test odd numbers
  console.log(secondHalfOfArrayIfItIsEven(newlist2));
  const newlist3 = ["apple", "orange", "banana", "kiwi", "Carrots", "tomatoes"];
  console.log(secondHalfOfArrayIfItIsEven(newlist3));

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

// const text = "Hello, world!"; //Testing
// console.log(text); //testing
// console.log(text.slice(0, 5)); //Testing
// console.log(text.index("o"));

function youGottaCalmDown(shout) {
  let wordneeded = shout;
  let locationOfEx = wordneeded.indexOf("!"); // gives location of ! first one , if non it will set locationofex as -1
  while (locationOfEx !== -1 && wordneeded.indexOf("!", locationOfEx + 1) !== -1) {

    // locationOfEx !== -1 to check if there is an ! in the string, if yes go inside loop 
// wordneeded.indexOf("!", locationOfEx + 1) to check the position of the next ! after pervious loction (locationofEx), if no it will resulit in -1 and leave the loop
    console.log(`Found "!" at index ${locationOfEx}`); // to show location of ! in the word but not working for me 
    wordneeded = wordneeded.slice(0, -1); // Remove the last character
  }

  return wordneeded;
}
let firstWord = "HI!!!!!!!!!!"
console.log(youGottaCalmDown(firstWord));
let secondWord = "Taylor Schwift!!!!!!!!!!!" ;
console.log(youGottaCalmDown(secondWord));
let thirdWord = "Hellooooo" ;
console.log(youGottaCalmDown(thirdWord));
let testWord = "Abdullah Abbas !!"
console.log(youGottaCalmDown(testWord));
let testWord2 = "Abdullah Abbas !! Al Abbas" // want to test but it is removing all after !!
console.log(youGottaCalmDown(testWord2));
