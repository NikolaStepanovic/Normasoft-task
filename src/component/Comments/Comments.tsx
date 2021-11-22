import { useState } from 'react';
import classes from "./Comments.module.css";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setComment } from '../../store/Action';
import { IComments, CommentsInterface } from '../../store/interface'

const Comments = (props: IComments) => {
    const [singleComment, setSingleComment] = useState(``);

    const dispatch = useDispatch();

    const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSingleComment(e.target.value);
    }

    const postComment = () => {
        dispatch(setComment(singleComment));
        setSingleComment(``);
    }

    return <div className={classes.Container}>
        <p>Add comment:</p>
        <div>
            <button onClick={postComment} className={classes.Btn}>Click</button>
            <input className={classes.Input} value={singleComment} onChange={(e) => handleComment(e)} type={`text`} placeholder="Add comment" />
        </div>
        <div className={classes.commentContainer}>
            {props.comments?.length ? props.comments.map((el: CommentsInterface, i: number) => {
                let dateComment = new Date(el.publishDate);
                const dateFormatComment = moment(dateComment).format('YYYY.MM.DD, h:mm:ss');

                return <div key={i} className={classes.comment}>
                    <div className={classes.titleBox}>
                        <img className={classes.image} src={el.owner?.picture} alt={''} />
                        <div className={classes.Title}>
                            <p className={classes.p1}>
                                {el.owner?.title}. {el.owner?.firstName} {el.owner?.lastName}
                            </p>
                            <p className={classes.p2}>{dateFormatComment}</p>
                        </div>
                    </div>
                    <p>{el.message}</p>
                </div>
            }) : `no comments`}
        </div>
    </div>
}

export default Comments;