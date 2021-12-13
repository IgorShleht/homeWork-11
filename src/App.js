import './App.css'
import { LastMatch } from './components/lastMatch/lastMatch'
import { MainMatch } from './components/mainMatch/mainMatch'
import { NextMatch } from './components/nextMatch/nextMatch'

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<LastMatch />
				<MainMatch />
				<NextMatch />
			</div>
		</div>
	)
}

export default App
