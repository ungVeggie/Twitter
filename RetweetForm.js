import Editor from "../Editor";
import TweetView from '../TweetView';
import API from '../../api';

function RetweetForm(props) {
    return (
        <div className="columns is-centered is-mobile" style={{ position: "absolute", width: "120%", right: '10px' }}>
            <div className="column">
                <div
                    className="box"
                    style={{ background: "red", width: "inherit" }}
                >
                    <article className="media">
                        <figure className="media-left">
                            <span class="icon">
                                <i class="fas fa-user" />
                            </span>
                        </figure>
                        <div className="media-content is-mobile">
                            <Editor
                                message={props.message}
                                id={props.id}
                                updateTweet={props.updateTweet}
                            />
                        </div>
                    </article>
                    <TweetView replyCount="500" likeCount="500" retweetCount="500" bod />
                </div>
            </div>
        </div>
    )
}




export default RetweetForm;