// import Button from 'react-bootstrap/Button'

const LandingPage = () => {
	return (
		<div className="content">
			<div className="background"></div>

			<div className="hero">
				<div className="header">
					<h1>Välkommen</h1>
				</div>

				<div className="movie-player">
					<img className="play-icon" src="../public/assets/circle-play-regular.svg" alt="play-icon" />
				</div>

				<button className='button'>
					<p> Gå vidare </p>
				</button>

				<div className="footer"> 1 / 5 </div>
			</div>


		</div>
	)
}

export default LandingPage