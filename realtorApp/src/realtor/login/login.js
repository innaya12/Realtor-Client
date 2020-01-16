import React from 'react';

class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         value:''
    //     };
    // }
    // handleChange = (e) => {
    //     e.preventDefault();
    //     let {name, value} = e.target;
    //     this.setState({
    //         [name]: value.toLowerCase()
    //     },
    //     console.log(name, value));
    // };

    // onSubmit = (e) => {
    //     e.preventDefault();
    // };
    
    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <form>
                        <div className={"col-2 col-md-3"}>
                            <input className={"d-none d-md-inline"} placeholder={"email"}  name={"email"}/>
                            <input className={"d-none d-md-inline"} placeholder={"password"}  name={"password"}/>
                        </div>
                        <div className={"col-1 col-md-2"}>
                            <input type={"submit"} value={"save"} className={"send"}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}   

export default Login;

