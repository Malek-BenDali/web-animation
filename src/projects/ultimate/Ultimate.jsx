import React, { useState } from 'react'
import './ultimate.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import {
	introAnimation,
	smokeVideo,
	largePhone,
	smallPhone,
	blueIphoneBack,
	silverIphoneBack,
	goldIphoneBack,
	graphiteIphoneBack,
	swatchBlue,
	swatchSilver,
	swatchGold,
	swatchGraphite,
	blueCloseup,
	silverCloseup,
	goldCloseup,
	graphiteCloseup,
} from './images'

function Ultimate() {
	gsap.registerPlugin(ScrollTrigger)
	const [swatch, setSwatch] = useState('blue')
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
			<section className="third-page">
				<div className="product-text-container">
					<div className="product-text-left">
						<p className="phone-title">iPhone 13 Pro Max</p>
						<p className="phone-size pro-size">6.7"</p>
					</div>
					<div className="product-text-right">
						<div className="phone-title">iPhone 13 Max</div>
						<div className="phone-size max-size">6.1"</div>
					</div>
				</div>
				<div className="product-images">
					<img src={largePhone} className="large-phone" alt="a" />
					<img src={smallPhone} className="small-phone" alt="a" />
				</div>
				<p className="retina-line">SuperRetina XDR display with ProMotion</p>
			</section>
			<section className="forth-page">
				<div className="purchase-left">
					<div className="phone-gallery">
						<div className="phone-gallery-container blue-cont ">
							<img src={blueIphoneBack} className="blue-back" alt="" />
						</div>
						<div className="phone-gallery-container blue-cont ">
							<img src={silverIphoneBack} className="silver-back" alt="" />
						</div>
						<div className="phone-gallery-container blue-cont ">
							<img src={goldIphoneBack} className="gold-back" alt="" />
						</div>
						<div className="phone-gallery-container blue-cont ">
							<img src={graphiteIphoneBack} className="graphite-back" alt="" />
						</div>
					</div>
					<div className="swatch-container">
						<div className="swatches">
							<img src={swatchBlue} alt="s" onClick={() => setSwatch('blue')} />
							<img
								src={swatchSilver}
								alt="s"
								onClick={() => setSwatch('silver')}
							/>
							<img src={swatchGold} alt="s" onClick={() => setSwatch('gold')} />
							<img
								src={swatchGraphite}
								alt="s"
								onClick={() => setSwatch('graphite')}
							/>
						</div>
						<p>
							<span>Sierra Blue </span>
							<span>Silver </span>
							<span>Gold </span>
							<span>Graphite </span>
						</p>
					</div>
				</div>
				<div className="purchase-right">
					<img src={blueCloseup} className="blue phone" alt="a" />
					<img src={silverCloseup} className="silver phone" alt="a" />
					<img src={goldCloseup} className="gold phone" alt="a" />
					<img src={graphiteCloseup} className="graphite phone" alt="a" />
				</div>
			</section>
		</>
	)
}

export default Ultimate
