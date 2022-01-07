import React, { useEffect, useRef, useState } from 'react'
import gsap, { Power2, Elastic } from 'gsap'
import './form.css'

function Form() {
	const [checked, setChecked] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const namePlaceHolderRef = useRef(null)
	const emailPlaceHolderRef = useRef(null)
	const tickMarkRef = useRef(null)

	const start =
		'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512'
	const end =
		'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512'

	const handleNameFocus = (ref, property, placeholder) => {
		const tl = gsap.timeline({ defaults: { duration: 1 } })
		if (!property) {
			tl.fromTo(
				ref,
				{ attr: { d: start } },
				{ attr: { d: end }, ease: Power2.easeOut, duration: 0.75 }
			)
			tl.to(
				ref,
				{ attr: { d: start }, ease: Elastic.easeOut.config(3, 0.5) },
				'<50%'
			)
			//placeholder shift
			tl.to(
				placeholder.current,
				{
					top: '-50%',
					left: 0,
					scale: 0.7,
					duration: 0.5,
					ease: Power2.easeOut,
				},
				'<'
			)
		}
	}
	const handleBlur = (property, placeholder) => {
		const tl = gsap.timeline({ defaults: { duration: 1 } })
		if (!property) {
			//placeholder shift
			tl.to(placeholder.current, {
				top: '0%',
				left: 0,
				scale: 1,
				duration: 0.5,
				ease: Power2.easeOut,
			})
		}
	}
	const handleNameChange = (newName, line, placeHolder) => {
		setName(newName)
		if (newName.length > 2) {
			colorize('#6391E8', line, placeHolder)
		} else {
			colorize('#FE8C99', line, placeHolder)
		}
	}
	const handleEmailChange = (newEmail, line, placeHolder) => {
		setEmail(newEmail)
		if (newEmail.includes('@')) {
			colorize('#6391E8', line, placeHolder)
		} else {
			colorize('#FE8C99', line, placeHolder)
		}
	}
	const colorize = (color, line, placeHolder) => {
		gsap.to(line, { stroke: color, duration: 0.7 })
		gsap.to(placeHolder, { color, duration: 0.75 })
	}
	const handleCheckBox = () => {
		setChecked(!checked)
		const tl = gsap.timeline({
			defaults: { duration: 0.5, ease: Power2.easeOut },
		})
		if (checked) {
			tl.to('.checkbox-fill', { top: '0%' })
		} else {
			tl.to('.checkbox-fill', { top: '100%' })
		}
	}
	useEffect(() => {
		console.log(tickMarkRef.current)
	}, [])

	return (
		<div className="formContainer">
			<form className="form">
				{/* Left Side of the form  */}
				<div className="contact-left">
					<h1 className="title">Contact Us</h1>
					<p className="description">
						Let's stay in touch.
						<br />
						For more information
						<br />
						sign up
					</p>
				</div>

				{/* Right side of the form  */}
				<div className="contact-right">
					<div className="input-container">
						<p className="placeholder" ref={namePlaceHolderRef}>
							Your Name
						</p>
						<input
							onFocus={() =>
								handleNameFocus('.name-line', name, namePlaceHolderRef)
							}
							onBlur={() => {
								handleBlur(name, namePlaceHolderRef)
							}}
							value={name}
							onChange={e =>
								handleNameChange(
									e.target.value,
									'.name-line',
									namePlaceHolderRef.current
								)
							}
							type="text"
							name="name"
							autoComplete="nope"
							className="input-name input"
						/>
						<svg
							className="line-svg"
							width="300"
							height="2"
							viewBox="0 0 300 2"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="elastic-line name-line"
								d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
								stroke="#D1D4DA"
								strokeWidth="2"
							/>
						</svg>
					</div>
					<div className="input-container">
						<p className="placeholder email" ref={emailPlaceHolderRef}>
							Your Email
						</p>
						<input
							type="email"
							name="email"
							autoComplete="nope"
							className="input-email input"
							onFocus={() =>
								handleNameFocus('.email-line', email, emailPlaceHolderRef)
							}
							onBlur={() => {
								handleBlur(email, emailPlaceHolderRef)
							}}
							onChange={e =>
								handleEmailChange(
									e.target.value,
									'.email-line',
									emailPlaceHolderRef.current
								)
							}
						/>
						<svg
							className="line-svg"
							width="300"
							height="2"
							viewBox="0 0 300 2"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="elastic-line email-line"
								d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
								stroke="#D1D4DA"
								strokeWidth="2"
							/>
						</svg>
					</div>
					<div className="input-container">
						<p className="placeholder">Phone Number</p>
						<input
							type="tel"
							name="tel"
							autoComplete="off"
							className="input-number input"
						/>
						<svg
							className="line-svg"
							width="300"
							height="2"
							viewBox="0 0 300 2"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="elastic-line"
								d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
								stroke="#D1D4DA"
								strokeWidth="2"
							/>
						</svg>
					</div>
					<div className="promo-container">
						<div
							className="checkbox-container"
							onClick={() => handleCheckBox()}
						>
							<span className="checkmark"></span>
							<div className="checkbox-fill"></div>
							<input type="checkbox" className="checkbox" />
							<svg
								width="19"
								height="16"
								viewBox="0 0 19 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="tick-mark"
								ref={tickMarkRef}
							>
								<path
									className="elastic-line"
									d="M2 8.5L6.5 13L17.5 2"
									stroke="white"
									strokeWidth="4"
								/>
							</svg>
						</div>
						<label className="checkbox-label">
							Send me promotions and offers
						</label>
					</div>
					<button className="button-join" type="button">
						Join
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form
