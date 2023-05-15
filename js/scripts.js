
const splitToLines = (state) => {
  state.lines = state.inputText.split("\n");
}

const findSyllables = (state) => {
  state.syllables = state.lines.map(x => syllable(x));
}


