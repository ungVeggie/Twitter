import API from '../../api';

function SubmitCancelButton(props) {

  return (
    <div className="field is-grouped is-grouped-right">
    <div className="control">
        <button
            className="button is-link"
            onClick={async (e) => {
                e.stopPropagation();
                let result = await API.create({message:props.message, id: props.id, type:"tweet"});
                props.updateTweet(props.id, result.data.message)
            }}
        >Submit</button>
        <button
            className="button is-danger is-light"
            onClick={async (e) => {
                e.stopPropagation();
                let result = await API.update(props.id, props.message);
                props.updateTweet(result.data.id, result.data.body)
            }}
        >Cancel</button>
    </div>
</div>
  )
}

export default SubmitCancelButton;
