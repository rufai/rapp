let foot = {

    kick : function () {
        this.yelp = "Ouch!"
        // console.log(this)
        setImmediate( () => console.log( this.yelp )  )
    }
   
}

foot.kick()