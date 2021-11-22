import { useState } from 'react';
import classes from './EditPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store/interface';
import { NavLink, useParams } from 'react-router-dom';
import { changeData } from '../../store/Action';

const EditPage = () => {
	const store = useSelector((state: IState) => state);
	const dispatch = useDispatch();

	const { id } = useParams();

	const [data, setData] = useState(
		{
			text: store.fetchSinglePost?.text,
			tags: store.fetchSinglePost?.tags,
			image: store.fetchSinglePost?.image,
			id: id ? id : '',
		}
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const handleData = () => {
		dispatch(changeData(data));
	};

	return (
		<div className={classes.Container}>
			<div className={classes.Box}>
				<label>Change image</label>
				<input
					name={`image`}
					value={data.image}
					onChange={(e) => handleChange(e)}
					className={classes.Input}
					type={'text'}
				/>
				<label>Change text</label>
				<input
					name={`text`}
					value={data.text}
					onChange={(e) => handleChange(e)}
					className={classes.Input}
					type={'text'}
				/>
				<label>Change tag</label>
				<input
					name={`tags`}
					value={data.tags}
					onChange={(e) => handleChange(e)}
					className={classes.Input}
					type={'text'}
				/>
				<NavLink onClick={handleData} className={classes.Link} to={`/${id}`}>
					Edit
				</NavLink>
			</div>
		</div>
	);
};

export default EditPage;
