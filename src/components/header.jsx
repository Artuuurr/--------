import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
	<header>
		<div className='logo'>Железный Феликс</div>
		<nav>
			<ul>
				<li>
					<Link to='/'>Главная</Link>
				</li>
				<li>
					<Link to='/orders'>Заказы</Link>
				</li>
				<li>
					<Link to='/education'>Обучение</Link>
				</li>
			</ul>
		</nav>
	</header>
)

export default Header
