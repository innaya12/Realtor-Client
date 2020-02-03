import React from 'react';
import NavBar from '../navBar/navBar'
import {getAll} from '../../data/users'

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    async componentDidMount(){
        try{
            const users = await getAll();
            if(users){
                this.setState({
                    users
                })
            }
        }catch(error){
            console.log(error)
        }
    }

    render() {
        const {users} = this.state
        return (
            <div className={"container-fluid"}>
                <div className={"row justify-content-between wrap-img-div"}>
                    <NavBar/>
                    {users && users.map((user, i) =>
                        <div key={i}className={"col-12 col-sm-10 col-lg-8 col-xl-3 img-div"}>
                            {user.role_id === 1 ?
                            <div>
                                <h4>Admin</h4>
                                <p>ID: {user.id}</p>
                                <p>First Name: {user.first_name}</p>
                                <p>Last Name: {user.last_name}</p>
                                <p>Email: {user.email}</p>
                                <p>Phone: {user.phone}</p>
                                <p>Status: {user.status}</p>
                            </div>
                                :
                            <div>
                                <h4>User</h4>
                                <p>ID: {user.id}</p>
                                <p>First Name: {user.first_name}</p>
                                <p>Last Name: {user.last_name}</p>
                                <p>Email: {user.email}</p>
                                <p>Phone: {user.phone}</p>
                                <p>Status: {user.status}</p>
                            </div>
                            }
                        </div>
                    )}             
                </div>
            </div>
        );
    }
}

export default Users;

