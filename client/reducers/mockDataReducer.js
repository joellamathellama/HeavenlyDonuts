export const mockData = (state, action) => {
  if(state === undefined){
    return state = {};
  }
  switch(action.type){
  	case 'UPDATE':
  		return action.mockData;
  	default:
  		return state;
  }
};
