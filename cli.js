const prompt = require(`prompt-sync`)();
const total = Number(prompt("What's the Total : $"));
const people = Number(prompt("How many are we ? : "));
const tip = Number(prompt("How much tip do you want ? : "));
const Finalbill = (total + (total * tip ) / 100)  / people;
console.log(`Each has to pay : $ ${Finalbill}`);
