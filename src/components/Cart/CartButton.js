import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { showCartActions } from '../../store/show-cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const isCartShown = useSelector(state => state.showCart.isCartShown);
  const totalItems = useSelector(state => state.cart.totalItems);
  
  const clickHandler = () => {
    if (isCartShown) {
      dispatch(showCartActions.hide());
    } else {
      dispatch(showCartActions.show());
    }
  }

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
