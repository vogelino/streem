import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Screen = styled.div`
	display: block;
	border: none;
	position: relative;
	width: 100vw;
	height: 100vh;
	background: none;

	&.ready > * {
		opacity: 1;
	}
`;


export default class Page extends Component {
	static Screen = Screen;

	constructor(props) {
		super(props);

		this.state = { ready: false };
	}

	componentDidMount() {
		setTimeout(() => this.setState({ ready: true }), 1000);
	}

	render() {
		return this.props.render(this.state);
	}
}

Page.propTypes = {
	render: PropTypes.func.isRequired,
};

