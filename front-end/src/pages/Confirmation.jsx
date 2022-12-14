import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setStartDate } from '../features/date/StartDateSlice'
import { setEndDate } from '../features/date/EndDateSlice'
import { benchReset } from '../features/products/benchSlice'
import { champagneglassReset } from '../features/products/ChampagneglassSlice'
import { cutleryReset } from '../features/products/CutlerySlice'
import { partyclipsReset } from '../features/products/PartyclipsSlice'
import { plateReset } from '../features/products/PlateSlice'
import { routerReset } from '../features/products/RouterSlice'
import { shotglassReset } from '../features/products/ShotglassSlice'
import { tableReset } from '../features/products/tableSlice'
import { tentReset } from '../features/products/tentSlice'
import { wineglassReset } from '../features/products/WineglassSlice'

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
		dispatch( benchReset() )
		dispatch( champagneglassReset() )
		dispatch( cutleryReset() )
		dispatch( partyclipsReset() )
		dispatch( plateReset() )
		dispatch( routerReset() )
		dispatch( shotglassReset() )
		dispatch( tableReset() )
		dispatch( tentReset() )
		dispatch( wineglassReset() )
		navigate("/")
	}

	return (
		<Container className="confirmation">
			<h1 className='mb-2'>Din bokning ??r genomf??rd!</h1>
			<h3>Du har bokat f??ljande:</h3>
			<ul>
				{tentCount > 0 && <li> {tentCount} partyt??lt </li>}
				{tableCount > 0 && <li> {tableCount} bord </li>}
				{benchCount > 0 && (
					<>
						{benchCount === 1
							? <li> {benchCount} b??nk </li>
							: <li> {benchCount} b??nkar </li>
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
				<h5>Fr??n: {`${convertedStartDate.getDate()}/${convertedStartDate.getMonth()+1} - ${convertedStartDate.getFullYear()}`}</h5>
				<h5>Till: {`${convertedEndDate.getDate()}/${convertedEndDate.getMonth()+1} - ${convertedEndDate.getFullYear()}`}</h5>
			</div>
			<div className='text'>H??ll utkik p?? din mejl, d??r dyker in en bekr??ftelse snart. </div>
			<div className='text'>Under tiden kan du kika in <a href="https://drinktopia-react.vercel.app/" target="_blank" className='link'>denna</a> sidan f??r bra drinktips till festen </div>

			<button className='button mt-3' onClick={handleReset}>
				<p>Okej, got it!</p>
			</button>
		</Container>
	)
}

export default Confirmation