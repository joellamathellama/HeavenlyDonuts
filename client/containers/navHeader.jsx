// Packages
import * as React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
// Component
import {NavButtons} from '../components/navBarComps/navButtons.jsx';

const navHeader = function({sts, dsp}) {
	return (
		<div className="jumbotron">
			<div id="navName">
				<h1>Donut Store</h1>
			</div>
			<div id="navRight">
				Navigation right(Temporary)
			</div>
			<NavButtons sts={sts} dsp={dsp}/>
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
			},
			goOrder() {
				browserHistory.push('/order');
			}
		}
	};
}

export const NavHeader = connect(mapStateToProps, mapDispatchToProps)(navHeader);
