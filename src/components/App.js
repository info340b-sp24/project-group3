import React from 'react';
import ReactDom from 'react-dom/client';
import { Explore } from './Explore';
import { Quiz } from './quiz';
import { QuizResults } from './quizresults';
import { Reviews } from './reviews';
import { SubmitReview } from './submitreview';
import { Suzzallo } from './suz';

// import '.src/style.css'
// import 'bootstrap/dist/css/bootstrap.css'

import QUESTION_DATA from './quiz-questions.json';

   
  function App(props) {

    let displayedData = props.spotData
  
    return (
      <div>
        <header>
          <nav>
            <h1>Husky Study Hub</h1>
            <ul className="nav-links">
              <li><a href="index.js">Explore</a></li>
              <li><a href="reviews.js">Reviews</a></li>
              <li><a href="quiz.js">Quiz</a></li>
            </ul>
          </nav>
        </header>

        <Explore data={displayedData}></Explore>
        <Quiz questionData={QUESTION_DATA}></Quiz>
        <QuizResults></QuizResults> 
        <SubmitReview></SubmitReview>
        <QuizResults></QuizResults>
        <Reviews data={displayedData}></Reviews>
        <Suzzallo></Suzzallo>
  
        <footer>
          <p>&copy; 2024 Husky Study Hub</p>
          <p>Meg Balfrey, Josh Auvaa, Mia Young, Nedim Suko</p>
        </footer>
      </div>
    );
  }
  
  export default App;