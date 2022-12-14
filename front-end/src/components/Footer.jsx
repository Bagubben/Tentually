import { useNavigate } from "react-router-dom"

const Footer = ( {page} ) => {
	const navigate = useNavigate()
	return (
		<div className="footer">
			<img src="/assets/arrow-left-solid.svg" alt="arrow left" onClick={() => {navigate(-1)}}/>

			<div> {page} / 5 </div>

			<img src="/assets/bars-solid.svg" alt="hamburger icon" />
		</div>
	)
}

export default Footer