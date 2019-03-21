import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  color: tomato;
  ${props => {
    const { happy } = props;
    return `
      background: ${happy};
    `;
  }};
`;

const About = () => {
  return (
    <StyledAbout happy={'blue'}>
      This is a free commercial site &#9829;
    </StyledAbout>
  );
};


export default About;
