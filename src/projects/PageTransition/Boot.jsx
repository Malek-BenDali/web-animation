import React from 'react'
import { bootImg, burger, shoppingCart } from './images'
import { Link } from 'react-router-dom'

function Test() {
	return (
		<div className="body">
			<div className="boot-body">
				<nav className="nav">
					<img src={burger} alt="burger" />
					<Link className="logo" to="/">
						maxed.
					</Link>
					<img src={shoppingCart} alt="shoppingCart" />
				</nav>
				<section className="showcase">
					<div className="img-container">
						<img src={bootImg} alt="" />
					</div>
					<div className="showcase-text">
						<h2 className="showcase-title">
							These boots were made for walking.
						</h2>
						<h3 className="showcase-subtitle">
							And that's just what they'll do. There's no denying what a great
							pair of boots can do for your outfit. Treat your feet, explore our
							range now.
						</h3>
						<Link to="product-page">
							<button className="showcase-button">Explore</button>
						</Link>
					</div>
					<Link to="/hat">
						<svg
							className="showcase-arrow"
							width="26"
							height="46"
							viewBox="0 0 26 46"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M25.1213 25.1213C26.2929 23.9497 26.2929 22.0503 25.1213 20.8787L6.02944 1.7868C4.85786 0.615224 2.95837 0.615224 1.7868 1.7868C0.615224 2.95837 0.615224 4.85786 1.7868 6.02944L18.7574 23L1.7868 39.9706C0.615224 41.1421 0.615224 43.0416 1.7868 44.2132C2.95837 45.3848 4.85786 45.3848 6.02944 44.2132L25.1213 25.1213ZM19 26H23V20H19V26Z"
								fill="white"
							/>
						</svg>
					</Link>
					<svg
						className="circle circle-1"
						width="243"
						height="243"
						viewBox="0 0 243 243"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="121.5"
							cy="121.5"
							r="121.5"
							fill="white"
							fill-opacity="0.25"
						/>
					</svg>
					<svg
						className="circle circle-2"
						width="243"
						height="243"
						viewBox="0 0 243 243"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="121.5"
							cy="121.5"
							r="121.5"
							fill="white"
							fill-opacity="0.25"
						/>
					</svg>
					<svg
						className="circle circle-3"
						width="243"
						height="243"
						viewBox="0 0 243 243"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="121.5"
							cy="121.5"
							r="121.5"
							fill="white"
							fill-opacity="0.25"
						/>
					</svg>
				</section>
			</div>
		</div>
	)
}

export default Test
