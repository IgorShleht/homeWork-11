import './mainMatch.css'
import spartak from './spartak.png'
import loko from './lokomotiv.png'
import ticket from './ticket.png'
import play from './play.png'
import React, { useEffect, useState } from 'react'

export const MainMatch = () => {
	const [hours, setHours] = useState('00')
	const [minutes, setMinutes] = useState('00')
	const [seconds, setSeconds] = useState('00')

	const startTimer = () => {
		const deadline = '2021-12-14T18:20:00'

		setInterval(() => {
			const difference = Date.parse(deadline) - Date.parse(new Date())
			const hours = Math.floor(difference / (60 * 60 * 1000))
			const minutes = Math.floor((difference / (60 * 1000)) % 60)
			const seconds = Math.floor((difference / 1000) % 60)
			if (difference < 0) {
				setHours('00')
				setMinutes('00')
				setSeconds('00')
			} else {
				setHours(hours)
				setMinutes(minutes)
				setSeconds(seconds)
			}
		}, 1000)
	}
	useEffect(() => {
		startTimer()
	})

	const handlerBuyTicket = () => {
		alert('Buy ticket')
	}
	const handlerPlay = () => {
		alert('Play football')
	}

	return (
		<div className='mainMatch'>
			<div className='info'>
				<div className='title'>1-й тур | Тинькофф РПЛ</div>
				<div className='block'>
					<div className='team'>
						<img className='logo' src={spartak} alt='spartak' />
						<div className='team_name'>Спартак</div>
					</div>
					<div className='timer'>
						{('0' + hours).slice(-2)} : {('0' + minutes).slice(-2)} :{' '}
						{('0' + seconds).slice(-2)}
					</div>
					<div className='team'>
						<img className='logo' src={loko} alt='lokomotiv' />
						<div className='team_name'>Локомотив</div>
					</div>
				</div>
				<div className='footer'>
					<div className='place'>
						<div className='date'>19 июля, 19:00</div>
						<div className='stadium'>Открытие Банк Арена</div>
					</div>
					<div className='betting'>
						<div className='bet'>
							<button className='coefficient'>3.82</button>
							<span className='coefficient_text'>П1</span>
						</div>
						<div className='bet'>
							<button className='coefficient'>3.82</button>
							<span className='coefficient_text'>Х</span>
						</div>
						<div className='bet'>
							<button className='coefficient active'>3.82</button>
							<span className='coefficient_text'>П2</span>
						</div>
					</div>
					<div className='buy_ticket'>
						<button onClick={handlerBuyTicket}>
							<img className='ticket_logo' src={ticket} alt='ticket' />
							<div>Купить билет</div>
						</button>
					</div>
				</div>
			</div>
			<button className='watch' onClick={handlerPlay}>
				Смотреть трансляцию матча
				<div className='play'>
					<img src={play} alt='play' />
				</div>
			</button>
		</div>
	)
}
