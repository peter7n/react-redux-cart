import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
	isCartShown: false,
	notification: null
}

const uiSlice = createSlice({
	name: 'ui',
	initialState: initialUiState,
	reducers: {
		toggle(state) {
			state.isCartShown = !state.isCartShown
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message
			};
		}
	}
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;