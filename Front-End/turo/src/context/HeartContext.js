import  {useState, createContext} from 'react';

export const HeartContext = createContext(false);

export function HeartProvider({children}){

  const [HeartInfo, setHeartInfo] = useState(false);


  return (
    <HeartContext.Provider value = {[HeartInfo, setHeartInfo]}>
        {children}
    </HeartContext.Provider>
  );
}    
 