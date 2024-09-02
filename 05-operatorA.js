console.log("Normal function with one string argument");
function str(str1){
    return str1="Happy";
}
console.log(str());
console.log("1.1 function name: squareOfWordLength");
function squareOfWordLength(word) {
    const length = word.length;
    return length * length;
}
    
console.log("1.2 length of word and its length square is:");
console.log("1.3 Invoking values of the function======>");

const word = "JavaScript";
console.log(`1.3.1 '${word}': Length is ${word.length}, and its length square is ${squareOfWordLength(word)}'`);

const word2 = "Google Chrome";
console.log(`1.3.2 '${word2}': Length is ${word2.length}, and its length square is ${squareOfWordLength(word2)}'`);

const word3 = "Web Development Smart";
console.log(`1.3.3 '${word3}': Length is ${word3.length}, and its length square is ${squareOfWordLength(word3)}'`);

console.log("Q2.########## FUNCTION for string 'I am Angular Developer' #############");

function stringOperations(str) {
    const length = str.length;
    const wordCount = str.split(' ').length;

    const divideResult = length / wordCount;
    const multiplyResult = length * wordCount;

    console.log(`2. String length: ${length}, total number of Words: ${wordCount}`);
    console.log(`2.1 Find the string length and divide by total number of words available in that string: ${divideResult}`);
    console.log(`2.2 Find the string length and multiply by total number of words available in the string: ${multiplyResult}`);
}

const sentence = "I am Angular Developer";
stringOperations(sentence);

