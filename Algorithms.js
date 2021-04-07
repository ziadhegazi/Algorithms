// Any string can go in here
const str = "Hello World, this is Ziad Hegazi.";
// Global Variables
let words = 0;
let vowel = 0;

// loop to go through the sentence
for (letter of str) {
    switch (letter.toLowerCase()){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            vowel+=1;
            break;
        default:
            vowel+=0;
    }
    if ((letter == " ") || (letter == ".")) {
        words+=1;
    }
}

// logs out the desired output
console.log(`Length of sentence: ${str.length}`);
console.log(`number of words: ${words}`);
console.log(`Number of vowels: ${vowel}`);