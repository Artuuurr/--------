import React from 'react'

const Education = () => (
	<section className='education'>
		<div className='education-header'>
			<h1>Повышение квалификации</h1>
			<p>
				Специально разработанные курсы для улучшения навыков и знаний в области
				производства дверей. Каждый курс включает теоретические и практические
				занятия.
			</p>
		</div>

		<div className='course-categories'>
			<h2>Категории курсов:</h2>
			<div className='categories-buttons'>
				<button>Технологии производства</button>
				<button>Современные материалы</button>
				<button>Устойчивое производство</button>
				<button>Дизайн и эстетика дверей</button>
			</div>
		</div>

		<div className='certificate-info'>
			<h3>
				По окончании каждого курса участники получают сертификаты,
				подтверждающие квалификацию
			</h3>
			<img src='certificate.jpg' alt='Сертификат' />
		</div>

		<div className='feedback-section'>
			<h4>Оцените наши курсы по повышению квалификации</h4>
			<div className='feedback-card'>
				<p>Курс: Устойчивое производство</p>
				<div className='rating'>⭐⭐⭐⭐⭐</div>
				<p>
					Этот курс помог мне значительно улучшить мои знания и навыки в области
					производства дверей!
				</p>
			</div>
		</div>
	</section>
)

export default Education
