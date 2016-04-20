// Packages
import * as React from 'react';
import {connect} from "react-redux";
import {RoadWork} from '../components/alerts/roadWork';

const Order = () => (
	<div id="orderContainer">
		<RoadWork/>
		<h1>Order Page</h1>
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

export const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);
