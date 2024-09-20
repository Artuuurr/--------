import React from 'react'
import News from './news'
import Calendar from './calendar'
import Contacts from './contacts'

const Home = () => (
	<section className='home'>
		<h1>Добро пожаловать на сайт "Железный Феликс"</h1>
		<News />
		<Calendar />
		<Contacts />
	</section>
)

export default Home
