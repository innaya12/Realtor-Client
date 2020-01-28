import React from 'react';
import {addApartmentToDB} from '../../data/apartments'
import {getCitiesByCountry} from '../../data/citiesByCountry'
import {uploadImage} from '../../data/images'
import ApartmentFilter from './ApartmentFilter'
import Cookies from 'js-cookie'
import './style/addapartmentStyle.css'

class AddApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: '',
            message: '',
            imageStatus: '',
            user: null,
            apartment: null,
            user_id: '',
            price : '',
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
            const imageResponse = await uploadImage(fd);
            console.log("image response", imageResponse)
            if (imageResponse.data === "image uploaded!"){
                this.setState({
                    imageStatus: "done"
                })
            }
        } catch(error){
            console.log(error)
        }
    }

    uploadProcessDone(){
        setTimeout(() => {
            this.props.history.replace("/"); 
        }, 4000)
    }
  
    onCheck = async e => {
        e.preventDefault();
        const {user_id, address, city_id, price, number_of_room, number_of_bath, sqft, description, image
        } = this.state
        let main_image = 'images/apartment/' + image.name
        const apartment = await addApartmentToDB(user_id, address, city_id, price, number_of_room, number_of_bath, sqft, description, main_image)
        if(apartment === undefined){
            this.setState({
                valid: "notValid",
                message: 'One or more of the inputs is invalid!'
            })
        }else if (apartment.data === "all fields are required"){
            this.setState({
                valid: "notValid",
                message: 'All fields are required'
            })
        } else {
            this.setState({ 
                apartment,
                valid: "valid",                
                message: 'Your apartment was added!',

            }, this.uploadProcessDone())
        }
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
        
        const mainStyle = {width:"60%", height:"110%",margin: "auto",  borderRadius: "30px", textAlign: "center", backgroundColor: "rgba(65, 170, 162, .9)"};
        const inputWrapper = {paddingTop: "20px" };
        const inputStyle = {borderRadius: "5px", width: "90%", fontSize: "15px"};
        const buttonStyle = {borderRadius: "5px",backgroundColor: "#ffffff", color: "#626a69", marginTop: "25px", width: "40%", marginRight: "10px"}
        const {message, valid, imageStatus} = this.state;

        return(
        <main className={"addApartment"}>
            <div className={"row"}>
                <div className={"col-xs-6 col-md-12"}>
                    <div style={mainStyle} className={"regForm"}>
                        <div className={"justify-content-between"} style={{paddingLeft: "40px"}}>
                            <h1 style={{textAlign: "center", paddingTop: "30px", color: "#ffffff"}}>Add Apartment</h1>
                            <p className={"wrap-text-div"}>
                            Currently you can add aparatments only in Israel </p>
                            {valid === "notValid" &&
                                <p className={"wrap-text-div"} style={{color:"#8B0000", fontSize:"14px", fontWeight:"bold"}}>
                                    {message}</p>
                            }
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
                                <input type={"file"} onChange={this.handleChange} name={"image"} style={{display:"none"}} ref={fileInput => this.fileInput = fileInput}/>
                                <button  style={{...buttonStyle,fontSize: "17px"}} onClick={() =>this.fileInput.click()}>Main Image</button>
                                {imageStatus === "" &&
                                <button style={{...buttonStyle,fontSize: "17px"}} onClick={this.fileUploadHandler}>Upload</button>
                                }
                                {imageStatus === "done" &&
                                    <button style={{...buttonStyle,fontSize: "17px"}} onClick={this.fileUploadHandler}>
                                        <img style={{width:"14px"}}alt={""} src={require("../home/images/GreenV.png")}/>
                                    </button>
                                }
                            </div>

                            {valid === "valid" ? 
                            <div>
                                <p style={{color: "rgba(65, 170, 162, .9)"}}>.</p>
                                <p style={{fontSize:"18px", fontWeight:"bold"}}>{message}</p>
                            </div>
                            :
                            <button className={"col-md-4 col-md-offset-4 btn"}
                                    style={{...buttonStyle,fontSize: "19px"}} type={"button"} onClick={this.onCheck}> Submit
                            </button>
                            }
                        </div>
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-8 mt-3">
                                        <form action="/multiple-upload" method="POST" encType="multipart/form-data">
                                            <div className="form-group">
                                                <label htmlFor="example-input-file"> </label>
                                                <div className={"d-flex col-4 col-md-5"} style={inputWrapper}>

                                                    <input type={"file"} name={"multi-files"} style={{display:"none"}}  multiple id={"input-multi-files"} className={"form-control-file border"} ref={filesInput => this.filesInput = filesInput}/>
                                                
                                                    {/* <input type="file" onChange={this.handleChange} name={"image"} style={{display:"none"}} ref={filesInput => this.filesInput = filesInput}/> */}
                                                    <button  style={{...buttonStyle,fontSize: "17px"}} onClick={() =>this.filesInput.click()}>More Images</button>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-12">
                                    <div className="preview-images"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>       
        )
    }
}

export default AddApartment;




