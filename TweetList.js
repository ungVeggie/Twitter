import TweetView from './TweetView';

function TweetList(props) {
    if (props.tweets === null) return null;
    props.setFeed(null);
    const list = props.tweets.map((tweet) => {
        tweet["isMine"] = tweet.author === "alexander u.";
        return (
                <TweetView
                    {...tweet}
                    tweet={tweet}
                    key={<li key={tweet.id.toString()}/>}
                    pushTweet={props.pushTweet}
                    deleteTweet={props.deleteTweet}
                    updateTweet={props.updateTweet}
                    isNestable={true}
                />
        )
    }
    );

    return (
        <div className="content">
            {list}
        </div>
    )
}

export default TweetList;