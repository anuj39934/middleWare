import {
	FETCH_USERS
} from '../actions/type';

export default function(state = [], action){
	debugger;
	switch (action.type){
		case FETCH_USERS:
			return [...state, ...action.payload.data];
	}
	return state;
}