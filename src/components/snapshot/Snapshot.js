import { NavLink } from 'react-router-dom';
import './style.css';

const Snapshot = ({ title, img, index }) => {
	return (
		<NavLink to={`/snapshot/${index}`}>
			<li className="snapshot">
				<img src={img} alt={title} className="snapshot__img" />
				<h3 className="snapshot__title">{title}</h3>
			</li>
		</NavLink>
	);
};

export default Snapshot;
