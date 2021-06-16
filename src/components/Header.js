import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@material-ui/core';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tabletMatch = useMediaQuery('(max-width:1200px)');

  return (
    <Wrapper>
      <Logo></Logo>
      <Menu>
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

        <button onClick={() => setMenuOpen(true)} id={'menu-btn'}>
          Menu
        </button>
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
        <a href='#model-s'>Existing Inventory</a>
        <a href='#model-s'>Used Inventory</a>
        <a href='#model-s'>Trade-In</a>
        <a href='#model-s'>Cybertruck</a>
        <a href='#model-s'>Roadster</a>
        <a href='#model-s'>Semi</a>
        <a href='#model-s'>Charging</a>
        <a href='#model-s'>Powerwall</a>
        <a href='#model-s'>Commercial Energy</a>
        <a href='#model-s'>Utilities</a>
        <a href='#model-s'>Test Drive</a>
        <a href='#model-s'>Find Us</a>
        <a href='#model-s'>Support</a>
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
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  padding: 0 0 0 0.8rem;
  width: 12rem;
  height: 1.6rem;
`;

const Menu = styled.div`
  display: flex;
  margin-right: -10rem;

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
  margin-right: 0;

  button {
    padding: 0.8rem 1.5rem;
    background-color: none;
    border: none;
    border-radius: 10px;
    font-size: 1.6rem;
    color: #171a20;
    background: none;
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
