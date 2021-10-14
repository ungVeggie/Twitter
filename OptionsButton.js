function OptionsButton(props) {
    return (
        <div
            className="dropdown is-hoverable is-right"
            onClick={(e) => {
                e.stopPropagation();
                console.log("here")
                e.currentTarget.classList.add("is-active");
                let o_info = e.currentTarget.getBoundingClientRect();
                let menu = (e.currentTarget.children[1].firstChild);
                menu.style.left = o_info.left - o_info.width-36 +"px";
                menu.style.top = o_info.top+"px";
            }}
            onBlur={(e) => e.currentTarget.classList.remove("is-active")}
            style={{ padding: "0px", margin: "0px", overflow: "show" }}
        >
            <div className="dropdown-trigger">
                <button
                    className="button is-rounded"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    data-type="dropdown-button"
                    name="options"
                    style={{ border: "none" }}
                >
                    <span className="icon">
                        <i className="fas fa-ellipsis-h" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div
                className="dropdown-menu"
                id="dropdown-menu"
                role="menu"
                onClick={(e) => {console.log("im a god");e.stopPropagation()}}
            >
                <div
                    className="dropdown-content has-background-primary"
                    id={`dropdown${props.id}`}
                    onClick={(e) => e.stopPropagation()}
                    style={{position:"fixed"}}
                >
                    <button
                        className="dropdown-item"
                        onClick={(e) => {console.log(e.currentTarget);e.stopPropagation()}}
                    >
                        <span className="icon">
                            <i className="fas fa-user-plus"></i>
                        </span>
                        <span>Follow</span>
                    </button>

                    <button
                        className="dropdown-item"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="icon">
                            <i className="fas fa-comment-slash"></i>
                        </span>
                        <span>Mute</span>
                    </button>
                    <button
                        className="dropdown-item is-clickable"
                    >
                        <span className="icon">
                            <i className="fas fa-user-slash"></i>
                        </span>
                        <span>Block</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default OptionsButton;