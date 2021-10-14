import Editor from "./Editor";
import React from 'react';

function Compose(props) {
    return (
        <div className="content groovey-b2" id="compose">
            <div className="field">
                <div className="control">
                    <Editor
                        placeHolder={`Tweet something to the world!\n...Tell someone that you love them\n\n...do it now`}
                        id={props.id}
                        event={"tweet"}
                        pushTweet={props.pushTweet}
                    />
                </div>
            </div>
        </div>
    )
}

export default Compose;
