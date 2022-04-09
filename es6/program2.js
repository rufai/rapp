
const name = process.argv[2]

// console.log("Hello, " + name + "!") // es5
// console.log('Your name lowercased is "' + name.toLowerCase() +'".') //es5

console.log(`Hello, ${name}!\nYour name lowercased is "${name.toLowerCase()}".`) // es6