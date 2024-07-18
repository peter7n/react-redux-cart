import { createSlice } from "@reduxjs/toolkit";

const initialShowState = {
	isCartShown: false
}

const showCartSlice = createSlice({
	name: 'show-cart',
	initialState: initialShowState,
	reducers: {
		toggle(state) {
			state.isCartShown = !state.isCartShown
		}
	}
});

export const showCartActions = showCartSlice.actions;
export default showCartSlice.reducer;