import React from 'react';
import ReactDom from 'react-dom/client';
import { Explore } from './Explore';
import { Quiz } from './quiz';
import { QuizResults } from './quizresults';
import { Reviews } from './reviews';
import { SubmitReview } from './submitreview';
import { Suzzallo } from './suz';
import { Routes, Route, Link } from 'react-router-dom';

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
              <li><Link to="Explore.js">Explore</Link></li>
              <li><Link to="reviews.js">Reviews</Link></li>
              <li><Link to="quiz.js">Quiz</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route index element={<Explore data={displayedData}></Explore>}></Route>
          <Route path='Explore.js' element={<Explore data={displayedData}></Explore>}></Route>
          <Route path='quiz.js' element={<Quiz questionData={QUESTION_DATA}></Quiz>}></Route>
          <Route path='quizresults.js' element={<QuizResults></QuizResults>}></Route> 
          <Route path='reviews.js/submitreview.js' element={<SubmitReview></SubmitReview>}></Route>
          <Route path='reviews.js' element={<Reviews data={displayedData}></Reviews>}></Route>
          <Route path='suz.js' element={<Suzzallo></Suzzallo>}></Route>
        </Routes>
  
        <footer>
          <p>&copy; 2024 Husky Study Hub</p>
          <p>Meg Balfrey, Josh Auvaa, Mia Young, Nedim Suko</p>
        </footer>
      </div>
    );
  }
  
  export default App;