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
	}
})

export const { increase, decrease } = tableSlice.actions

export default tableSlice.reducer