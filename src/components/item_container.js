import React , {Component} from 'react';
import ItemTemplate from './item_template';

export default function(props) {
	let filteredData = {
				"sports" : [],
				"entertainment" : [],
				"news"  :[]
			};
			props.items.map((item) => {
				switch (item.category) {
					case "Sports":
						filteredData.sport.push(item);
						break;
					case "Entertainment":
						filteredData.entertainment.push(item);
						break;
					case "News":
						filteredData.news.push(item);
						break;
					default : 
						break;
				}
		
			});
	
//Render each item

	function renderItem (data){
		<ItemTemplate data ={data} />
	}

//Render each row

	function renderRow(categoryData){
		return (
			<div className = "container">
				<div className = "row">
				{itemList.map(this.renderItem)}
				</div>
			</div>
		)		
	}

	return (
			<div>
				{filteredData.map(this.renderRow)}
			</div>
		);
}