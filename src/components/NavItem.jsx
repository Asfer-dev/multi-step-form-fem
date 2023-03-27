
function NavItem(props) {
    return (
        <div className="side-nav__item">
            <h3 className={props.activeTab === props.id ? "nav-index active" : "nav-index"}>{props.id}</h3>
            <div className="nav-text">
                <h3>Step {props.id}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default NavItem;