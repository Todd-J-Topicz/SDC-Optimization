import  {useState, useEffect, createContext} from 'react';

export const ExtrasContext = createContext();

export function ExtrasProvider({children}){

  const [extrasInfo, setExtrasInfo] = useState(['null']);

  useEffect(() => {
    fetch(`http://localhost:8100/car/1/extras`)
     .then((response) => {
        return response.json()
    })
    .then((actualData) => setExtrasInfo(actualData));
  }, []);

  return (
    <ExtrasContext.Provider value = {{extrasInfo}}>
        {children}
    </ExtrasContext.Provider>
  );
}    
 