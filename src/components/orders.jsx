import React, { useState } from 'react'
import LoginModal from './loginModal'

const orderData = [
	{
		title: 'Дверь межкомнатная Ostium U8',
		description: 'Простота дизайна, надежная конструкция.',
		img: 'door1.jpg',
	},
	{
		title: 'Дверь межкомнатная Ostium P 20',
		description: 'Классический стиль и современная надежность.',
		img: 'door2.jpg',
	},
	{
		title: 'Дверь межкомнатная Carda ТОНКИН',
		description: 'Эксклюзивный дизайн и высокое качество.',
		img: 'door3.jpg',
	},
	{
		title: 'Дверь межкомнатная Profil Doors 1',
		description: 'Современная дверь из стекла и металла.',
		img: 'door4.jpg',
	},
	{
		title: 'Дверь межкомнатная Profil Doors 42N',
		description: 'Эстетика дерева в сочетании с прочностью.',
		img: 'door5.jpg',
	},
	{
		title: 'Дверь межкомнатная Atrium P46',
		description: 'Высокое качество и стильный дизайн.',
		img: 'door6.jpg',
	},
]

const Orders = () => {
	const [showModal, setShowModal] = useState(false)

	const handleShowModal = () => setShowModal(true)
	const handleCloseModal = () => setShowModal(false)

	return (
		<section className='orders'>
			<h2>Заказы</h2>
			<div className='orders-grid'>
				{orderData.map((order, index) => (
					<div className='order-card' key={index}>
						<img src={order.img} alt={order.title} />
						<h3>{order.title}</h3>
						<p>{order.description}</p>
						<button onClick={handleShowModal}>Подробнее</button>
					</div>
				))}
			</div>
			<LoginModal showModal={showModal} handleClose={handleCloseModal} />
		</section>
	)
}

export default Orders
