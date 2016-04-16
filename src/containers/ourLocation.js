var React = require('react');
var connect = require("react-redux").connect;

var ourLocation = function() {
	return (
		<div>
			<h1>Location Page123</h1>
		</div>
	);
}

var mapStateToProps = function(state) {
	return {

	};
}

var mapDispatchToProps = function(dispatch) {
	return {

	};
}

var WrappedLocation = connect(mapStateToProps, mapDispatchToProps)(ourLocation);

module.exports = WrappedLocation;