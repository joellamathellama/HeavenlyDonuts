var React = require('react');
var connect = require("react-redux").connect;

var MenuPage = function() {
	return (
		<div>
			<h1>Menu Page123</h1>
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

var WrappedMenuPage = connect(mapStateToProps, mapDispatchToProps)(MenuPage);

module.exports = WrappedMenuPage;