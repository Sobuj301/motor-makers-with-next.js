import About from '@/components/home/About';
import Banner from '@/components/home/Banner';
import { getServices } from '@/components/utils/getServices';
import React from 'react';

const HomePage = async() => {

  const services = await getServices()
 
  return (
    <div>
      <Banner />
      <About />
    </div>
  );
};

export default HomePage;