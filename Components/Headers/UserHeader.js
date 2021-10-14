import OptionsButton from "./Buttons/OptionsButton";

function UserHeader(props) {
    if (props.type === "retweet") {
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
    return (
        <article className="media columns is-mobile is-vcentered" style={{ border: "none", margin: "0px", padding: "0px" }}
        >
            <figure className="media-left" style={{ margin: "0px" }}>
                <span class="control input has-text-info has-icon-left is-relative is-pulled-left is-shadowless"
                    style={{ background: "none", border: "none" , right:"8px"}}
                >
                    <span className="icon is-left">
                        <i className="fas fa-user fa-2x"/>
                    </span>
                    <span className="has-text-info"><a>{`@${props.author}`}</a></span>
                </span>
            </figure>
            <div className="media-content">
            </div>
            <div className="media-right">
                <div className="field">
                    <div className="control">
                        <OptionsButton id={props.id} />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default UserHeader;
