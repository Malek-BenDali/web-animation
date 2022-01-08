import React from 'react'
import { burger } from './images'
import './Page.css'

function Page() {
	return (
		<div className="handbag-body">
			<nav>
				<img src={burger} alt="burger" />
			</nav>
		</div>
	)
}

export default Page
