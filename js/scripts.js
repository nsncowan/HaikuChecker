// Properties: input text, [] lines, [] syllables, bool isHaiku

//Step 1: Get Haiku
const storeState = (formText) => {
  let currentState = { inputText: formText, lines: [], syllables: [], isHaiku: null };
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

// inputText = 
// "A world of dew, \n And within every dewdrop \n A world of struggle.";

//State Change Functions:
// input a state, return a state

//Step 2: Split it into lines
const splitToLines = (state) => ({
  ...state,
  "lines": state.inputText.split("\n")
});

// lines = [A world of dew, And within every dewdrop, A world of struggle.];

//Step 3: Count the number of syllables per line
const findSyllables = (state) => ({
  ...state,
  "syllables": state.lines.map(x => convertToSyllable(x))
});

const convertToSyllable = (sentence) => {
  splitArr = sentence.split(' ');
  syllableCount = splitArr.map(function (word) {
    word = word.toLowerCase();                                     //word.downcase!
    if (word.length <= 3) { return 1; }
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
    word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
    return word.match(/[aeiouy]{1,2}/g).length;
  });
  return syllableCount.reduce((a, b) => a + b, 0);
}

// syllables = [5,7,5]

//Step 4: Return bool if its a haiku or not
const isHaiku = function (state) {
  if (state.lines.length == 3 && state.syllables[0] == 5 && state.syllables[1] == 7 && state.syllables[2] == 5) {
    return {
      ...state,
      "isHaiku": true
    };
  } else {
    return {
      ...state,
      "isHaiku": false
    };
  }
}

const testAll = function (state) {
  state = splitToLines(state);
  state = findSyllables(state);
  state = isHaiku(state);
  return state;
}

//test cases
// const testHaikuGood = storeState("But the march to life\nBreak song to sing the new song!\nClouds leap, flowers bloom.");
// testHaikuGood(testAll);

// const testHaikuBad1 = storeState("But the march to life\nBreak song to sing the new song!");
// testHaikuBad1(testAll);

// const testHaikuBad2 = storeState("But the march to life bad\nBreak song to sing the new song bad!\nClouds leap, flowers bloom. bad");
// testHaikuBad2(testAll);
