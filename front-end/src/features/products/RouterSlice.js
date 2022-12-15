import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	routerCount: 0,
}

export const routerSlice = createSlice({
	name: 'router',
	initialState,
	reducers: {
		increase: (state) => {
			state.routerCount += 1
			return state
		},

		decrease: (state) => {
			state.routerCount -= 1
			return state
		},

		routerReset: (state)  => {
			return {
				...state,
				routerCount: initialState.routerCount
			}
		}
	}
})

export const { increase, decrease, routerReset } = routerSlice.actions

export default routerSlice.reducer