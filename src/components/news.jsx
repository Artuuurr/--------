import React from 'react'

const newsData = [
	{
		title: 'Введение новой линейки дверей',
		date: '01 Октября 2024',
		img: 'news1.jpg',
	},
	{
		title: 'Изменения в графике работы',
		date: '05 Октября 2024',
		img: 'news2.jpg',
	},
	{
		title: 'Красочные новинки',
		date: '10 Октября 2024',
		img: 'news3.jpg',
	},
]

const News = () => (
	<section className='news'>
		<h2>Новости</h2>
		<div className='news-grid'>
			{newsData.map((news, index) => (
				<article key={index}>
					<img src={news.img} alt={news.title} />
					<h3>{news.title}</h3>
					<p>{news.date}</p>
				</article>
			))}
		</div>
	</section>
)

export default News
