import React from 'react';

export function Odegaard() {
    return (
            <div className="card-container">
                <div className="lib-pic">
                    <img src="img/odegaard.jpeg" className="card-img-top" alt="Odegaard" />
                </div>
                <div className="card">
                    <h1 className="card-title">Odegaard</h1>
                    <div className="card-body">
                        <p>
                        Renovated in 2014 Odegaard is centrally located right near Red Square. 
                        Whether you want to work in a group downstairs, use the computers on the second floor, 
                        or need silence up in the third floor there is a space for you.
                        </p>
                        <p>Location: Central Campus</p>
                        <h2>Hours</h2>
                        <ul>
                            <li>Sunday: 12:00pm-12:00am</li>
                            <li>Monday: 8:00am-12:00am</li>
                            <li>Tuesday: 8:00am-12:00am</li>
                            <li>Wednesday: 8:00am-12:00am</li>
                            <li>Thursday: 8:00am-12:00am</li>
                            <li>Friday: 8:00am-8:00pm</li>
                            <li>Saturday: 10:00am-6:00pm</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}
