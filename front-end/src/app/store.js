import { configureStore } from '@reduxjs/toolkit'
import tentReducer from '../features/products/tentSlice'

export const store = configureStore({
	reducer: {
		tent: tentReducer,
	},
})