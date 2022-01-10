import React from 'react'
import './ultimate.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { introAnimation, smokeVideo } from './images'

function Ultimate() {
	gsap.registerPlugin(ScrollTrigger)
	return (
		<>
			<nav className="nav-ultimate">
				<a href="#">iphone 13 Pro</a>
				<div className="nav-links">
					<a href="">Overview</a>
					<a href="">Switching to iPhone</a>
					<a href="">Test Specs</a>
					<button className="buy-button">Buy</button>
				</div>
			</nav>
			<section className="first-page">
				<div className="first-page-text">
					<h1 className="first-page-title">iPhone 13 Pro</h1>
					<h2 className="first-page-subtitle">Oh. So. Pro</h2>
				</div>
				{/* add front page video  */}
				<video
					className="intro-video"
					autoPlay
					muted
					src={introAnimation}
				></video>
			</section>
			<section className="second-page">
				<video className="smoke-video" autoPlay muted src={smokeVideo} />
				<div className="second-text">
					<p className="text-container">
						<span className="highlight">
							A dramatically more powerful camera system.
						</span>
						<span className="highlight">
							A Display so responsive, every interaction feels new again.
						</span>
						<span className="highlight">
							the world's fastest smartphone chip.
						</span>
						<span className="highlight">Exception durability .</span>
						<span className="highlight">And a huge leap in battery life</span>
						<br /> <br />
						<span className="highlight">Let's pro</span>
					</p>
				</div>
			</section>
		</>
	)
}

export default Ultimate
