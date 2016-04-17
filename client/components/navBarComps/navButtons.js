// Packages
import * as React from 'react';
// Navigation Buttons( Home, Menu, Location, etc...)
export const NavButtons = ({sts, dsp}) => (
	<div className="btn-group btn-group-justified" role="group" aria-label="...">
		<div className="btn-group" role="group">
			<button type="button" className="btn btn-default" onClick={dsp.goHome}>Home</button>
		</div>
		<div className="btn-group" role="group">
			<button type="button" className="btn btn-default" onClick={dsp.goMenu}>Menu</button>
		</div>
		<div className="btn-group" role="group">
			<button type="button" className="btn btn-default" onClick={dsp.goLocation}>Location</button>
		</div>
	</div>
)