import { configureStore } from "@reduxjs/toolkit";

import showCartReducer from './show-cart-slice';
import cartReducer from './cart-slice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		showCart: showCartReducer
	}
});

export default store;