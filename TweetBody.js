function TweetBody(props) {
    return (
        <article
            className="media"
            style={{ border: "none", padding: "0px", margin: "0px" }}
            onClick={e=>e.stopPropagation()}
        >
            <div className="media-content is-mobile">
                <div className="content">
                    <p> {props.body} </p>
                </div>
            </div>
        </article>
    );
}

export default TweetBody;