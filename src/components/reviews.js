import React from 'react';

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

export function Reviews() {
    const reviewCards = [
      { title: "Suzzallo", link: "suz.html", image: "./img/suzallo.jpeg", rating: 5 },
      { title: "Odegaard", link: "odegaard.html", image: "./img/odegaard.jpeg", rating: 5 },
      { title: "Mary Gates", link: "marygates.html", image: "./img/marygates.jpeg", rating: 5 },
      { title: "Maple", link: "maple.html", image: "./img/maple.jpeg", rating: 5 },
      { title: "IMA", link: "ima.html", image: "./img/ima.jpeg", rating: 5 },
      { title: "The HUB", link: "hub.html", image: "./img/hub.jpeg", rating: 5 },
      { title: "Foster", link: "foster.html", image: "./img/foster.jpeg", rating: 5 },
      { title: "Engineering Library", link: "./engineering.html", image: "img/engineering.jpeg", rating: 5 },
      { title: "Denny", link: "denny.html", image: "./img/denny.jpeg", rating: 5 }
    ]
    return (
        <div className="review-container">
            <h1>Reviews</h1>
            <div className="reviews-button">
                <a className="btn btn-primary" href="submitreview.html">Write a Review</a>
            </div>

            <div className="rev-card-container">
                {reviewCards.map((card, index) => (
                    <ReviewCard
                        key={index}
                        title={card.title}
                        link={card.link}
                        image={card.image}
                        rating={card.rating}
                    />
                ))}
            </div>
        </div>
    )
}