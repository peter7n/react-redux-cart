import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const cartContents = useSelector((state) => state.cart.items);
	const totalAmount = useSelector((state) => state.cart.totalAmount);

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartContents.map((item) => (
					<CartItem
						key={item.id}
						item={{
							id: item.id,
							title: item.title,
							quantity: item.quantity,
							total: item.total,
							price: item.price,
						}}
					/>
				))}
			</ul>
			Total: ${totalAmount.toFixed(2)}
		</Card>
	);
};

export default Cart;
