function CommentHeader(props) {
    return (
        <div class="field is-grouped is-grouped-left" style={{borderBottom:"2px groove grey"}}>
            <div class="control">
                <button
                    className="button delete is-danger"
                    onClick={(e)=>{
                        e.stopPropagation();
                        props.setCommentBox(null)
                    }}
                ></button>
            </div>
        </div>
    )
}

export default CommentHeader;