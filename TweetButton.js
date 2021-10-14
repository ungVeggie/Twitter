import API from "../../api";

function TweetButton(props) {
    return (
        <div className="field is-grouped is-grouped-right">
            <div className="control">
        <button
            className="button"
            type="submit"
            value="Tweet"
            name="tweet"
            data-type="button"
            onClick={(e) => {
                e.stopPropagation();
                (async () => {
                    console.log("here")
                    let new_tweet= await API.create({message:props.message, type:props.event, id:props.id})
                    props.pushTweet(new_tweet)
                })();
                if(props.event !== "tweet") props.setCommentBox(null);
            }}
        >
            <span className="icon" style={{ float: "right" }}>
                <i className="fas fa-kiwi-bird " name="tweet"></i>
            </span>
            <span>Tweet</span>
        </button>
        </div>
        </div>
    )
}

export default TweetButton;