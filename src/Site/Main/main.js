import './main.css';
import Feature from './Features/feature.js';
export default function Main() {
	return (
		<main>
			<h1>Features</h1>
			<div id="features">
				<Feature nth="first" circleBackgroundColor="black" />
				<Feature nth="second" circleBackgroundColor="pink" />
				<Feature nth="third" circleBackgroundColor="green" />
				<Feature nth="forth" circleBackgroundColor="blue" />
			</div>
			<div id="button-container">
				<button>Explore more features</button>
			</div>
		</main>
	);
}
