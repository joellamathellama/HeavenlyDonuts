import {menuListAction} from './list.actions.js';

export const menuListApi = () => {
	return (dispatch) => {
		return fetch('/menuList')
			.then((res) => {// 500 errors from server, goes through this first .then promise and then to the .catch
				return res.json();
			})
			.then((res) => {
				dispatch(menuListAction.initial(res.data));
			})
			.catch((err) => {
				console.error("Error from the server! ", err);
			})
	};
}