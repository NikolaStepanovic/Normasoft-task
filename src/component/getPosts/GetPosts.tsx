import classes from './GetPosts.module.css';
import { IPostDetails, getPosts } from '../../store/interface';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const GetPosts = (props: getPosts) => {

    return (<> {props.loading ? `Loading...` : <div className={classes.Container}>
        {props.data?.map((el: IPostDetails, i: number) => {
            let date = new Date(el.publishDate);
            let newDate = new Intl.DateTimeFormat('sr-SR', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).format(date);

            return (
                <Link style={{ textDecoration: `none` }} key={i} to={`/${el.id}`}>
                    <div className={classes.Box} key={i}>
                        <div className={classes.titleBox}>
                            <img className={classes.image} src={el.owner.picture} alt={''} />
                            <div className={classes.title}>
                                <p className={classes.p1}>
                                    {el.owner.title}. {el.owner.firstName} {el.owner.lastName}
                                </p>
                                <p className={classes.p2}>{newDate}</p>
                            </div>
                        </div>
                        <div className={classes.Body}>
                            <img className={classes.img} src={el.image} alt={''} />
                            <div className={classes.internalBody}>
                                <p className={classes.p4}>{newDate}</p>
                                <p className={classes.p3}>{el.text}</p>
                                <div className={classes.TagBox}>
                                    {el.tags?.map((id: string, i: number) => (
                                        <div className={classes.Tag} key={i}>
                                            {id}
                                        </div>
                                    ))}
                                </div>
                                <div className={classes.Likes}>
                                    <FontAwesomeIcon className={classes.Icon} icon={faThumbsUp} />
                                    <p>{el.likes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        })}
    </div>} </>)
}

export default GetPosts;