import * as React from 'react';
import {connect} from "react-redux";
import {RoadWork} from '../components/warnings/roadWork';

const ourLocation = function() {
	return (
		<div>
			<h1>Location Page</h1>
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

export const LocContainer = connect(mapStateToProps, mapDispatchToProps)(ourLocation);
