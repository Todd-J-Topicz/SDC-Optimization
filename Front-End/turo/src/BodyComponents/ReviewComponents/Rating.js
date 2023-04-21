import React, {useContext, useState, useEffect} from "react";
import { ReviewContext } from "../../context/ReviewsContext";
import { ReactComponent as Star }  from './asset 60.svg'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Rating(props) {
    console.log(props)
    const reviews = useContext(ReviewContext);

    
    console.log(reviews)
    // const [overallRating, setOverallRating] = useState(null);
    // // const [ratings, setRatings] = useState(
    // //   reviews ?  : []
    // // );
  
    useEffect(()=>{
      console.log(reviews)
    }, [reviews])
        

    //     } console.log(overallRating)
    //   }, [ratings, reviews]);
  
    return (
      <div>
        <div className=''>
            <div className="overall-rating d-flex flex-row justify-content-start">
                <p className="align-self-center">{props.overallRating}.0</p>
                <Star className='mt-1' style={{color: '#593CFB'}}/>
            </div>  

        </div>
        <p className="rating-number">(35 ratings)</p>
      </div>
    );
  }