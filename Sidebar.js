function Sidebar(props) {
    return (
        <aside className="columns is-centered has-text-centered is-multiline is-mobile">
            <div className="column is-12 is-clickable has-text-info">
                <div className="icon is-large is-clickable">
                    <i className="fas fa-hashtag" style={{ fontSize: "6vw", position: 'relative' }} />
                </div>
            </div>
            <div className="column is-12 is-clickable">
                <div className="icon is-large has-text-info">
                    <i className="fas fa-home" style={{ fontSize: "6vw" }} />
                </div>
            </div>
            <div className="column is-12 is-clickable has-text-info">
                <div className="icon is-large side">
                    <i className="far fa-bell" style={{ fontSize: "6vw" }} />
                </div>
            </div>
            <div className="column is-12 is-clickable">
                <div className="icon is-large has-text-info">
                    <i className="far fa-envelope" style={{ fontSize: "6vw" }} />
                </div>
            </div>
            <div className="column is-12 is-clickable">
                <div className="icon is-large has-text-info">
                    <i className="far fa-user" style={{ fontSize: "6vw" }} />
                </div>
            </div>
            <div className="column is-12 is-clickable">
                <div className="icon is-large has-text-info" style={{ fontSize: "6vw" }}>
                    <i className="fas fa-ellipsis-h" style={{ border: "1px solid black", borderRadius: "50%" }} />
                </div>
            </div>
            <div className="column is-12 is-clickable">
                <div className="icon is-large has-text-info" >
                    <i className="fas fa-feather-alt" style={{ fontSize: "6vw" }} />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;
