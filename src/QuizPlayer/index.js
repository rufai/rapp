import "./style.css";

import { useState } from "react";

const QuizPlayer = (props) => {
    // console.log(props)
  let [isQuizStarted, setIsQuizStarted] = useState(false);
  
  const startQuizButtonClicked = (e) => {
    setIsQuizStarted(!isQuizStarted)
    props.rope("water") // send data back to parent
  } 


  return (
    <section>
      {!isQuizStarted ? (
        <button
          className="start_quiz"
          onClick={(e) => startQuizButtonClicked() }
        >
          Start Quiz
        </button>
      ) : (
        <section>
          <input placeholder="Enter your answer" />
          <button
            className="start_quiz"
            onClick={(e) => console.log("sdfsdfsd")}
          >
            Submit
          </button>
        </section>
      )}
    </section>
  );
};

export default QuizPlayer;
