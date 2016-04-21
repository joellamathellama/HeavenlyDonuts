// Packages
import * as React from 'react';
import {connect} from 'react-redux';
const R = require('react-addons-css-transition-group');
// Files
import {testCall} from '../api/testApi/testCalls';
import {ChocoList} from '../components/menuComps/mainMenu/chocoList.jsx';
import {GlazeList} from '../components/menuComps/mainMenu/glazeList.jsx';
// Menu Component
const MenuPage = React.createClass({
	getInitialState() {
		return {
			mockData: {},
			mainMenu: true,
			glaze: false,
			choco: false
		};
	},
	componentWillMount() {
		this.props.dsp.mockData();
	},
	showMain() {
		this.setState({glaze: false, choco: false});
		setTimeout(() => {
			this.setState({mainMenu: true});
		}, 100)
	},
	showGlaze() {
		this.setState({mainMenu: false, choco: false});
		setTimeout(() => {
			this.setState({glaze: true});
		}, 100)
	},
	showChoco() {
		this.setState({mainMenu: false, glaze: false});
		setTimeout(() => {
			this.setState({choco: true});
		}, 100)
	},
	render() {
		return (
			<div>
				<center>
					<div className="navMenu"><a href="#" onClick={this.showMain}><b><u>Main Menu</u></b></a></div>
					<R transitionName="fadein" transitionEnterTimeout={300} transitionLeaveTimeout={1}>
						{this.state.mainMenu &&
							<div id="mainMenu">
								<h1>Main Menu</h1>
								<div className="navMenu"><a href="#" onClick={this.showGlaze}>Glaze</a></div>
								<div className="navMenu"><a href="#" onClick={this.showChoco}>Chocolate</a></div>
							</div>
						}
		      	{this.state.glaze && 
		      		<div id="menuGlaze">
			      		<h1>Glaze</h1>
			      		<GlazeList glazeList={this.props.sts.mockData.glaze}/>
			      	</div>
		      	}
		      	{this.state.choco && 
		      		<div id="menuChoco">
			      		<h1>Chocolate</h1>
			      		<ChocoList chocoList={this.props.sts.mockData.choco}/>
			      	</div>
		      	}
    			</R>
	    	</center>
			</div>
		);
	}
})

const mapStateToProps = (state) => {
	return {
		sts: {
			mockData: state.mockData
		}
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		dsp: {
			mockData() {
				dispatch(testCall());
			}
		}
	};
}

export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(MenuPage);
