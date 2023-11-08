import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from './components/Examples.jsx'
import Section from './components/Section.jsx'

function App() {
	return (
		// nice and clear build with the use of components feature of React
		<>
			<Header />
			<main>
				<Section title='Core concepts' id='core-concepts'>
					<CoreConcepts />
				</Section>
				<Section id='examples' title='Examples'>
					<Examples />
				</Section>
			</main>
		</>
	)
}

export default App
