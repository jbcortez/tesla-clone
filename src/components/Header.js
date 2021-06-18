import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/tesla-wordmark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@material-ui/core';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // eslint-disable-next-line
  const [primaryLinks, setPrimaryLinks] = useState([
    'Model S',
    'Model 3',
    'Model X',
    'Model Y',
    'Solar Roof',
    'Solar Panels',
  ]);
  // eslint-disable-next-line
  const [HiddenMenuLinks, setHiddenMenuLinks] = useState([
    {
      title: 'Existing Inventory',
      url: '#model-s',
    },
    {
      title: 'Used Inventory',
      url: '#model-s',
    },
    {
      title: 'Trade-In',
      url: '#model-s',
    },
    {
      title: 'Cybertruck',
      url: '#model-s',
    },
    {
      title: 'Roadster',
      url: '#model-s',
    },
    {
      title: 'Semi',
      url: '#model-s',
    },
    {
      title: 'Charging',
      url: '#model-s',
    },
    {
      title: 'Powerwall',
      url: '#model-s',
    },
    {
      title: 'Commercial Energy',
      url: '#model-s',
    },
    {
      title: 'Utilities',
      url: '#model-s',
    },
    {
      title: 'Test Drive',
      url: '#model-s',
    },
  ]);
  const tabletMatch = useMediaQuery('(max-width:1200px)');

  return (
    <Wrapper>
      <BackgroundBlur menuOpen={menuOpen}></BackgroundBlur>
      <Logo></Logo>
      <Menu>
        {primaryLinks.map((link, i) => {
          return (
            <a key={i} href={link.url} onClick={() => setMenuOpen(false)}>
              {link.title}
            </a>
          );
        })}
        <a href='#model-s'>Model S</a>
        <a href='#model-3'>Model 3</a>
        <a href='#model-x'>Model X</a>
        <a href='#model-y'>Model Y</a>
        <a href='#solar-roof'>Solar Roof</a>
        <a href='#solar-panels'>Solar Panels</a>
      </Menu>
      <RightMenu>
        {!tabletMatch && (
          <>
            <a href='#model-s'>Shop</a>
            <a href='#model-s'>Account</a>
          </>
        )}

        <span onClick={() => setMenuOpen(true)} id={'menu-btn'}>
          Menu
        </span>
      </RightMenu>
      <HiddenMenu menuOpen={menuOpen}>
        <CloseIcon
          icon={faTimes}
          size={'3x'}
          onClick={() => setMenuOpen(false)}></CloseIcon>
        {tabletMatch && (
          <>
            <a onClick={() => setMenuOpen(false)} href='#model-s'>
              Model S
            </a>
            <a onClick={() => setMenuOpen(false)} href='#model-3'>
              Model 3
            </a>
            <a onClick={() => setMenuOpen(false)} href='#model-x'>
              Model X
            </a>
            <a onClick={() => setMenuOpen(false)} href='#model-y'>
              Model Y
            </a>
            <a onClick={() => setMenuOpen(false)} href='#solar-roof'>
              Solar Roof
            </a>
            <a onClick={() => setMenuOpen(false)} href='#solar-panels'>
              Solar Panels
            </a>
          </>
        )}
        {HiddenMenuLinks.map((link, i) => {
          return (
            <a key={i} href={link.url}>
              {link.title}
            </a>
          );
        })}
        {tabletMatch && (
          <>
            <a href='#model-s'>Shop</a>
            <a href='#model-s'>Account</a>
          </>
        )}
      </HiddenMenu>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  min-height: 5.4rem;
  padding: 0.8rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  @media (min-width: 1200px) {
    padding: 0.8rem 4rem;
  }
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  padding: 0 0 0 0.8rem;
  width: 120px;
  height: 16px;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Menu = styled.div`
  display: flex;

  a {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 0.8rem 1.5rem;
    color: #171a20;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s ease-in;

    &:hover {
      background: rgb(0 0 0 / 5%);
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled(Menu)`
  span#menu-btn {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 0.8rem 1.5rem;
    color: #171a20;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s ease-in;

    &:hover {
      background: rgb(0 0 0 / 5%);
    }
  }

  a {
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    transition: background-color 0.3s ease-in;

    &:hover {
      background: rgb(0 0 0 / 6%);
    }
  }

  @media (max-width: 1200px) {
    display: flex;

    #menu-btn {
      background: rgb(0 0 0 / 6%);
      font-size: 1.3rem;
      letter-spacing: 0.5px;
    }
  }
`;

const HiddenMenu = styled.div`
  width: 40rem;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 4px 32px 0 rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8rem 3rem;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  ${(props) =>
    props.menuOpen
      ? `transform : translate(0, 0);`
      : `transform: translate(40rem, 0);`}

  a {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1rem 2rem;
    cursor: pointer;
    width: 100%;
    transition: background-color 1s ease-in;
    border-radius: 15px;

    &:hover {
      background-color: #f4f4f4;
    }
  }

  @media (max-width: 500px) {
    width: 85vw;
    overflow-y: scroll;
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: black;
  position: absolute;
  top: 3rem;
  right: 3rem;
  cursor: pointer;

  @media (max-width: 1000px) {
    position: fixed;
  }
`;

const BackgroundBlur = styled.div`
  position: fixed;
  display: ${(props) => !props.menuOpen && 'none'};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  background-color: #222;
  opacity: 0.3;
  transition: backdrop-filter 0.5s ease, -webkit-backdrop-filter 0.5s ease;
`;
