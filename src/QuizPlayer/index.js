import "./style.css";

import { useState } from "react";

const players = ["drogba", "lampard", "henry", "sterling", "salah"];
const QuizPlayer = (props) => {
  // console.log(props)
  let [isQuizStarted, setIsQuizStarted] = useState(false);
  let [correctPlayerName, setCorrectPlayerName] = useState("Drogba");
  let [incorrectPlayerName, setInCorrectPlayerName] = useState("Drogba");
  let [collectAnswer, setCollectAnswer] = useState("");
  let [correctAnswer, setCorrectAnswer] = useState();
  let [toggle, setToggle] = useState(false);

  const startQuizButtonClicked = (e) => {
    setIsQuizStarted(!isQuizStarted);
    props.rope("water"); // send data back to parent
  };

  function checkAnswer(e) {
    setToggle(true)
    if (players.includes(collectAnswer)) {
      setCorrectAnswer(true);
      setCorrectPlayerName(collectAnswer);
      props.ropeTwo(collectAnswer)
    } else {
      setCorrectAnswer(false);
      setInCorrectPlayerName(collectAnswer);
    }
  }

  return (
    <section>
      {!isQuizStarted ? (
        <button
          className="start_quiz"
          onClick={(e) => startQuizButtonClicked()}
        >
          Start Quiz
        </button>
      ) : (
        <section>
          <input
            placeholder="Enter your answer"
            onChange={(e) =>
              setCollectAnswer(e.target.value.trim().toLowerCase())
            }
          />
          <button className="start_quiz" onClick={(e) => checkAnswer(e)}>
            Submit
          </button>
        </section>
      )}
      <section>
      { toggle && (correctAnswer  ? (
            <section className="correct-answer">
              <span className="iconify" data-icon="akar-icons:check"></span>
              Answer Correct! {correctPlayerName}
            </section>
          ) : (
            <section className="incorrect-answer">
              <span class="iconify" data-icon="emojione-v1:cross-mark"></span>
              Answer Incorrect! {incorrectPlayerName}
            </section>
          ))
          
      } 
      </section>
    </section>
  );
};

export default QuizPlayer;
