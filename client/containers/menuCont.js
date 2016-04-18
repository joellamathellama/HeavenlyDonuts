// Packages
import * as React from 'react';
import {connect} from "react-redux";
const R = require('react-addons-css-transition-group');
// Components

const MenuPage = React.createClass({
	getInitialState() {
		return {
			mockList: {
				glaze: [
					{
						name: "Glaze Donut",
						description: "baked dough, then covered in sugar glaze."
					},
					{
						name: "Glaze Twist",
						description: "baked dough, twisted, then covered in sugar glaze."
					}
				],
				choco: [
					{
						name: "Chocolate Donut",
						description: "baked dough, then covered in chocolate glaze."
					},
					{
						name: "Chocolate Twist",
						description: "baked dough, then covered in chocolate glaze."
					}
				]
			},
			mainMenu: true,
			glaze: false,
			choco: false
		};
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
			      		{this.state.mockList.glaze.map((item, count) => (
			      			<div className="donut" key={count}>
			      				<h5>{item.name}</h5>
			      				<p>{item.description}</p>
			      			</div>
			      		))}
			      	</div>
		      	}
		      	{this.state.choco && 
		      		<div id="menuChoco">
			      		<h1>Chocolate</h1>
				      		{this.state.mockList.choco.map((item, count) => (
				      			<div className="donut" key={count}>
				      				<h5>{item.name}</h5>
				      				<p>{item.description}</p>
			      				</div>
				      		))}
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

	};
}

const mapDispatchToProps = (dispatch) => {
	return {

	};
}

export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(MenuPage);
