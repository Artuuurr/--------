import React, { useState } from 'react'
import login from '../../public/img/login.png'

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
				<div className='windModal'>
					<h2 className='titlemodal'>Вход в аккаунт</h2>
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<input
								placeholder='Email'
								type='email'
								id='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className='form-group'>
							<input
								placeholder='Пароль'
								type='password'
								id='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
								required
							/>
						</div>
						<p className='foggot'>
							<a>Забыл пароль?</a>
						</p>
						<button type='submit'>Войти</button>
					</form>
				</div>
				<div className='imgModal'>
					<img src={login} alt='Дверь' />
				</div>
			</div>
		</div>
	)
}

export default LoginModal
