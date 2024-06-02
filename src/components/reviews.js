import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { getDatabase, ref, set as firebaseSet, onValue, push } from 'firebase/database';

function ReviewCard(props) {
    const filteredReviews = props.reviews.filter(review => review.name === props.title);

    const cardReviews = filteredReviews.map((review) => (
        <ul key={review.key}>
            {review.comment} ({review.rating})
        </ul>
    ))

    const filteredCardReviews = cardReviews.filter(review => 
        review.name === props.title
    )

    const noReviewsMessage = cardReviews.length === 0 ? <p>No reviews yet!</p> : null;

    return (
        <div className="rev-card">
            <img src={props.image} className="card-img-left" alt="Study Spot Image" />
            <div className="rev-card-body">
                <h1 className="rev-card-title">{props.title}</h1>
                <p className="rev-card-text">{props.rating}</p>
                <div className="reviews">
                {noReviewsMessage}
                <ul>
                    {cardReviews}
                </ul>
            </div>
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
            // rating={card.rating}
            reviews={props.reviews}
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