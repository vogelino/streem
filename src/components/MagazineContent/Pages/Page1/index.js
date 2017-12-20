import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Building from '../../../Building';
import buildings from './buildings';

const Buildings = styled.div`
	width: 560px;
	height: 420px;
	position: relative;
	margin: calc(50vh - 210px) auto;
`;

class TitleScreen extends Component {
	constructor(props) {
		super(props);

		this.state = { ready: false };
	}
	componentDidMount() {
		const timeout = setTimeout(() => {
			clearTimeout(timeout);
			this.setState({ ready: true });
		}, 800);
	}
	render() {
		const { ready } = this.state;
		return (
			<Buildings>
				{buildings.map((building) => <Building {...building} ready={ready} />)}
			</Buildings>
		);
	}
}

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;
