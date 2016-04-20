export const mockData = (state, action) => {
  if(state === undefined){
    return {};
  }
  switch(action.type){
  	case 'UPDATE':
  		return action.mockData;
  	default:
  		return state;
  }
};
