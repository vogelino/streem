import styled from 'styled-components';

export default (type, additionalStyles = '') => styled(type).attrs({
	style: ({ x = 0, y = 0, delay = 0, startAt = 0, delays = '' }) => ({
		top: `${y}px`,
		left: `${x}px`,
		transitionDelay: delays || `${delay + startAt}ms`,
	}),
})`
	position: absolute;
	transition: opacity 600ms cubic-bezier(.35,.71,.28,1.03);
	opacity: 0;
	transform-origin: 0 0;
	transform: scale(.5);
	pointer-events: none;
	${additionalStyles}
`;

