import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Shake } from 'reshake';
import './WiggleText.css';

const commonShakeProps = {
	dur: 300,
	max: 100,
	fixed: true,
	fixedStop: false,
	freez: false,
};
const normalShakeProps = {
	h: 1,
	v: 1,
	r: 1,
	int: 20,
};
const hoveredShakeProps = {
	h: 5,
	v: 6,
	r: 3,
	int: 2,
};

class Charachter extends Component {
	constructor(props) {
		super(props);

		this.state = { isHovered: false };
	}
	render() {
		const { charachter } = this.props;
		const { isHovered } = this.state;
		const shakeProps = isHovered ? hoveredShakeProps : normalShakeProps;
		return (
			<Shake
				className="wiggle-text-character"
				{...commonShakeProps}
				{...shakeProps}
				onMouseEnter={() => {
					this.setState({ isHovered: true });
					const timeout = setTimeout(() => {
						this.setState({ isHovered: false });
						clearTimeout(timeout);
					}, 500);
				}}
			>
				{charachter}
			</Shake>
		);
	}
}

Charachter.propTypes = {
	charachter: PropTypes.string.isRequired,
};

const Charachters = ({ text }) => text.split('').map((charachter, index) =>
	<Charachter key={`${charachter}-${index}`} charachter={charachter} />
);

export default Charachters;
