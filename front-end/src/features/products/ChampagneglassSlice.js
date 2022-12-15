import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	champagneglassCount: 0,
}

export const champagneglassSlice = createSlice({
	name: 'champagneglass',
	initialState,
	reducers: {
		increase: (state) => {
			state.champagneglassCount += 1
			return state
		},

		decrease: (state) => {
			state.champagneglassCount -= 1
			return state
		},

		champagneglassReset: (state)  => {
			return {
				...state,
				champagneglassCount: initialState.champagneglassCount
			}
		}
	}
})

export const { increase, decrease, champagneglassReset } = champagneglassSlice.actions

export default champagneglassSlice.reducer