import React from 'react';
import {Link} from "react-router-dom";
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
        console.log("users", this.state.users.data)
        const {users} = this.state
        return (
            <div className={"col-12 col-sm-6 col-lg-4 col-xl-3 img-div"}>
                {users &&
                users.role_id === 1 ?

                    <p>admins: {users.id}</p>
                    :
                    <p> users:{users.id}</p>

                }
            </div>
        );
    }
}

export default Users;

