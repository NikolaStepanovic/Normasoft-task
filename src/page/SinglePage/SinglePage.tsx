import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SinglePost from '../../component/SinglePost/SinglePost';
import { IState } from '../../store/interface';
import { fetchSinglePost, fetchComments } from '../../store/Action';

const SinglePage = () => {
	let { id } = useParams();

	const store = useSelector((state: IState) => state);

	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchSinglePost(id ? id : ''));
			dispatch(fetchComments(id ? id : ''));
		},
		[ dispatch, id ]
	);

	return (
		<div>
			<SinglePost loading={store.loading} id={id ? id : ''} comments={store.fetchComments} data={store.fetchSinglePost} />
		</div>
	);
};

export default SinglePage;
