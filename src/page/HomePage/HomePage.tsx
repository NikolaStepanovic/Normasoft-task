import { useEffect } from 'react';
import classes from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setCurrentPage } from '../../store/Action';
import { IState } from '../../store/interface';
import Pagination from '../../component/pagination/pagination';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import HomeHeader from '../../component/HomeHeader/HomeHeader';
import GetPosts from '../../component/getPosts/GetPosts';

const HomePage = () => {
	const { search } = useLocation();
	const { page = 0 } = queryString.parse(search);

	const store = useSelector((state: IState) => state);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchData(page as number));
			dispatch(setCurrentPage(page as number));
		},
		[dispatch, page]
	);

	return (
		<div className={classes.Container}>
			<HomeHeader />
			<Pagination limit={store.fetchData?.limit} totalPosts={store.fetchData?.total} page={page ? page : 0} />
			<GetPosts loading={store.loading} data={store.fetchData?.data} />
		</div>
	);
};

export default HomePage;
