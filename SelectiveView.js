import TweetView from "./TweetView";
import API from "../api";
import CommentHeader from "./CommentHeader";
import { useEffect, useState } from "react";


function SelectiveView(props) {
    const [replies, setReplies] = useState(null);
    console.log(props)
    useEffect(() => {
        (async () => {
            console.log("the tweet is", props.tweet)
            let reply = await API.read(props.tweet.id);
            console.log("the reply is", reply)
            let replies = reply.data.replies;
            console.log("replies are", replies)
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
                console.log(r)
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