import React, { useEffect, useState } from 'react';
import Header from './Header';
import Section from './Section';
import ModelS from '../images/model-s.jpg';
import ModelSMobile from '../images/mS-mobile.jpeg';
import ModelThree from '../images/model-3.jpg';
import ModelThreeMobile from '../images/m3-mobile.jpeg';
import ModelX from '../images/model-x.jpg';
import ModelXMobile from '../images/mX-mobile.jpeg';
import ModelY from '../images/model-y.jpg';
import ModelYMobile from '../images/mY-mobile.jpeg';
import SolarPanels from '../images/solar-panel.jpg';
import SolarPanelsMobile from '../images/sp-mobile.jpeg';
import SolarRoof from '../images/solar-roof.jpg';
import SolarRoofMobile from '../images/sr-mobile.jpeg';
import Accessories from '../images/accessories.jpg';
import AccessoriesMobile from '../images/accessories-mobile.jpeg';
import styled from 'styled-components';
import { useMediaQuery } from '@material-ui/core';

const Home = () => {
  const mobileMatch = useMediaQuery('max-width:500px');

  const [browserWindow, setBrowserWindow] = useState(
    `${document.documentElement.clientHeight}px`
  );

  useEffect(() => {
    let target = document.querySelectorAll('.fade');
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.replace('fadeOut', 'fadeIn');
        } else {
          entry.target.classList.replace('fadeIn', 'fadeOut');
        }
      });
    });
    target.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setBrowserWindow(`${document.documentElement.clientHeight}px`);
      if (mobileMatch) {
        document.body.style.height = browserWindow;
      }
    }); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (mobileMatch) {
      document.body.style.height = browserWindow;
    }
  }, [browserWindow, mobileMatch]);

  return (
    <Wrapper>
      <Header />
      <Section
        id='model-s'
        backgroundImg={ModelS}
        mobileBackgroundImg={ModelSMobile}
        headline={'Model S'}
        subHeadline={[
          'Order online for ',
          <span className={'subHeadlineSpan'}>touchless delivery</span>,
        ]}
        leftBtnLabel={'Custom Order'}
        rightBtnLabel={'Existing Inventory'}
        className={'fade fadeOut'}
      />
      <Section
        id='model-y'
        backgroundImg={ModelY}
        mobileBackgroundImg={ModelYMobile}
        headline={'Model Y'}
        subHeadline={[
          'Order online for ',
          <span className={'subHeadlineSpan'}>touchless delivery</span>,
        ]}
        leftBtnLabel={'Custom Order'}
        rightBtnLabel={'Existing Inventory'}
        className={'fade fadeOut'}
      />
      <Section
        id='model-3'
        backgroundImg={ModelThree}
        mobileBackgroundImg={ModelThreeMobile}
        headline={'Model 3'}
        subHeadline={[
          'Order online for ',
          <span className={'subHeadlineSpan'}>touchless delivery</span>,
        ]}
        leftBtnLabel={'Custom Order'}
        rightBtnLabel={'Existing Inventory'}
        className={'fade fadeOut'}
      />
      <Section
        id='model-x'
        backgroundImg={ModelX}
        mobileBackgroundImg={ModelXMobile}
        headline={'Model X'}
        subHeadline={[
          'Order online for ',
          <span className={'subHeadlineSpan'}>touchless delivery</span>,
        ]}
        leftBtnLabel={'Custom Order'}
        rightBtnLabel={'Existing Inventory'}
        className={'fade fadeOut'}
      />

      <Section
        id='solar-panels'
        backgroundImg={SolarPanels}
        mobileBackgroundImg={SolarPanelsMobile}
        headline={'Lowest Cost Solar Panels in America'}
        subHeadline={'Money-back guarantee'}
        leftBtnLabel={'Order Now'}
        rightBtnLabel={'Learn More'}
        className={'fade fadeOut'}
        mobileHeader={mobileMatch}
      />
      <Section
        id='solar-roof'
        backgroundImg={SolarRoof}
        mobileBackgroundImg={SolarRoofMobile}
        headline={'Solar for New Roofs'}
        subHeadline={'Solar roof costs less than a new roof plus solar panels'}
        leftBtnLabel={'Order Now'}
        rightBtnLabel={'Learn More'}
        className={'fade fadeOut'}
        mobileHeader={mobileMatch}
      />
      <Section
        id='accessories'
        backgroundImg={Accessories}
        mobileBackgroundImg={AccessoriesMobile}
        headline={'Accessories'}
        singleBtn={true}
        leftBtnLabel={'Shop Now'}
        footer={true}
        className={'fade fadeOut'}
      />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;
