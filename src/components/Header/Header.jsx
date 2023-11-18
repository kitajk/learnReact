import { useState } from 'react';
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
	const [isFeature, setIsFeature] = useState(false);
	const description = reactDescriptions[genRandomInt(2)];
	return (
		<header>
			<img src={reactImg} alt="Stylized atom" /> <h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
			<button onClick={() => setIsFeature((prev) => !prev)}>
				New Feature :D
			</button>
			{isFeature ? <p>Feature Off</p> : <p>Feature On</p>}
		</header>
	);
}
