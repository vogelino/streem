import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Building = styled.div.attrs({
	style: ({ height, width, background, easing, delay, zIndex, top, left }) => ({
		'--height': `${height}px`,
		'--width': `${width}px`,
		'--background': `${background}`,
		'--easing': `${easing}`,
		'--delay': `${delay}ms`,
		'--zIndex': zIndex,
		'--top': `${top}px`,
		'--left': `${left}px`,
	}),
})`
	position: absolute;
	z-index: var(--zIndex);
	top: var(--top);
	left: var(--left);
	width: 400px;
	height: 400px;
`;

const BuildingContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const BuildingFace = styled.div.attrs({
	style: ({ background }) => ({
		'--background': background,
	}),
})`
	top: 0;
	left: 0;
	position: absolute;
	overflow: hidden;
	text-align: center;
	line-height: var(--width);
	font-size: var(--width);
	font-weight: 700;
	transform-style: preserve-3d;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	color: white;
	background: var(--background);
	background-size: 300px auto;
	background-position: center center;
	width: var(--width);

	${({ right }) => right && css`
		transform-origin: 0 0;
		transform: skewY(-36deg) scaleX(.7);
		left: var(--width);
	`}

	${({ left }) => left && css`
		transform-origin: 100% 0;
		transform: skewY(36deg) scaleX(.7);
	`}
`;

const RoofFace = styled(BuildingFace)`
	height: var(--width);
	transform-origin: 50% 50%;
	transform: translate(50%, calc(var(--height) - var(--width))) rotateX(45deg) rotateZ(45deg);
	opacity: 0;
	transition: transform 1s var(--easing) var(--delay), opacity 100ms ease-out;
	
	${({ ready }) => ready && css`
		transform: translate(50%, calc(var(--width) * -1)) rotateX(45deg) rotateZ(45deg);
		opacity: 1;
	`}
`;

const SideFace = styled(BuildingFace)`
	max-height: 0;
	height: 2000px;
	margin-top: var(--height);
	transition: margin-top 1s var(--easing) var(--delay), max-height 1s var(--easing) var(--delay);

	${({ ready }) => ready && css`
		max-height: var(--height);
		margin-top: 0;
	`}
`;

const RightFace = styled(SideFace)`
	transform-origin: 0 0;
	transform: skewY(-36deg) scaleX(.7);
	left: var(--width);
`;

const LeftFace = styled(SideFace)`
	transform-origin: 100% 0;
	transform: skewY(36deg) scaleX(.7);
`;

const BuildingComponent = (props) => {
	const allProps = {
		easing: 'cubic-bezier(0,1.91,.56,.99)',
		...props,
	};
	return (
		<Building {...allProps}>
			<BuildingContainer>
				<RoofFace {...allProps} background={props.topBackground}>
					{props.topLetter}
				</RoofFace>
				<LeftFace {...allProps} background={props.leftBackground}>
					{props.leftLetter}
				</LeftFace>
				<RightFace {...allProps} background={props.rightBackground}>
					{props.rightLetter}
				</RightFace>
			</BuildingContainer>
		</Building>
	);
};

BuildingComponent.defaultProps = {
	topLetter: '',
	rightLetter: '',
	leftLetter: '',
	top: 0,
	left: 0,
	zIndex: 1,
	delay: 0,
	height: 100,
	width: 100,
	leftBackground: 'blue',
	topBackground: 'green',
	rightBackground: 'red',
};

BuildingComponent.propTypes = {
	topLetter: PropTypes.string,
	rightLetter: PropTypes.string,
	leftLetter: PropTypes.string,
	top: PropTypes.number,
	left: PropTypes.number,
	zIndex: PropTypes.number,
	delay: PropTypes.number,
	height: PropTypes.number,
	width: PropTypes.number,
	ready: PropTypes.bool,
	leftBackground: PropTypes.string,
	topBackground: PropTypes.string,
	rightBackground: PropTypes.string,
};

export default BuildingComponent;
