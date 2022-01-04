import React, { useEffect } from 'react'
import gsap, { Power3, Elastic } from 'gsap'
import hero from './hero.jpg'
import './textAnimation.css'

function TextAnimation() {
	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 0.75,
				ease: Power3.easeOut,
			},
		})
		tl.fromTo(
			'.hero-img',
			{ scale: 1.3, borderRadius: '0rem' },
			{
				scale: 1,
				borderRadius: '2rem',
				delay: 0.35,
				duration: 2.5,
				ease: Elastic.easeOut.config(1.5, 1),
			}
		)
		tl.from(
			'.cta1',
			{
				x: '100%',
				opacity: 0.5,
			},
			'<20%'
		)
		tl.from(
			'.cta3',
			{
				x: '-100%',
				opacity: 0.5,
			},
			'<20%'
		)
		tl.from(
			'.cta2',
			{
				y: '100%',
				opacity: 0.5,
			},
			'<20%'
		)
		tl.from(
			'.cta4',
			{
				x: '100%',
				opacity: 0.5,
			},
			'<20%'
		)
		tl.from(
			'.cta6',
			{
				x: '-100%',
				opacity: 0.5,
			},
			'<20%'
		)
		tl.from(
			'.cta5',
			{
				y: '100%',
				opacity: 0,
			},
			'<20%'
		)
		tl.from(
			'.cta-btn',
			{
				y: 20,
				opacity: 0,
			},
			'<'
		)

		gsap.set('.letter', { display: 'inline-block' })
		gsap.from('.letter', {
			y: '100%',
			delay: 2,
			stagger: 0.1,
		})
	}, [])
	const HeaderText = 'Skincare.'
	const lettersInHeader = HeaderText.split('')

	return (
		<>
			<nav className="nav">
				<h1 className="overflow-hidden">
					{lettersInHeader.map(caracter => (
						<span className="letter">{caracter}</span>
					))}
				</h1>
			</nav>
			<div className="hero-section">
				<img src={hero} className="hero-img" alt="aa" />
				<div className="cta">
					<div className="cta-text">
						<h2>
							<span className="cta1">One</span>
						</h2>
						<h2>
							<span className="cta2">Stop</span>
						</h2>
						<h2>
							<span className="cta3">Shop</span>
						</h2>
					</div>
					<div className="cta-text">
						<h2>
							<span className="cta4">To</span>
						</h2>
						<h2>
							<span className="cta5">Perfect</span>
						</h2>
						<h2>
							<span className="cta6">Skin</span>
						</h2>
					</div>
					<button className="cta-btn">Explore</button>
				</div>
			</div>
		</>
	)
}

export default TextAnimation
