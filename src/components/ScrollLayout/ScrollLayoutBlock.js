import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScrollLayoutBlockWrapper = styled.div.attrs({
	style: ({ x, y }) => ({
		left: `${x * 100}vw`,
		top: `${y * 100}vh`,
	}),
})`
	position: absolute;
	width: 1440px;
	height: 800px;
	cursor: url(https://deis.com/assets/images/svg/circle.svg) 4 12, auto;
	user-select: none;
	z-index: ${({ zIndex }) => zIndex};
`;

const MagazinePage = styled.div`
	position: relative;
	width: 1440px;
	height: 800px;
`;

const ScrollLayoutBlock = ({ x, y, Component, props, progress, id, zIndex }) => (
	<ScrollLayoutBlockWrapper {...{ x, y, zIndex }} id={`scroll-layout-block-${id}`}>
		<MagazinePage>
			<Component {...props} progress={progress} />
		</MagazinePage>
	</ScrollLayoutBlockWrapper>
);

ScrollLayoutBlock.defaultProps = {
	progress: 0,
	zIndex: 0,
};

ScrollLayoutBlock.propTypes = {
	progress: PropTypes.number,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	zIndex: PropTypes.number,
	id: PropTypes.string.isRequired,
	Component: PropTypes.func.isRequired,
	props: PropTypes.shape({}),
};

export default ScrollLayoutBlock;
