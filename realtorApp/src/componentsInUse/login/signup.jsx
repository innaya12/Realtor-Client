import React from 'react';
import {Link} from "react-router-dom";
import {addUserToDB} from '../../data/users'
import './style/loginStyle.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: '',
            message: '',
            user: {} , 
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

    signupProcessDone(){
        setTimeout(() => {
            this.props.history.replace("/"); 
        }, 4000)
    }

    onCheck = async e => {
        e.preventDefault();
        const {firstName, lastName,email, password, phone} = this.state
        const user = await addUserToDB(firstName, lastName,email, password, phone);
        if(user === undefined){
            this.setState({
                valid: "notValid",
                message: 'One or more of the inputs is invalid!'
            })
        }else if(user.data === "all fields are required"){
            this.setState({
                valid: "notValid",
                message: 'All fields are required'
            })
        } else {
            this.setState({
                user,
                valid: "valid",
                message: `${firstName}, you are now signed up!`
            },this.signupProcessDone())
    
        }
    };
    
    handleChange = (e) => {
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name]: value.toLowerCase(),
        });
    };

    render() {
        const mainStyle = {margin: "auto", width:"370px", height:"400px", borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .9)"};
        const inputWrapper = {paddingTop: "12px"};
        const inputStyle = {borderRadius: "5px", width: "90%", fontSize: "14px", paddingLeft:"10px"};
        const {message, valid} = this.state;

        return(
            <main className={"container-fluid loginPage"}>
                <div className={"row"}>
                    <div className={"col-xs-6 col-md-12"}>
                        <div style={mainStyle} className={"regForm"}>
                            <h1 style={{textAlign: "center", paddingTop: "30px", color: "#ffffff"}}>Sign Up</h1>
                            <div className={"col-sm-12"} style={inputWrapper}>
                                {valid === "notValid" &&
                                    <p className={"wrap-text-div"} style={{color:"#8B0000", fontSize:"14px", fontWeight:"bold"}}>
                                        {message}</p>
                                }

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
                            {valid === "valid" ? 
                                <div>
                                <p style={{color: "rgba(65, 170, 162, .9)"}}>.</p>
                                <p style={{fontSize:"18px", fontWeight:"bold"}}>{message}</p>
                            </div>
                            :
                            <div>
                                <button className={"col-md-4 col-md-offset-4 btn"}
                                        style={{
                                            backgroundColor: "#ffffff",
                                            color: "#626a69",
                                            fontSize: "18px",
                                            marginTop: "15px"
                                        }}
                                        type={"button"} onClick={this.onCheck}> Sign Up
                                </button>
                                <p style={{color: "rgba(65, 170, 162, .9)"}}>.</p>
                                <Link to="/login">
                                    <p className={"noUnderline"}>Registered? Log In</p>
                                </Link>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Signup;




