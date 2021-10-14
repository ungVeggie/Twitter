function RetweetHeader(props) {
    return (
        <article className="media">
            <figure className="media-left" style={{ margin: "0px" }}>
                <div className="icon">
                    <i className="fas fa-retweet" />
                </div>
            </figure>
            <div className="media-content is-mobile">
                <span className="control has-text-info has-icon-left is-relative is-pulled-left is-shadowless">
                    <small><a>{`@${props.author} `}</a></small>
                    <small className="has-text-weight-bold has-text-grey">retweeted</small>
                </span>
            </div>
        </article>

    )
}

export default RetweetHeader;