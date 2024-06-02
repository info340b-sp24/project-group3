import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom/client';
import { getDatabase, ref, set as firebaseSet, onValue, push } from 'firebase/database';

export function SubmitReview(props) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [submissionMessage, setSubmissionMessage] = useState("");

    const addReview = (event) => {
        event.preventDefault();

        const newReviewObj = {
            name: name,
            comment: comment,
            rating: rating,
        };

        const db = getDatabase();
        const allReviewsRef = ref(db, "allReviews");
        const newReviewRef = push(allReviewsRef);

        firebaseSet(newReviewRef, newReviewObj).then(() => {
            setName("");
            setComment("");
            setRating("");
            setSubmissionMessage("Review has been submitted");
        });
    };

    return (
        <div className="index-container">
            <h1>Leave a review!</h1>
            <div className="picture">
                <form onSubmit={addReview}>
                    <div className="form-group">
                        {/* <label htmlFor="name">Name: </label> */}
                        <select
                                name="Name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            >
                                <option value="">Select Building</option>
                                <option value="Suzzallo Library">Suzzallo Library</option>
                                <option value="Odegaard Library">Odegaard Library</option>
                                <option value="Mary Gates Hall">Mary Gates Hall</option>
                                <option value="Maple Hall">Maple Hall</option>
                                <option value="IMA Building">IMA Building</option>
                                <option value="The HUB">The HUB</option>
                                <option value="Foster Business Library">Foster Business Library</option>
                                <option value="Engineering Library">Engineering Library</option>
                                <option value="Denny Hall">Denny Hall</option>
                            </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="entry">Comment: </label>
                        <input
                            type="text"
                            className="form-control"
                            id="entry"
                            name="entry"
                            required
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                        />
                    </div>
                    <div className="question">
                        <p>Rating</p>
                        <div>
                            <select
                                name="Rating"
                                value={rating}
                                onChange={(event) => setRating(event.target.value)}
                            >
                                <option value="">Select rating</option>
                                <option value="1 star">1 Star</option>
                                <option value="2 star">2 Star</option>
                                <option value="3 star">3 Star</option>
                                <option value="4 star">4 Star</option>
                                <option value="5 star">5 Star</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {submissionMessage && <p>{submissionMessage}</p>}
            {/* <div className="reviews">
                <h2>Reviews:</h2>
                <ul>
                    {reviews.map((review) => (
                        <li key={review.key}>
                            <strong>{review.name}</strong>: {review.comment} ({review.rating})
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
}