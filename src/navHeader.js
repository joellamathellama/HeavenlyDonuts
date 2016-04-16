import * as React from 'react';
import {connect} from 'react-redux';
import {Link, History} from 'react-router';

var navHeader = function({sts, dsp}) {
	return (
		<div className="jumbotron">
			<Link to="home">Home</Link>
			<Link to="menu">Menu</Link>
			<Link to="location">Location</Link>
		</div>
	);
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