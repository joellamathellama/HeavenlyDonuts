// var React = require('react');
// var connect = require("react-redux").connect;

// var MiddleDiv = function() {
// 	return (
// 		<h1>Hello</h1>
// 	);
// }

// var mapStateToProps = function(state) {
// 	return {

// 	};
// }

// var mapDispatchToProps = function(dispatch) {
// 	return {

// 	};
// }

// module.exports = connect(mapStateToProps, mapDispatchToProps)(MiddleDiv);

var React = require('react');

var Home = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <h1>Hello</h1>
        <p>home</p>
      </div>
    );
  }
});

module.exports = Home;