import './Footer.scss';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
//npm i react-icons

export default function Footer() {
	return (
		<footer className='Footer'>
			<h1>Decodelap</h1>

			<p>2023 Dcodelap &copy; All Rights Reserved.</p>

			<ul>
				<li>
					<FaFacebookF />
				</li>
				<li>
					<FaTwitter />
				</li>
				<li>
					<FaYoutube />
				</li>
			</ul>
		</footer>
	);
}
