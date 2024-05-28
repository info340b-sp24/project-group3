// import { render } from '@testing-library/react';
import React from 'react';

// import QUESTION_DATA from './data/quiz-questions.json';

function Question(props) {
    const renderOptions = () => {
        const optionElements = [];

        if (props.optionsType === "radio") {
            for (let index = 0; index < props.options.length; index++) {
                optionElements.push(
                    <div key={index}>
                        <input type="radio" id={`${props.name}-${index}`} name={props.name} />
                        <label htmlFor={`${props.name}-${index}`}>{props.options[index]}</label>
                    </div>
                );
            }
        } else if (props.optionsType === "checkbox") {
            for (let index = 0; index < props.options.length; index++) {
                optionElements.push(
                    <div key={index}>
                        <input type="checkbox" id={`${props.name}-${index}`} name={props.name} />
                        <label htmlFor={`${props.name}-${index}`}>{props.options[index]}</label>
                    </div>
                );
            }
        } else if (props.optionsType === "select") {
            const selectOptions = [];
            for (let index = 0; index < props.options.length; index++) {
                selectOptions.push(
                    <option key={index} value={props.options[index].toLowerCase().replace(/\s+/g, '-')}>
                        {props.options[index]}
                    </option>
                );
            }
            return (
                <select name={props.name}>
                    {selectOptions}
                </select>
            );
        }

        return optionElements;
    };

    return (
        <div className="question">
            <p>{props.question}</p>
            <div>
                {renderOptions()}
            </div>       
        </div>
    );
}

export function Quiz(props) {
    let questionData = props.questionData;
    const questionElements = [];

    for (let index = 0; index < questionData.length; index++) {
        const q = questionData[index];
        questionElements.push(
            <Question
                key={index}
                question={q.question}
                options={q.options}
                optionsType={q.optionsType}
                name={q.name}
            />
        );
    }

    return (
        <main className="quiz-body">
            <h1>Where should you study?</h1>
            <h2>Take the quiz to find your ideal study spot</h2>

            <form>
                <div className="quiz-container">
                    {questionElements}
                </div>

                <div className="submit">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </main>
    );
}
