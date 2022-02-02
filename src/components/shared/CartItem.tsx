import { IoIosTrash } from 'react-icons/io';
import styled from 'styled-components';
import Aligned from './Primitives/Aligned';
import P from './Primitives/P';
import Row from './Primitives/Row';

const CartDataContainer = styled.div`
  border-left: 4px solid #7f3992;
  border-radius: 5px;
  padding-left: 10px;

  ${P} {
    margin-bottom: 0;
    font-weight: 800;
    color: #868686;
  }
  h4 {
    color: #7f3992;
    font-style: italic;
    font-weight: 800;
    margin-right: 1rem;
  }
  ${Row} {
    margin-top: -10px;
    align-items: center;
  }
`;

const CartItemContainer = styled(Aligned)`
  svg {
    margin-left: 0;
    width: 2rem;
    height: 2rem;
  }
`;

const CartItem = () => {
  return (
    <CartItemContainer>
      <IoIosTrash />
      <CartDataContainer>
        <P>01,02,03,04,05,06,07,08,09...</P>
        <Row>
          <h4>Lotofácil</h4>
          <p>R$2,50</p>
        </Row>
      </CartDataContainer>
    </CartItemContainer>
  );
};

export default CartItem;
