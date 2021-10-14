import SubmitCancelButton from "./Buttons/SubmitCancelButton";
import TweetButton from "./Buttons/TweetButton";
import React, { useState } from 'react'

function Editor(props) {
    const [message, setMessage] = useState(props.message);

    return (
        <div
            class="field has-background-danger"
            style={{ padding: "20px 20px 0px 20px" }}
        >
            <div class="control" style={{ width: "inherit" }}>
                <textarea
                    className="textarea is-size-4-widescreen is-size-5-tablet is-size-6-mobile"
                    value={message}
                    onChange={(event) => {
                        setMessage(() => event.target.value);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    maxLength={280}
                    placeHolder={props.placeHolder}
                    style={{ color: "purple" }}
                />
                {props.event === "edit" ?
                    <SubmitCancelButton
                        message={message}
                        id={props.id}
                        updateTweet={props.updateTweet}
                    />
                    : <TweetButton message={message} id={props.id} event={props.event} pushTweet={props.pushTweet}/>
                }
            </div>
        </div>
    );
}

export default Editor;