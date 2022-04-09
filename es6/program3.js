const inputs = process.argv.slice(2)
// es5
// console.log(inputs)
let firsts = "" // collect all the first character
for ( let index = 0; index <  inputs.length; index += 1){
    firsts += inputs[index].charAt(0)
}
// console.log(firsts)

// es6
const finalAnswer = inputs
                        .map( item => item.charAt(0) )
                        .reduce( (acc, char) =>   acc + char   ) 
console.log(    `[${inputs}] becomes "${finalAnswer}"` )