import { CORE_CONCEPTS } from '../data'
import CoreConcept from './CoreConcept'

export default function CoreConcepts() {
	return (
		<>
			<ul>
				{CORE_CONCEPTS.map(conceptItem => (
					<CoreConcept key={conceptItem.title} {...conceptItem} />
				))}
			</ul>
		</>
	)
}
