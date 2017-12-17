import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const v = (varName) => (props) => props[varName];

const Building = styled.div`
	position: absolute;
	z-index: ${v('zIndex')};
	top: ${v('top')}px;
	left: ${v('left')}px;
	width: 400px;
	height: 400px;
`;

const BuildingContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const BuildingFace = styled.div`
	top: 0;
	left: 0;
	position: absolute;
	overflow: hidden;
	text-align: center;
	line-height: ${v('width')}px;
	font-size: ${v('width')}px;
	font-weight: 700;
	transform-style: preserve-3d;
	font-size: 70px;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	color: white;
	background: ${v('color')};
	width: ${v('width')}px;

	${({ roof }) => roof && css`
		height: ${v('width')}px;
		transform-origin: 50% 50%;
		transform: translate(50%, ${({ height, width }) => height - width}px) rotateX(45deg) rotateZ(45deg);
		opacity: 0;
		transition: transform 1s ${v('easing')} ${v('delay')}ms, opacity 100ms ease-out;
	`}

	${({ roof, ready }) => roof && ready && css`
		transform: translate(50%, -${v('width')}px) rotateX(45deg) rotateZ(45deg);
		opacity: 1;
	`}

	${({ side }) => side && css`
		max-height: 0;
		height: 2000px;
		margin-top: ${v('height')}px;
		transition: margin-top 1s ${v('easing')} ${v('delay')}ms, max-height 1s ${v('easing')} ${v('delay')}ms;
	`}

	${({ side, ready }) => side && ready && css`
		max-height: ${v('height')}px;
		margin-top: 0;
	`}

	${({ right }) => right && css`
		transform-origin: 0 0;
		transform: skewY(-36deg) scaleX(.7);
		left: ${v('width')}px;
	`}

	${({ left }) => left && css`
		transform-origin: 100% 0;
		transform: skewY(36deg) scaleX(.7);
	`}
`;

const BuildingCompoenent = ({
	topLetter,
	leftLetter,
	rightLetter,
	top,
	left,
	zIndex,
	delay,
	height,
	ready,
}) => {
	const common = {
		easing: 'cubic-bezier(0,1.91,.56,.99)',
		width: 100,
		height,
		delay,
		ready,
	};
	return (
		<Building {...{ top, left, zIndex }}>
			<BuildingContainer>
				<BuildingFace {...common} roof color="blue">
					{topLetter}
				</BuildingFace>
				<BuildingFace {...common} side left color="green">
					{leftLetter}
				</BuildingFace>
				<BuildingFace {...common} side right color="red">
					{rightLetter}
				</BuildingFace>
			</BuildingContainer>
		</Building>
	);
};

BuildingCompoenent.defaultProps = {
	topLetter: '',
	rightLetter: '',
	leftLetter: '',
	top: 0,
	left: 0,
	zIndex: 1,
	delay: 0,
	height: 100,
};

BuildingCompoenent.propTypes = {
	topLetter: PropTypes.string,
	rightLetter: PropTypes.string,
	leftLetter: PropTypes.string,
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	zIndex: PropTypes.number.isRequired,
	delay: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	ready: PropTypes.bool.isRequired,
};

export default BuildingCompoenent;
