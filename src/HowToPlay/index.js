

import { useState } from 'react'

import './style.css'

const HowToPlay = () => {
    
    // hooks, state, react life cycle
    let [show, setShow] =  useState( false )

    // const toggleShow = () => {
    //     console.log( `Before toggle: ${show}`)
    //     show = !show
    //     console.log( `After toggle: ${show}`)
    // }

    return (
        <section  className="htp">
            <button type="submit" onClick={() =>  setShow(!show)}>How to play</button>
            { show && <p className={`toggle_${show}`}>
            To get under way, click 'Start'.
Once you have started the quiz, type an answer into the box and either hit enter or click the submit button. If you are right, it will fill in the correct slot in the table.
Keep entering more answers until you've successfully completed the quiz - or the timer runs out.
If you do not want to play any more, just hit the 'Give up!' button. You can then reveal the answers you missed - or have another go.
            </p> }
        </section>
    )
}

export default HowToPlay;