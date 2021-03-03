import { Drawer, List, ListItem } from '@material-ui/core';
import React from 'react';
import {scroller, Element} from 'react-scroll'

export default function SideDrawer(props) {


const handleScrollTo = (element) => {
scroller.scrollTo(element, {
	duration: 1500,
	delay: 100,
	smooth: true,
	offset: -130
})
props.close(false)
}

	return (
		<Drawer anchor="right" open={props.open} onClose={() => props.close(false)}>
			<List component="nav">
				<ListItem button onClick={() => handleScrollTo('start')}>
					Event Starts in
				</ListItem>
				<ListItem button onClick={() => handleScrollTo('nfo')}>
					Venue NFO
				</ListItem>
				<ListItem button onClick={() => handleScrollTo('highlights')}>
					Highlights
				</ListItem>
				<ListItem button onClick={() => handleScrollTo('pricing')}>
					Pricing
				</ListItem>
				<ListItem button onClick={() => handleScrollTo('location')}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
}
