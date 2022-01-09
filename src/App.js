import Cookie from './projects/cookies/Cookie'
import TextAnimation from './projects/textAnimation/TextAnimation'
import MacroAnimation from './projects/macroAnimation/MacroAnimation'
import Form from './projects/formAnimation/Form'
import { Page, Boot, Hat } from './projects/PageTransition'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	// return <Cookie />
	// return <TextAnimation />
	// return <MacroAnimation />
	// return <Form />
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Page />} />
				<Route path="/boot" element={<Boot />} />
				<Route path="/hat" element={<Hat />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
