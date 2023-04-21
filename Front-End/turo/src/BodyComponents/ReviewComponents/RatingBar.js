const RatingBar = ({ rating }) => {
    const filledWidth = rating * 20; // assuming 8px per rating point
  
    return (

            <div style={{width:"70%", height: '8px', backgroundColor: '#ddd'}}>
                <div style={{ width: `${filledWidth}%`, height: '8px', backgroundColor: '#593CFB', borderRadius: '8px' }} />
 
            </div>
    
        );
  };
  
  export default RatingBar;
