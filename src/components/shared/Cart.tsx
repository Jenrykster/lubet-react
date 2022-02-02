import styled from 'styled-components';
import CartItem from './CartItem';
import Column from './Primitives/Column';
import H1 from './Primitives/H1';
import TextButton, { TextButtonStyles } from './TextButton';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: snow;
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  border: #e2e2e2 1px solid;
  height: 50vh;
  ${H1} {
    margin-left: 1rem;
  }
  ${TextButtonStyles} {
    justify-content: center;
    margin-top: auto;
    margin-bottom: -1rem;
    color: #27c383;
    background-color: #e2e2e2;
    width: calc(100% + 1.15rem);
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-left: -0.55rem;
    border-radius: 0px 0px 1rem 1rem;
  }
`;

const Cart = () => {
  return (
    <CartContainer>
      <H1>
        <b>CART</b>
      </H1>
      <Column>
        <CartItem />
      </Column>
      <TextButton text='Save' arrow />
    </CartContainer>
  );
};

export default Cart;
