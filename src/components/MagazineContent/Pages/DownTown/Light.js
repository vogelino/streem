import styled from 'styled-components';

export default styled('span')`
	position: absolute;
	transition: opacity 300ms cubic-bezier(0.35, 0.71, 0.28, 1.03);
	opacity: 0;
	transform: scale(${({ scale }) => scale || 1})
		scaleX(${({ right }) => (right ? 1 : -1)});
	transition-delay: ${({ delay }) => (delay || 0) + 1000}ms;
`;
