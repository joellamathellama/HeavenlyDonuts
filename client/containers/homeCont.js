import * as React from 'react';
import {connect} from 'react-redux';
import {RoadWork} from '../components/warnings/roadWork';

const homePage = () => (
	<div>
		<RoadWork/>
		<h1>Home Page123</h1>
	</div>
);

const mapStateToProps = (state) => {
	return {

	};
}

const mapDispatchToProps = (dispatch) => {
	return {

	};
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(homePage);