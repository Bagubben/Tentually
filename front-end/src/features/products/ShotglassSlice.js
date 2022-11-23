import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	shotglassCount: 0,
}

export const shotglassSlice = createSlice({
	name: 'shotglass',
	initialState,
	reducers: {
		increase: (state) => {
			state.shotglassCount += 1
			return state
		},

		decrease: (state) => {
			state.shotglassCount -= 1
			return state
		},
	}
})

export const { increase, decrease } = shotglassSlice.actions

export default shotglassSlice.reducer