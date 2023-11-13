// Task to sum each element with itself and return the result in new Array

// Traditional way

let myNums = [1, 2, 3, 4, 5, 6]
let newArray = []

for (let i = 0; i < myNums.length; i++){
    newArray.push(myNums[i] + myNums[i])
}

console.log(newArray)

// New Ways using map 

let myNums = [1, 2, 3, 4, 5, 6]

let add = myNums.map(function (element){
    return element + element
})

console.log(add)

// ============================================= //

let myNums = [1, 2, 3, 4, 5, 6]

function addition(ele){
    return ele + ele;
}

let add = myNums.map(addition)
console.log(add)