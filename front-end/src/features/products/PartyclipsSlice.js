import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	partyclipsCount: 0,
}

export const partyclipsSlice = createSlice({
	name: 'partyclips',
	initialState,
	reducers: {
		increase: (state) => {
			state.partyclipsCount += 1
			return state
		},

		decrease: (state) => {
			state.partyclipsCount -= 1
			return state
		},
	}
})

export const { increase, decrease } = partyclipsSlice.actions

export default partyclipsSlice.reducer