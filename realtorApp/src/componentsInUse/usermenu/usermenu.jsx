import React from 'react';
import {Link} from "react-router-dom";

import  './style/usermenu.css';

class UserMenu extends React.Component {
    constructor(props) {
        super(props);
    }

   

    render() {
        const {user_id, logOut} = this.props;
        const hrStyle = {color: "lightgray", height: 1, width: "120px"}

        return (
            <div className={"user"}>
                <div className={"middle-bar"}>
                    <div className={"middle-bar-img"}>
                    <hr style={hrStyle}/>
                        <ul>
                            <li>
                                <Link to="/addapartment">
                                    <h6>Add-Apartment</h6>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"middle-bar"}>
                    <div className={"middle-bar-img"}>
                    <hr style={hrStyle}/>
                        <ul>
                            <li>
                                <Link to={`/myapartments/${user_id}`}>
                                    <h6>My Apartments</h6>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"middle-bar"}>
                    <div className={"middle-bar-img"}>
                        <hr style={hrStyle}/>
                        <ul>
                            <li onClick={logOut}>
                                <p >Log out</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserMenu;