import * as React from 'react';
import {connect} from 'react-redux';
// imported to switch routes faster
import {browserHistory} from 'react-router';
// Component
import {NavButtons} from './components/navBarComps/navButtons';

const navHeader = function({sts, dsp}) {
	return (
		<div className="jumbotron">
			<center><h1>Heavenly Donuts</h1></center>
			<NavButtons/>
		</div>
	)
}

const mapStateToProps = function(state) {
	console.info("Container State: ", state);
	return {
		sts:{

		}
	};
}

const mapDispatchToProps = function(dispatch) {
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

export const NavHeader = connect(mapStateToProps, mapDispatchToProps)(navHeader);
