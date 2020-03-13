import React, {useState} from 'react';


const QuestionBox = (props) => {
    const [answer, setAnswer] = useState(props.options);
    return (
        <div className="questionBox">
            <div className="question">{props.question}</div>
            {answer.map((text, index) =>
                <button key={index} 
                    className="answerBtn"
                    onClick={() => {
                        setAnswer([text]);
                        props.selected(text);
                    }}>
                        {text}
                </button>
                )}
        </div>
    );
};

export default QuestionBox;