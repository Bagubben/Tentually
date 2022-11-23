import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	routerCount: 0,
}

export const routerSlice = createSlice({
	name: 'router',
	initialState,
	reducers: {
		increase: (state) => {
			state.routerCount += 1
			return state
		},

		decrease: (state) => {
			state.routerCount -= 1
			return state
		},
	}
})

export const { increase, decrease } = routerSlice.actions

export default routerSlice.reducer