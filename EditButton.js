import Editor from "../Editor";

function EditButton(props) {
    if (!props.isMine) return null;

    return (
        <button
            className="button is-rounded"
            type="submit"
            name="edit"
            data-type="button"
            onClick={(e) => {
                e.stopPropagation()
                props.setTweetBody(
                    <Editor
                        message={props.message}
                        id={props.id}
                        updateTweet={props.updateTweet}
                        event="edit"
                    />
                )
            }}
        >
            <span className="icon">
                <i className="fas fa-edit" name="edit"></i>
            </span>
            <span>Edit</span>
        </button>
    )
}

export default EditButton;