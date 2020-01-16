// get data from user and sent to mysql db in a router.post as sql insert statment


// db  -   first/last name email password phone 

// role 


// insert into users (role_id, first_name, last_name, email, password, phone, status) 
// values (2, "Rachel", "Molla", "Molla@gmail.com", 123, 123123123 ,1)

import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '', 
            email: '', 
            password: ''
        };
    }
    
    // handleChange = (e) => {
    //     e.preventDefault();
    //     let {name, value} = e.target;
    //     this.setState({
    //         [name]: value.toLowerCase(),
    //     });
    // };

    // onCheck = (e) => {
    //     e.preventDefault();
    //     this.callme();
    // };

    // callme(){
    //     getUsersById(this.handleUsersSuccess, this.state.email, this.state.password)
    // };
    
    // handleUsersSuccess = (data) =>{
    //     console.log("data here", data)
    //     this.setState({ 
    //         user: data
    //     });
    // }

    render() {
        const type = 2; // 1 = top forms; 2 = bottom
        const mainStyle = type === 1 ?
            {width:"260px", height:"310px", borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .4)", top: "160px", left:"510px"} :
            {width:"360px", height:"390px", borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .9)", top: "120px", left:"-180px"};

        const inputWrapper = {
            paddingTop: "10px"
        };

        const inputStyle = type === 1 ?
            {borderRadius: "15px", width: "90%", fontSize: "12px"} :
            {borderRadius: "0px", width: "90%", fontSize: "14px"};

        return(

            <main className={"part-2 paddingPage singlePage"} style={{position: "relative"}}>
            <div className={"container"}>



                    <div style={mainStyle} className={"d-none d-lg-inline col-md-offset-4 regForm"}>
                        <h1 style={{textAlign: "center", paddingTop: "30px", color: "#ffffff"}}>Sign Up</h1>

                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} 
                                placeholder={"Your Name"}
                                name={"firstname"}
                                style={inputStyle}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"email"} className={"form-control"} placeholder={"Email"}
                                name={"email"} style={inputStyle}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} placeholder={"Phone"}
                                name={"mobileno"}
                                style={inputStyle}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} placeholder={"password"}
                                name={"mobileno"}
                                style={inputStyle}/>
                        </div>
                        <button className={"col-md-4 col-md-offset-4 btn"}
                                style={{
                                    backgroundColor: "#ffffff",
                                    color: "#626a69",
                                    fontSize: "20px",
                                    marginTop: "10px"
                                }}
                                type={"button"}> Submit
                        </button>
                    </div>
                </div>
            </main>
        )
    }
}

export default Signup;




