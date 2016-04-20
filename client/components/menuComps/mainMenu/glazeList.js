import * as React from 'react';

export const GlazeList = ({glazeList}) => (
	<div>
		{glazeList.map((item, count) => (
			<div key={count}>
			  <div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <img className="thumbImage" src="http://cdn1.theodysseyonline.com/files/2015/11/06/635824215933915543-1948157098_chocolate%20frosted.jpg" alt="..."/>
			      <div className="caption">
			        <h3>{item.name}</h3>
			        <p>{item.description}</p>
			      </div>
			    </div>
			  </div>
			</div>
		))}
	</div>
)