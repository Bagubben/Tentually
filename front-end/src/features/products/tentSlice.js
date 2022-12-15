import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	tentCount: 0,
}

export const tentSlice = createSlice({
	name: 'tent',
	initialState,
	reducers: {
		increase: (state) => {
			state.tentCount += 1
			return state
		},

		decrease: (state) => {
			state.tentCount -= 1
			return state
		},

		tentReset: (state)  => {
			return {
				...state,
				tentCount: initialState.tentCount
			}
		}
	}
})

export const { increase, decrease, tentReset } = tentSlice.actions

export default tentSlice.reducer