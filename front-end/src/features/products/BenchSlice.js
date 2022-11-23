import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	benchCount: 0,
}

export const benchSlice = createSlice({
	name: 'bench',
	initialState,
	reducers: {
		increase: (state) => {
			state.benchCount += 1
			return state
		},

		decrease: (state) => {
			state.benchCount -= 1
			return state
		},
	}
})

export const { increase, decrease } = benchSlice.actions

export default benchSlice.reducer