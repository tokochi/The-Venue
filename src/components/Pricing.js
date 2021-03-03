import React, {useState, useEffect} from 'react';
import MyButton from './utils/MyButton';
import Zoom from 'react-reveal/Zoom';

export default function Pricing() {
    const [prices, setPrices]=useState([100,150,250])
    const [positions, setPositions]=useState(['Balcony','Medium','Star'])
    const [delay, setDelay]=useState([500,0,500])
    const [linkTo, setLinkTo]=useState(['http://sales/b','http://sales/a','http://sales/c'])
    const [desc, setDesc]=useState(['Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas, earum nihil tempora aliquammolestiae corrupti dolor maxime, iure eius a non, accusantium porro dolorum ex. Veritatis doloremassumenda soluta.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas, earum nihil tempora aliquammolestiae corrupti dolor maxime, iure eius a non, accusantium porro dolorum ex. Veritatis doloremassumenda soluta.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas, earum nihil tempora aliquammolestiae corrupti dolor maxime, iure eius a non, accusantium porro dolorum ex. Veritatis doloremassumenda soluta.'])

const showBoxes = () => {
    return (
        prices.map((box, i) =>(
            <Zoom key={i} delay={delay[i]}>
<div className="pricing_item">
    <div className="pricing_inner_wrapper">
        <div className="pricing_title">
            <span>${prices[i]}</span>
            <span>{positions[i]}</span>
        </div>
        <div className="pricing_description">
            {desc[i]}
        </div>
        <div className="pricing_buttons">
            <MyButton
            text="Purchase"
            bck="#ffa800"
            color="#ffffff"
            link={linkTo[i]}
            />
        </div>
    </div>
</div>
</Zoom>
        ))

    )
}


	return (
		
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
					<h2>Pricing</h2>
                    <div className="pricing_wrapper">
{showBoxes()}
                    </div>
				</div>
			</div>
		
	);
}
