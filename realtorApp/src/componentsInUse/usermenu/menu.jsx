import React from 'react';
import {Link} from "react-router-dom";
import Cookies from 'js-cookie'

import  './style/usermenu.css';
import AdminMenu from './adminmenu';
import UserMenu from './usermenu';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {} ,
            user_id:'', 
            user_roleId: ''
        };
    }

    componentDidMount(){
        let user = Cookies.get();
        if (Object.entries(user).length !== 0){
            user = JSON.parse(user.auth);
            if (user.role_id === 1){
                this.setState({
                    user_roleId: 1, //admin
                    user,
                    user_id: user.id
                })
            } else{
                this.setState({
                    user_roleId: 2, //user
                    user,
                    user_id: user.id
                })
            }
        }
    }


    logOut = () =>{
        console.log("clicked")
        Cookies.remove('auth', {path:'/'});
        this.setState({
            user: {},
            user_id: ''
        })
    }

    render() {
        const {user, user_id, user_roleId} = this.state;
        return (
            <div className={"menu"}>
                {Object.entries(user).length !== 0 ? 
                <ul className={"nav-bar-list nav-bar d-flex"}>
                    <li  className={"d-flex "}>
                        <img alt={"preson-icon"} src="https://img.icons8.com/pastel-glyph/64/000000/christmas-boy--v1.png" style={{width:"30px"}}></img>
                        <div className={"hidden-middle-bar"}>
                            <p>Wellcome {user.first_name}!</p>
                            <ul className={"nav-bar-list nav-bar d-flex"}>
                                {user_roleId === 1 ? 
                                <AdminMenu  logOut={this.logOut}/>
                                :
                                <UserMenu user_id={user_id} 
                                            logOut={this.logOut}/>
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
                :
                <ul className={"nav-bar-list nav-bar d-flex"}>
                    <li>
                     <Link to="/login" className={"no-underline"}>
                             <p>Log in</p>
                             <div className={"hidden-right-bar"}>
                                 <p>Log in to your account</p>
                             </div>
                         </Link>
                     </li>
                     <li>
                     <Link to="/signup" className={"no-underline"}>
                         <p>Sign up</p>
                         <div className={"hidden-right-bar"}>
                       <p>Create a free account with realtor.com</p>
                        </div>
                         </Link>
                     </li> 
                </ul>
                }  
            </div>
        )
    }
}

export default Menu;