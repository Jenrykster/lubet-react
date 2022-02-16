import { IoIosTrash } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { formatCurrency } from '@shared/utils';
import { deleteCartItem } from '@store/slices/cartSlice';
import { Aligned, P, Row } from '@components/SharedComponents';

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
  animation: pop 0.2s ease;
  svg {
    margin-left: 0;
    width: 3em;
    height: 3rem;
  }
  svg:hover {
    cursor: pointer;
  }

  @keyframes pop {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const CartItem = (props: {
  numbers: number[];
  gameType: string;
  price: number;
  color: string;
  id: number;
}) => {
  const dispatch = useDispatch();

  const onCartItemDelete = () => {
    Swal.fire({
      title: 'Are you sure ?',
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#dc3741',
      denyButtonText: 'Cancel',
      denyButtonColor: '#6e7881',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCartItem({ betId: props.id }));
      } else if (result.isDenied) {
        return;
      }
    });
  };

  return (
    <CartItemContainer>
      <IoIosTrash onClick={onCartItemDelete} />
      <CartDataContainer color={props.color}>
        <P>{props.numbers.join(', ')}</P>
        <Row>
          <h4>{props.gameType}</h4>
          <p>{formatCurrency(props.price)}</p>
        </Row>
      </CartDataContainer>
    </CartItemContainer>
  );
};

export default CartItem;
