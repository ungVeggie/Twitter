function SearchBar(props) {
    return (
        <div className="field">
            <p className="control has-icons-left">
                <span className="icon is-left">
                    <i className="fas fa-search fa-2x" />
                </span>
                <input
                    className="input is-large is-rounded"
                    type="text"
                    placeHolder="Search Twitter"
                    style={{height:"auto"}}
                />
            </p>
        </div>

        /*<div class="field">
            <div class="control input is-rounded" type="text">
                <span className="icon is-large is-left">
                    <i className="fas fa-search" />
                </span>
                <input class="input is-large is-radiusless"
                placeHolder="Search Twitter"
                style={{border:"none", height:"100%", padding:"0px", margin:"0px", background:'none'}}
                />
            </div>
    </div>*/
    )
}

export default SearchBar;