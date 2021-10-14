import { useEffect, useState } from "react";
import API from '../../api';

function ReplyTag(props) {
  const [replyTag, setReplyTag] = useState(null);

  useEffect(() => {
    (async () => {
      let reply_tag = [<span className="has-text-weight-medium has-text-grey-dark no-bg">{"replying to "}</span>];
      let parentId = props.parentId;
      while (parentId !== undefined) {
        let parent = await API.read(props.parentId);
        let id = parent.id;
        reply_tag.push(<span className="tag has-text-info has-text-weight-bold no-bg">{`@${parent.data.author}`}</span>)
        parentId = id;
      }
      setReplyTag((prev) => prev = reply_tag);
    })();
  }, [])

  return (
    <span className="tag no-bg">
      {replyTag}
    </span>
  )
}


export default ReplyTag;
