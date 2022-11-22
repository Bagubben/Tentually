import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Calendar from 'react-calendar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from '../features/products/tentSlice'
import React from 'react'

const CalendarPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [value, onChange] = useState(new Date())
	const [accordionOpen, setAccordionOpen] = useState(false)

	const tentCount = useSelector(state => state.tent.tentCount)

	const [tableCount, setTableCount] = useState(0)
	const [benchCount, setBenchCount] = useState(0)
	const [plateCount, setPlateCount] = useState(0)
	const [cutleryCount, setCutleryCount] = useState(0)
	const [partyclipsCount, setPartyclipsCount] = useState(0)
	const [champagneglassCount, setChampagneglassCount] = useState(0)
	const [wineglassCount, setWineglassCount] = useState(0)
	const [shotglassCount, setShotglassCount] = useState(0)
	const [routerCount, setRouterCount] = useState(0)

	return (
		<div className='calendar'>
			<h2>Välj datum och produkter</h2>
			<Calendar
				onChange={onChange}
				value={value}
				view="month"
			/>

			<Accordion flush>
				<Accordion.Item eventKey="0">
					<Accordion.Header onClick={() => {
						setAccordionOpen(!accordionOpen)
					}}>
						Partytält
					</Accordion.Header>
					<Accordion.Body>
						<h4> <u> Partytält 1 / 1 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									dispatch( decrease() )
								}}
								disabled={tentCount <= 0}
								>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {tentCount} </div>
							<button className="counterButton" onClick={() => {
								dispatch( increase() )
							}}
							disabled={tentCount >= 1}
							>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						<button className="button">
							<p>Lägg till</p>
						</button>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header onClick={() => {
						setAccordionOpen(!accordionOpen)
					}}>
						Bord
					</Accordion.Header>
					<Accordion.Body>
					<h4> <u> Vikbord 2 / 2 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									setTableCount(tableCount - 1)
								}}
								disabled={tableCount <= 0}>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {tableCount} </div>
							<button className="counterButton" onClick={() => {
								setTableCount(tableCount + 1)
							}}
							disabled={tableCount >= 2}>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>

						<h4> <u> Sittbänk 4 / 4 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									setBenchCount(benchCount - 1)
								}}
								disabled={benchCount <= 0}>
								<img src="../public/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {benchCount} </div>
							<button className="counterButton" onClick={() => {
								setBenchCount(benchCount + 1)
							}}
							disabled={benchCount >= 4}>
								<img src="../public/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						<button className="button">
							<p>Lägg till</p>
						</button>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header onClick={() => {
						setAccordionOpen(!accordionOpen)
					}}>
						Porslin
					</Accordion.Header>
					<Accordion.Body>
						<h4> <u> Tallrikar 50 / 50 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									setPlateCount(plateCount - 1)
								}}
								disabled={plateCount <= 0}>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {plateCount} </div>
							<button className="counterButton" onClick={() => {
								setPlateCount(plateCount + 1)
							}}
							disabled={plateCount >= 50}>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						<h4> <u> Bestick 50 / 50 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									setCutleryCount(cutleryCount - 1)
								}}
								disabled={cutleryCount <= 0}>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {cutleryCount} </div>
							<button className="counterButton" onClick={() => {
								setCutleryCount(cutleryCount + 1)
							}}
							disabled={cutleryCount >= 50}>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						<h4> <u> Partyclips 100 / 100 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									setPartyclipsCount(partyclipsCount - 1)
								}}
								disabled={partyclipsCount <= 0}>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {partyclipsCount} </div>
							<button className="counterButton" onClick={() => {
								setPartyclipsCount(partyclipsCount + 1)
							}}
							disabled={partyclipsCount >= 100}>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						<h4> <u> Champagneglas 50 / 50 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									setChampagneglassCount(champagneglassCount - 1)
								}}
								disabled={champagneglassCount <= 0}>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {champagneglassCount} </div>
							<button className="counterButton" onClick={() => {
								setChampagneglassCount(champagneglassCount + 1)
							}}
							disabled={champagneglassCount >= 50}>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						<h4> <u> Vinglas 50 / 50 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									setWineglassCount(wineglassCount - 1)
								}}
								disabled={wineglassCount <= 0}>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {wineglassCount} </div>
							<button className="counterButton" onClick={() => {
								setWineglassCount(wineglassCount + 1)
							}}
							disabled={wineglassCount >= 50}>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						<h4> <u> Snappsglas 50 / 50 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									setShotglassCount(shotglassCount - 1)
								}}
								disabled={shotglassCount <= 0}>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {shotglassCount} </div>
							<button className="counterButton" onClick={() => {
								setShotglassCount(shotglassCount + 1)
							}}
							disabled={shotglassCount >= 50}>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						<button className="button">
							<p>Lägg till</p>
						</button>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header onClick={() => {
						setAccordionOpen(!accordionOpen)
					}}>
						Router
					</Accordion.Header>
					<Accordion.Body>
					<h4> <u> Router 4G (100GB) 1 / 1 </u> </h4>
						<div className="counter">
							<button className="counterButton" onClick={() => {
									setRouterCount(routerCount - 1)
								}}
								disabled={routerCount <= 0}>
								<img src="/assets/minus-solid.svg" alt="minus icon" />
							</button>
							<div className="countNumber"> {routerCount} </div>
							<button className="counterButton" onClick={() => {
								setRouterCount(routerCount + 1)
							}}
							disabled={routerCount >= 1}>
								<img src="/assets/plus-solid.svg" alt="plus icon" />
							</button>
						</div>
						<button className="button">
							<p>Lägg till</p>
						</button>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			{!accordionOpen && (
				<button className='button' onClick={() => {
					navigate("/bekräfta")
				}}>
					<p> Boka </p>
				</button>
			)}

			<Footer page={3} />
		</div>
	)
}

export default CalendarPage
