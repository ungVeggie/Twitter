function Stats(props) {
    return (
        <nav className="level is-mobile" style={{margin:"0px"}}>
            <div className="level-left">
                <div className="level-item">
                    <small>{props.replyCount} Comments </small>
                </div>
                <div className="level-item">
                    <small>{props.likeCount} Likes</small>
                </div>
                <div className="level-item">
                    <small>{props.retweetCount} Retweets</small>
                </div>
            </div>
        </nav>
    )
}

export default Stats;