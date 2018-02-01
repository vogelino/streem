import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollLayoutBlock from './ScrollLayoutBlock';

const ScrollLayoutWrapper = styled.div`
	width: 2880px;
	height: 1600px;
	background: url('/images/Floor.jpg');
	background-size: 2880px;
	background-position: 0 0;
	background-repeat: no-repeat;
	overflow: hidden;
`;

const ScrollLayout = ({ layout }) => (
	<ScrollLayoutWrapper>
		{layout.map((layoutBlock) => (
			<ScrollLayoutBlock
				key={layoutBlock.id}
				{...layoutBlock}
			/>
		))}
	</ScrollLayoutWrapper>
);

ScrollLayout.propTypes = {
	layout: PropTypes.arrayOf(PropTypes.shape(ScrollLayoutBlock.propTypes))
		.isRequired,
};

export default ScrollLayout;
