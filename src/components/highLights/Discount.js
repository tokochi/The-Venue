import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton'

export default function Discount() {
	const [ discountStart, setDiscountStart ] = useState(0);
	const [ discountEnd, setDiscountEnd ] = useState(30);

	const porcentage = () => {
		if (discountStart < discountEnd) {
			setDiscountStart(discountStart + 1);
		}
	};
useEffect(() => {
    setTimeout(() =>{porcentage()}, 30 )
   
}, [discountStart])
	return (
		<div className="center_wrapper">
			<div className="discount_wrapper">
				<Fade onReveal={() => porcentage()}>
					<div className="discount_porcentage">
						<span>{discountStart}%</span>
						<span>OFF</span>
					</div>
				</Fade>
				<Slide right>
					<div className="discount_description">
						<h3>Purchase ticket before 20th JUNE</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae nostrum
							possimus nesciunt suscipit expedita, quaerat dicta fugiat vel excepturi, mollitia officiis!
							Maxime numquam expedita adipisci dignissimos voluptates reprehenderit tenetur.
						</p>
						<div><MyButton
                        text="Purchase ticket"
                        bck="#ffa800"
                        color="#ffffff"
                        link="#"
                        /></div>
					</div>
				</Slide>
			</div>
		</div>
	);
}
