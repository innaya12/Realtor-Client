import React from "react";
import {Link} from "react-router-dom";
import {getUsersById} from '../../data/users'

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

    onCheck = async e => {
        e.preventDefault();
        const user = await getUsersById(this.state.email, this.state.password);
        if(!user){
            this.setState({
                valid: "notValid",
                message: 'Invalid email or password'
            })
        }else if(user.length === 30){
            this.setState({
                valid: "notValid",
                message: 'Email or password are required'
            })
        } else {
            this.setState({
                user,
                valid: "valid",
            }, ()=>{
                this.props.history.replace("/")
            })
        }
    };
    
    render() {
        const mainStyle = {width:"360px", height:"300px", borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .9)", top: "120px", left:"0"};
        const inputWrapper = {paddingTop: "10px"};
        const inputStyle = {borderRadius: "0px", width: "90%", fontSize: "14px"};
        const {message, valid} = this.state;
        return(
            <main className={"part-2 paddingPage singlePage"} style={{position: "relative"}}>
                <div className={"container"}>
                    <div style={mainStyle} className={"d-none d-lg-inline col-md-offset-4 regForm"}>
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
                        <button className={"col-md-4 col-md-offset-4 btn"}
                                style={{
                                    backgroundColor: "#ffffff",
                                    color: "#626a69",
                                    fontSize: "20px",
                                    marginTop: "10px"
                                }}
                                type={"button"} onClick={this.onCheck} > Log In
                        </button>
                            <p>.</p>
                        <Link to="/signup">
                            <p>No account? Sign Up</p>
                        </Link>
                    </div>
                </div>
            </main>
        )
    }
}



export default Login;