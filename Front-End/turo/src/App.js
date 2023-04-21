import React from 'react';
import Header from './HeaderComponents/header';
import Footer from './FooterComponents/Footer';
import Body from './BodyComponents/Body';
import { LocationProvider } from './context/LocationContext';
import { ListingDetailsProvider } from './context/ListingDetailsContext';
import { HeartProvider } from './context/HeartContext';
import ScrollTrigger from './HeaderComponents/scrollTrigger'

function App() {
  return (
    <div>
      <ScrollTrigger />
      {/* <Header /> */}
      <LocationProvider>
      <HeartProvider>
        <ListingDetailsProvider>
          <Body />
        </ListingDetailsProvider>
        </HeartProvider>
      </LocationProvider>
      <Footer />
    </div>
  );
}

export default App;
