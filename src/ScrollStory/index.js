import React from 'react';
import PropTypes from 'prop-types';
import './ScrollStory.css';

const minMaxDefaults = { xMax: 0, xMin: 0, yMax: 0, yMin: 0 };

const findExtremePositions = (acc, { x, y }) => ({
	xMax: x > minMaxDefaults.xMax && x > acc.xMax ? x : acc.xMax,
	xMin: x < minMaxDefaults.xMin && x < acc.xMin ? x : acc.xMin,
	yMax: y > minMaxDefaults.yMax && y > acc.yMax ? y : acc.yMax,
	yMin: y < minMaxDefaults.yMin && y < acc.yMin ? y : acc.yMin,
});

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

const ScrollStory = ({ story, progress }) => {
	const { xMax, xMin, yMax, yMin } = story
		.reduce(findExtremePositions, minMaxDefaults);
	const containerStyle = {
		width: `${((xMax - xMin) + 1) * 100}vw`,
		height: `${((yMax - yMin) + 1) * 100}vh`,
		transform: `translateY(-${(progress * 3)}vh)`,
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
	progress: PropTypes.number.isRequired,
	story: PropTypes.arrayOf(PropTypes.shape(ScrollStoryBlock.propTypes)).isRequired,
};

export default ScrollStory;
