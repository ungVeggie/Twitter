import CommentForm from '../Forms/CommentForm';

function CommentButton(props) {
    return (
        <button
            className="button is-rounded"
            name="comment"
            data-type="button"
            onClick={(e) => {
                e.stopPropagation();
                console.log("pressed comment button", props.tweet)
                props.setCommentBox(
                    <CommentForm
                        setCommentBox={props.setCommentBox}
                        message={props.message}
                        type={"reply"}
                        id={props.id}
                        tweet={props.tweet}
                        event={"comment"}
                    />
                )
            }
            }
        >
            <span className="icon">
                <i className="far fa-comment-dots" name="comment"></i>
            </span>
            <span>{props.replyCount}</span>
        </button>
    )
}


export default CommentButton;
