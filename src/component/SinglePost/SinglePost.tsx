import classes from "./SinglePost.module.css";
import { singlePost } from '../../store/interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Comments from "../Comments/Comments";
import { Link } from 'react-router-dom';
import GoBackHeader from "../GoBackHeader/GoBackHeader";

const SinglePost = (props: singlePost) => {
    const data = props.data;

    let date = new Date(data.publishDate);
    const dateFormat = moment(date).format('YYYY.MM.DD, h:mm:ss');

    return <div className={classes.Container}>
        <GoBackHeader />
        {props.loading ? `loading...` : <> <div className={classes.Box} key={data.id}>
            <Link to={`/${props.id}/Edit`} className={classes.Link}>Edit</Link>
            <div className={classes.titleBox}>
                <img className={classes.image} src={data.owner?.picture} alt={''} />
                <div className={classes.title}>
                    <div className={classes.titleName}>
                        <p>{data.owner?.title}. {data.owner?.firstName}</p>
                        <p className={classes.p1}>{data.owner?.lastName}</p>
                    </div>
                    <p className={classes.p2}>{dateFormat}</p>
                </div>
            </div>
            <div className={classes.Body}>
                <img className={classes.img} src={data.image} alt={''} />
                <div className={classes.internalBody}>
                    <p className={classes.p4}>{dateFormat}</p>
                    <p className={classes.p3}>{data.text}</p>
                    <div className={classes.TagBox}>
                        {data.tags?.map((id: string, i: number) => (
                            <div className={classes.Tag} key={i}>
                                {id}
                            </div>
                        ))}
                    </div>
                    <div className={classes.Likes}>
                        <FontAwesomeIcon className={classes.Icon} icon={faThumbsUp} />
                        <p>{data.likes}</p>
                    </div>
                </div>
            </div>
        </div>
            <Comments comments={props.comments} />
        </>
        }
    </div>
}

export default SinglePost;