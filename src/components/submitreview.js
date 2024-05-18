import React from 'react';
import ReactDom from 'react-dom/client';
 
export function SubmitReview() {
    return (
            <div className="index-container">
                <h1>Leave a review!</h1>
                <div className="picture">
                    <form action="#" method="POST" enctype="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input type="text" className="form-control" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="entry">Comment: </label>
                            <input type="text" className="form-control" id="entry" name="entry" required />
                        </div>

                        <div className="question">
                            <p>Rating</p>
                            <div>
                                <select name="Rating">
                                    <option value="1 star">1 Star</option>
                                    <option value="2 star">2 Star</option>
                                    <option value="3 star">3 Star</option>
                                    <option value="4 star">4 Star</option>
                                    <option value="5 star">5 Star</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="reset" className="btn btn-secondary">Reset</button>
                    </form>
                </div>
            </div>
    );
}

