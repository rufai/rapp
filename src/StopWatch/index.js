import { useState } from "react"; // useState hook
StopWatch.defaultProps = {
  "job" : "hire me"
}
function StopWatch ({shouldStartCountDown, job}) {
  console.log(job)
  // console.log(StopWatch)
  let [counter, setCounter] = useState(300); // counter is a state
  let [countDownKey, setCountDownKey] = useState(null); // interval is a state
  const END_TIME = "04:50";

  // let k =  2
  // console.log(k)

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
    const key = setInterval(() => {
      // have we gotten to 00:00
      // const formattedCounter = convertSecondsToMinute(counter);
      // console.log(formattedCounter, typeof formattedCounter);
      // console.log(END_TIME, typeof END_TIME);
      if (convertSecondsToMinute(counter) === END_TIME) {
        // console.trace("i am called");
        stopCountDown(); // then stop the interval
      } else {
        setCounter(--counter);
      }
    }, 1000);

    setCountDownKey(key);
  };
  if (shouldStartCountDown) {
    startCountDownAutomatically();
    console.log(shouldStartCountDown);
  }
  const stopCountDown = () => {
    clearInterval(countDownKey);
  };

  function convertSecondsToMinute(secs) {
    let minute = `${parseInt(secs / 60)}`;
    minute = minute.length === 1 ? minute.padStart(2, "0") : minute;
    let secondsRemainder = `${parseInt(secs % 60)}`;
    secondsRemainder =
      secondsRemainder.length === 1
        ? secondsRemainder.padStart(2, "0")
        : secondsRemainder;

    return `${minute}:${secondsRemainder}`;
  }

  function add(a, b) {
    return a + b;
  }

  return (
    <section>
      {/* <h2>{convertSecondsToMinute(setCounter(counter--))}</h2> */}
      <button onClick={() => reduceCounter()}>Reduce Counter</button>
      <button onClick={() => startCountDownAutomatically()}>
        Start Counter automatically
      </button>
      <button onClick={() => stopCountDown()}>
        Stop Counter automatically
      </button>
      <h2> {convertSecondsToMinute(counter)} </h2>
    </section>
  );
};

export default StopWatch;
