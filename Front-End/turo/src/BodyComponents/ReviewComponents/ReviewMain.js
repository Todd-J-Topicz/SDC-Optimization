import React, { useState, useEffect, useCallback, useContext } from "react";
import Rating from "./Rating";
import RatingChart from "./RatingChart"
import './ReviewMain.css'
import { ReviewContext } from "../../context/ReviewsContext";
import ReviewBody from "./ReviewBody";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Reviews() {
    const reviewsContext = useContext(ReviewContext);
    console.log("reviewsContext: " + reviewsContext)
    const reviews = reviewsContext.reviews
    console.log("reviews: " + reviews)
    const [overallRating, setOverallRating] = useState(0)

    useEffect(() => {
      if(reviews.length > 1)  {
      const reviewKeys = [
        'review_rating_cleanliness',
        'review_rating_maintainence',
        'review_rating_communication',
        'review_rating_convenience',
        'review_rating_accuracy'
      ]
  
      const ratingSum = reviews.reduce((acc, review) => {
        const reviewRatingSum = reviewKeys.reduce((sum, key) => {
          return sum + review[key]
        }, 0)
        const reviewRatingAverage = reviewRatingSum / reviewKeys.length
        return acc + reviewRatingAverage
      }, 0)

      const newOverallRating = ratingSum / reviews.length
      setOverallRating(newOverallRating)

    }
    console.log("overallRating: " + overallRating)
    // console.log("rating sum: " + ratingSum)
    }, [reviews])
   

    return(
        <div className="reviews">
            {console.log(reviews)}
                <div className="review-container">
                    <div >
                        <p className="review-header" style={{height: '12px', fontSize: '12px', fontWeight: '900', marginBottom: '8px'}}>RATINGS AND REVIEWS</p>
                        <Rating  overallRating={overallRating}/>
                        <RatingChart reviews={reviews}/>
                        <p style={{fontSize: 12, color: '#767677'}}>Based on 35 guest ratings</p>
                        < ReviewBody className='justify-self-start' reviews={reviews} overallRating={overallRating}/>
                    </div> 
  
                </div>
            
        </div>  
    // a <p> with average of all ratings with a star icon to the right
    
    // a <p> with number of ratings in parentheses

    // a component for ratings

    // a component to generate reviews
        
    )

}