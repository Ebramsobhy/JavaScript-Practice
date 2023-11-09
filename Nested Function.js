 // Example 1
function sayMessage(fName, lName){
  let message = `Hello`;

     function concatMsg(){
        message = `${message} ${fName} ${lName}`;
     }

    concatMsg()

  return message 
}

console.log(sayMessage("Ebram", "Sobhy"))

 // Example 2
function sayMessage(fName, lName){
  let message = `Hello`;

     function concatMsg(){
        return `${message} ${fName} ${lName}`;
     }

  return concatMsg() 
}

console.log(sayMessage("Ebram", "Sobhy"))

// Example 3
function sayMessage(fName, lName){
  let message = `Hello`;

     function concatMsg(){

            function getFullName(){
              return `${fName} ${lName}`
            }

        return `${message} ${getFullName()}`;
     }

  return concatMsg() 
}

console.log(sayMessage("Ebram", "Sobhy"))





