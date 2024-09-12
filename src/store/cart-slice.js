import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialCartState = {
	items: [
		{
			id: 'p1',
			title: 'hamburger',
			price: 5.00,
			quantity: 1,
			total: 5.00
		}
	],
	totalAmount: 5.00,
	totalItems: 1
}

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		add(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			if (existingItem) {
				existingItem.quantity++;
				existingItem.total += newItem.price;
			} else {
				state.items.push({
					id: newItem.id,
					title: newItem.title,
					price: newItem.price,
					quantity: 1,
					total: newItem.price
				})
			}
			state.totalAmount += newItem.price;
			state.totalItems++;
		},
		remove(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem.quantity > 1) {
				existingItem.quantity--;
				existingItem.total -= existingItem.price;
			} else {
				state.items = state.items.filter((item) => item.id !== id);
			}
			state.totalAmount -= existingItem.price;
			state.totalItems--;
		}
	}
});

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data!',
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				'https://react-redux-project-3db43-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify(cart),
				}
			);
	
			if (!response.ok) {
				throw new Error('Sending cart data failed.');
			}
		}

		try {
			await sendRequest();
			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success!',
					message: 'Sent cart data successfully!',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Sending cart data failed!',
				})
			);
		}
	}
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;