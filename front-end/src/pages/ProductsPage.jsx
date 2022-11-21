import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const ProductsPage = () => {
	const navigate = useNavigate()

	const [showTält, setShowTält] = useState(false)
	const [showBord, setShowBord] = useState(false)
	const [showPorslin, setShowPorslin] = useState(false)
	const [showRouter, setShowRouter] = useState(false)

	const handleCloseTält = () => setShowTält(false)
	const handleCloseBord = () => setShowBord(false)
	const handleClosePorslin = () => setShowPorslin(false)
	const handleCloseRouter = () => setShowRouter(false)

	const handleShowTält = () => setShowTält(true)
	const handleShowBord = () => setShowBord(true)
	const handleShowPorslin = () => setShowPorslin(true)
	const handleShowRouter = () => setShowRouter(true)

	return (
		<>
			<Modal show={showTält} onHide={handleCloseTält}>
				<Modal.Header closeButton>
					<Modal.Title>Partytält</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="modal-info">
						<img src="../public/assets/image-regular.svg" alt="image-icon" />
						<h4>Partytält för upp till 12 personer</h4>
						<h4>Mått: 6x3 meter</h4>
						<p>
							<a href="https://www.taltpartner.se/snabbtalt/600124.html" target="_blank">
								Klicka här för att gå till produktens hemsida
							</a>
						</p>
					</div>
				</Modal.Body>
			</Modal>

			<Modal show={showBord} onHide={handleCloseBord}>
				<Modal.Header closeButton>
					<Modal.Title>Bord och bänkar</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="modal-info">
						<img src="../public/assets/image-regular.svg" alt="image-icon" />
						<h4>Vikbord 180x76, 2st</h4>
						<h4>Sittbänk 183x43, 4st</h4>
						<h4>max 400kg</h4>
					</div>
				</Modal.Body>
			</Modal>

			<Modal show={showPorslin} onHide={handleClosePorslin}>
				<Modal.Header closeButton>
					<Modal.Title>Porslin</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="modal-info">
						<img src="../public/assets/image-regular.svg" alt="image-icon" />
						<h4>Middagstallrikar - 50st </h4>
						<h4>Assietter - 50st </h4>
						<h4>Champagneglas - 50st </h4>
						<h4>Vinglas - 50st </h4>
						<h4>Bestick - 50st </h4>
						<h4>Snapsglas - 50st </h4>
						<h4>Partyklips - 100st </h4>
					</div>
				</Modal.Body>
			</Modal>

			<Modal show={showRouter} onHide={handleCloseRouter}>
				<Modal.Header closeButton>
					<Modal.Title>Router</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="modal-info">
						<img src="../public/assets/image-regular.svg" alt="image-icon" />
						<h4>4G INTERNETROUTER</h4>
						<h4>Fri att låna med 100GB surf per månad</h4>
					</div>
				</Modal.Body>
			</Modal>

			<div className="products">
				<div className="items">
					<h2>Produktutbud</h2>
					<p>Information om produkterna</p>

					<Card onClick={() => {
						handleShowTält()
					}}>
						<h4>Tält information</h4>
						<img src="../public/assets/info-solid.svg" alt="" />
					</Card>

					<Card onClick={() => {
						handleShowBord()
					}}>
						<h4>Bord information</h4>
						<img src="../public/assets/info-solid.svg" alt="" />
					</Card>

					<Card onClick={() => {
						handleShowPorslin()
					}}>
						<h4>Porslin information</h4>
						<img src="../public/assets/info-solid.svg" alt="" />
					</Card>

					<Card onClick={() => {
						handleShowRouter()
					}}>
						<h4>Router information</h4>
						<img src="../public/assets/info-solid.svg" alt="" />
					</Card>
				</div>

				<button className='button' onClick={() => {
					navigate("/kalender")
				}}>
					<p> Välj datum </p>
				</button>

				<Footer page={2} />
			</div>


		</>
	)
}

export default ProductsPage