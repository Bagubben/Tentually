import { Routes, Route } from 'react-router-dom'
// import CalenderPage from './pages/CalenderPage'
// import ConfirmPage from './pages/ConfirmPage'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'
import './assets/scss/App.scss'

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={ <LandingPage />} />
				<Route path="/produkter" element={ <ProductsPage />} />
				{/* <Route path="/kalender" element={ <CalenderPage />} /> */}
				{/* <Route path="/bekräfta" element={ <ConfirmPage />} /> */}
			</Routes>
		</div>
	)
}

export default App
