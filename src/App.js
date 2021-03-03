import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Featured from './components/featured/';
import EventNfo from './components/eventNfo/index';
import Highlight from './components/highLights/index';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App" style={{ height: '1500px' }}>
			<Header />
      <Element name="start">
			<Featured />
      </Element>
			<Element name="nfo">
				<EventNfo />
			</Element>
			<Element name="highlights">
				<Highlight />
			</Element>
			<Element name="pricing">
				<Pricing />
			</Element>
			<Element name="location">
				<Location />
			</Element>
			<Footer />
		</div>
	);
}

export default App;
