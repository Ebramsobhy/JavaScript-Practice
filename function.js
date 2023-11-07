  // Function 

function sayHello(userName, age){
    if (age < 18){
        console.log(`This App Not Suitable For You`)
    } else {
        console.log(`Hello ${userName} Your Age is ${age}`)
    }
}

sayHello("Ebram", 15);
sayHello("Ahmed", 30);


function generateYears(start, end, exclude){
    for (let i = start; i < end; i++){
        if(i === exclude){
            continue;
        }
          console.log(i)
    }
}

generateYears(2019, 2023, 2020);

