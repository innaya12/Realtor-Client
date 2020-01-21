import React from 'react';
import {addApartmentToDB} from '../../data/apartments'
import {uploadImages} from '../../data/images'
import './addapartmentStyle.css'

class AddApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartment: null,
            files: null,
            valid: '',
            message: '',
            price : '',
            number_of_room: '',
            number_of_bath: '', 
            sqft: '',
            description: '',
            main_image: null
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name]: value.toLowerCase(),
        });
    };

    fileSelectedHandle = event =>{
        this.setState({
            main_image: event.target.files[0]
        })
    }


    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('files', this.state.main_image)
        this.sendingFiles(fd);
    }

    async sendingFiles(fd){
        try {
            const uploadImage = await uploadImages(fd);
            console.log("uploadImage",uploadImage)
            this.setState({
                files: uploadImage
            })

        } catch(error){
            console.log(error)
        }
    }

    onCheck = async e => {
        e.preventDefault();
        const {address, price, number_of_room, number_of_bath, sqft, description, main_image
        } = this.state
        const apartment = await addApartmentToDB(address, price, number_of_room, number_of_bath, sqft, description, main_image)
        this.setState({ 
            apartment
        });
    };  

    render() {
        const mainStyle = {width:"1000px", height:"450px", borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .9)", top: "120px", right:"500px"};
        const inputWrapper = { paddingTop: "20px" };
        const inputStyle = {borderRadius: "5px", width: "90%", fontSize: "15px"};
        // const {message, valid, apartment} = this.state;

        return(
            <div className={"addApartment"} style={{position: "relative"}}>            
                <div className={"container-fluid"}>
                    <div className={"row"}>
                        <div style={mainStyle} className={"d-3 d-lg-inline col-md-offset-4 regForm"}>
                            <h1 style={{textAlign: "center", paddingTop: "30px", color: "#ffffff"}}>Add Apartment</h1>
                                <div className={"justify-content-between"}>
                                <div className={"col-4 col-md-6"} style={inputWrapper}>
                                    <input type={"text"} className={"form-control"} 
                                        placeholder={"address"}
                                        name={"address"}
                                        style={inputStyle} onChange={this.handleChange}/>
                                </div>
                                <div className={"col-4 col-md-6"} style={inputWrapper}>
                                    <input type={"text"} className={"form-control"} 
                                        placeholder={"price"}
                                        name={"price"}
                                        style={inputStyle} onChange={this.handleChange}/>
                                </div>
                                <div className={"col-4 col-md-6"} style={inputWrapper}>
                                    <input type={"text"} className={"form-control"} placeholder={"Number of rooms"}
                                        name={"number_of_room"} style={inputStyle} onChange={this.handleChange}/>
                                </div>
                                <div className={"col-4 col-md-6"} style={inputWrapper}>
                                    <input type={"text"} className={"form-control"} placeholder={"Number of baths"}
                                        name={"number_of_bath"}
                                        style={inputStyle} onChange={this.handleChange}/>
                                </div>
                                <div className={"col-4 col-md-6"} style={inputWrapper}>
                                    <input type={"text"} className={"form-control"} placeholder={"Sqft"}
                                        name={"sqft"}
                                        style={inputStyle} onChange={this.handleChange}/>
                                </div>
                                <div className={"col-4 col-md-6"} style={inputWrapper}>
                                    <input type={"text"} className={"form-control"} placeholder={"Description"}
                                        name={"description"}
                                        style={inputStyle} onChange={this.handleChange}/>
                                </div>

                                <div className={"d-flex col-4 col-md-5"} style={inputWrapper}>
                                    <input type="file" onChange={this.fileSelectedHandle} name="avatar" style={{display:"none"}} ref={fileInput => this.fileInput = fileInput}/>
                                    <button onClick={() =>this.fileInput.click()}>Pick Image</button>
                                    <button onClick={this.fileUploadHandler}>Upload</button>
                                </div>
                                
                                <button className={"col-md-4 col-md-offset-4 btn"}
                                        style={{
                                            backgroundColor: "#ffffff",
                                            color: "#626a69",
                                            fontSize: "20px",
                                            marginTop: "20px"
                                        }}
                                        type={"button"} onClick={this.onCheck}> Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default AddApartment;




