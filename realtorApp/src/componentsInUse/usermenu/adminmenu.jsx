import React from 'react';
import {Link} from "react-router-dom";
import Cookies from 'js-cookie'
import  './style/usermenu.css';
import Apartments from '../adminPages/apartments';

class AdminMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {} ,
            user_id:''
        };
    }

    componentDidMount(){
        let user = Cookies.get();
        if (Object.entries(user).length !== 0){
            user = JSON.parse(user.auth);
            this.setState({
                user,
                user_id: user.id
            })
        }
    }

    render() {
        const {logOut} = this.props;
        const hrStyle = {color: "lightgray", height: 1, width: "120px"}
        return (
            <div className={"admin"}>
                <div className={"middle-bar"}>
                    <div className={"middle-bar-img"}>
                    <hr style={hrStyle}/>
                        <ul>
                            <li>
                                <Link to="/users">
                                    <h6>List of users</h6>
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
                                <Link to={"/apartments"}>
                                    <h6>List of apartments</h6>
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

export default AdminMenu;