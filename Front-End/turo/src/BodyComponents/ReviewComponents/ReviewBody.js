import React, {useContext, useEffect, useState} from 'react'
import { ReviewContext } from '../../context/ReviewsContext'
import './ReviewMain.css'
import UserReview from './UserReview'

export default function ReviewBody({overallRating, reviews}) {
    const rating = useState(overallRating)
    // const ReviewsContext = useContext(ReviewContext)
    // const reviews = ReviewsContext.reviews
    console.log("reviews: "  + reviews)
    const [numToShow, setNumToShow] = useState(5);
    const [activeReviews, setActiveReviews] = useState([null]);

    

    
    useEffect(()=>{
        setActiveReviews(reviews.slice(0, numToShow))
    }, [reviews])

  
    


    const showMoreReviews = () => {
        const newNumToShow = numToShow + 5;
        setActiveReviews(reviews.slice(0, newNumToShow));
        setNumToShow(newNumToShow);
      };
      return (
      activeReviews ? (
        // If activeReviews is truthy, return the following JSX:
        <div>
            {console.log(activeReviews)}
            <p style={{fontSize: '12px', fontWeight: 900, color: '#767677'}}>Reviews</p>
            {activeReviews.map((review)=>{  
                return <UserReview className="user-review" review={review} rating={overallRating}/>
            })}
            <div className='button-container'>
                <button className='see-more' variant='primary' onClick={showMoreReviews}>See more</button>
            </div>
        </div>
    ) : (
        // If activeReviews is falsy, return an empty fragment:
        <></>
    )
    )
}