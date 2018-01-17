import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Building from '../../../Building';
import './Page1.css';
// import buildings from './buildings';

const patterns = [
	'fiesta.jpg',
	'junk-mail.jpg',
	'Barcode.jpg',
	'Envy_Rips_the_Night.jpg',
];

const getRandomPattern = () =>
	`url('/images/patterns/${patterns[Math.floor(Math.random() * patterns.length)]}')`;

const buildingPatterns = {
	s1: {
		top: getRandomPattern(),
		left: getRandomPattern(),
		right: getRandomPattern(),
	},
	t1: {
		top: getRandomPattern(),
		left: getRandomPattern(),
		right: getRandomPattern(),
	},
	r1: {
		top: getRandomPattern(),
		left: getRandomPattern(),
		right: getRandomPattern(),
	},
	e1: {
		top: getRandomPattern(),
		left: getRandomPattern(),
		right: getRandomPattern(),
	},
	e2: {
		top: getRandomPattern(),
		left: getRandomPattern(),
		right: getRandomPattern(),
	},
	m1: {
		top: getRandomPattern(),
		left: getRandomPattern(),
		right: getRandomPattern(),
	},
};

class TitleScreen extends Component {
	constructor(props) {
		super(props);

		this.state = { ready: false };
	}
	render() {
		const { ready } = this.state;
		return (
			<div onClick={() => this.setState({ ready: true })}>
				<Building
					key="S1"
					height={250}
					top={100 + 161}
					left={0 + 399}
					zIndex={2}
					delay={0}
					ready={ready}
					rightLetter="S"
					topBackground={buildingPatterns.s1.top}
					leftBackground={buildingPatterns.s1.left}
					rightBackground={buildingPatterns.s1.right}
					color="#FFF"
				/>
				<Building
					key="T1"
					height={200}
					width={100}
					top={150 + 161}
					left={140 + 399}
					zIndex={2}
					delay={100}
					ready={ready}
					leftLetter="t"
					topBackground={buildingPatterns.t1.top}
					leftBackground={buildingPatterns.t1.left}
					rightBackground={buildingPatterns.t1.right}
					color="#FFF"
				/>
				<Building
					key="R1"
					height={100}
					width={100}
					top={300 + 161}
					left={70 + 399}
					zIndex={3}
					delay={200}
					ready={ready}
					topLetter="r"
					topBackground={buildingPatterns.r1.top}
					leftBackground={buildingPatterns.r1.left}
					rightBackground={buildingPatterns.r1.right}
					color="#FFF"
				/>
				<Building
					key="E1"
					height={150}
					width={100}
					top={250 + 161}
					left={210 + 399}
					zIndex={4}
					delay={300}
					ready={ready}
					topLetter="e"
					topBackground={buildingPatterns.e1.top}
					leftBackground={buildingPatterns.e1.left}
					rightBackground={buildingPatterns.e1.right}
					color="#FFF"
				/>
				<Building
					key="E2"
					height={100}
					width={100}
					top={250 + 161}
					left={280 + 399}
					zIndex={2}
					delay={400}
					ready={ready}
					rightLetter="e"
					topBackground={buildingPatterns.e2.top}
					leftBackground={buildingPatterns.e2.left}
					rightBackground={buildingPatterns.e2.right}
					color="#FFF"
				/>
				<Building
					key="M1"
					height={200}
					width={100}
					top={100 + 161}
					left={350 + 399}
					zIndex={1}
					delay={500}
					ready={ready}
					leftLetter="m"
					topBackground={buildingPatterns.m1.top}
					leftBackground={buildingPatterns.m1.left}
					rightBackground={buildingPatterns.m1.right}
					color="#FFF"
				/>
				<img className={`ubahn-lang ${ready && 'ready'}`} src="/images/illustrations/Ubahn_lang.svg" />
				<img className={`typo-haeuser ${ready && 'ready'}`} src="/images/illustrations/TypoHaeuser.svg" />
				<img className={`cinema ${ready && 'ready'}`} src="/images/illustrations/building-cinema.png" />
				<img className={`streetart ${ready && 'ready'}`} src="/images/illustrations/Streetart_buildings.png" />
				<img className={`wurstbande ${ready && 'ready'}`} src="/images/illustrations/Wurstbande.png" />
			</div>
		);
		// return buildings.map((building) => (
		// 	<Building
		// 		{...building}
		// 		key={`${building.top}-${building.left}-${building.height}`}
		// 		ready={ready}
		// 	/>)
		// );
	}
}

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;
