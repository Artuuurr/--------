import React, { useState } from 'react'
import LoginModal from './loginModal'
import door1 from '../../public/img/door1.png'
import door2 from '../../public/img/door2.png'
import door3 from '../../public/img/door3.png'
import door4 from '../../public/img/door4.png'
import door5 from '../../public/img/door5.png'
import door6 from '../../public/img/door6.png'

const orderData = [
	{
		title: 'Дверь межкомнатная Остиум U8 ДГ',
		description:
			'Простота линий, идеальные пропорции - отличительные черты новой коллекции Union. Ненавязчивая классика, в этой коллекции нет ничего лишнего.',
		img: door1,
	},
	{
		title: 'Дверь межкомнатная Остиум Р 20 ДГ',
		description:
			'Модели этой коллекции стали достойным ответом набирающему популярность стилю неоклассики в декорировании помещений. ',
		img: door2,
	},
	{
		title: 'Дверь межкомнатная Carda ТОСКАНА',
		description:
			'Простота линий, идеальные пропорции - отличительные черты новой коллекции Union. Ненавязчивая классика, в этой коллекции нет ничего лишнего.',
		img: door3,
	},
	{
		title: 'Дверь межкомнатная Profil Doors 1LK',
		description:
			'Серия LK - это коллекция каркасных дверей в глянцевом покрытии, разработанном в Германии на основе новейших разработок.',
		img: door4,
	},
	{
		title: 'Дверь межкомнатная Profil Doors 42ZN',
		description:
			'Серия LK - это коллекция каркасных дверей в глянцевом покрытии, разработанном в Германии на основе новейших разработок.',
		img: door5,
	},
	{
		title: 'Дверь межкомнатная Aurum Pd 5 Палладий',
		description:
			'Основа двери - МДФ ”Swiss krono” (Швейцария), толщиной 6мм. Сотовое наполнение',
		img: door6,
	},
]

const Orders = () => {
	const [showModal, setShowModal] = useState(false)

	const handleShowModal = () => setShowModal(true)
	const handleCloseModal = () => setShowModal(false)

	return (
		<section className='orders'>
			<div className='orders-grid'>
				{orderData.map((order, index) => (
					<div className='order-card' key={index}>
						<img src={order.img} alt={order.title} />
						<h3 className='titleCards'>{order.title}</h3>
						<p className='textCards'>{order.description}</p>
						<button className='btnCards' onClick={handleShowModal}>
							Подробнее
						</button>
					</div>
				))}
			</div>
			<LoginModal showModal={showModal} handleClose={handleCloseModal} />
		</section>
	)
}

export default Orders
