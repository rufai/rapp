const makeImportant = (s,n = s.length) => {
    return `${s}${"!".repeat(n)}`
}


module.exports = makeImportant