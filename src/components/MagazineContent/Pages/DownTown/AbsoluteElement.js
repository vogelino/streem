import styled from 'styled-components';

export default (type) => styled(type).attrs({
	style: ({ x = 0, y = 0, delay = 0, startAt = 0, isVisible = false }) => ({
		top: `${y}px`,
		left: `${x}px`,
		transitionDelay: `${delay + startAt}ms`,
		backgroundColor: (isVisible ? 'red' : 'blue'),
	}),
})`
	position: absolute;
	transition: opacity 600ms cubic-bezier(.35,.71,.28,1.03);
	opacity: 0;
	transform-origin: 0 0;
	transform: scale(.5);
`;

