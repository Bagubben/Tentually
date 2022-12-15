import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setStartDate } from '../features/date/StartDateSlice'
import { setEndDate } from '../features/date/EndDateSlice'
import { tentReset } from '../features/products/tentSlice'

const Confirmation = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const tentCount = useSelector(state => state.tent.tentCount)
	const tableCount = useSelector(state => state.table.tableCount)
	const benchCount = useSelector(state => state.bench.benchCount)
	const plateCount = useSelector(state => state.plate.plateCount)
	const cutleryCount = useSelector(state => state.cutlery.cutleryCount)
	const partyclipsCount = useSelector(state => state.partyclips.partyclipsCount)
	const champagneglassCount = useSelector(state => state.champagneglass.champagneglassCount)
	const wineglassCount = useSelector(state => state.wineglass.wineglassCount)
	const shotglassCount = useSelector(state => state.shotglass.shotglassCount)
	const routerCount = useSelector(state => state.router.routerCount)

	const startDate = useSelector(state => state.startdate.startDate)
	const endDate = useSelector(state => state.enddate.endDate)
	const convertedStartDate = new Date(startDate)
	const convertedEndDate = new Date(endDate)

	const handleReset = () => {
		dispatch( setEndDate(null) )
		dispatch( setStartDate(null) )
		dispatch( tentReset() )
		navigate("/")
	}

	return (
		<Container className="confirmation">
			<h1 className='mb-2'>Din bokning är genomförd!</h1>
			<h3>Du har bokat följande:</h3>
			<ul>
				{tentCount > 0 && <li> {tentCount} partytält </li>}
				{tableCount > 0 && <li> {tableCount} bord </li>}
				{benchCount > 0 && (
					<>
						{benchCount === 1
							? <li> {benchCount} bänk </li>
							: <li> {benchCount} bänkar </li>
						}
					</>
				)}
				{plateCount > 0 && (
					<>
						{plateCount === 1
							? <li> {plateCount} tallrik </li>
							: <li> {plateCount} tallrikar </li>
						}
					</>
				)}
				{cutleryCount > 0 && <li> {cutleryCount} bestik </li>}
				{partyclipsCount > 0 && (
					<>
						{partyclipsCount === 1
						? <li> {partyclipsCount} partyclip </li>
						: <li> {partyclipsCount} partyclips </li>
						}
					</>
				)}
				{champagneglassCount > 0 && <li> {champagneglassCount} champagneglass </li>}
				{wineglassCount > 0 && <li> {wineglassCount} vinglas </li>}
				{shotglassCount > 0 && <li> {shotglassCount} snapsglas </li>}
				{routerCount > 0 && <li> {routerCount} router </li>}
			</ul>
			<div>
				<h5>Från: {`${convertedStartDate.getDate()}/${convertedStartDate.getMonth()+1} - ${convertedStartDate.getFullYear()}`}</h5>
				<h5>Till: {`${convertedEndDate.getDate()}/${convertedEndDate.getMonth()+1} - ${convertedEndDate.getFullYear()}`}</h5>
			</div>
			<div className='text'>Håll utkik på din mejl, där dyker in en bekräftelse snart. </div>
			<div className='text'>Under tiden kan du kika in <a href="https://drinktopia-react.vercel.app/" target="_blank" className='link'>denna</a> sidan för bra drinktips till festen </div>

			<button className='button mt-3' onClick={handleReset}>
				<p>Okej, got it!</p>
			</button>
		</Container>
	)
}

export default Confirmation