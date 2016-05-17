"use strict";
import * as React from 'react';
import {connect} from "react-redux";
import {RoadWork} from '../alerts/roadWork.jsx';

const ourLocation = () => (
	<div>
		<RoadWork/>
		<h1>Location Page</h1>
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

export const LocContainer = connect(mapStateToProps, mapDispatchToProps)(ourLocation);
