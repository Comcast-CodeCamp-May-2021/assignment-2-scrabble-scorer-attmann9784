// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
function transform(oldPointStructure) {
  let nPointStructure = {};
  for (const key in oldPointStructure) {
    let letters = oldPointStructure[key];
    for (i=0; i<letters.length; i++) {
    nPointStructure[oldPointStructure[key][i].toLowerCase()] = Number(key);
    }
  }return nPointStructure;
}

let newPointStructure =  transform(oldPointStructure);


const oldScrabbleScorer = (word) => {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.clear();
  word = input.question("Let's play some scrabble!\n\nEnter a word to score:");
  //  console.log(scrabbleScore(word));
  //  console.log(simpleScore(word));
  //  console.log(vowelBonusScore(word));
  //  console.log(scorerPrompt());
  // console.log("algorithm name: ", scoringAlgorithms[choice].name);
  // console.log("scorerFunction result: ", scoringAlgorithms[choice].scoringFunction("JavaScript"));
   
   return word;
};

const simpleScore = (word) => {
  let wordScore = 0;
  for (let i = 0; i < word.length; i++) {
    wordScore++;
  }
  return wordScore;
}

const vowelBonusScore = (word) => {
  word = word.toUpperCase();
  // let vowelScore = "";
  // let consonantScore = "";
  let totalScore = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].includes("A") || word[i].includes("E") || word[i].includes("I") || word[i].includes("O") || word[i].includes("U")) {
      totalScore += 3;
      console.log({totalScore});
    } else {
        totalScore++;
      }
    // totalScore = vowelScore + consonantScore;
  }
  return totalScore
}


let scrabbleScore = (word) => {
  word = word.toLowerCase();
  let totalPoints = 0;
  for (let i = 0; i < word.length; i++) {
    for (const key in newPointStructure) {
      if (key === word[i]) { 
        totalPoints += newPointStructure[key];
      }
    }
  }
  return totalPoints
}


const scoringAlgorithms = [{
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
},
{
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
},
{
  name: "Scrabble",
  description:"The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
}]



// const scoringAlgorithms = [scoreSimple, scoreVowel, scoreScrabble];

function scorerPrompt() {
  choice = Number(input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: "));
  for (i = 0; i < scoringAlgorithms.length; i++) {
    if (scoringAlgorithms[i] === choice) {
    }
   return scoringAlgorithms[i];
  }
}


function runProgram() {
  initialPrompt();
  scorerPrompt();
  console.log(`Score for '${word}' is: ${scoringAlgorithms[choice].scoringFunction(word)}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

