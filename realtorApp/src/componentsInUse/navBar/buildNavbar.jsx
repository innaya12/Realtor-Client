import React from 'react';
import {Link} from "react-router-dom";

class BuildNavbar extends React.Component {

    render() {
        const {label, index, changeActiveItem} = this.props;
        return (
            <li onMouseOver={() => changeActiveItem(index)}>
                {index === 0 && //linked before to cities need to change to the new updated title
                <p><Link to="/" style={{color: "black", textDecoration: "none"}}>Buy</Link></p>}
                {index === 1 && <p>{label}</p>}
                {/* {index === 1 && <p><Link to="/sell" style={{color: "black", textDecoration: "none"}}>{label}</Link></p>} */}
                {/* {index === 2 && <p><Link to="/rent" style={{color: "black", textDecoration: "none"}}>{label}</Link></p>} */}
                {index === 2 && <p>{label}</p>}
                {index !== 1 && index !== 2 && index !== 0 && <p>{label}</p>}

            </li>
        )
    }
}

export default BuildNavbar;

