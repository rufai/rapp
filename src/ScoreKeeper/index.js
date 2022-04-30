
import "./style.css"

import { useState } from "react"

// render / automatically reload
/**
 * 3 state of life
 * mounting / it has entered the (virtual) DOM 
 * unmounting / it has been removed from the (virtual) DOM
 * updating / change the data (state) of the (virtual) component
 */
const ScoreKeeper = () => {
    // let counter = 0 // normal js variable
    let [counter, setCounter] = useState(0);

    let [el, setEL] = useState(6) // this is react state
    let [c, setC] = useState(6) // this is react state
    let [k, setK] = useState(6) // this is react state
    let [p, setP] = useState(33) // this is react state
    // el is a variable that is now a react state
    // setEl is a function that we use to change the value of el
    // the initial value of el is 0
    // el = 9 // react does not that state has changed, react will not re-render correctly
    // setEL(9) // react is using that function to track your state, react know that you have made the change and re-renders the page correctly
    // setP(55)
    return (
        <section >
            <button onClick={() => setCounter(++counter)}>Click Me</button>
            <p>Score: <span>{counter}/32</span> </p>
            <h6>{el}</h6>
        </section>
    )
}

export default ScoreKeeper;