import "./style.css";

import { useState } from "react";

import HowToPlay from "../HowToPlay";
import ScoreKeeper from "../ScoreKeeper";
import StopWatch from "../StopWatch";
import QuizPlayer from "../QuizPlayer";

const BbcHundred = () => {
  let [startCountDown, setStartCountDown] = useState(false);

  function bucket(data) {
    console.log(data); // in local scope
    // return data // don't do this
    setStartCountDown(true); // we have put in the global BBCHundred scope
  }

  return (
    <section className="bbc_hundred">
      <section>
        <textarea placeholder="Count me" onChange={(e) => console.log(e.target.value.length)}/> 
      </section>
      <h1>Can you name the players with 100 Premier League goals?</h1>
      <HowToPlay />
      <section className="bbc_updater">
        <ScoreKeeper />
        <StopWatch shouldStartCountDown={startCountDown} />
      </section>

      <section className="bbc_updater">
        <QuizPlayer rope={bucket} k="2" />
      </section>
    </section>
  );
};

// Steps
// 1 - QuizPlayer ( child ) will pass the information to BBcHundred (parent)
// 2 - BBcHundred ( parent ) will pass the information to StopWatch (child)
// 3 - StopWatch will now start count down

// bucket // definition of the function
// bucket() // execute the function
export default BbcHundred;
