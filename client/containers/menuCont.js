import * as React from 'react';
import {connect} from "react-redux";
import {RoadWork} from '../components/warnings/roadWork';

const MenuPage = function() {
	return (
		<div>
			<h1>Menu Page</h1>
			<RoadWork/>
		</div>
	);
}

const mapStateToProps = function(state) {
	return {

	};
}

const mapDispatchToProps = function(dispatch) {
	return {

	};
}

export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(MenuPage);
