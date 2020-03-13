import React from 'react';

const Result = (props) => (
    <div className="score-board">
        <div className="score"> You scored {props.score} / 5 correct answers!</div>
        <button className="playBtn" onClick={props.playAgain}>Play again!</button>
    </div>

);

export default Result;