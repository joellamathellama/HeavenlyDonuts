import {menuListAction} from './list.actions.js';

export const menuListApi = () => {
	return (dispatch) => {
		return fetch('/menuList')
			.then((res) => {
				if(res.status === 200){
					return res.json();
				}
				else{
					console.log("res", res);
					throw Error(res);
				}
			})
			.then((res) => {
				dispatch(menuListAction.initial(res.data));
			})
			.catch((err) => {
				console.error(err);
			})
	};
}