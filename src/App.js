import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';

let isInitial = true;

function App() {
	const isCartShown = useSelector((state) => state.ui.isCartShown);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);
	const dispatch = useDispatch();

	useEffect(() => {

		if (isInitial) {
			isInitial = false;
			return;
		}

		dispatch(sendCartData(cart));

	}, [cart, dispatch]);

	return (
		<Fragment>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{isCartShown && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
