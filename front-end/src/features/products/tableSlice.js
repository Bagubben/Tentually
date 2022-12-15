import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	tableCount: 0,
}

export const tableSlice = createSlice({
	name: 'table',
	initialState,
	reducers: {
		increase: (state) => {
			state.tableCount += 1
			return state
		},

		decrease: (state) => {
			state.tableCount -= 1
			return state
		},

		tableReset: (state)  => {
			return {
				...state,
				tableCount: initialState.tableCount
			}
		}
	}
})

export const { increase, decrease, tableReset } = tableSlice.actions

export default tableSlice.reducer