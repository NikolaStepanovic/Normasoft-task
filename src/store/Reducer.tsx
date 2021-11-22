import {
	FETCH_DATA,
	FETCH_DATA_SUCCESS,
	FETCH_SINGLE_POST,
	FETCH_SINGLE_POST_SUCCESS,
	FETCH_COMMENTS,
	FETCH_COMMENTS_SUCCESS,
	SET_COMMENTS,
	SET_CURRENT_PAGE
} from './Action';
import { ActionType, IState } from './interface';

const initialState: IState = {
	fetchData: {
		data: [],
		limit: 0,
		page: 0,
		total: 0,
	},
	fetchSinglePost: [],
	fetchComments: [],
	CurrentPage: 0,
	loading: false
};

const Reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				loading: true,
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				fetchData: action.payload,
				loading: false,
			};
		case FETCH_SINGLE_POST:
			return {
				...state,
				loading: true,
			};
		case FETCH_SINGLE_POST_SUCCESS:
			return {
				...state,
				fetchSinglePost: action.payload,
				loading: false,
			};
		case FETCH_COMMENTS:
			return {
				...state,
				loading: true,
			};
		case FETCH_COMMENTS_SUCCESS:
			return {
				...state,
				fetchComments: action.payload.data,
				loading: false,
			};
		case SET_COMMENTS:
			return {
				...state,
				fetchComments: [
					{
						message: action.payload,
						owner: {
							firstName: `Nikola`,
							lastName: 'Stepanovic',
							title: `mr`
						},
						publishDate: new Date()
					},
					...state.fetchComments
				]
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				CurrentPage: action.payload
			};
		default:
			return state;
	}
};

export default Reducer;
