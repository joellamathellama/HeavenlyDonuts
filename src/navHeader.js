import * as React from 'react';
import {connect} from 'react-redux';

var navHeader = function({sts, dsp}) {
	return (
		<div className="jumbotron">
			<a href="/">Home</a>
			<a href="/menu">Menu</a>
			<a href="/location">Location</a>
		</div>
	)
}

var mapStateToProps = function(state) {
	console.info("Container State: ", state);
	return {
		sts:{

		}
	};
}

var mapDispatchToProps = function(dispatch) {
	return {
		dsp:{

		}
	};
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(navHeader);