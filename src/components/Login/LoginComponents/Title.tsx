import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div`
  font-size: 2rem;
  font-style: italic;

  text-align: center;

  h1,
  h2 {
    margin: 1.5rem;
  }

  h3 {
    background-color: #b5c401;
    color: snow;
    border-radius: 20px;
    font-size: 1.3rem;
    width: 100px;
    margin: 0px auto;
    padding: 5px 10px;
  }

  @media (max-width: 700px) {
    display: flex;
    font-size: 1rem;
    align-items: center;
    h3 {
      height: fit-content;
      width: fit-content;
      font-size: 1rem;
    }
  }
`;
const Title: React.FC = () => {
  return (
    <TitleStyle>
      <h2>
        The <br />
        Greatest <br />
        App
      </h2>
      <h3>for</h3>
      <h1>LOTTERY</h1>
    </TitleStyle>
  );
};
export default Title;
