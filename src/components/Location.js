import React from 'react';

export default function Location() {
	return (
		<div className="location_wrapper">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.4611641245438!2d-96.80142858481788!3d32.78002938097117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9918e993c711%3A0xa9073cfe6d9a606a!2sMagnolia%20Dallas%20Downtown!5e0!3m2!1sen!2sdz!4v1614742740344!5m2!1sen!2sdz"
				width="100%"
				height="500"
				frameborder="0"
				allowFullScreen
			/>
			<div className="location_tag">
				<div>Location</div>
			</div>
		</div>
	);
}
