import * as React from 'react';

export const MenuList = ({menuList}) => {
	function toAmount(amount){
	  amount = Number(amount);
	  if (isNaN(amount)){
	    throw 'invalid: can\'t convert input';
	  }
	  return (amount/100).toFixed(2);
	}
	return (
		<div>
			{menuList.map((item, count) => (
				<div key={count}>
				  <div className="col-sm-6 col-md-4">
				    <div className="thumbnail">
				      <img className="thumbImage" src="http://cdn1.theodysseyonline.com/files/2015/11/06/635824215933915543-1948157098_chocolate%20frosted.jpg" alt="..."/>
				      <div className="caption">
				        <h3>{item.name}</h3>
				        <p>{item.info}</p>
				        <p>${toAmount(item.price)}</p>
				      </div>
				    </div>
				  </div>
				</div>
			))}
		</div>
	);
}