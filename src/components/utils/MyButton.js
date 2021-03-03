import { Button } from '@material-ui/core';
import React from 'react';
import TicketIcon from '../../resources/images/icons/ticket.png';

export default function MyButton({ text, link, bck, color }) {
	return (
		<div>
			<Button
				href={link}
				variant="contained"
				size="small"
				style={{
					background: `${bck}`,
					color: `${color}`
				}}
			>
				<img src={TicketIcon} className="iconImage" alt="icon_button" />
				{text}
			</Button>
		</div>
	);
}
