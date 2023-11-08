  // Anonymous Function

let calculator = function (num1, num2) {
   return num1 + num2
}

console.log(calculator(5, 10))


document.getElementById("show").onclick = function () {
    console.log("Hello")
}


setTimeout(function (){
    console.log("Good")
}, 2000)