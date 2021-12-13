import './nextMatch.css'
import cska from './cska.png'
import dinamo from './dinamo.png'
import ticket from './ticket.png'

export const NextMatch = () => {
	const handlerTicket = () => {
		alert('Buy ticket')
	}
	return (
		<div className='match_mini'>
			<div className='title'>1-й тур | Тинькофф РПЛ</div>
			<div className='block_mini'>
				<div className='team_mini'>
					<img className='logo_mini' src={cska} alt='cska' />
					<div className='team_name_mini'>ЦСКА</div>
				</div>
				<div className='score'>-:-</div>
				<div className='team_mini'>
					<img className='logo_mini' src={dinamo} alt='dinamo' />
					<div className='team_name_mini'>Динамо</div>
				</div>
			</div>
			<div className='footer_mini'>
				<div className='place_mini'>
					<div className='date_mini'>24 июля, 19:00</div>
					<div className='stadium_mini'>ВЭБАрена</div>
				</div>
				<button className='btn_tick' onClick={handlerTicket}>
					<img src={ticket} alt='ticket' />
				</button>
			</div>
		</div>
	)
}
