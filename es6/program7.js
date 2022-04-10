const average = ( ...p ) => {
    return p.reduce( (acc, currentIndex) => acc + currentIndex ) / p.length
}

module.exports = average