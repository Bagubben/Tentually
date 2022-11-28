import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	endDate: null,
}

export const endDateSlice = createSlice({
	name: 'enddate',
	initialState,
	reducers: {
		setEndDate: (state, payload) => {
			state.endDate = payload.payload

			return state
		},
	}
})

export const { setEndDate } = endDateSlice.actions

export default endDateSlice.reducer