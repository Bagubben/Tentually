import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	plateCount: 0,
}

export const plateSlice = createSlice({
	name: 'plate',
	initialState,
	reducers: {
		increase: (state) => {
			state.plateCount += 1
			return state
		},

		decrease: (state) => {
			state.plateCount -= 1
			return state
		},

		plateReset: (state)  => {
			return {
				...state,
				plateCount: initialState.plateCount
			}
		}
	}
})

export const { increase, decrease, plateReset } = plateSlice.actions

export default plateSlice.reducer