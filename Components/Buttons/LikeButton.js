import API from "../../api";
import { useState } from 'react';

function LikeButton(props) {
    const [status, setStatus] = useState("unliked");
    return (
        <button
            className="button is-rounded"
            name="like"
            data-type="button"
            onClick={async (e) => {
                e.stopPropagation();
                API.like(props.id);
                setStatus(prev => prev === "unliked" ? "liked" : "unliked");
                e.currentTarget.style.color="red";
            }}
        >
            <span className="icon">
                <i className="fas fa-heart" name="like"></i>
            </span>
            <span>{props.likeCount}</span>
        </button>
    )
}

export default LikeButton;
