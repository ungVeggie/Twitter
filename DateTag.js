
function DateTag(props) {
    return (
        <div class="has-text-left is-family-sans-serif">
            <span class="tag has-text-grey is-white no-pad-mar">{`Created at: ${new Date(props.createdAt).toDateString()}`}</span>
            <span class="tag has-text-grey is-white no-pad-mar">{`Last updated at: ${new Date(props.updatedAt).toDateString()}`}</span>
        </div>
    )
}

export default DateTag;