// import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
	const navigate = useNavigate()

	return (
		<div className="content">
			<div className="background"></div>

			<div className="hero">
				<div className="header">
					<h1>Välkommen</h1>
				</div>

				<div className="movie-player">
					<img className="play-icon" src="/assets/circle-play-regular.svg" alt="play-icon" />
				</div>

				<button className='button' onClick={() => {
					navigate("/produkter")
				}}>
					<p> Gå vidare </p>
				</button>

				<div className="footer"> 1 / 5 </div>
			</div>


		</div>
	)
}

export default LandingPage