import styled from 'styled-components';
import { Aligned, Button } from '@components/SharedComponents';
import { IoMdCart } from 'react-icons/io';

export const CartButton = styled(Button)`
  padding: 0.5rem 2rem;
  background-color: #27c383;
  color: snow;
  text-align: center;
  margin-left: auto;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 2rem;
  }

  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

const AddToCartButton = (props: { onClick: () => void }) => {
  return (
    <CartButton onClick={props.onClick}>
      <Aligned>
        <IoMdCart />
        Add to cart
      </Aligned>
    </CartButton>
  );
};

export default AddToCartButton;
