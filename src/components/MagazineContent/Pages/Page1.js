import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Building from '../../Building';

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
				<Building
					height={250}
					top={100}
					left={0}
					zIndex={2}
					delay={0}
					ready={ready}
					rightLetter="S"
					leftBackground="url('http://z-e-b-u.com/Images/ubahn/ubahn3.jpg')"
				/>
				<Building
					height={200}
					width={100}
					top={150}
					left={140}
					zIndex={2}
					delay={100}
					ready={ready}
					leftLetter="t"
				/>
				<Building
					height={100}
					width={100}
					top={300}
					left={70}
					zIndex={3}
					delay={200}
					ready={ready}
					topLetter="r"
				/>
				<Building
					height={150}
					width={100}
					top={250}
					left={210}
					zIndex={4}
					delay={300}
					ready={ready}
					topLetter="e"
				/>
				<Building
					height={100}
					width={100}
					top={250}
					left={280}
					zIndex={2}
					delay={400}
					ready={ready}
					rightLetter="e"
				/>
				<Building
					height={200}
					width={100}
					top={100}
					left={350}
					zIndex={1}
					delay={500}
					ready={ready}
					leftLetter="m"
				/>
			</Buildings>
		);
	}
}

TitleScreen.defaultProps = {};

TitleScreen.propTypes = {};

export default TitleScreen;
