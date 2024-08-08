import './feature.css';
export default function Feature({ nth, circleBackgroundColor = 'grey' }) {
	return (
		<div>
			<h1>{nth[0].toUpperCase() + nth.slice(1)} Feature</h1>
			<p>
				This is the description of the {nth} feature of our app. We are
				going to briefly outline what this feature does.
			</p>
			<button>Button label</button>
			<div
				className="circle"
				style={{ backgroundColor: circleBackgroundColor }}
			></div>
		</div>
	);
}
