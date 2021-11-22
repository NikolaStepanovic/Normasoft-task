import classes from './HomeHeader.module.css';
import image from '../../assets/Pets.png';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
	return (
		<div className={classes.Container}>
			<h1>Pet</h1>
			<Link to={`/?page=0`}>
				<img className={classes.img} src={image} alt={''} />
			</Link>
			<h1>Lovers</h1>
		</div>
	);
};

export default HomeHeader;
