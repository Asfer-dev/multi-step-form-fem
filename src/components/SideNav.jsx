import NavItem from "./NavItem";

function SideNav(props) {

    const navData = [
        {id: 1, text: "your info"},
        {id: 2, text: "select plan"},
        {id: 3, text: "add-ons"},
        {id: 4, text: "summary"}
    ]

    return (
        <div className="side-nav">
            {navData.map(navItem => <NavItem {...navItem} key={navItem.id} activeTab={props.activeTab} setActiveTab={props.setActiveTab} />)}
        </div>
    );
}

export default SideNav;