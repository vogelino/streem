import React from 'react';
import PropTypes from 'prop-types';

const ScrollLayoutBlock = ({ x, y, Component, props }) => (
	<div
		className={`scroll-layout-block scroll-layout-block-${x}-${y}`}
		style={{ left: `${x * 100}vw`, top: `${y * 100}vh` }}
	>
		<Component {...props} />
	</div>
);

ScrollLayoutBlock.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	Component: PropTypes.func.isRequired,
	props: PropTypes.shape({}),
};

export default ScrollLayoutBlock;
