import {testData} from '../../actions/testActions/testData';

export const testCall = function() {
	return function(dispatch) {
		return fetch('/test')
			.then(function(res) {
				return res.json();
			})
			.then(function(data) {
				dispatch(testData.testData(data));
			})
			.catch(function(err) {
				console.error("/test error", err);
			});
	};
};