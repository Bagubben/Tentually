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

		partyclipReset: (state)  => {
			return {
				...state,
				partyclipsCount: initialState.partyclipsCount
			}
		}
	}
})

export const { increase, decrease, partyclipReset } = partyclipsSlice.actions

export default partyclipsSlice.reducer