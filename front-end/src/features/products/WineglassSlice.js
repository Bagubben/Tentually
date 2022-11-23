import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	wineglassCount: 0,
}

export const wineglassSlice = createSlice({
	name: 'wineglass',
	initialState,
	reducers: {
		increase: (state) => {
			state.wineglassCount += 1
			return state
		},

		decrease: (state) => {
			state.wineglassCount -= 1
			return state
		},
	}
})

export const { increase, decrease } = wineglassSlice.actions

export default wineglassSlice.reducer