import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const Section = ({
  mobileBackgroundImg,
  backgroundImg,
  headline,
  subHeadline,
  id,
  singleBtn,
  leftBtnLabel,
  rightBtnLabel,
  footer,
  className,
  mobileHeader,
}) => {
  return (
    <Container
      backgroundImg={backgroundImg}
      mobileBackgroundImg={mobileBackgroundImg}
      id={id}>
      <TextGroup className={className}>
        <Headline mobileHeader={mobileHeader}>{headline}</Headline>
        <SubHeadline mobileHeader={mobileHeader}>{subHeadline}</SubHeadline>
      </TextGroup>
      <Wrap>
        <ButtonGroup>
          {singleBtn ? (
            <>
              <LeftButton black footer>
                {leftBtnLabel}
              </LeftButton>
            </>
          ) : (
            <>
              <LeftButton>{leftBtnLabel}</LeftButton>
              <RightButton>{rightBtnLabel}</RightButton>
            </>
          )}
        </ButtonGroup>
        <ArrowIcon id={id} icon={faChevronDown} size={'3x'} />
        {footer && <Footer />}
      </Wrap>
    </Container>
  );
};

export default Section;

const bounce = keyframes`
  0%, 30%, 50%, 80%, 100% {
    transform: translate(0,0);
  }

  40%, 90% {
      transform: translate(0, 5px)
  }

  15%, 65% {
    transform: translate(0, 10px)
  }
  

`;

const fadeUp = keyframes`
  0%, 65% {
    opacity: 0;
    transform: translate(0, 1.5rem);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const fadeIn = keyframes`
  0%, 75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideTogether = keyframes`
  0%, 80% {
    opacity: 0;
    margin: 0.8rem 2rem;
  }
  100% {
    opacity: 1;
    margin: 0.8rem;
  }
`;

const longFadeIn = keyframes`
  0%, 80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  0%, 80% {
    transform: translate(0, -2rem);
  }
  
  100% {
    transform: translate(0,1rem);
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  scroll-snap-align: start;
  ${'' /* transition: background 0.5s ease-in; */}

  @media (max-width: 600px) {
    background: url(${(props) => props.mobileBackgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const TextGroup = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

const Headline = styled.h1`
  font-size: 4rem;
  padding-bottom: 0.5rem;
  font-weight: 600;
  animation: ${fadeUp} 1.5s ease-in-out;

  ${(props) =>
    props.mobileHeader &&
    `font-size: 2.7rem; text-align: center; margin-left: 2rem; margin-right: 2rem;`}
`;

const SubHeadline = styled.p`
  font-size: 1.4rem;
  color: #5c5e62;
  animation: ${fadeIn} 2s ease-in;

  ${(props) =>
    props.mobileHeader &&
    `text-align: center; margin-left: 3rem; margin-right: 3rem;`}
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  height: 4rem;
  width: 26.5rem;
  background-color: ${(props) =>
    props.black ? `black` : `rgba(23, 26, 32, 0.8)`};
  opacity: 0.85;
  color: #fff;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 0.8rem;
  ${(props) => props.footer && `margin-bottom: 7rem;`}
  cursor: pointer;
  animation: ${slideTogether} 2s ease-in;
  transition: width 0.5s ease-in-out;

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  animation: ${bounce} 3s ease-in-out infinite 1.8s, ${longFadeIn} 2.4s ease-in,
    ${slideDown} 2.3s ease-in-out;
  color: #000;
  display: ${(props) => (props.id === 'accessories' ? `none` : `block`)};
`;
