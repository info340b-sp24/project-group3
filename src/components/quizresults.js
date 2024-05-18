import React from 'react';
import ReactDOM from 'react-dom/client';

function QuizResults() {
    return (
        <>
            <header>
                <nav>
                    <h1>Husky Study Hub</h1>
                    <ul className="nav-links"> 
                        <li>
                            <a href="index.html">Explore</a>
                        </li>
                        <li>
                            <a href="reviews.html">Reviews</a>
                        </li>
                        <li>
                            <a href="quiz.html">Quiz</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <h1>You should study at...</h1>

                <div className="card-container">
                    <div className="card">
                        <div className="card-body">
                            <h2>Suzzallo Library</h2>
                            <img className="img-fluid" src="img/suzallo.jpeg" alt="suzzallo" />
                            <p className="pt-3">Suzallo is the perfect study spot for you. Centrally located in Red Square, 
                                this library offers both quiet and collaborative spaces to work.
                            </p>
                            <a className="btn btn-primary" href="suz.html">Learn More</a>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Husky Study Hub</p>
                <p>Meg Balfrey, Josh Auvaa, Mia Young, Nedim Suko</p>
            </footer>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<QuizResults />);