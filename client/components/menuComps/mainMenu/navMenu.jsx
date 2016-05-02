import * as React from 'react';

export const NavMenu = ({showGlaze, showChoco}) => (
	<div id="mainMenu">
		<h1>Main Menu</h1>
		<div className="navMenu"><a href="#" onClick={showGlaze}>Glaze</a></div>
		<div className="navMenu"><a href="#" onClick={showChoco}>Chocolate</a></div>
	</div>
)