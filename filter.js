// Get Friends With Name Starts With A

let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"]

let filterdFriends = friends.filter(function(el){
   return el.startsWith("A");
});

console.log(filterdFriends);

// =============================================== //

// Get Even Numbers Only

let numbers = [11, 20, 2, 5, 17, 10]

let evenNumbers = numbers.filter(function(el){
    return el % 2 === 0;
})
console.log(evenNumbers)



