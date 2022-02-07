import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { addToCart } from '../../../store/slices/cartSlice';
import { RootState } from '../../../store/store';
import Cart, { CartContainer } from '../../shared/Cart';
import GameSelector from '../../shared/GameSelector';
import Button from '../../shared/Primitives/Button';
import H1 from '../../shared/Primitives/H1';
import Row from '../../shared/Primitives/Row';
import SelectorButton from '../../shared/SelectorButton';
import AddToCartButton from './AddToCartButton';
import NumberGrid from './NumberGrid';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: center;

    ${Row} {
      margin-top: 0.3rem;
      justify-content: center;

      ${Button}:first-child {
        margin-right: 0rem;
      }
    }
  }
`;
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

  @media (max-width: 700px) {
    padding: 0.5rem 1rem;
    width: 93vw;
    text-align: center;
    ${Row} {
      width: 100%;
    }
    ${Button} {
      font-size: 0.7rem;
    }
    ${SelectorButton} {
      margin: auto;
    }
  }
`;
const NewBetContainer = styled.div`
  display: flex;
  ${CartContainer} {
    margin-top: 2rem;
  }
`;

const Main = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const selectedGame = useSelector(
    (state: RootState) => state.games.selectedGame
  );
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  useEffect(() => {
    setSelectedNumbers([]);
  }, [selectedGame]);

  const numberSelectHandler = (selectedNumber: number) => {
    if (
      selectedNumbers.length < (selectedGame?.max_number || 0) ||
      selectedNumbers.includes(selectedNumber)
    ) {
      setSelectedNumbers((prev) => {
        if (prev.includes(selectedNumber)) {
          return prev.filter((n) => n !== selectedNumber);
        } else {
          return [...prev, selectedNumber];
        }
      });
    } else {
      Swal.fire(
        "You can't add more numbers!",
        `The maximum amount of numbers in this game is ${selectedGame?.max_number}`,
        'warning'
      );
    }
  };

  const clearNumbers = () => {
    setSelectedNumbers([]);
  };

  const generateRandomNumbers = () => {
    if (selectedGame) {
      let generatedNumbers: number[] = [];
      if (selectedNumbers.length > 0) {
        generatedNumbers = [...selectedNumbers];
      }
      for (let i = generatedNumbers.length; i < selectedGame?.max_number; i++) {
        let randomNumber = Math.floor(Math.random() * selectedGame.range);

        while (generatedNumbers.includes(randomNumber) || randomNumber === 0) {
          randomNumber = Math.floor(Math.random() * selectedGame.range);
        }

        generatedNumbers.push(randomNumber);
      }
      setSelectedNumbers(generatedNumbers);
    }
  };
  const addSelectedNumbersToCart = (numbers: number[]) => {
    if (selectedNumbers.length < (selectedGame?.max_number || 0)) {
      Swal.fire(
        'Add more numbers',
        `You need to add ${
          selectedGame && selectedGame.max_number - selectedNumbers.length
        } more numbers to make a ${selectedGame && selectedGame.type} bet`,
        'warning'
      );
      return;
    }
    const isRepeated = cart.bets.some(
      (cartItem) =>
        cartItem.numbers.toString() === numbers.toString() &&
        cartItem.gameTypeId === selectedGame?.id
    );
    if (isRepeated) {
      Swal.fire(
        'Duplicated game!',
        "There's already an identical game in your cart",
        'warning'
      );
      return;
    }
    if (selectedGame) {
      dispatch(
        addToCart({
          numbers,
          gameId: selectedGame.id,
          price: selectedGame.price,
        })
      );
      clearNumbers();
    }
  };
  return (
    <NewBetContainer>
      <StyledMain>
        <H1>
          <b>NEW BET </b>
          FOR {selectedGame?.type.toUpperCase()}
        </H1>
        <BoldP>Choose a game</BoldP>
        <GameSelector required />
        <BoldP>Fill your bet</BoldP>
        <GameDescription>{selectedGame?.description}</GameDescription>
        <NumberGrid
          onNumberSelect={numberSelectHandler}
          selectedNumbers={selectedNumbers}
          color={selectedGame?.color || 'black'}
          range={selectedGame?.range || 36}
        />
        <ButtonContainer>
          <Row>
            <Button onClick={generateRandomNumbers}>Complete Game</Button>
            <Button onClick={clearNumbers}>Clear Game</Button>
          </Row>
          <AddToCartButton
            onClick={() => addSelectedNumbersToCart(selectedNumbers)}
          />
        </ButtonContainer>
      </StyledMain>
      <Cart />
    </NewBetContainer>
  );
};

export default Main;
