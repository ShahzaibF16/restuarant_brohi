import React from 'react';
import HeroBanner from '../Components/Hero';
import WhoAreWe from '../Components/Two_Column_Txt';
import SliderSection from '../Components/Slider_Product';
import SignatureDish from '../Components/Signature_Dish';
import MenuSection from '../Components/Menu_Section';
import EventSection from '../Components/Events_Section';

const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <WhoAreWe />
      <SliderSection />
      <SignatureDish />
      <MenuSection />
      <EventSection />
    </div>
  );
};

export default Home;
