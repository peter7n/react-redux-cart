import { createSlice } from "@reduxjs/toolkit";

const initialShowState = {
	isCartShown: false
}

const showCartSlice = createSlice({
	name: 'show-cart',
	initialState: initialShowState,
	reducers: {
		show(state) {
			state.isCartShown = true;
		},
		hide(state) {
			state.isCartShown = false;
		}
	}
});

export const showCartActions = showCartSlice.actions;
export default showCartSlice.reducer;