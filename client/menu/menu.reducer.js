export const menuList = (state = [], action) => {
  switch(action.type){
  	case 'INITIAL':
  		return [...action.menuList];
  	default:
  		return state;
  }
};
