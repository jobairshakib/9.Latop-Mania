import React from 'react';
import './Review.css'

const Review = (props) => {
    const {id,name,image,comment} = props.review;
    return (
        <div className='review'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{comment}</p>
        </div>
    );
};

export default Review;