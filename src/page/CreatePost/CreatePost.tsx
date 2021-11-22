import GoBackHeader from '../../component/GoBackHeader/GoBackHeader';
import classes from './CreatePost.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../store/Action';
import { ICreate } from '../../store/interface';

const CreatePost = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState<ICreate>({
		text: '',
		image: '',
		likes: 0,
		tags: [],
		owner: '60d0fe4f5311236168a109ca',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const handlePost = () => {
		dispatch(createPost(data));
	};

	return (
		<div className={classes.mainContainer}>
			<GoBackHeader />
			<div className={classes.Container}>
				<div className={classes.Box}>
					<h1>Create Post:</h1>
					<label>Insert Text</label>
					<input
						name={`text`}
						className={classes.Input}
						onChange={(e) => handleChange(e)}
						type={'text'}
						placeholder={'Add text'}
					/>
					<label>Insert tags</label>
					<input
						name={`tags`}
						className={classes.Input}
						onChange={(e) => handleChange(e)}
						type={'text'}
						placeholder={'Add tags'}
					/>
					<label>Insert Picture</label>
					<input
						name={`image`}
						className={classes.Input}
						onChange={(e) => handleChange(e)}
						type={'text'}
						placeholder={'Add picture'}
					/>
					<NavLink onClick={handlePost} className={classes.Link} to={`/`}>
						Create
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
