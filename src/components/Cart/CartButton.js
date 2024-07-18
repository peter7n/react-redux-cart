import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { showCartActions } from '../../store/show-cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => state.cart.totalItems);
  
  const clickHandler = () => {
    dispatch(showCartActions.toggle());
  }

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
