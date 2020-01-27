import React from 'react';
import {addApartmentToDB} from '../../data/apartments'
import {getCitiesByCountry} from '../../data/citiesByCountry'
import {uploadImages} from '../../data/images'
import ApartmentFilter from './ApartmentFilter'
import Cookies from 'js-cookie'
import './style/addapartmentStyle.css'

class AddApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            apartment: null,
            valid: '',
            message: '',
            price : '',
            user_id: '',
            number_of_room: '',
            number_of_bath: '', 
            sqft: '',
            description: '',
            image: '',
            cities: [],
            city_id: '',
            country: '',
            listingStatus: '',
        };
    }

    componentDidMount(){
        let user = Cookies.get();
        if (Object.entries(user).length !== 0){
            user = JSON.parse(user.auth)
            this.setState({
                user_id : user.id
            })
        }
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.image)
        this.sendingFiles(fd);
    }

    async sendingFiles(fd){
        try {
            await uploadImages(fd);
        } catch(error){
            console.log(error)
        }
    }
  
    onCheck = async e => {
        e.preventDefault();
        const {user_id, address, city_id, price, number_of_room, number_of_bath, sqft, description, image
        } = this.state
        let main_image = 'images/apartment/' + image.name
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
        if(name === "image"){  
            this.setState({
                image: e.target.files[0]
            })
        }else if(name === "country"){        
            this.filterCity(value);
        } else {
            this.setState({
                [name]: value,
            });
        }
    };

    logOut = () =>{
        console.log("clicked")
        Cookies.remove('auth', {path:'/'});
        this.setState({
            user: {}
        })
    }

    render() {
        // 
        const mainStyle = {width:"60%", height:"110%",margin: "auto",  borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .9)"};
        const inputWrapper = {paddingTop: "20px" };
        const inputStyle = {borderRadius: "5px", width: "90%", fontSize: "15px"};
        const buttonStyle = {borderRadius: "5px",backgroundColor: "#ffffff", color: "#626a69", marginTop: "25px", width: "40%", marginRight: "10px"}
        // const {message, valid} = this.state;
        // console.log("user", this.state.user)
        return(
            <main className={"addApartment"}>
                <div className={"row"}>
                    <div className={"col-xs-6 col-md-12"}>
                        <div style={mainStyle} className={"regForm"}>
                            <div className={"justify-content-between"} style={{paddingLeft: "40px"}}>
                                <h1 style={{textAlign: "center", paddingTop: "30px", color: "#ffffff"}}>Add Apartment</h1>
                                <p className={"wrap-text-div"}>
                                Currently you can add aparatments only in Israel </p>
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
                                    <input type="file" onChange={this.handleChange} name={"image"} style={{display:"none"}} ref={fileInput => this.fileInput = fileInput}/>
                                    <button  style={{...buttonStyle,fontSize: "17px"}} onClick={() =>this.fileInput.click()}>Pick Image</button>
                                    <button style={{...buttonStyle,fontSize: "17px"}} onClick={this.fileUploadHandler}>Upload</button>
                                </div>
                                <button className={"col-md-4 col-md-offset-4 btn"}
                                        style={{...buttonStyle,fontSize: "19px"}} type={"button"} onClick={this.onCheck}> Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
                
        )
    }
}

export default AddApartment;




