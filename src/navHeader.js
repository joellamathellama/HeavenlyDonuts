import * as React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

var navHeader = function({sts, dsp}) {
	return (
		<div className="jumbotron">
			<button onClick={dsp.goHome}>Home</button>
			<button onClick={dsp.goMenu}>Menu</button>
			<button onClick={dsp.goLocation}>Location</button>
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
			goHome() {
				browserHistory.push('/');
			},
			goMenu() {
				browserHistory.push('/menu');
			},
			goLocation() {
				browserHistory.push('/location');
			}
		}
	};
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(navHeader);