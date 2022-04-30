import "./style.css";

import { useState } from "react";

import HowToPlay from "../HowToPlay";
import ScoreKeeper from "../ScoreKeeper";
import StopWatch from "../StopWatch";
import QuizPlayer from "../QuizPlayer";
import Table from "../Table";

const BbcHundred = () => {
  let [startCountDown, setStartCountDown] = useState(false);
  let [currentScore, setCurrentScore] = useState(0);

  function bucketForCorrectAnswer(data){
    console.log(data)
    setCurrentScore(++currentScore)
  }

  /**
   * This is bucket for quizPlayer
   * @param {*} data 
   */
  function bucket(data) {
    console.log(data); // in local scope
    // return data // don't do this
    setStartCountDown(true); // we have put in the global BBCHundred scope
  }

  return (
    <section className="bbc_hundred">
   
      <h1>Can you name the players with 100 Premier League goals?</h1>
      <HowToPlay />
      <section className="bbc_updater">
        <ScoreKeeper score={currentScore}/>
        <StopWatch shouldStartCountDown={startCountDown} />
      </section>

      <section className="bbc_updater">
        <QuizPlayer rope={bucket} k="2" ropeTwo={bucketForCorrectAnswer}/>
      </section>

      <Table />
    </section>
  );
};

// Steps To Start CountDown
// 1 - QuizPlayer ( child ) will pass the information to BBcHundred (parent)
// 2 - BBcHundred ( parent ) will pass the information to StopWatch (child)
// 3 - StopWatch will now start count down

// bucket // definition of the function
// bucket() // execute the function

// Steps To Update ScoreKeeper
// 1 - QuizPlayer ( child ) will pass the information to BBcHundred (parent)
// 2 - BBcHundred ( parent ) will pass the information to ScoreKeeper (child)
// 3 - ScoreKeeper will now update the score

/** How To Fetch Water From Well
 * the person will send the bucket through the rope
 * the bucket will collect water
 * the person will drag the rope out of the well
 */

/** How Child Component Will Send Data To Parent Component
 * person == parent
 * well == child
 * rope = props
 * bucket = function
 * water = data
 * 
 * The parent will attach function to the attribute/prop
 * The prop will collect data
 * 
 */

export default BbcHundred;
