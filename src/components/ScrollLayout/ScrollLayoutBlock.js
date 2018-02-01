import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScrollLayoutBlockWrapper = styled.div`
	position: relative;
	float: left;
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

const ScrollLayoutBlock = ({ x, y, Component, props, zIndex }) => (
	<ScrollLayoutBlockWrapper {...{ x, y, zIndex }}>
		<MagazinePage>
			<Component {...props} />
		</MagazinePage>
	</ScrollLayoutBlockWrapper>
);

ScrollLayoutBlock.defaultProps = {
	zIndex: 0,
};

ScrollLayoutBlock.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	zIndex: PropTypes.number,
	Component: PropTypes.func.isRequired,
	props: PropTypes.shape({}),
};

export default ScrollLayoutBlock;
