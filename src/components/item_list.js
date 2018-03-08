import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ItemTemplate from './item_template';
import ItemContainer from './item_container';

class ItemList extends Component {
	componentWillMount(){
		this.props.fetchItems();
	}

	render(){
		debugger;
		return (
			<ItemContainer items = {this.props.items}/>
		);
	}
}

function mapStateToProps (state){
	return {
		items : state.items
	}
};

export default connect(mapStateToProps, actions)(ItemList);