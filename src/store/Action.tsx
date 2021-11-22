import { IfetchData, IDetails, singlePost, ICreate, IData, ISetCommentsSuccess } from './interface';
export const FETCH_DATA = `FETCH_DATA`;
export const FETCH_DATA_SUCCESS = `FETCH_DATA_SUCCESS`;
export const FETCH_SINGLE_POST = `FETCH_SINGLE_POST`;
export const FETCH_SINGLE_POST_SUCCESS = `FETCH_SINGLE_POST_SUCCESS`;
export const FETCH_COMMENTS = `FETCH_COMMENTS`;
export const FETCH_COMMENTS_SUCCESS = `FETCH_COMMENTS_SUCCESS`;
export const SET_COMMENTS = `SET_COMMENTS`;
export const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`;
export const CHANGE_DATA = `CHANGE_DATA`;
export const CREATE_REQUEST = 'CREATE_REQUEST';

export const fetchData = (payload: number) => ({
    type: FETCH_DATA,
    payload
})

export const fetchDataSuccess = (payload: IfetchData): IDetails => ({
    type: FETCH_DATA_SUCCESS,
    payload
})

export const fetchSinglePost = (payload: string) => ({
    type: FETCH_SINGLE_POST,
    payload
})

export const fetchSinglePostSuccess = (payload: singlePost) => ({
    type: FETCH_SINGLE_POST_SUCCESS,
    payload
})

export const fetchComments = (payload: string) => ({
    type: FETCH_COMMENTS,
    payload
})

export const fetchCommentsSuccess = (payload: ISetCommentsSuccess) => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload
})

export const setComment = (payload: string) => ({
    type: SET_COMMENTS,
    payload
})

export const setCurrentPage = (payload: number) => ({
    type: SET_CURRENT_PAGE,
    payload
})

export const changeData = (payload: IData) => ({
    type: CHANGE_DATA,
    payload
})

export const createPost = (payload: ICreate) => ({
    type: CREATE_REQUEST,
    payload
})