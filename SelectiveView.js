import TweetView from "./TweetView";
import API from "../api";
import CommentHeader from "./CommentHeader";
import { useEffect, useState } from "react";


function SelectiveView(props) {
    const [replies, setReplies] = useState(null);
    useEffect(() => {
        (async () => {
            let reply = await API.read(props.tweet.id);
            let replies = reply.data.replies;
            if (replies) {
                let r = replies.map(tweet =>
                    <TweetView
                        {...tweet}
                        tweet={tweet}
                        deleteTweet={props.deleteTweet}
                        updateTweet={props.updateTweet}
                        isNestable={false}
                    />
                )
                setReplies(r)
            }
        })();
    }, [])

    return (
        <div
            className="box tile is-child upfront"
            style={{
                left: document.getElementById("timeline").getClientRects()[0].left,
                top: 0
            }}
        >
            <div className="field">
                <div className="control">
                </div>
                <CommentHeader setCommentBox={props.setCommentBox}/>
                <TweetView
                    {...props.tweet}
                    tweet={props.tweet}
                    isNestable={false}
                    deleteTweet={props.deleteTweet}
                />
                {replies}
            </div>
        </div>
    )
}

export default SelectiveView;
