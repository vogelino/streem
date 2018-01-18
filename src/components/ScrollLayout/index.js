import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollLayoutBlock from './ScrollLayoutBlock';

const ScrollLayoutWrapper = styled('div')`
	background: url('/images/Floor.jpg');
	background-size: 2880px;
	background-position: 0 0;
	background-repeat: no-repeat;
	position: fixed;
`;

const minMaxDefaults = { xMax: 0, xMin: 0, yMax: 0, yMin: 0 };

const findExtremePositions = (acc, { x, y }) => ({
	xMax: x > minMaxDefaults.xMax && x > acc.xMax ? x : acc.xMax,
	xMin: x < minMaxDefaults.xMin && x < acc.xMin ? x : acc.xMin,
	yMax: y > minMaxDefaults.yMax && y > acc.yMax ? y : acc.yMax,
	yMin: y < minMaxDefaults.yMin && y < acc.yMin ? y : acc.yMin,
});

const ScrollLayout = ({ layout, xPosition, yPosition, progress }) => {
	const { xMax, xMin, yMax, yMin } = layout
		.reduce(findExtremePositions, minMaxDefaults);

	const containerStyle = {
		width: `${((xMax - xMin) + 1)}00vw`,
		height: `${((yMax - yMin) + 1)}00vh`,
		transform: `translate(${-xPosition}px, ${-yPosition}px)`,
	};
	return (
		<ScrollLayoutWrapper className="scroll-layout" style={containerStyle}>
			{layout.map((layoutBlock) => (
				<ScrollLayoutBlock
					key={layoutBlock.id}
					progress={progress}
					{...layoutBlock}
				/>
			))}
		</ScrollLayoutWrapper>
	);
};

ScrollLayout.propTypes = {
	yPosition: PropTypes.number.isRequired,
	xPosition: PropTypes.number.isRequired,
	progress: PropTypes.number.isRequired,
	layout: PropTypes.arrayOf(PropTypes.shape(ScrollLayoutBlock.propTypes)).isRequired,
};

export default ScrollLayout;
