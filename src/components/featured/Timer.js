import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import moment from 'moment';

export default function Timer() {
	const deadline = '2021-12-25';
	const [ days, setDays ] = useState('0');
	const [ minutes, setMinutes ] = useState('0');
	const [ hours, setHours ] = useState('0');
	const [ secondes, setSecondes ] = useState('0');

	useEffect(() => {
		setInterval(() => {
			const time = moment(deadline).diff(moment());
			setSecondes(moment(time).format('ss'));
			setMinutes(moment(time).format('mm'));
			setHours(moment(time).format('hh'));
			setDays(moment(time).format('DDD'));
		}, 1000);
	}, []);

	return (
		<Slide left delay={1000}>
			<div className="countdown_wrapper">
				<div className="countdown_top">Event start in</div>
				<div className="countdown_bottom">
					<div className="countdown_item">
						<div className="countdown_time">{days}</div>
						<div className="countdown_tag">Days</div>
					</div>
					<div className="countdown_item">
						<div className="countdown_time">{hours}</div>
						<div className="countdown_tag">Hours</div>
					</div>
					<div className="countdown_item">
						<div className="countdown_time">{minutes}</div>
						<div className="countdown_tag">Min</div>
					</div>
					<div className="countdown_item">
						<div className="countdown_time">{secondes}</div>
						<div className="countdown_tag">Sec</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}
