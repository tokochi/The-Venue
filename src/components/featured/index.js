import React from 'react';
import Carrousel from './Carrousel';
import Timer from './Timer';

export default function Featured() {
	return (
		<div style={{ postion: 'relative' }}>
            
            <Carrousel/>
            
			<div className="artist_name">
				<div className="wrapper">Ariana Grande</div>
			</div>
            <Timer/>
		</div>
	);
}
