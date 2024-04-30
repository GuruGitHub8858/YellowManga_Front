import React, { Fragment } from 'react';
import Wrapper from '../components/wrapper/Wrapper';
import Section from '../components/Section';
import { products, discoutProducts } from '../utils/products';
import SliderHome from '../components/Slider';
import useWindowScrollToTop from '../hooks/useWindowScrollToTop';
import Footer from '../components/Footer/Footer';

const Home = ({ mode, toggleColorMode }) => {
  const newArrivalData = products.filter(
    (item) => item.category === 'mobile' || item.category === 'wireless'
  );
  const bestSales = products.filter((item) => item.category === 'sofa');
  useWindowScrollToTop();

  return (
    <Fragment>
      {/* <button onClick={toggleColorMode}>Toggle Theme</button> Just an example */}
      <SliderHome />
      <Wrapper />
      <Section title="Big Discount" bgColor="#f6f9fc" productItems={discoutProducts} />
      <Section title="New Arrivals" bgColor="white" productItems={newArrivalData} />
      <Footer />
    </Fragment>
  );
};

export default Home;
