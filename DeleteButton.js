

function DeleteButton(props) {
    if (!props.isMine) return null;

    return (
        <button
            className="button is-rounded"
            name="delete"
            data-type="button"
            onClick={(e) => {
                e.stopPropagation();
                props.deleteTweet(props.id)
            }}
        >
            <span className="icon">
                <i className="fas fa-trash-alt"></i>
            </span>
        </button>
    )
}


export default DeleteButton;