let userArray = process.argv.slice(2);

// console.log(userArray);
let extract = {};

[, extract.username, extract.email] = userArray;

console.log( extract )