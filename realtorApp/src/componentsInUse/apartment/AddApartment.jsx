import React from 'react';
import {addApartmentToDB} from '../../data/addData/addApartment'

class AddApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartment: '',
            price : '',
            number_of_room: '',
            number_of_bath: '', 
            sqft: '',
            description: '',
            main_image: 'images/apartment/apartment_5.jpg'
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
        const {address, price, number_of_room, number_of_bath, sqft, description, main_image
        } = this.state
        addApartmentToDB(this.handleApartmentSuccess, address, price, number_of_room, number_of_bath, sqft, description, main_image)
    };
    
    handleApartmentSuccess = (data) =>{
        console.log("now here")
        this.setState({ 
            apartment: data
        });
    }

    render() {
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
                        <h1 style={{textAlign: "center", paddingTop: "30px", color: "#ffffff"}}>Add Apartment</h1>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} 
                                placeholder={"address"}
                                name={"address"}
                                style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} 
                                placeholder={"price"}
                                name={"price"}
                                style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} placeholder={"Number of rooms"}
                                name={"number_of_room"} style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} placeholder={"Number of baths"}
                                name={"number_of_bath"}
                                style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} placeholder={"Sqft"}
                                name={"sqft"}
                                style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <div className={"col-sm-12"} style={inputWrapper}>
                            <input type={"text"} className={"form-control"} placeholder={"Description"}
                                name={"description"}
                                style={inputStyle} onChange={this.handleChange}/>
                        </div>
                        <button className={"col-md-4 col-md-offset-4 btn"}
                                style={{
                                    backgroundColor: "#ffffff",
                                    color: "#626a69",
                                    fontSize: "20px",
                                    marginTop: "10px"
                                }}
                                type={"button"} onClick={this.onCheck}> Submit
                        </button>
                    </div>
                </div>
            </main>
        )
    }
}

export default AddApartment;




