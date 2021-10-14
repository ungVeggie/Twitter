import RetweetForm from "../Forms/RetweetForm";
import API from "../../api";
import CommentForm from "../Forms/CommentForm";

function RetweetButton(props) {
    return (
        <div
            className="dropdown is-hoverable"
            onClick={(e) => {
                e.stopPropagation();
                e.currentTarget.classList.add("is-active");
                let o_info = e.currentTarget.getBoundingClientRect();
                let menu = (e.currentTarget.children[1].firstChild);
                menu.style.left = o_info.left - o_info.width + "px";
                menu.style.top = o_info.top + "px";
            }}
            onBlur={(e) => { e.currentTarget.classList.remove("is-active") }}
        >
            <div className="dropdown-trigger">
                <button
                    className="button is-rounded"
                    name="retweet"
                    data-type="button"
                    style={{ border: "none" }}
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                >
                    <span className="icon is-small">
                        <i className="fas fa-retweet" aria-hidden="true"></i>
                    </span>
                    <span>{props.retweetCount}</span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content" style={{ position: "fixed" }}>
                    <button
                        className="dropdown-item"
                        onClick={async (e) => {
                            e.stopPropagation()
                            API.create({ message: "", type: "retweet", id: props.tweet.id })
                        }}
                    >
                        <span className="icon">
                            <i className="fas fa-retweet"></i>
                        </span>
                        <span>Retweet</span>
                    </button>
                    <button
                        className="dropdown-item"
                        onClick={async (e) => {
                            console.log(e.currentTarget)
                            e.stopPropagation()
                            props.setCommentBox(
                                < CommentForm
                                    setCommentBox={props.setCommentBox}
                                    message={props.message}
                                    type={"retweet"}
                                    id={props.id}
                                    tweet={props.tweet}
                                    event="retweet"
                                />
                            )
                        }}
                    >
                        <span className="icon">
                            <i className="fas fa-edit"></i>
                        </span>
                        <span>Quote Tweet</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RetweetButton;
