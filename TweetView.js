import React, { useState } from 'react';
import TweetBody from './TweetBody';
import UIBar from './UIBar';
import ReplyTag from './Tags/ReplyTag'
import DateTag from './Tags/DateTag';
import API from '../api';
import UserHeader from "./UserHeader";
import Stats from "./Stats";
import SelectiveView from "./SelectiveView";

const read = async function (id, isnestable) {
    if (id && isnestable) {
        let response = await API.read(id);
        let tweet = response.data;
        return <TweetView {...tweet} tweet={tweet} isNestable={false} />;
    }
    return null;
}

function TweetView(props) {
    const [innerView, setInnerView] = useState(null);
    const [tweetBody, setTweetBody] = useState(<TweetBody body={props.body} />);
    const [commentBox, setCommentBox] = useState(null);

    if (props === {} || props === undefined) return null;

    return (
        <article
            className="media notification is-clickable groovey-b1"
            style={{
                border: "1px groove grey", padding: "auto", zIndex: 1,
            }}
            onClick={(e) => {
                e.stopPropagation();
                setCommentBox(<SelectiveView tweet={props.tweet} setCommentBox={setCommentBox} />)
            }}
        >
            <div className="media-left">

            </div>
            <div className="media-content">
                <UserHeader
                    author={props.author}
                    id={props.id}
                    type={props.type}
                    isNestable={props.isNestable}
                    body={props.body}
                    parentId={props.parentId}
                />
                {props.type === "reply" ? <ReplyTag parentId={props.parentId} /> : null}
                <article className="media" style={{ border: "none", padding: "0px", margin: "0px" }}>
                    <div className="media-content is-mobile">
                        <div className="content">
                            {tweetBody}
                            {props.isNestable && props.parent ?
                                <TweetView
                                    {...props.parent}
                                    tweet={props.parent}
                                    updateTweet={props.updateTweet}
                                    deleteTweet={props.deleteTweet}
                                    isNestable={false}
                                />
                                : null
                            }
                        </div>
                    </div>
                </article>

                <article className="media" style={{ padding: "0px", marginTop: "8px" }}>
                    <div className="media-content">
                        <div className="field">
                            <div className="control">
                                <UIBar
                                    tweet={props.tweet}
                                    isMine={props.isMine}
                                    replyCount={props.replyCount}
                                    likeCount={props.likeCount}
                                    retweetCount={props.retweetCount}
                                    message={props.body}
                                    setCommentBox={setCommentBox}
                                    setTweetBody={setTweetBody}
                                    deleteTweet={props.deleteTweet}
                                    updateTweet={props.updateTweet}
                                />
                            </div>
                        </div>
                    </div>
                </article>

                <article className="media" style={{ marginBottom: "8px", padding: "0px" }}>
                    <div className="media-content">
                        <Stats
                            replyCount={props.replyCount}
                            likeCount={props.likeCount}
                            retweetCount={props.retweetCount}
                        />
                        <article className="media" style={{ marginTop: "0px" }}>
                            <div className="media-content" style={{ marginTop: "0px", padding: "0px" }}>
                                <DateTag createdAt={props.createdAt} updatedAt={props.updatedAt} />
                            </div>
                        </article>
                    </div>
                </article>

            </div>
            {commentBox}
        </article>
    )
}

export default TweetView;