import React from 'react';

export function HUB() {
    return (
            <div className="card-container">
                <div className="lib-pic">
                    <img src="img/hub.jpeg" className="card-img-top" alt="The Husky Union Building" />
                </div>
                <div className="card">
                    <h1 className="card-title">Husky Union Building</h1>
                    <div className="card-body">
                        <p>
                        The Husky Union Building offers a lively area on campus where students can plug in, get food, play games, 
                        or connect with some of our RSOs. The HUB offers students a little bit of everything. 
                        </p>
                        <p>Location: Central Campus</p>
                        <h2>Hours</h2>
                        <ul>
                            <li>Sunday: Closed</li>
                            <li>Monday: 7:00am-10:00pm</li>
                            <li>Tuesday: 7:00am-10:00pm</li>
                            <li>Wednesday: 7:00am-10:00pm</li>
                            <li>Thursday: 7:00am-10:00pm</li>
                            <li>Friday: 7:00am-11:00pm</li>
                            <li>Saturday: 8:00am-11:00pm</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}
