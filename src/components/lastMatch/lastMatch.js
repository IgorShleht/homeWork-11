import './lastMatch.css'
import btnLabel from './btn-label.png'
import sochi from './sochi.png'
import ural from './ural.png'

export const LastMatch = () => {
	const handlerInfo = () => {
		alert('Game info')
	}
	return (
		<div className='match_mini'>
			<div className='title'>1-й тур | Тинькофф РПЛ</div>
			<div className='block_mini'>
				<div className='team_mini'>
					<img className='logo_mini' src={ural} alt='ural' />
					<div className='team_name_mini'>Урал</div>
				</div>
				<div className='result'>
					<div>2</div>
					<div>:</div>
					<div>1</div>
				</div>
				<div className='team_mini'>
					<img className='logo_mini' src={sochi} alt='sochi' />
					<div className='team_name_mini'>Сочи</div>
				</div>
			</div>
			<div className='footer_mini'>
				<div className='place_mini'>
					<div className='date_mini'>3 июля, 19:00</div>
					<div className='stadium_mini'>Екатеренбург Арена</div>
				</div>
				<button className='btn_arrow' onClick={handlerInfo}>
					<img src={btnLabel} alt='btnlabel' />
				</button>
			</div>
		</div>
	)
}
