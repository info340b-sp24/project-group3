import React from 'react';

export function Engineering() {
    return (
            <div className="card-container">
                <div className="lib-pic">
                    <img src="img/engineering.jpeg" className="card-img-top" alt="Picture of the Engineer Library" />
                </div>
                <div className="card">
                    <h1 className="card-title">Engineering Library</h1>
                    <div className="card-body">
                        <p>
                        The engineering library, built in 1969, was based on a Italian Neo-Liberty design by Bassetti & Company. 
                        The library was part of a dual project that included the adjacent Loew Hall to which it was joined by an 
                        underground walkway. This joint project was constructed for approximately $3 million. 
                        </p>
                        <p>Location: Central Campus</p>
                        <h2>Hours</h2>
                        <ul>
                            <li>Sunday: 1:00pm-5:00pm</li>
                            <li>Monday: 9:00am-6:00pm</li>
                            <li>Tuesday: 9:00am-6:00pm</li>
                            <li>Wednesday: 9:00am-6:00pm</li>
                            <li>Thursday: 9:00am-6:00pm</li>
                            <li>Friday: 9:00am-5:00pm</li>
                            <li>Saturday: Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}
