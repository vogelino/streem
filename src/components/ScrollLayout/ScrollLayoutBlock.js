import React from 'react';
import PropTypes from 'prop-types';

const ScrollLayoutBlock = ({ x, y, Component, props, progress, id }) => (
	<div
		className={`scroll-layout-block scroll-layout-block-${id}`}
		style={{ left: `${x * 100}vw`, top: `${y * 100}vh` }}
	>
		<div className="magazine-page">
			<Component {...props} progress={progress} />
		</div>
	</div>
);

ScrollLayoutBlock.defaultProps = {
	progress: 0,
};

ScrollLayoutBlock.propTypes = {
	progress: PropTypes.number,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	id: PropTypes.string.isRequired,
	Component: PropTypes.func.isRequired,
	props: PropTypes.shape({}),
};

export default ScrollLayoutBlock;
