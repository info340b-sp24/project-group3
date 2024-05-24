// import { render } from '@testing-library/react';
import React from 'react';

// import QUESTION_DATA from './data/quiz-questions.json';

function Question(props) {
    const renderOptions = () => {
        if (props.optionsType === "radio") {
            return props.options.map((option, index) => (
                <div key={index}>
                    <input type="radio" id={`${props.name}-${index}`} name={props.name} />
                    <label htmlFor={`${props.name}-${index}`}>{option}</label>
                </div>
            ));
        } else if (props.optionsType === "checkbox") {
            return props.options.map((option, index) => (
                <div key={index}>
                    <input type="checkbox" id={`${props.name}-${index}`} name={props.name} />
                    <label htmlFor={`${props.name}-${index}`}>{option}</label>
                </div>
            ));
        } else if (props.optionsType === "select") {
            return (
                <select name={props.name}>
                    {props.options.map((option, index) => (
                        <option key={index} value={option.toLowerCase().replace(/\s+/g, '-')}>{option}</option>
                    ))}
                </select>
            );
        }
    };
    
    return (
        <div className="question">
            <p>{props.question}</p>
            <div>
                {renderOptions()}
            </div>       
        </div>
    )
}

export function Quiz(props) {

    let questionData = props.questionData;
    const questions = questionData.map((q, index) => (
        <Question
            key={index}
            question={q.question}
            options={q.options}
            optionsType={q.optionsType}
            name={q.name}
        />
    ))

    return (
        <main className="quiz-body">
            <h1>Where should you study?</h1>
            <h2>Take the quiz to find your ideal study spot</h2>

            <form>
                <div className="quiz-container">
                    {questions}
                </div>

                <div className="submit">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </main>
    );
}