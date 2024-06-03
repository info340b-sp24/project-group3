import React from 'react';

export function Ima() {
    return (
            <div className="card-container">
                <div className="lib-pic">
                    <img src="img/ima.jpeg" className="card-img-top" alt="Picture of the IMA" />
                </div>
                <div className="card">
                    <h1 className="card-title">Intramural Activity Building</h1>
                    <div className="card-body">
                        <p>
                        UW Recreation provides safe, accessible, and dynamic recreation facilities and programs to 
                        engage the UW community in growth and wellbeing.
                        </p>
                        <p>Location: South Campus</p>
                        <h2>Hours</h2>
                        <ul>
                            <li>Sunday: 9:00am-8:30pm</li>
                            <li>Monday: 6:00am-10:30pm</li>
                            <li>Tuesday: 6:00am-10:30pm</li>
                            <li>Wednesday: 6:00am-10:30pm</li>
                            <li>Thursday: 6:00am-10:30pm</li>
                            <li>Friday: 6:00am-10:30pm</li>
                            <li>Saturday: 9:00am-8:30pm</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}
