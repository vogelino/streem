import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Page extends Component {
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

