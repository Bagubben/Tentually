import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	startDate: null,
}

export const startDateSlice = createSlice({
	name: 'startdate',
	initialState,
	reducers: {
		setStartDate: (state, payload) => {
			state.startDate = payload.payload

			return state
		},
	}
})

export const { setStartDate } = startDateSlice.actions

export default startDateSlice.reducer