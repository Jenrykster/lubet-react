import { IoIosTrash } from 'react-icons/io';
import styled from 'styled-components';
import Aligned from './Primitives/Aligned';
import P from './Primitives/P';
import Row from './Primitives/Row';

const CartDataContainer = styled.div`
  border-left: 4px solid ${(props) => props.color};
  border-radius: 5px;
  padding-left: 10px;

  margin: 10px auto;
  width: 100%;
  height: fit-content;

  ${P} {
    margin-bottom: 0;
    font-weight: 800;
    width: 100%;
    white-space: normal;
    color: #868686;
  }
  h4 {
    color: ${(props) => props.color};
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
    width: 3em;
    height: 3rem;
  }
  svg:hover {
    cursor: pointer;
  }
`;

const CartItem = (props: {
  numbers: number[];
  gameType: string;
  price: number;
  color: string;
}) => {
  return (
    <CartItemContainer>
      <IoIosTrash />
      <CartDataContainer color={props.color}>
        <P>{props.numbers.join(', ')}</P>
        <Row>
          <h4>{props.gameType}</h4>
          <p>
            {props.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </Row>
      </CartDataContainer>
    </CartItemContainer>
  );
};

export default CartItem;
