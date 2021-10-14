import CommentButton from './Buttons/CommentButton';
import DeleteButton from './Buttons/DeleteButton';
import EditButton from './Buttons/EditButton';
import LikeButton from './Buttons/LikeButton';
import RetweetButton from './Buttons/RetweetButton';

function UIBar(props) {
    return (
        <div className="field">
            <div className="control">
                <CommentButton
                    id={props.tweet.id}
                    replyCount={props.replyCount}
                    message={props.message}
                    setCommentBox={props.setCommentBox}
                    tweet={props.tweet}
                />
                <LikeButton
                    id={props.tweet.id}
                    likeCount={props.likeCount}
                />
                <RetweetButton
                    tweet={props.tweet}
                    message={props.message}
                    retweetCount={props.retweetCount}
                    callback={props.setCommentBox}
                    updateTweet={props.updateTweet}
                    setCommentBox={props.setCommentBox}
                />
                <EditButton
                    id={props.tweet.id}
                    isMine={props.isMine}
                    message={props.message}
                    setTweetBody={props.setTweetBody}
                    updateTweet={props.updateTweet}
                    setCommentBox={props.setCommentBox}
                />
                <DeleteButton
                    id={props.tweet.id}
                    isMine={props.isMine}
                    deleteTweet={props.deleteTweet}
                />
            </div>
        </div>
    );
}

export default UIBar;