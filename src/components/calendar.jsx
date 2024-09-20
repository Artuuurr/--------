import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

const initialEvents = [
	{ title: 'Событие 1', date: '2024-10-03', color: 'blue' },
	{ title: 'Событие 2', date: '2024-10-07', color: 'green' },
	{ title: 'Событие 3', date: '2024-10-13', color: 'orange' },
]

const Calendar = () => {
	const [events, setEvents] = useState(initialEvents)
	const [newEvent, setNewEvent] = useState({
		title: '',
		date: '',
		color: '',
	})

	// Обработчик изменения формы
	const handleInputChange = e => {
		const { name, value } = e.target
		setNewEvent({
			...newEvent,
			[name]: value,
		})
	}

	// Обработчик добавления события
	const handleAddEvent = e => {
		e.preventDefault()
		if (newEvent.title && newEvent.date && newEvent.color) {
			setEvents([...events, newEvent])
			setNewEvent({ title: '', date: '', color: '' }) // Очистка формы после добавления
		} else {
			alert('Заполните все поля!')
		}
	}

	return (
		<section className='calendar'>
			<h2>Календарь событий</h2>
			<div className='add-event-form'>
				<h3>Добавить событие</h3>
				<form onSubmit={handleAddEvent}>
					<input
						type='text'
						name='title'
						placeholder='Название события'
						value={newEvent.title}
						onChange={handleInputChange}
					/>
					<input
						type='date'
						name='date'
						value={newEvent.date}
						onChange={handleInputChange}
					/>
					<input
						type='color'
						name='color'
						value={newEvent.color}
						onChange={handleInputChange}
					/>
					<button type='submit'>Добавить событие</button>
				</form>
			</div>
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin]}
				initialView='dayGridMonth'
				events={events}
			/>
		</section>
	)
}

export default Calendar
