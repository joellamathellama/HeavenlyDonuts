
export const mockData = (state = {}, action) => {
  switch(action.type){
  	case 'UPDATE':
  		return action.mockData;
  	default:
  		return state;
  }
};
