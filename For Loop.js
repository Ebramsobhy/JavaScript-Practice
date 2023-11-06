 // For Loop 

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
let colors = ["Red", "Green", "Blue"];
let count = 4;

document.write(`<h1>Show ${count} Products </h1>`)

for (let i = 0; i < count ; i++){
    document.write(`<div>`);
    document.write(`<h3> ${i + 1} ${products[i]} </h3>`)
    for(j = 0; j < colors.length ; j++){
        document.write(`<p>${colors[j]}</p>`)
    }
    document.write(`</div>`);
}

