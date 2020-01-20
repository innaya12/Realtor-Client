import React from 'react';
import {Link} from "react-router-dom";
import {addUserToDB} from '../../data/users'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '', 
            firstName : '',
            lastName: '',
            email: '', 
            password: '',
            phone: ''
        };
    }
    
    handleChange = (e) => {
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name]: value.toLowerCase(),
        });
    };

    onCheck = (e) => {
        e.preventDefault();
        this.callme();
    };
    
    callme(){
        const {firstName, lastName,email, password, phone} = this.state
        addUserToDB(this.handleUsersSuccess, firstName, lastName,email, password, phone)
    };
    
    handleUsersSuccess = (data) =>{
        this.setState({ 
            user: data
        });
    }

    render() {
        console.log("user", this.state.user )
        const type = 2; // 1 = top forms; 2 = bottom
        const mainStyle = type === 1 ?
            {width:"260px", height:"310px", borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .4)", top: "160px", left:"510px"} :
            {width:"360px", height:"390px", borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .9)", top: "120px", left:"0px"};

        const inputWrapper = {
            paddingTop: "10px"
        };

        const inputStyle = type === 1 ?
            {borderRadius: "15px", width: "90%", fontSize: "12px"} :
            {borderRadius: "0px", width: "90%", fontSize: "14px"};

        return(

            <main className={"part-2 paddingPage singlePage"} style={{position: "relative"}}>
            <div className={"container"}>
                    <div style={mainStyle} className={"d-3 d-lg-inline col-md-offset-4 regForm"}>
                        <h1 style={{textAlign: "center", paddingTop: "30px", color: "#ffffff"}}>Sign Up</h1>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} 
                                placeholder={"First Name"}
                                name={"firstName"}
                                style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} 
                                placeholder={"Last Name"}
                                name={"lastName"}
                                style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"email"} className={"form-control"} placeholder={"Email"}
                                name={"email"} style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} placeholder={"Phone"}
                                name={"phone"}
                                style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} placeholder={"password"}
                                name={"password"}
                                style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <button className={"col-md-4 col-md-offset-4 btn"}
                                style={{
                                    backgroundColor: "#ffffff",
                                    color: "#626a69",
                                    fontSize: "20px",
                                    marginTop: "10px"
                                }}
                                type={"button"} onClick={this.onCheck}> Sign Up
                        </button>
                        <Link to="/login">
                            <p>Registered? Log In</p>
                        </Link>
                    </div>
                </div>
            </main>
        )
    }
}

export default Signup;




