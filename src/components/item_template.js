import React, {Component} from 'react';

export default function(props) {
		return (
				<div className = "col-md-2">
					<div class = "card card-block">
						<img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style = "height : 300px, width : 300px" src={props.url} data-holder-rendered="true"  />
						<div class= "card-footer" style = "font-size :20px">{props.title}</div>
					</div>
				</div>
			);
}

