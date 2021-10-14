function RetweetTag(props) {
    if (props.tweet.type !== "retweet") return null;
    //console.log("the tweet in retweet tag is", props.tweet)
    if (!props.tweet.parent) return null;
  
    return (
      <div className="columns is-mobile" onClick={(event)=>event.stopPropagation()}>
  
        <div className="column is-1" style={{padding:"0px 0px 0px 0px"}}>
          <span className="icon" style={{float:"right", padding:"0px"}}>
            <i className="fas fa-retweet"></i>
          </span>
        </div>
  
        <div className="column is-narrow" style={{ padding: "0px 0px 0px 12px" }}>
          <span className="tag has-text-info has-text-weight-bold no-bg">@{props.tweet.parent.author}</span>
          <span className="has-text-weight-bold has-text-grey-dark is-size-7">
            {" Retweeted"}
          </span>
        </div>
  
      </div>
      
  
    )
  }

  export default RetweetTag;