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
  word = input.question("Let's play some scrabble!\n\nEnter a word:");
  //  console.log(oldScrabbleScorer(word));
  //  console.log(simpleScore(word));
  //  console.log(vowelBonusScore(word));
  //  console.log(scorerPrompt());
  // console.log("algorithm name: ", scoringAlgorithms[0].name);
  // console.log("scorerFunction result: ", scoringAlgorithms[0].scoringFunction("JavaScript"));
   
   return word;
};

const simpleScore = (word) => {
  let wordScore = 0;
  for (let i = 0; i < word.length; i++) {
    wordScore++;
  }
  // console.log(wordScore, "is the score for your word" );
  return wordScore;
}

const vowelBonusScore = (word) => {
  word = word.toUpperCase();
  // let vowelScore = "";
  // let consonantScore = "";
  let totalScore = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].includes("A") || word[i].includes("E") || word[i].includes("I") || word[i].includes("O") || word[i].includes("U")) {
      totalScore += 3;
    } else {
        totalScore++;
      }
    // totalScore = vowelScore + consonantScore;
  }
  return totalScore
}

let scoreScrabble = {
  name: "Scrabble",
  description:"The traditional scoring algorithm.",
  scoringFunction: oldScrabbleScorer
};
let scoreSimple = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
};
let scoreVowel = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
};


let scrabbleScore;

const scoringAlgorithms = [scoreSimple, scoreVowel, scoreScrabble];

function scorerPrompt() {
  choice = Number(input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: "));
  for (i = 0; i < scoringAlgorithms.length; i++) {
    if (scoringAlgorithms[i] === choice) {
    }
   return scoringAlgorithms[i];
  }
}

let newPointStructure = {};
  // a: 1,
  // b: 3,
  // c: 3,
  // d: 2,
  // e: 1,
  // f: 4,
  // g: 2,
  // h: 4,
  // i: 1,
  // j: 8,
  // k: 5,
  // l: 1,
  // m: 3,
  // n: 1,
  // o: 1,
  // p: 3,
  // q: 10,
  // r: 1,
  // s: 1,
  // t: 1,
  // u: 1,
  // v: 4,
  // w: 4,
  // x: 8,
  // y: 4,
  // z: 10
// };
//  console.log(key);
//     console.log(oldPointStructure[key][0])
//     console.log(newPointStructure);
// newPointStructure.name = "matt";//
function transform(oldPointStructure) {
  for (const key in oldPointStructure) {
    let letters = oldPointStructure[1]
    for (i=0; i<letters.length; i++) {
    newPointStructure[oldPointStructure[key][i]] = 2;
    }
  }console.log({newPointStructure});
}


function runProgram() {
  //  initialPrompt();
  //  scorerPrompt();
  //  console.log(`Score for ${word} is ${scoringAlgorithms[choice].scoringFunction(word)}`);
   transform(oldPointStructure);

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

