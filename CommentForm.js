import API from '../../api';
import Editor from "../Editor";
import CommentHeader from "../CommentHeader";
import TweetView from "../TweetView";
import TweetButton from "../Buttons/TweetButton";

function CommentForm(props) {
    return (
        <article className="box tile is-child upfront"
            style={{
                left: document.getElementById("timeline").getClientRects()[0].left,
                top: 0
            }}
        >
            <div class="field">
                <div class="control">
                    <CommentHeader setCommentBox={props.setCommentBox} tweet={props.tweet} />
                    <Editor
                        placeHolder={"Add a comment"}
                        message={""}
                        setCommentBox={props.setCommentBox}
                    />
                </div>

                <TweetView
                    {...props.tweet}
                    tweet={props.tweet}
                    isNestable={true}
                    isMine={props.isMine}
                />

                <div class="field is-grouped is-grouped-right">
                    <div class="control">
                        <TweetButton
                            callback={async () => {
                                const result = await API.create(props);
                                props.setComment(<div className="box comment-hidden"></div>);
                            }}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CommentForm;