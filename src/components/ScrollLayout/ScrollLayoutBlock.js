import React from 'react';
import PropTypes from 'prop-types';

const ScrollLayoutBlock = ({ x, y, Component, props, progress }) => (
	<div
		className={`scroll-layout-block scroll-layout-block-${x}-${y}`}
		style={{ left: `${x * 100}vw`, top: `${y * 100}vh` }}
	>
		<Component {...props} progress={progress} />
	</div>
);

ScrollLayoutBlock.defaultProps = {
	progress: 0,
};

ScrollLayoutBlock.propTypes = {
	progress: PropTypes.number,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	Component: PropTypes.func.isRequired,
	props: PropTypes.shape({}),
};

export default ScrollLayoutBlock;
