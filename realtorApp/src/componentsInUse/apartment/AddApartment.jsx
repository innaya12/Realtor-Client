import React from 'react';
import {addApartmentToDB} from '../../data/apartments'
import {getCitiesByCountry} from '../../data/citiesByCountry'
import {uploadImages} from '../../data/images'
import ApartmentFilter from './ApartmentFilter'
import Cookies from 'js-cookie'
import './addapartmentStyle.css'

class AddApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            files: null,
            apartment: null,
            file_name: '',
            valid: '',
            message: '',
            price : '',
            user_id: '',
            number_of_room: '',
            number_of_bath: '', 
            sqft: '',
            description: '',
            temp_main_image: null,
            cities: [],
            city_id: '',
            country: '',
            listingStatus: '',
        };
    }

    componentDidMount(){
        let user = Cookies.get();
        user = JSON.parse(user.auth)
        this.setState({
            user_id: user.id
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('files', this.state.file_name)
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
        const {user_id, address, city_id, price, number_of_room, number_of_bath, sqft, description, temp_main_image
        } = this.state
        let main_image = 'images/apartment/' + temp_main_image
        const apartment = await addApartmentToDB(user_id, address, city_id, price, number_of_room, number_of_bath, sqft, description, main_image)
        this.setState({ 
            apartment
        });
    }; 

    async filterCity(id){
        try{
            const cities = await getCitiesByCountry(id)
            this.setState({
                cities
            });
        }catch(error){
            console.log(error)
        }
    }
    

    handleChange = (e) => {
        e.preventDefault();
        let {name, value} = e.target;
        if(name === "temp_main_image"){  
            this.setState({
                temp_main_image: e.target.files[0].name
            })
        }else if(name === "country"){        
            this.filterCity(value);
        } else {
            this.setState({
                [name]: value,
            });
        }
    };

    render() {

        const mainStyle = {width:"1000px", height:"450px", borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .9)", top: "120px", right:"500px"};
        const inputWrapper = {paddingTop: "20px" };
        const inputStyle = {borderRadius: "5px", width: "90%", fontSize: "15px"};
        // const {message, valid, apartment} = this.state;
        console.log("user", this.state.user)
        return(
            <div className={"addApartment"} style={{position: "relative"}}>            
                <div className={"container-fluid"}>                  
                <div style={mainStyle} className={"d-3 d-lg-inline col-md-offset-4 regForm"}>
                    <div className={"row"}>
                            <h1 style={{textAlign: "center", paddingTop: "30px", color: "#ffffff"}}>Add Apartment</h1>
                            <p className={"wrap-text-div"}>
                            Currently you can add aparatments only in Israel </p>

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
                            <ApartmentFilter handleChange={this.handleChange}
                                            cities={this.state.cities}/>

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
                            {/* <UploadImage handleChange={this.handleChange}  
                                        main_image={this.state.main_image}/> */}
                            <div className={"d-flex col-4 col-md-5"} style={inputWrapper}>
                                <input type="file" onChange={this.handleChange} name={"temp_main_image"} style={{display:"none"}} ref={fileInput => this.fileInput = fileInput}/>
                                <button  style={{backgroundColor: "#ffffff"}} onClick={() =>this.fileInput.click()}>Pick Image</button>
                                <button style={{backgroundColor: "#ffffff"}} onClick={this.fileUploadHandler}>Upload</button>
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




