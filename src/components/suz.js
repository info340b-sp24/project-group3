import React from 'react';

export function Suzzallo() {
    return (
            <div className="card-container">
                <div className="lib-pic">
                    <img src="img/suzallo.jpeg" className="card-img-top" alt="Image of Suzzallo" />
                </div>
                <div className="card">
                    <h1 className="card-title">Suzzallo</h1>
                    <div className="card-body">
                        <p>
                            Suzzallo is best known for the reading room that closely resembles the halls of Hogwarts. 
                            Enter through Suzzallo in Red Square and use the sky bridge to access the Allen library. 
                        </p>
                        <p>Location: Central Campus</p>
                        <h2>Hours</h2>
                        <ul>
                            <li>Sunday: 1:00pm-8:00pm</li>
                            <li>Monday: 8:00am-8:00pm</li>
                            <li> Tuesday: 8:00am-8:00pm</li>
                            <li>Wednesday: 8:00am-8:00pm</li>
                            <li>Thursday: 8:00am-8:00pm</li>
                            <li>Friday: 8:00am-5:00pm</li>
                            <li>Saturday: Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}
