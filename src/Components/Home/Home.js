import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import Laptop from '../../laptop.png';
import './Home.css'

const Home = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className='home-container'>
                <div className='text-container'>
                    <h1>WELCOME TO YOUR INITIATION</h1>
                    <span><h1>LET POWER CONSUME YOU</h1></span>
                    <p>Dual storage options and optional NVIDIA® dedicated graphics* contribute to enhanced productivity, while the integrated firmware—Trusted Platform Module (TPM) 2.0—keeps your work secure by encrypting data and passwords.</p>
                    <button>Live Demo</button>
                </div>
                <div className='img-container'>
                    <img src={Laptop} />
                </div>
            </div>
            <div className='review-section'>
                <h1>Customer Review ({reviews.slice(0, 3).length})</h1>
                <div className='review-container'>
                    {
                        reviews.slice(0,3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;