import React, { Component } from 'react';
import './App.css';
import '../../polyfills/optimizedResize';
import MagazineContent from '../MagazineContent';
import TitleScreen from '../TitleScreen';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			windowWidth: document.body.clientWidth,
			windowHeight: document.body.clientHeight,
			page: 'home',
		};
	}
	componentDidMount() {
		window.addEventListener('optimizedResize', () => this.setState({
			windowWidth: document.body.clientWidth,
			windowHeight: document.body.clientHeight,
		}));
	}
	render() {
		const { windowHeight, windowWidth, page } = this.state;
		return (
			<div className="app">
				<div className={`page page-home ${page === 'home' && 'page-active'}`}>
					<TitleScreen onEnterContent={() => this.setState({ page: 'magazine' })} />
				</div>
				<div className={`page page-magazine ${page === 'magazine' && 'page-active'}`}>
					<MagazineContent {...{ windowWidth, windowHeight }} />
				</div>
			</div>
		);
	}
}

export default App;
