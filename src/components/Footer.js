import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from '@material-ui/core';

const Footer = () => {
  const mobileMatch = useMediaQuery('(max-width:600px)');

  return (
    <Wrap>
      <LinksList>
        <Link>Tesla &copy; 2021</Link>
        <Link>Privacy and Legal</Link>
        {!mobileMatch && (
          <>
            <Link>Contact</Link>
            <Link>Careers</Link>
            <Link>Get Newsletter</Link>
          </>
        )}

        <Link>News</Link>
        {!mobileMatch && (
          <>
            <Link>Forums</Link>
            <Link>Locations</Link>
          </>
        )}
      </LinksList>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinksList = styled.ul`
  display: flex;

  li {
    list-style: none;
    padding: 0 1rem;
    font-size: 1.2rem;
    color: #777;
    @media (max-width: 600px) {
      padding: 0.3rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Link = styled.li``;
