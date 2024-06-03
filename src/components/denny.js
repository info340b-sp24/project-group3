import React from 'react';

export function Denny() {
    return (
            <div className="card-container">
                <div className="lib-pic">
                    <img src="img/denny.jpeg" className="card-img-top" alt="Denny Hall" />
                </div>
                <div className="card">
                    <h1 className="card-title">Denny Hall</h1>
                    <div className="card-body">
                        <p>
                        Denny Hall is the UW’s oldest building. The building was named Denny Hall in honor of Arthur A. Denny, 
                        one of the founding pioneers of Seattle and donor of land for the campus location.
                        </p>
                        <p>Location: North Campus</p>
                        <h2>Hours</h2>
                        <ul>
                            <li>Sunday: Closed</li>
                            <li>Monday: 8:00am-5:00pm</li>
                            <li>Tuesday: 8:00am-5:00pm</li>
                            <li>Wednesday: 8:00am-5:00pm</li>
                            <li>Thursday: 8:00am-5:00pm</li>
                            <li>Friday: 8:00am-5:00pm</li>
                            <li>Saturday: Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}
