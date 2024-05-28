import React from 'react';
import { Link } from 'react-router-dom';

function ReviewCard(props) {
    return (
        <div className="rev-card">
            <img src={props.image} className="card-img-left" alt="Study Spot Image" />
            <div className="rev-card-body">
                <h1 className="rev-card-title">{props.title}</h1>
                <p className="rev-card-text">{props.rating}</p>
            </div>
        </div>
    );
}

export function Reviews(props) {

    let sortedData = props.data;

    const reviewCards = sortedData.map((card, index) => (
        <ReviewCard
            key={index}
            title={card.title}
            link={card.link}
            image={card.image}
            rating={card.rating}
        />
    ))

    return (
        <div className="review-container">
            <h1>Reviews</h1>
            <div className="reviews-button">
                <Link className="btn btn-primary" to="submitreview.js">Write a Review</Link>
            </div>

            <div className="rev-card-container">
                {reviewCards}
            </div>
        </div>
    )
}