import React, { useState } from 'react'

const LoginModal = ({ showModal, handleClose }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		// Логика авторизации
		alert(`Авторизация пользователя: ${email}`)
		handleClose() // Закрытие модального окна после отправки
	}

	if (!showModal) return null

	return (
		<div className='modal-overlay' onClick={handleClose}>
			<div className='modal-content' onClick={e => e.stopPropagation()}>
				<h2>Авторизация</h2>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Пароль</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type='submit'>Войти</button>
				</form>
				<button className='close-modal' onClick={handleClose}>
					Закрыть
				</button>
			</div>
		</div>
	)
}

export default LoginModal
