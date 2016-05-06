// Packages
import * as React from 'react';
import {connect} from 'react-redux';
const R = require('react-addons-css-transition-group');
// Files
import {menuListApi} from '../apis/menuListApi';
import {MenuList} from '../components/menuComps/mainMenu/menuList.jsx';
// Menu Component
const MenuPage = React.createClass({
	componentWillMount() {
		this.props.dsp.menuList();
	},
	render() {
		return (
			<div>
				<center>
					<h1>Main Menu</h1>
      		<div id="menuList">
	      		<MenuList menuList={this.props.sts.menuList}/>
	      	</div>
	    	</center>
			</div>
		);
	}
})

const mapStateToProps = (state) => {
	return {
		sts: {
			menuList: state.menuList
		}
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		dsp: {
			menuList() {
				dispatch(menuListApi());
			}
		}
	};
}

export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(MenuPage);
