import React from 'react';

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

export function Explore(props) {

    const studySpotCards = props.data.map((spot, index) => (
        <Card key={index} title={spot.title} link={spot.link} image={spot.image} attributes={spot.attributes} />
        ))

    return (
        <div className="index-container">
            <h1>Look at some of our top study spots on campus!</h1>
            <div className="search-bar">
                <label htmlFor="filter">Search:</label>
                <input type="text" id="filter" />
            </div>
    
            <div className="card-container">
                {studySpotCards}
            </div>
            </div>
    );
}