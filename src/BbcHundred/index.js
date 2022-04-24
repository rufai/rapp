import "./style.css"


import HowToPlay from "../HowToPlay";
import ScoreKeeper from "../ScoreKeeper";
import StopWatch from "../StopWatch";

const BbcHundred = () => {
    return (
        <section className="bbc_hundred">
            <h1>Can you name the players with 100 Premier League goals?</h1>
            <HowToPlay />
            <section className="bbc_updater">
                <ScoreKeeper />
                <StopWatch />
            </section>
        </section>
    )
}

export default BbcHundred;