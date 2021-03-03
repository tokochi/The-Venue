import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, {useState, useEffect} from 'react';
import SideDrawer from "./SideDrawer";

export default function Header() {
    const [drawer, setDrawer]=useState(false)
    const [headerShow, setHeaderShow]=useState(false)
useEffect(() => {
window.addEventListener('scroll', () => {
	if(window.scrollY > 0){
		setHeaderShow(true)
	} else {
		setHeaderShow(false)
	}
	})
	
}, []);

function toogleDrawer(value) {
setDrawer(value)
}
	return (
		<AppBar
			position="fixed"
			style={{
				backgroundColor: headerShow ?'#2f2f2f': 'transparent',
				boxShadow: 'none',
				padding: '10px 0px',
			}}
		>
			<Toolbar>
				<div className="header_logo">
					<div className="font_righteous header_logo_venue">The Venue</div>
					<div className="header_logo_title">Musical Events</div>
				</div>
				<IconButton
					aria-label="Menu"
					color="inherit"
					onClick={(value) => toogleDrawer(true)}
				>
					<MenuIcon />
				</IconButton>
                <SideDrawer
                open={drawer}
                close={(value) => toogleDrawer(value)}/>
			</Toolbar>
		</AppBar>
	);
}
