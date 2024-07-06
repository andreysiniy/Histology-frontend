import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<strong>Гистологические</strong> снимки
					</NavLink>

					<BtnDarkMode />

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Главная
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/gallery"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Галерея
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/albums"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Альбомы
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/testing"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Тестирование
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
