import React from 'react';
import styled from 'styled-components';
import Cart, { CartContainer } from '../../shared/Cart';
import GameSelector from '../../shared/GameSelector';
import Button from '../../shared/Primitives/Button';
import H1 from '../../shared/Primitives/H1';
import Row from '../../shared/Primitives/Row';
import AddToCartButton from './AddToCartButton';
import NumberGrid from './NumberGrid';

const GameDescription = styled.p`
  font-size: 0.8em;
  font-style: italic;
  color: #868686;
  margin-top: -1.3rem;
`;
const BoldP = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 1.5rem auto;
  color: #868686;
  font-style: italic;
`;
const StyledMain = styled.main`
  padding: 2rem 6rem;
  width: 55vw;
  ${Button}:first-child {
    margin-right: 1rem;
  }
  ${Row} {
    width: 90%;
  }
`;
const NewBetContainer = styled.div`
  display: flex;
  ${CartContainer} {
    margin-top: 2rem;
  }
`;

const Main = () => {
  return (
    <NewBetContainer>
      <StyledMain>
        <H1>
          <b>NEW BET </b>
          FOR MEGA-SENA
        </H1>
        <BoldP>Choose a game</BoldP>
        <GameSelector />
        <BoldP>Fill your bet</BoldP>
        <GameDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          repellendus tempore ipsum adipisci a, nemo saepe maxime. Ab culpa esse
          sit, neque, exercitationem quis quos vitae ipsum placeat deserunt
          iste.
        </GameDescription>
        <NumberGrid />
        <Row>
          <Row>
            <Button>Complete Game</Button>
            <Button>Clear Game</Button>
          </Row>
          <AddToCartButton />
        </Row>
      </StyledMain>
      <Cart />
    </NewBetContainer>
  );
};

export default Main;
