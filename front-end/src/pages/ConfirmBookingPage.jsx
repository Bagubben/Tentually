import Accordion from 'react-bootstrap/Accordion'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increase as tentIncrease, decrease as tentDecrease } from '../features/products/TentSlice'
import { increase as tableIncrease, decrease as tableDecrease} from '../features/products/TableSlice'
import { increase as benchIncrease, decrease as benchDecrease} from '../features/products/BenchSlice'
import { increase as plateIncrease, decrease as plateDecrease} from '../features/products/PlateSlice'
import { increase as cutleryIncrease, decrease as cutleryDecrease} from '../features/products/CutlerySlice'
import { increase as partyclipsIncrease, decrease as partyclipsDecrease} from '../features/products/PartyclipsSlice'
import { increase as champagneglassIncrease, decrease as champagneglassDecrease} from '../features/products/ChampagneglassSlice'
import { increase as wineglassIncrease, decrease as wineglassDecrease} from '../features/products/WineglassSlice'
import { increase as shotglassIncrease, decrease as shotglassDecrease} from '../features/products/ShotglassSlice'
import { increase as routerIncrease, decrease as routerDecrease} from '../features/products/RouterSlice'

const ConfirmBookingPage = () => {
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

	return (
		<div className="booking-overview">
			<h2> Bokningsöversikt </h2>

			<div className="your-booking">
				<span className="muted">Du har valt följande produkter:</span>

				<Accordion flush>
					<Accordion.Item eventKey="0">
						<Accordion.Header>
							Partytält
						</Accordion.Header>
						<Accordion.Body>
							{tentCount}
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="1">
						<Accordion.Header>
							Bord
						</Accordion.Header>
						<Accordion.Body>
							{tableCount}
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="2">
						<Accordion.Header>
							Porslin
						</Accordion.Header>
						<Accordion.Body>
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="3">
						<Accordion.Header>
							Router
						</Accordion.Header>
						<Accordion.Body>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>

				<div className="text">
					<div>Valt datum:</div>
					<div>Från: xx-xx-xx</div>
					<div>Till: xx-xx-xx</div>
				</div>
			</div>

			<button className="button">
				<p>Bekräfta</p>
			</button>

			<Footer page={4} />
		</div>
	)
}

export default ConfirmBookingPage