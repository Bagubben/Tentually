import { Routes, Route } from 'react-router-dom'
import CalendarPage from './pages/CalendarPage'
import ConfirmBookingPage from './pages/ConfirmBookingPage'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'
import './assets/scss/App.scss'

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={ <LandingPage />} />
				<Route path="/produkter" element={ <ProductsPage />} />
				<Route path="/kalender" element={ <CalendarPage />} />
				<Route path="/bekräfta" element={ <ConfirmBookingPage />} />
			</Routes>
		</div>
	)
}

export default App
