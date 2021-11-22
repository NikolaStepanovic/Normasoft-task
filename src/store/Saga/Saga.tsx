import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
	FETCH_DATA,
	fetchDataSuccess,
	FETCH_SINGLE_POST,
	fetchSinglePostSuccess,
	FETCH_COMMENTS,
	fetchCommentsSuccess,
	CREATE_REQUEST,
	CHANGE_DATA
} from '../Action';
import { ActionType, ICreate, IData, IfetchData, singlePost } from '../interface';

axios.defaults.headers.common['app-id'] = `6197d2ad611ff91e52c25a06`;

const api = (page: number) => {
	return axios.get(`https://dummyapi.io/data/v1/post?page=${page}&limit=10`);
};

const apiSinglePost = (id: string) => {
	return axios.get(`https://dummyapi.io/data/v1/post/${id}`);
};

const apiComments = (id: number) => {
	return axios.get(`https://dummyapi.io/data/v1/post/${id}/comment?limit=10`);
};

const createApi = async (payload: ICreate) => {
	const { data } = await axios.post('https://dummyapi.io/data/v1/post/create', payload);
	return data;
};

const editApi = async (payload: IData) => {
	const { id, ...rest } = payload;
	const { data } = await axios.put(`https://dummyapi.io/data/v1/post/${id}`, { ...rest });
	return data;
};

function* fetchData({ payload }: ActionType) {
	try {
		const { data } = yield call(api, payload);

		yield put(fetchDataSuccess(data));
	} catch (e) {
		console.log(e);
	}
}

function* fetchDataSinglePost({ payload }: ActionType) {
	try {
		const { data } = yield call(apiSinglePost, payload);
		yield put(fetchSinglePostSuccess(data));
	} catch (e) {
		console.log(e);
	}
}

function* fetchComments({ payload }: ActionType) {
	try {
		const { data } = yield call(apiComments, payload);
		yield put(fetchCommentsSuccess(data));
	} catch (e) {
		console.log(e);
	}
}

function* createPost({ payload }: ActionType) {
	try {
		const data: IfetchData = yield call(createApi, payload);
		yield put(fetchDataSuccess(data));
	} catch (e) {
		console.log(e);
	}
}

function* editPost({ payload }: ActionType) {
	try {
		const data: singlePost = yield call(editApi, payload);
		yield put(fetchSinglePostSuccess(data));
	} catch (e) {
		console.log(e);
	}
}

function* watchDataRequest() {
	yield takeEvery(FETCH_DATA, fetchData);
	yield takeEvery(FETCH_SINGLE_POST, fetchDataSinglePost);
	yield takeEvery(FETCH_COMMENTS, fetchComments);
	yield takeEvery(CREATE_REQUEST, createPost);
	yield takeEvery(CHANGE_DATA, editPost);
}

export default watchDataRequest;
