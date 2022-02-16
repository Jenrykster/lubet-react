import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { postBets } from '@shared/services';
import { formatCurrency } from '@shared/utils';
import { CartItemType, clearCart } from '@store/slices/cartSlice';
import { RootState } from '@store/store';
import { Column, H1, TextButton } from '@components/SharedComponents';
import { Backdrop, CartContainer, ShowCartButton } from './styles';
import { CartItem, EmptyCartMessage } from './SubComponents';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameTypes = useSelector((state: RootState) => state.games.types);
  const cartItems = useSelector((state: RootState) => state.cart.bets);
  const [showCart, setShowCart] = useState(true);
  const minimumCartPrice = useSelector(
    (state: RootState) => state.games.minCartValue
  );
  const cartTotalPrice = useSelector(
    (state: RootState) => state.cart.totalPrice
  );
  const scrollableColumnRef = useRef<HTMLDivElement>(null);

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

  const saveBets = async () => {
    if (cartTotalPrice < 30) {
      Swal.fire(
        'Add more bets to your cart',
        `The minimum cart price is ${formatCurrency(minimumCartPrice)}`,
        'error'
      );
    } else {
      const mappedCartItems = cartItems.map((cartItem) => {
        return { game_id: cartItem.gameTypeId, numbers: cartItem.numbers };
      });
      const response = await postBets(mappedCartItems);
      if ('status' in response && response.status === 200) {
        dispatch(clearCart());
        Swal.fire(
          'Saved !',
          'Your bets were saved with success',
          'success'
        ).then(() => {
          navigate('/games');
        });
      } else {
        Swal.fire(
          'Sorry !',
          'There was an error while saving your bets',
          'error'
        );
      }
    }
  };

  useEffect(() => {
    if (scrollableColumnRef.current) {
      scrollableColumnRef.current.scrollTop =
        scrollableColumnRef.current?.scrollHeight;
    }
  }, [cartItems]);

  return (
    <React.Fragment>
      {!showCart && <Backdrop />}
      <ShowCartButton
        onClick={() => {
          setShowCart((prev) => !prev);
        }}
      >
        <MdOutlineShoppingCart />
      </ShowCartButton>
      <CartContainer hidden={showCart}>
        <H1>
          <b>CART</b>
        </H1>
        {cartItems.length > 0 && (
          <Column ref={scrollableColumnRef}>
            {generateCartItems(cartItems)}
          </Column>
        )}
        {cartItems.length === 0 && <EmptyCartMessage />}
        <H1>
          <b>CART </b>
          TOTAL:{' '}
          <span data-cy='curr-cart-value'>
            {formatCurrency(cartTotalPrice)}
          </span>
        </H1>
        <TextButton data-cy='save-btn' onClick={saveBets} text='Save' arrow />
      </CartContainer>
    </React.Fragment>
  );
};

export default Cart;
