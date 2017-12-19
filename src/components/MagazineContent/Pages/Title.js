import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Page = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

const TitleWord = styled.span.attrs({
	style: ({ progress }) => {
		const height = 215 - (progress * 3000);
		return {
			top: `${(progress * 500) + 50}%`,
			height: `${height >= 0 ? height : 0}px`,
		};
	},
})`
	display: inline-block;
	height: 260px;
	font-size: 280px;
	line-height: 250px;
	font-family: 'Poppins';
	text-transform: uppercase;
	font-weight: 700;
	margin: 0;
	letter-spacing: .01em;
	position: absolute;
	padding: 0 100px 15px;
	left: 50%;
	overflow: hidden;
	color: #050F32;
`;

const Daria = styled(TitleWord)`
	transform: translate(-50%, -100%);
`;

const Thies = styled(TitleWord)`
	transform: translate(-50%, 0);
	color: #1D2F6D;
	margin-left: -3px;
`;

const TitlePage = ({ progress }) => (
	<Page>
		<Daria progress={progress}>Daria</Daria>
		<Thies progress={progress}>Thies</Thies>
	</Page>
);

TitlePage.propTypes = {
	progress: PropTypes.number.isRequired,
};

export default TitlePage;
