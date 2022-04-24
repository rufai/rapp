import { useState } from "react";

const StopWatch = () => {
  let [counter, setCounter] = useState(10);
  const [intervalKey, setIntervalKey] = useState("");
  const END_TIME = "00:00";


  /**
   * it will reduce the value of counter
   */
  const reduceCounter = () => {
    setCounter(--counter);
  };

  /**
   * it will reduce the value of counter automatically
   */
  const startCountDownAutomatically = () => {
    setIntervalKey(
      setInterval(() => {

        // have we gotten to 00:00
        const formattedCounter = convertSecondsToMinute( counter )
        console.log(    formattedCounter  , typeof( formattedCounter ))
        console.log( END_TIME , typeof( END_TIME ))
        if( convertSecondsToMinute (counter) === END_TIME) { 
            console.log("i am called")
            stopCountDown() // then stop the interval
        }else {
            setCounter(--counter);
        } 
      }, 1000)
    );
  };

  const stopCountDown = () => {
    clearInterval(intervalKey);
  };

  function convertSecondsToMinute(secs) {
    const minute = `${parseInt(secs / 60)}`;
    const secondsRemainder = `${parseInt(secs % 60)}`;
    return `${minute.length === 1 ? minute.padStart(2, "0") : minute}:${
      secondsRemainder.length === 1
        ? secondsRemainder.padStart(2, "0")
        : secondsRemainder
    }`;
  }

  return (
    <section>
      {/* <h2>{convertSecondsToMinute(setCounter(counter--))}</h2> */}
      <button onClick={() => reduceCounter()}>Reduce Counter</button>
      <button onClick={() => startCountDownAutomatically()}>Start Counter automatically</button>
      <button onClick={() => stopCountDown()}>Stop Counter automatically</button>
      <h2> {convertSecondsToMinute(counter)} </h2>
      
      
    </section>
  );
};

export default StopWatch;
