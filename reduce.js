// Extract Longest Word
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

let check = theBiggest.reduce(function (acc, current){
    return acc.length > current.length ? acc : current;
});

console.log(check);

// ======================================== //

// Remove Special Character and make join for other letters to be "ELZERO"
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars.filter(function(ele){
   return !ele.startsWith("@")
}).reduce(function(acc, current){
    return `${acc}${current}`
});

console.log(finalString)

