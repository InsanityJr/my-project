const prompt = require(`prompt-sync`)();
const user =prompt("Enter Your Expression :");
const userexpression=eval(user);
console.log(`Your Final Output is : ${userexpression}`);