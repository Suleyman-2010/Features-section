import logo from './logo.png';
import './header.css';
export default function Header() {
	return (
		<header>
			<img src={logo} alt="Logo" />
			<div>
				<p>Design a</p>
				<p>Features Section</p>
			</div>
			<p>Just 8 steps...</p>
		</header>
	);
}
