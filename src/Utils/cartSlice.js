import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: []
	},
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		removeItem: (state, action) => {
			state.items.pop()
		},
		clearCart: (state) => {
			state.items = [];
			//return { items: [] }
			//it will also work in redux toolkit. it says either mutate the exhisting state or return a new
		}
	}
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;