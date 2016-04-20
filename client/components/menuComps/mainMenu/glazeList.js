import * as React from 'react';

export const GlazeList = ({glazeList}) => (
	<div>
		{glazeList.map((item, count) => (
			<div className="donut" key={count}>
				<h5>{item.name}</h5>
				<p>{item.description}</p>
			</div>
		))}
	</div>
)