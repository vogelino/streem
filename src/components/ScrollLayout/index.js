import React from 'react';
import PropTypes from 'prop-types';
import './ScrollLayout.css';
import ScrollLayoutBlock from './ScrollLayoutBlock';

const minMaxDefaults = { xMax: 0, xMin: 0, yMax: 0, yMin: 0 };

const findExtremePositions = (acc, { x, y }) => ({
	xMax: x > minMaxDefaults.xMax && x > acc.xMax ? x : acc.xMax,
	xMin: x < minMaxDefaults.xMin && x < acc.xMin ? x : acc.xMin,
	yMax: y > minMaxDefaults.yMax && y > acc.yMax ? y : acc.yMax,
	yMin: y < minMaxDefaults.yMin && y < acc.yMin ? y : acc.yMin,
});

const ScrollLayout = ({ layout, xPosition, yPosition }) => {
	const { xMax, xMin, yMax, yMin } = layout
		.reduce(findExtremePositions, minMaxDefaults);

	const containerStyle = {
		width: `${((xMax - xMin) + 1)}px`,
		height: `${((yMax - yMin) + 1)}px`,
		transform: `translate(${-xPosition}px, ${-yPosition}px)`,
	};
	return (
		<div className="scroll-layout" style={containerStyle}>
			{layout.map((layoutBlock) => (
				<ScrollLayoutBlock
					key={`scroll-layout-block-${layoutBlock.x}-${layoutBlock.y}`}
					{...layoutBlock}
				/>
			))}
		</div>
	);
};

ScrollLayout.propTypes = {
	yPosition: PropTypes.number.isRequired,
	xPosition: PropTypes.number.isRequired,
	layout: PropTypes.arrayOf(PropTypes.shape(ScrollLayoutBlock.propTypes)).isRequired,
};

export default ScrollLayout;
