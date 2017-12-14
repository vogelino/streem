import React from 'react';
import PropTypes from 'prop-types';

const ScrollStoryBlock = ({ x, y, Component, props }) => (
	<div
		className={`scroll-story-block scroll-story-block-${x}-${y}`}
		style={{ left: `${x * 100}vw`, top: `${y * 100}vh` }}
	>
		<Component {...props} />
	</div>
);

ScrollStoryBlock.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	Component: PropTypes.func.isRequired,
	props: PropTypes.shape({}),
};

export default ScrollStoryBlock;
