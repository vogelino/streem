import React from 'react';
import PropTypes from 'prop-types';
import './ScrollStory.css';
import ScrollStoryBlock from './ScrollStoryBlock';

const minMaxDefaults = { xMax: 0, xMin: 0, yMax: 0, yMin: 0 };

const findExtremePositions = (acc, { x, y }) => ({
	xMax: x > minMaxDefaults.xMax && x > acc.xMax ? x : acc.xMax,
	xMin: x < minMaxDefaults.xMin && x < acc.xMin ? x : acc.xMin,
	yMax: y > minMaxDefaults.yMax && y > acc.yMax ? y : acc.yMax,
	yMin: y < minMaxDefaults.yMin && y < acc.yMin ? y : acc.yMin,
});

const ScrollStory = ({ story, xPosition, yPosition }) => {
	const { xMax, xMin, yMax, yMin } = story
		.reduce(findExtremePositions, minMaxDefaults);

	const containerStyle = {
		width: `${((xMax - xMin) + 1)}px`,
		height: `${((yMax - yMin) + 1)}px`,
		transform: `translate(${-xPosition}px, ${-yPosition}px)`,
	};
	return (
		<div className="scroll-story" style={containerStyle}>
			{story.map((storyBlock) => (
				<ScrollStoryBlock
					key={`scroll-story-block-${storyBlock.x}-${storyBlock.y}`}
					{...storyBlock}
				/>
			))}
		</div>
	);
};

ScrollStory.propTypes = {
	yPosition: PropTypes.number.isRequired,
	xPosition: PropTypes.number.isRequired,
	story: PropTypes.arrayOf(PropTypes.shape(ScrollStoryBlock.propTypes)).isRequired,
};

export default ScrollStory;
