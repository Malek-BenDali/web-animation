import React, { useEffect } from 'react'
import gsap from 'gsap'
import './form.css'

function Form() {
	return (
		<div className="formContainer">
			<form>
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
						<p className="placeholder">Your Name</p>
						<input
							type="text"
							name="name"
							autoComplete="off"
							className="input-name input"
						/>
						<svg
							class="line-svg"
							width="300"
							height="2"
							viewBox="0 0 300 2"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								class="elastic-line"
								d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
								stroke="#D1D4DA"
								stroke-width="2"
							/>
						</svg>
					</div>
					<div className="input-container">
						<p className="placeholder">Your Email</p>
						<input
							type="email"
							name="email"
							autoComplete="off"
							className="input-email input"
						/>
						<svg
							class="line-svg"
							width="300"
							height="2"
							viewBox="0 0 300 2"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								class="elastic-line"
								d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
								stroke="#D1D4DA"
								stroke-width="2"
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
							class="line-svg"
							width="300"
							height="2"
							viewBox="0 0 300 2"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								class="elastic-line"
								d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
								stroke="#D1D4DA"
								stroke-width="2"
							/>
						</svg>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Form
