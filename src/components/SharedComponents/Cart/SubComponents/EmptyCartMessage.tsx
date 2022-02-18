import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import styled from 'styled-components';

const CartMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;
const emptyCartMessage = () => {
  return (
    <CartMessage>
      <MdOutlineRemoveShoppingCart />
      <p>There are no items in your cart !</p>
    </CartMessage>
  );
};

export default emptyCartMessage;
