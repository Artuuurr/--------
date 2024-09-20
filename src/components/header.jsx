import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/img/logo.png'
import menu from '../../public/img/menu.png'

const Header = () => (
	<header>
		<div className='logo'>
			<img src={logo} alt='logo' />
		</div>
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
		<div className='menu'>
			<img src={menu} alt='Menu' />
		</div>
	</header>
)

export default Header
