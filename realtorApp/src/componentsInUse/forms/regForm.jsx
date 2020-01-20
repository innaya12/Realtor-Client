import React from "react";

class RegForm extends React.Component{
    render() {
        const {type} = this.props; // 1 = top forms; 2 = bottom
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
                        type={"button"}> Log In
                </button>
            </div>

        )
    }
}

// let style1 ={backgroundColor: "rgba('65', '170', '162', '.4')",left:"390px", top:"160px", height:"310px", width:"260px"};
// let style2 ={backgroundColor: "rgba('65', '170', '162', '.9')", left:"-280px", top:"170px", height:"440px", width: "360px"};



export default RegForm;