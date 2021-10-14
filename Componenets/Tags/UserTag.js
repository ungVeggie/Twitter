function UserTag(props) {
    return (
        <span
            className="tag has-text-info has-text-weight-bold no-bg"
        >{`@${props.tweet.author}`}</span>
    )
}

export default UserTag;
