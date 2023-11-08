import { CORE_CONCEPTS } from '../data'
import CoreConcept from './CoreConcept'

export default function CoreConcepts() {
	return (
		<>
			{/* Rebuild component! Transfer section to separate component */}
			<section id='core-concepts'>
				<h2>Core Concepts</h2>
				<ul>
					{CORE_CONCEPTS.map(conceptItem => (
						<CoreConcept key={conceptItem.title} {...conceptItem} />
					))}
				</ul>
			</section>
		</>
	)
}
