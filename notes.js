// Diego Grisales
// 05/07/22
// Code Academy JavaScript notes



// --------------------- Functions ---------------------------
// Rock Paper Scissors:
/*

// arrow function:
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === 'bomb'
    ) {
      return userInput;
    } else {
      console.log("Incorrect input.");
    }
  };
  
  // get number from -- regular function declaration
  function getComputerChoice() {
    let number = Math.floor(Math.floor(Math.random() * 4));
    switch (number) {
      case 1:
        return "rock";
        break;
      case 2:
        return "paper";
        break;
      default:
        return "scissors";
        break;
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return 'User won!'
    }
    if (userChoice === computerChoice) {
      return "Tied game!";
    }
    // user choice == rock
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer won!";
      } else {
        return "User won!";
      }
    }
    // user choice == paper
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer won!";
      } else {
        return "User won!";
      }
    }
  
    // user choice == paper
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "Computer won!";
      } else {
        return "User won!";
      }
    }
  } 
  
  function playGame () {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log( determineWinner(userChoice, computerChoice));
  }

//playGame();


// single line arrow function example:
// const plantNeedsWater = day => day === 'Wednesday' ? true : false;


// sleep debt calculator
function getSleepHours (day) {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 5;
      case 'wednesday':
        return 5;
      case 'thursday':
        return 5.6;
      case 'friday':
        return 4.5;
      case 'saturday':
        return 8;
      default:
        return 9;
    }
}

//console.log(getSleepHours('monday'));

function getActualSleepHours () {
    let totalSleep = getSleepHours('monday') + getSleepHours('tuesday')
        + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday')
        + getSleepHours('saturday') + getSleepHours('sunday');
    return totalSleep;
}

function getIdealSleepHours () {
    let idealHours = 5 * 7;
    return idealHours;
}

function calculateSleepDebt () {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect amount of sleep.');
    }
    else if (actualSleepHours > idealSleepHours) {
      let overSleep = actualSleepHours - idealSleepHours;
      console.log(`Slept ${overSleep} more hours than needed.`);
    }
    else {
      let underSleep = actualSleepHours - idealSleepHours;
      console.log(`You need ${underSleep} more hours of sleep.`);
    }
}

calculateSleepDebt();

*/

// ---------------------- End - Functions -------------------------


// -------------------------- Scope --------------------------------

/*
const city = 'New York City';

function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

//console.log(logCitySkyline())

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

//console.log(callMyNightSky());


function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves();
// out of scope:
// console.log(lightWaves);



// Training days - Scope practice:

// The scope of `random` is too loose
const random = Math.floor(Math.random() * 3);
const name = 'Nala';
const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};

// The scope of `name` is too tight
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime


logEvent(name, event);
logTime(name, days);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);

*/

// ------------------------ End - Scope -----------------------------



// -------------------------- Arrays --------------------------------

/*
const hobbies = ['code', 'code', 'code'];
// prints ['code', 'code', 'code']
console.log(hobbies);

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.',
    'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2])

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// elements of const array can be reassigned, but the whole array cannot:
//utensils = ['Cuchara'];

// .length function
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);


// .push() function
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('Groceries', 'Clean');
console.log(chores);
chores.pop();
console.log(chores);

// other functions: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() .. many more

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); // removes first element from array
console.log(groceryList);

// adds element to the 0th element
groceryList.unshift('popcorn');
console.log(groceryList);

groceryList.slice();
console.log(groceryList);

// const array printed partially -- does not change the array
//                          (from, to)
console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


// arrays and functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
    newArr.pop();
}

removeElement(concept);
console.log(concept);

// nested arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];
// access element 6:
const target = numberClusters[2][1];
console.log(target);



// arrays practice - Secret Message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get',
    'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you',
    'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove last element
secretMessage.pop();
console.log(secretMessage);

// push elements to end of array
secretMessage.push('to', 'program');

// change index 6 value to:
secretMessage[7] = 'right';

//remove first element
secretMessage.shift();

// insert new first element
secretMessage.unshift('Programming');

// remove the strings get, right, the, first, time,, and replace them with the single string 'know'
secretMessage.splice(6,5, 'know,')
console.log(secretMessage);

// print array as a string i none line:
console.log(secretMessage.join(' '));

*/

// ----------------------- End - Arrays ----------------------------



// -------------------------- Loops --------------------------------

/*
let vacationSpots1 = ['Greece', 'Italy', 'Seattle'];

console.log(vacationSpots1[0]);
console.log(vacationSpots1[1]);
console.log(vacationSpots1[2]);

for (let i = 0; i < vacationSpots1.length; i++) {
    //console.log(vacationSpots1[i]);
}

//5 6 7 8 9 10
for (let i = 5; i < 11; i++) {
    //console.log(i)
}

//3210
for (let counter = 3; counter >= 0; counter--){
    //console.log(counter);
}

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++) {
    //console.log(`I would love to visit ${vacationSpots[i]}`);
}

// nested for loops
let bobsFollowers = ['Karla', 'Maddie', 'Belen', 'Angie'];
let tinasFollowers = ['Karla', 'Maddie', 'Hailey'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

//console.log(mutualFollowers)

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard !== 'spade') {
                     // get number from 0 to 4
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}


let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

// do while
do {
    cupsAdded++;
    console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);



const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0 ; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.') {
        break;
    }
}
console.log("And if you don't know, now you know.");

*/


// Loops practice - Whale Talk
let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    //console.log(i);
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
            if (input[i] === 'e' || input[i] === 'u') {
                resultArray.push(input[i]);
            }
        }

    }
}

console.log(resultArray.join().toUpperCase())







