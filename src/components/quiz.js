import { render } from '@testing-library/react';
import React from 'react';

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

export function Quiz() {
    const questions = [
        { question: "Would you like a silent area available to you?", options: ["Yes", "No"], optionsType: "radio", name: "noise" },
        { question: "What area of campus would you like to study?", options: ["North", "West", "South", "Central"], optionsType: "radio", name: "area" },
        { question: "What kind of environment are you feeling?", options: ["Popular", "Lesser Known", "Modern", "Gothic"], optionsType: "select", name: "environment" },
        { question: "What resources do you need available to you?", options: ["Whiteboards", "Outlets", "Computers", "Printers"], optionsType: "checkbox", name: "resources" },
        { question: "Do you have your husky card?", options: ["Yes", "No"], optionsType: "radio", name: "card" },
        { question: "Would you like food options available nearby?", options: ["Yes", "No"], optionsType: "radio", name: "food" },
    ];

    return (
        <main className="quiz-body">
            <h1>Where should you study?</h1>
            <h2>Take the quiz to find your ideal study spot</h2>

            <form>
                <div className="quiz-container">
                    {questions.map((q, index) => (
                        <Question
                            key={index}
                            question={q.question}
                            options={q.options}
                            optionsType={q.optionsType}
                            name={q.name}
                        />
                    ))}
                </div>

                <div className="submit">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </main>
    );
}