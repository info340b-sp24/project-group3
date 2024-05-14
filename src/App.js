import React from 'react';
import ReactDom from 'react-dom/client';
import '.src/style.css'

function Card(props) {
    return (
      <div className="card">
        <a href={props.link}>
          <img src={props.image} className="card-img-top" alt="Study Spot Image" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <div className="attributes">
              {props.attributes.map((attribute, index) => (
                <div key={index} className="attribute-bubble">{attribute}</div>
              ))}
            </div>
          </div>
        </a>
      </div>
    );
  }
  
  function App() {
    const studySpots = [
      { title: "Suzzallo", link: "suz.html", image: "img/suzallo.jpeg", attributes: ["Quiet", "Central", "Whiteboards"] },
      // Define other study spots here
    ];
  
    return (
      <div>
        <header>
          <nav>
            <h1>Husky Study Hub</h1>
            <ul className="nav-links">
              <li><a href="index.html">Explore</a></li>
              <li><a href="reviews.html">Reviews</a></li>
              <li><a href="quiz.html">Quiz</a></li>
            </ul>
          </nav>
        </header>
  
        <div className="index-container">
          <h1>Look at some of our top study spots on campus!</h1>
          <div className="search-bar">
            <label htmlFor="filter">Search:</label>
            <input type="text" id="filter" />
          </div>
  
          <div className="card-container">
            {studySpots.map((spot, index) => (
              <Card key={index} title={spot.title} link={spot.link} image={spot.image} attributes={spot.attributes} />
            ))}
          </div>
        </div>
  
        <footer>
          <p>&copy; 2024 Husky Study Hub</p>
          <p>Meg Balfrey, Josh Auvaa, Mia Young, Nedim Suko</p>
        </footer>
      </div>
    );
  }
  
  export default App;