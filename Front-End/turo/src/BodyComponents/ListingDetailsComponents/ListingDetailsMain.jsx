import React, {useContext} from 'react';
import ListingOverall from './ListingOverall';
import ListingCarStats from './ListingCarStatsComponents/ListingCarStats';
import HostDetails from './HostDetailsComponents/HostDetails';
import Description from './Description'
import Features from './Features';
import Extras from './ExtrasComponents/Extras';
import ParkingDetails from './ParkingDetails';
import Guidelines from './Guidelines';
import FAQs from './FAQComponents/FAQs';

import './ListingDetailsMain.css'

import { ListingDetailsContext } from '../../context/ListingDetailsContext';
import { ExtrasProvider } from '../../context/ExtrasContext';
import { FAQProvider } from '../../context/FAQContext';
import { FeaturesProvider } from '../../context/FeaturesContext';


export default function ListingDetailsMain() {

  const context = useContext(ListingDetailsContext);
  const listingDetails = context.listingDetailsInfo[0];
  console.log(listingDetails);

  return (
    <div className='ListingDetails'>
        <ListingOverall listingDetails={listingDetails}/>
        <ListingCarStats listingDetails={listingDetails} />
        <HostDetails listingDetails={listingDetails}/>
        <Description listingDetails={listingDetails}/>
        <FeaturesProvider>
          <Features />
        </FeaturesProvider>
        <ExtrasProvider>
            <Extras />
        </ExtrasProvider>
        <ParkingDetails listingDetails={listingDetails}/>
        <Guidelines listingDetails={listingDetails}/>
        <FAQProvider />
          <FAQs listingDetails={listingDetails}/>
        <FAQProvider />
    </div>
  )
}
