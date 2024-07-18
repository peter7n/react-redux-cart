import { createSlice } from "@reduxjs/toolkit";

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

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;