import * as React from 'react';

export const ChocoList = ({chocoList}) => (
	<div>
		{chocoList.map((item, count) => (
			<div className="donut" key={count}>
				<h5>{item.name}</h5>
				<p>{item.description}</p>
			</div>
		))}
	</div>
)