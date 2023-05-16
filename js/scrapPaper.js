// Properties: input text, [] lines, [] syllables, bool isHaiku
// Function 1: Split Text into Array of Lines
// Function 2:  Given a line, return number of syllables
// Function 3: return Haiku / not Haiku

const storeState = (state) => {
  let currentState = state; //Haiku state , with Properties: input text, [] lines, [] syllables, bool isHaiku
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState); //splitToLines(currentState);
    currentState = { ...newState };
    return newState;
  }
}


const testHaiku = storeState(initialState);  //testHaiku(stateChangeFunction)

//How do we get the initial state? To be solved later

//Functions for modifying properties
const splitToLines = (state) => {
  state.lines = state.inputText.split("\n");
}

const findSyllables = (state) => {
  state.syllables = state.lines.map(x => syllable(x));
}

const isHaiku = (state) => {
  // Logic to assign bool isHaiku to true or false
}

// Pass the split lines function into testHaiku
testHaiku();
testHaiku(splitToLines);
testHaiku(); //Should show the updated state

testHaiku(findSyllables);
testHaiku(isHaiku);


//generates currentState Haiku(inputText, splitLines);
// returns a function that takes in other functions

//Step 0: create initial state with input text
//Step 1:
testHaiku(splitToLines);
//Step 2:
testHaiku(findSyllables);
//Step 3: 
//Modular Option
// testHaiku(isHumanHaiku);
// HumanHaiku = 
// ALIEN HAIKU 
//Bool thing 

// Alien Haiku
// => 5 Lines, 4 5 6 7 8 syllables


//function factory
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
};

//Base functions
const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");
//Level 1 Functions
const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)

//example of factory function for different parameter sets
// changeState(numLines)([syllables per line])
// Human Haiku = (3)([5,7,5])
// Alien Haiku = (5)([5,6,7,8,9])



//haiku.js

import { syllable } from 'syllable';

export default class Haiku {
  constructor() {
    this.inputText = "";
    this.lines = []; // Is # of lines 3?
    this.syllables = []; // Is the syllable count correct
    this.isHaiku; //bool true or false
  }

  splitToLines() {
    this.lines = this.inputText.split("\n");
  }

  findSyllables() {
    this.syllables = this.lines.map(x => syllable(x));
  }

}

//index.js

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from './../src/haiku.js';


document.querySelector("#haikuForm").addEventListener("submit", haikuHandler);

function haikuHandler(event) {
  event.preventDefault();
  let inputText = document.getElementById("inputText").value;
  let haiku = new Haiku();
  haiku.inputText = inputText;
  haiku.splitToLines();
  haiku.findSyllables();
  if (haiku.lines.length === 3 && haiku.syllables[0] === 5 && haiku.syllables[1] === 7 && haiku.syllables[2] === 5) {
    document.getElementById("result").innerText = 'This is a Haiku';
  } else {
    document.getElementById("result").innerText = 'This is not a Haiku';
  }
}