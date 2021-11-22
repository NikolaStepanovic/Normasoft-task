import classes from './Pagination.module.css';
import { Link } from 'react-router-dom';
import { IPagination } from '../../store/interface';

const Pagination = ({ limit, totalPosts, page }: IPagination) => {
	const lastPage = totalPosts / limit;

	return (
		<div className={classes.Box}>
			<div className={classes.Pagination}>
				<Link className={classes.Btn} to={`/?page=${page > 0 ? +page - 1 : 0}`}>
					Prev
			</Link>
				<p className={classes.p}>{+page + 1}</p>
				<Link
					className={classes.Btn}
					to={`/?page=${page < +lastPage.toFixed() ? +page + 1 : +lastPage.toFixed()}`}
				>
					Next
			</Link>
			</div>
			<Link className={classes.Link} to={'/Create/'}>
				Create Post
			</Link>
		</div>
	);
};

export default Pagination;
