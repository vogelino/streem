import React from 'react';
import styled from 'styled-components';
import ScrollLayout from '../ScrollLayout';

const ScrollTimelineWrapper = styled.div`
	position: relative;
	width: 1440px;
	height: 800px;
	overflow: scroll;
`;

const ScrollTimelineContent = styled.div`
	width: 2880px;
	height: 1600px;
	top: 0;
	left: 0;
	overflow: hidden;
`;

const onScroll = ({ target }) => {
	const { scrollTop, scrollLeft } = target;
	let newScrollLeft = scrollLeft;
	let newScrollTop = scrollTop;

	if (newScrollTop !== 0 && newScrollTop !== 800) {
		newScrollLeft = newScrollLeft < 720 ? 0 : 1440;
	}
	if (newScrollLeft !== 0 && newScrollLeft !== 1440) {
		newScrollTop = newScrollTop < 400 ? 0 : 800;
	}

	target.scrollLeft = newScrollLeft; // eslint-disable-line no-param-reassign
	target.scrollTop = newScrollTop; // eslint-disable-line no-param-reassign
};

const ScrollTimeline = ({ layout }) => (
	<ScrollTimelineWrapper onScroll={onScroll}>
		<ScrollTimelineContent>
			<ScrollLayout layout={layout} />
		</ScrollTimelineContent>
	</ScrollTimelineWrapper>
);

ScrollTimeline.propTypes = {
	layout: ScrollLayout.propTypes.layout,
};

export default ScrollTimeline;
