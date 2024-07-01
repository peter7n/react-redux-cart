import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { showCartActions } from '../../store/show-cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const isCartShown = useSelector(state => state.showCart.isCartShown);
  
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
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
