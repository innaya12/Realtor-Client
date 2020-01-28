import React from "react";
import {Link} from "react-router-dom";
import {getUsersById} from '../../data/users'
import './style/loginStyle.css';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {}, 
            email: '', 
            valid: '',
            message: '',
            password: ''
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name]: value.toLowerCase(),
        });
    };

    loginProcessDone(){
        setTimeout(() => {
            this.props.history.replace("/"); 
        }, 4000)
    }


    onCheck = async e => {
        e.preventDefault();
        const user = await getUsersById(this.state.email, this.state.password);
        if(!user){
            this.setState({
                valid: "notValid",
                message: 'Invalid email or password'
            })
        }else if(user === "Email or password are required"){
            this.setState({
                valid: "notValid",
                message: 'Email or password are required'
            })
        } else {
            this.setState({
                user,
                valid: "valid",
                message: `Wellcome back ${user.first_name}!`
            }, this.loginProcessDone())
        }
    };
    
    render() {
        const mainStyle = {margin: "auto", width:"460px", height:"340px", borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .9)"};
        const inputWrapper = {paddingTop: "15px"};
        const inputStyle = {borderRadius: "5px", width: "80%", fontSize: "14px", margin: "2px", paddingLeft:"10px"};
        const {message, valid} = this.state;
        return(
            <main className={"container-fluid loginPage"}>
                <div className={"row"}>
                    <div className={"col-xs-6 col-md-12"}>
                        <div style={mainStyle} className={"regForm"}>
                            <h1 style={{textAlign: "center", paddingTop: "30px", color: "#ffffff"}}>
                                Log in to your account</h1>
                            <p className={"wrap-text-div"}>
                                Access all your saved properties, searches, notes and more.</p>
                                {valid === "notValid" &&
                                    <p className={"wrap-text-div"} style={{color:"#8B0000", fontSize:"14px", fontWeight:"bold"}}>
                                        {message}</p>
                                }
                            <div className={"col-sm-12"} style={inputWrapper}>
                                <input type={"email"} className={"form-control"} placeholder={"Email Address"}
                                    name={"email"} style={inputStyle} onChange={this.handleChange}/>
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
                                <button className={"btn"}
                                        style={{
                                            backgroundColor: "#ffffff",
                                            color: "#626a69",
                                            fontSize: "16px",
                                            marginTop: "25px"
                                        }}
                                        type={"button"} onClick={this.onCheck} > Log In
                                </button>
                                <p style={{color: "rgba(65, 170, 162, .9)"}}>.</p>
                                <Link to="/signup">
                                    <p className={"noUnderline"}>No account? Sign Up</p>
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



export default Login;