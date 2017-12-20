import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Building from '../../../Building';
import buildings from './buildings';

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
		return buildings.map((building) => (
			<Building
				{...building}
				key={`${building.top}-${building.left}-${building.height}`}
				ready={ready}
			/>)
		);
	}
}

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;
