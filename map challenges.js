// Task 1

let swappingCases = "elZERo";

let sw = swappingCases.split("").map(function (ele){
  return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("")

console.log(sw)


// Task 2

let invertedNumbers = [1, -10, -20, 15, 100, -30];
let inv = invertedNumbers.map(function (ele){
    return -ele // Unary Operator
})

console.log(inv);

// Task 3

let ignoreNumbers = "Elz123er4o"

let ign = ignoreNumbers.split("").map(function (ele){
   return isNaN(parseInt(ele)) ? ele : "";
}).join("")

console.log(ign)

