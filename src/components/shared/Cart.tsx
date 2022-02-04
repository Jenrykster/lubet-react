import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CartItemType } from '../../store/slices/cartSlice';
import { RootState } from '../../store/store';
import CartItem from './CartItem';
import Column from './Primitives/Column';
import H1 from './Primitives/H1';
import TextButton, { TextButtonStyles } from './TextButton';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: snow;
  margin-top: 2rem;
  width: 25vw;
  height: 65vh;
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  border: #e2e2e2 1px solid;
  ${H1} {
    margin-left: 1rem;
    font-style: normal;
  }
  ${H1} b {
    font-style: italic;
  }
  ${TextButtonStyles} {
    justify-content: center;
    margin-bottom: -1rem;
    color: #27c383;
    background-color: #e2e2e2;
    width: calc(100% + 1.15rem);
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-left: -0.55rem;
    border-radius: 0px 0px 1rem 1rem;
  }
  ${H1}:last-of-type {
    padding-top: 1.5rem;
    margin-top: auto;
    margin-bottom: 0px;
  }
  ${Column} {
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #b5c40122;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #b5c401aa;
      border-radius: 10px;
    }
  }
`;

const Cart = () => {
  const gameTypes = useSelector((state: RootState) => state.games.types);
  const cartItems = useSelector((state: RootState) => state.cart.bets);
  const cartTotalPrice = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  const generateCartItems = (cartItems: CartItemType[]) => {
    return cartItems.map((cartItem) => {
      const gameType = gameTypes.find(
        (gameType) => gameType.id === cartItem.gameTypeId
      );
      return (
        <CartItem
          id={cartItem.id}
          key={cartItem.id}
          gameType={gameType?.type || ''}
          numbers={cartItem.numbers}
          price={cartItem.price}
          color={gameType?.color || 'black'}
        />
      );
    });
  };
  return (
    <CartContainer>
      <H1>
        <b>CART</b>
      </H1>
      <Column>{generateCartItems(cartItems)}</Column>
      <H1>
        <b>CART </b>
        TOTAL:{' '}
        {cartTotalPrice.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          style: 'currency',
          currency: 'BRL',
        })}
      </H1>
      <TextButton text='Save' arrow />
    </CartContainer>
  );
};

export default Cart;
