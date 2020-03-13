import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import quizService from './quizService';
import QuestionBox  from './components/QuestionBox';
import './assets/style.css';


class QuizBee extends Component {
    state = {
        questionBank: [], 
        score: 0,
        responses: 0
    };

    getQuestions = () => {
       quizService().then(question => {
            this.setState({
                questionBank: question});
        });
    }

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score +1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }

    componentDidMount() {
        this.getQuestions();
    }


    render() {
        let questions;
        if(this.state.questionBank && this.state.responses < 5) {
            questions = this.state.questionBank.map((ques => (
                <QuestionBox 
                    question={ques.question} 
                    options = {ques.answers} 
                    key={ques.questionId}
                    selected={answer =>this.computeAnswer(answer,ques.correct) }/>
            )));
        }

        return (
            <div className="container">
                <div className="title">QuizBee</div>
                {questions}
                {this.state.responses === 5 ? (<h2>{this.state.score}</h2>): null}
            </div>
        );
    }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));