
const boundBound = (lower = 0, upper = 1) => {
    // console.log(lower, upper)
    return  ( lower + upper ) / 2
}
// console.log( boundBound(-1))
module.exports = boundBound