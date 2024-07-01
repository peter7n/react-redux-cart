import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
	items: [
		{
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
			const existingItemIndex = state.items.findIndex((item) => item.title === newItem.title);
			const existingItem = state.items[existingItemIndex];
			if (existingItem) {
				const updatedItem = {
					...existingItem,
					quantity: existingItem.quantity + newItem.quantity,
					total: existingItem.total + newItem.total
				}
				state.items[existingItemIndex] = updatedItem;
			} else {
				state.items = [ ...state.items, newItem ];
			}
			state.totalAmount += newItem.total;
			state.totalItems += newItem.quantity
		},
		remove(state, action) {
			const newItem = action.payload;
			const existingItemIndex = state.items.findIndex((item) => item.title === newItem.title);
			const existingItem = state.items[existingItemIndex];
			if (existingItem) {
				if (existingItem.quantity > 1) {
					const updatedItem = {
						...existingItem,
						quantity: existingItem.quantity - newItem.quantity,
						total: existingItem.total - newItem.total
					}
					state.items[existingItemIndex] = updatedItem;
				} else {
					state.items.splice(existingItemIndex, 1);
				}
			}
			state.totalAmount -= newItem.total;
			state.totalItems -= newItem.quantity;
		}
	}
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;