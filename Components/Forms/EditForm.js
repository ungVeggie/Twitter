import Editor from "../Editor";

function EditForm(props) {
    return (
        <div className="field">
            <div className="control">
                <Editor
                    message={props.tweet.message}
                    updateBody={props.updateBody} 
                    updateTweet={props.updateTweet}
                    event="edit"
                />
            </div>
        </div>
    )
}

export default EditForm;
