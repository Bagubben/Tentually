import Accordion from 'react-bootstrap/Accordion'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increase as plateIncrease, decrease as plateDecrease} from '../features/products/PlateSlice'
import { increase as cutleryIncrease, decrease as cutleryDecrease} from '../features/products/CutlerySlice'
import { increase as partyclipsIncrease, decrease as partyclipsDecrease} from '../features/products/PartyclipsSlice'
import { increase as champagneglassIncrease, decrease as champagneglassDecrease} from '../features/products/ChampagneglassSlice'
import { increase as wineglassIncrease, decrease as wineglassDecrease} from '../features/products/WineglassSlice'
import { increase as shotglassIncrease, decrease as shotglassDecrease} from '../features/products/ShotglassSlice'

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

	const startDate = useSelector(state => state.startdate.startDate)
	const endDate = useSelector(state => state.enddate.endDate)

	const convertedStartDate = new Date(startDate)
	const convertedEndDate = new Date(endDate)

	return (
		<div className="booking-overview">
			<h2> Bokningsöversikt </h2>

			<div className="your-booking">
				<div className="muted">Du har valt följande produkter:</div>

				<Accordion flush>
					{tentCount > 0 && (
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Partytält
							</Accordion.Header>
							<Accordion.Body>
								<div className="content">
									<h3> Du har valt att boka tältet </h3>
								</div>
							</Accordion.Body>
						</Accordion.Item>
					)}

					{(tableCount > 0 || benchCount > 0) && (
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Bord och bänkar
							</Accordion.Header>
							<Accordion.Body>
								<div className="content">
									<div className="item">
										{tableCount > 0 && benchCount === 0 && (
											<h3 className="text-center"> Du har valt att boka {tableCount} bord, men ingen bänk </h3>
										)}

										{tableCount === 0 && benchCount > 0 && (
											<>
												{benchCount === 1
													? <h3 className="text-center"> Du har valt att boka {benchCount} bänk, men inget bord </h3>
													: <h3 className="text-center"> Du har valt att boka {benchCount} bänkar, men inget bord</h3>
												}
											</>
										)}

										{tableCount > 0 && benchCount > 0 && (
											<>
												<h3 className="text-center">
													Du har valt att boka {tableCount} bord, och {benchCount === 1
													? `${benchCount} bänk.`
													: `${benchCount} bänkar.`
													}
												</h3>
											</>
										)}
									</div>
								</div>
							</Accordion.Body>
						</Accordion.Item>
					)}

					<Accordion.Item eventKey="2">
						<Accordion.Header>
							Porslin
						</Accordion.Header>
						<Accordion.Body>
							<h4> <u> Tallrikar 50 / 50 </u> </h4>
							<div className="counter">
								<button className="counterButton" onClick={() => {
										dispatch( plateDecrease() )
									}}
									disabled={plateCount <= 0}>
									<img src="/assets/minus-solid.svg" alt="minus icon" />
								</button>
								<div className="countNumber"> {plateCount} </div>
								<button className="counterButton" onClick={() => {
									dispatch( plateIncrease() )
								}}
								disabled={plateCount >= 50}>
									<img src="/assets/plus-solid.svg" alt="plus icon" />
								</button>
							</div>
							<h4> <u> Bestick 50 / 50 </u> </h4>
							<div className="counter">
								<button className="counterButton" onClick={() => {
										dispatch( cutleryDecrease() )
									}}
									disabled={cutleryCount <= 0}>
									<img src="/assets/minus-solid.svg" alt="minus icon" />
								</button>
								<div className="countNumber"> {cutleryCount} </div>
								<button className="counterButton" onClick={() => {
									dispatch( cutleryIncrease() )
								}}
								disabled={cutleryCount >= 50}>
									<img src="/assets/plus-solid.svg" alt="plus icon" />
								</button>
							</div>
							<h4> <u> Partyclips 100 / 100 </u> </h4>
							<div className="counter">
								<button className="counterButton" onClick={() => {
										dispatch( partyclipsDecrease() )
									}}
									disabled={partyclipsCount <= 0}>
									<img src="/assets/minus-solid.svg" alt="minus icon" />
								</button>
								<div className="countNumber"> {partyclipsCount} </div>
								<button className="counterButton" onClick={() => {
									dispatch( partyclipsIncrease() )
								}}
								disabled={partyclipsCount >= 100}>
									<img src="/assets/plus-solid.svg" alt="plus icon" />
								</button>
							</div>
							<h4> <u> Champagneglas 50 / 50 </u> </h4>
							<div className="counter">
								<button className="counterButton" onClick={() => {
										dispatch( champagneglassDecrease() )
									}}
									disabled={champagneglassCount <= 0}>
									<img src="/assets/minus-solid.svg" alt="minus icon" />
								</button>
								<div className="countNumber"> {champagneglassCount} </div>
								<button className="counterButton" onClick={() => {
									dispatch( champagneglassIncrease() )
								}}
								disabled={champagneglassCount >= 50}>
									<img src="/assets/plus-solid.svg" alt="plus icon" />
								</button>
							</div>
							<h4> <u> Vinglas 50 / 50 </u> </h4>
							<div className="counter">
								<button className="counterButton" onClick={() => {
										dispatch( wineglassDecrease() )
									}}
									disabled={wineglassCount <= 0}>
									<img src="/assets/minus-solid.svg" alt="minus icon" />
								</button>
								<div className="countNumber"> {wineglassCount} </div>
								<button className="counterButton" onClick={() => {
									dispatch( wineglassIncrease() )
								}}
								disabled={wineglassCount >= 50}>
									<img src="/assets/plus-solid.svg" alt="plus icon" />
								</button>
							</div>
							<h4> <u> Snapsglas 50 / 50 </u> </h4>
							<div className="counter">
								<button className="counterButton" onClick={() => {
										dispatch( shotglassDecrease() )
									}}
									disabled={shotglassCount <= 0}>
									<img src="/assets/minus-solid.svg" alt="minus icon" />
								</button>
								<div className="countNumber"> {shotglassCount} </div>
								<button className="counterButton" onClick={() => {
									dispatch( shotglassIncrease() )
								}}
								disabled={shotglassCount >= 50}>
									<img src="/assets/plus-solid.svg" alt="plus icon" />
								</button>
							</div>
						</Accordion.Body>
					</Accordion.Item>

					{routerCount > 0 && (
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Router
							</Accordion.Header>
							<Accordion.Body>
							<div className="content">
									<h3> Du har valt att boka routern </h3>
								</div>
							</Accordion.Body>
						</Accordion.Item>
					)}
				</Accordion>

				<div className="text">
					<div>Valt datum:</div>
					{startDate === null ?
					<>
						<div>Välj ett datum på föregående sida.</div>
					</>
					:
					<>
						<div>Från: {`${convertedStartDate.getDate()}/${convertedStartDate.getMonth()+1} - ${convertedStartDate.getFullYear()}`}</div>
						<div>Till: {`${convertedEndDate.getDate()}/${convertedEndDate.getMonth()+1} - ${convertedEndDate.getFullYear()}`}</div>
					</>
					}

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