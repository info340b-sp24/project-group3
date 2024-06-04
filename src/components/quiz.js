import React, { useState } from 'react';


function Question({ number, question, options, optionsType, name, handleOptionChange, selectedAnswer, correctAnswer, showFeedback }) {
    const renderOptions = () => {
        const optionElements = [];

        if (optionsType === "radio") {
            for (let index = 0; index < options.length; index++) {
                optionElements.push(
                    <div key={index}>
                        <input
                            type="radio"
                            id={`${name}-${index}`}
                            name={name}
                            value={options[index]}
                            onChange={(e) => handleOptionChange(name, e.target.value)}
                            disabled={showFeedback}
                            checked={selectedAnswer === options[index]}
                        />
                        <label htmlFor={`${name}-${index}`}>{options[index]}</label>
                    </div>
                );
            }
        } else if (optionsType === "checkbox") {
            for (let index = 0; index < options.length; index++) {
                optionElements.push(
                    <div key={index}>
                        <input
                            type="checkbox"
                            id={`${name}-${index}`}
                            name={name}
                            value={options[index]}
                            onChange={(e) => handleOptionChange(name, e.target.value)}
                            disabled={showFeedback}
                            checked={Array.isArray(selectedAnswer) && selectedAnswer.includes(options[index])}
                        />
                        <label htmlFor={`${name}-${index}`}>{options[index]}</label>
                    </div>
                );
            }
        } else if (optionsType === "select") {
            const selectOptions = [];
            for (let index = 0; index < options.length; index++) {
                selectOptions.push(
                    <option key={index} value={options[index].toLowerCase().replace(/\s+/g, '-')}>
                        {options[index]}
                    </option>
                );
            }
            return (
                <select name={name} onChange={(e) => handleOptionChange(name, e.target.value)} disabled={showFeedback} value={selectedAnswer || ''}>
                    <option value="">Select an option</option>
                    {selectOptions}
                </select>
            );
        }

        return optionElements;
    };

    const renderFeedback = () => {
        if (!showFeedback) return null;
        const isCorrect = selectedAnswer === correctAnswer;
        return (
            <span className={isCorrect ? 'correct' : 'incorrect'}>
                {isCorrect ? '✔️' : '❌'}
            </span>
        );
    };

    return (
        <div className="question">
            <p>{number}. {question} {renderFeedback()}</p>
            <div>
                {renderOptions()}
            </div>       
        </div>
    );
}

export function Quiz({ questionData }) {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleOptionChange = (name, value) => {
        setAnswers(prevAnswers => ({ ...prevAnswers, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let correctCount = 0;
        questionData.forEach(question => {
            if (answers[question.name] === question.correctAnswer) {
                correctCount += 1;
            }
        });
        setScore(correctCount);
        setShowFeedback(true);
    };

    const handleReset = () => {
        setAnswers({});
        setScore(null);
        setShowFeedback(false);
    };

    const questionElements = questionData.map((q, index) => (
        <Question
            key={index}
            number={index + 1}
            question={q.question}
            options={q.options}
            optionsType={q.optionsType}
            name={q.name}
            handleOptionChange={handleOptionChange}
            selectedAnswer={answers[q.name]}
            correctAnswer={q.correctAnswer}
            showFeedback={showFeedback}
        />
    ));

    const renderScoreMessage = () => {
        if (score === null) return null;
        const totalQuestions = questionData.length;
        const percentage = (score / totalQuestions) * 100;
        let message = '';

        if (percentage === 100) {
            message = 'Perfect score! 🎉';
        } else if (percentage >= 75) {
            message = 'Great job! 👍';
        } else if (percentage >= 50) {
            message = 'Good effort! 🙂';
        } else {
            message = 'Keep trying! 💪';
        }

        return (
            <div className="score-message">
                <h3>{message}</h3>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${percentage}%` }}></div>
                </div>
                <p>You scored {score} out of {totalQuestions}</p>
            </div>
        );
    };

    return (
        <main className="quiz-body">
            <h2>Test your knowledge of study spots on UW campus!</h2>

            <form onSubmit={handleSubmit}>
                <div className="quiz-container">
                    {questionElements}
                </div>

                <div className="submit">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset Quiz</button>
                </div>

                {renderScoreMessage()}
            </form>
        </main>
    );
}
