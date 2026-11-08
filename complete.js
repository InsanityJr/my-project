// Prompt the user to enter their full name without spaces.
// Generate a secure username that begins with the @ symbol.
// Append their inputted full name directly after the symbol.
// Append the total character length of their name at the very end.
// Example: Inputting ShradhaKhapra must output @ShradhaKhapra13.
const Prompt = require(`prompt-sync`)();
const name=Prompt("Enter your fullname without spaces : ");
console.log(`@${name}${name.length}`);