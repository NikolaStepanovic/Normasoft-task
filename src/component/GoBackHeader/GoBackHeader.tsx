import classes from './GoBackHeader.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../../store/interface';

const GoBackHeader = () => {
	const store = useSelector((state: IState) => state);

	let id = store.CurrentPage;

	return (
		<div className={classes.Container}>
			<Link to={`/?page=${id}`} className={classes.Link}>
				Go Back
			</Link>
		</div>
	);
};

export default GoBackHeader;
