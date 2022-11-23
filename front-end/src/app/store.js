import { configureStore } from '@reduxjs/toolkit'
import tentReducer from '../features/products/TentSlice'
import tableReducer from '../features/products/TableSlice'
import benchReducer from '../features/products/BenchSlice'
import plateReducer from '../features/products/PlateSlice'
import cutleryReducer from '../features/products/CutlerySlice'
import partyclipsReducer from '../features/products/PartyclipsSlice'
import champagneglassReducer from '../features/products/ChampagneglassSlice'
import wineglassReducer from '../features/products/WineglassSlice'
import shotglassReducer from '../features/products/ShotglassSlice'
import routerReducer from '../features/products/RouterSlice'


export const store = configureStore({
	reducer: {
		tent: tentReducer,
		table: tableReducer,
		bench: benchReducer,
		plate: plateReducer,
		cutlery: cutleryReducer,
		partyclips: partyclipsReducer,
		champagneglass: champagneglassReducer,
		wineglass: wineglassReducer,
		shotglass: shotglassReducer,
		router: routerReducer,
	},
})