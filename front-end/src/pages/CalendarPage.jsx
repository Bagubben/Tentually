import { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Calendar from 'react-calendar'
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
import { setStartDate } from '../features/date/StartDateSlice'
import { setEndDate } from '../features/date/EndDateSlice'

import { isWithinInterval } from 'date-fns'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const CalendarPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [value, onChange] = useState()

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

	const disabledRanges = []

	const getData = async () => {
		const ref = collection(db, 'bookings')
		const snapshot = await getDocs(ref)

		const docs = snapshot.docs.map(doc => {
			return {
				id: doc.id,
				...doc.data(),
			}
		})

		docs.map((doc) => {
			const timestampStart = doc.startDate.seconds * 1000
			const timestampEnd = doc.endDate.seconds * 1000

			const startDate = new Date(timestampStart)
			const endDate = new Date(timestampEnd)
			disabledRanges.push([startDate, endDate])
		})
	}

	const tileDisabled = ({ date, view }) => {
		if (view === 'month') {
			return isWithinRanges(date, disabledRanges)
		}
	}

	const isWithinRange = (date, range) => {
		return isWithinInterval(date, { start: range[0], end: range[1] })
	}

	const isWithinRanges = (date, ranges) => {
		return ranges.some(range => isWithinRange(date, range))
	}

	useEffect(() => {
		if (value) {
			const timestampStart = value[0].getTime()
			const timestampEnd = value[1].getTime()

			dispatch ( setStartDate(timestampStart) )
			dispatch ( setEndDate(timestampEnd) )
		}

	}, [value])

	useEffect(() => {
		if (startDate) {
			const convertedStartDate = new Date(startDate)
			const convertedEndDate = new Date(endDate)

			const arr = []

			arr.push(convertedStartDate)
			arr.push(convertedEndDate)

			onChange(arr)
		}

		getData()
	}, [])

	return (
		<div className='calendar'>
			<h2>Välj datum och produkter</h2>
			<Calendar
				onChange={onChange}
				selectRange={true}
				value={value}
				view="month"
				showNeighboringMonth={false}
				tileDisabled={tileDisabled}
			/>

			<Accordion flush>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						Partytält
					</Accordion.Header>
					<Accordion.Body>
						<h4> <u> Partytält 1 / 1 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									dispatch( tentDecrease() )
								}}
								disabled={tentCount <= 0}
								>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {tentCount} </div>
							<button className="counterButton" onClick={() => {
								dispatch( tentIncrease() )
							}}
							disabled={tentCount >= 1}
							>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						{/* <button className="button">
							<p>Lägg till</p>
						</button> */}
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>
						Bord och bänkar
					</Accordion.Header>
					<Accordion.Body>
					<h4> <u> Vikbord 2 / 2 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									dispatch( tableDecrease() )
								}}
								disabled={tableCount <= 0}>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {tableCount} </div>
							<button className="counterButton" onClick={() => {
								dispatch( tableIncrease() )
							}}
							disabled={tableCount >= 2}>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>

						<h4> <u> Sittbänk 4 / 4 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									dispatch( benchDecrease() )
								}}
								disabled={benchCount <= 0}>
								<img src="../public/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {benchCount} </div>
							<button className="counterButton" onClick={() => {
								dispatch( benchIncrease() )
							}}
							disabled={benchCount >= 4}>
								<img src="../public/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						{/* <button className="button">
							<p>Lägg till</p>
						</button> */}
					</Accordion.Body>
				</Accordion.Item>

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
						{/* <button className="button">
							<p>Lägg till</p>
						</button> */}
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header>
						Router
					</Accordion.Header>
					<Accordion.Body>
					<h4> <u> Router 4G (100GB) 1 / 1 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									dispatch( routerDecrease() )
								}}
								disabled={routerCount <= 0}>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {routerCount} </div>
							<button className="counterButton" onClick={() => {
								dispatch( routerIncrease() )
							}}
							disabled={routerCount >= 1}>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						{/* <button className="button">
							<p>Lägg till</p>
						</button> */}
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<button className='button' onClick={() => {
				navigate("/bekräfta")
			}}>
				<p> Boka </p>
			</button>

			<Footer page={3} />
		</div>
	)
}

export default CalendarPage
