import React from 'react';
import PropTypes from 'prop-types';
import Building from '.';

const BuildingsList = ({ list }) => list.map(({ building }) => (
	<Building
		height={250}
		top={100}
		left={0}
		zIndex={2}
		delay={0}
		ready={ready}
		rightLetter="S"
		leftBackground={getRandomPattern()}
		rightBackground={getRandomPattern()}
		topBackground={getRandomPattern()}
	/>
));

BuildingsList.defaultProps = {

};

BuildingsList.propTypes = {
	topLetter: PropTypes.string,
	rightLetter: PropTypes.string,
	leftLetter: PropTypes.string,
	top: PropTypes.number,
	left: PropTypes.number,
	zIndex: PropTypes.number,
	delay: PropTypes.number,
	height: PropTypes.number,
	width: PropTypes.number,
	ready: PropTypes.bool,
	leftBackground: PropTypes.string,
	topBackground: PropTypes.string,
	rightBackground: PropTypes.string,
};

export default BuildingsList;
