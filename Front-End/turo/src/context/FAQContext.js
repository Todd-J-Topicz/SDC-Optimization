import  {useState, useEffect, createContext} from 'react';

export const FAQContext = createContext();

export function FAQProvider({children}){

  const [FAQInfo, setFAQInfo] = useState(['null']);

  useEffect(() => {
    fetch(`http://localhost:8100/car/1/faqs`)
     .then((response) => {
        return response.json()
    })
    .then((actualData) => setFAQInfo(actualData));
  }, []);

  return (
    <FAQContext.Provider value = {{FAQInfo}}>
        {children}
    </FAQContext.Provider>
  );
}    