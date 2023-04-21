import  {useState, useEffect, createContext} from 'react';

export const ReviewContext = createContext();

export function ReviewProvider({ children }){ 
    const [reviews, setReviews] = useState(['null']); 

    useEffect(() => {
        fetch('http://localhost:8100/car/1/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error))
    }, []);

    return(
        <ReviewContext.Provider value={{reviews}}>
            {children}
        </ReviewContext.Provider>
    )
}