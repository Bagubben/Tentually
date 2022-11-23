import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cutleryCount: 0,
}

export const cutlerySlice = createSlice({
	name: 'cutlery',
	initialState,
	reducers: {
		increase: (state) => {
			state.cutleryCount += 1
			return state
		},

		decrease: (state) => {
			state.cutleryCount -= 1
			return state
		},
	}
})

export const { increase, decrease } = cutlerySlice.actions

export default cutlerySlice.reducer