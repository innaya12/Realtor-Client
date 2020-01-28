import React from 'react';
import {Link} from "react-router-dom";
import NavBar from '../navBar/navBar'
import {getApartments} from '../../data/apartments'
import './style/style.css'

class Apartments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmnets: []
        };
    }

    async componentDidMount(){
        try{
            const apartments = await getApartments();
            if(apartments){
                this.setState({
                    apartments
                })
            }
        }catch(error){
            console.log(error)
        }
    }

    render() {
        const {apartments} = this.state;
        console.log("apartments", apartments)
        console.log("condition", apartments)
        const style = {backgroundImage: this.state.backgroundImage};

        return (                
            <div className={"container-fluid"}>
                <div className={"row justify-content-between wrap-img-div"}>
                    <NavBar/>
                    {apartments && apartments.length !== 0 && apartments.length > 1 &&
                            <p style={{marginLeft:"20px",width:"-webkit-fill-available",color: "gray",fontSize: "14px"}}>
                                Currnetly apartments are only available in Israel 
                                <br/>{apartments.length} Homes</p>}
                    {apartments && apartments.length === 1 &&
                            <p style={{marginLeft:"20px",width:"-webkit-fill-available",color: "gray",fontSize: "14px"}}>
                                Currnetly apartments are only available in Israel 
                                <br/>{apartments.length} Home</p>}
                    {apartments && apartments.map((apartment, i) =>
                    <div className={"col-12 col-sm-6 col-lg-4 col-xl-3 img-div"}>
                        <div className={"inner-div"}>
                            <p>{apartment.availability}</p>
                            <p>{apartment.status}</p>
                            <p>{apartment.sale_status}</p>
                            <p>{apartment.created_on}</p>

                            <p key={i}>{apartment.id}</p>
                            <p>{apartment.property_type}</p>
                            <div className={"inner-img-div"}>
                                {/* <Link to={`/apartment/${id}`}>// can link to userid */}
                                    <div style={{backgroundImage: `url('${"http://localhost:8000/" + apartment.main_image}')`}} className="hereIsTheImg"/>
                                {/* </Link> */}
                                <p className={"green title"}>{apartment.description}</p>
                                <p className={"sale"}>{'House for ' + apartment.propertyType} </p>

                                <h1 className={"heart"}><i className="fas fa-heart"/></h1>
                                <h5 className="price">{'$' + apartment.price} m</h5>
                            </div>
                            <div className="text-div">
                                <p className="bottom-title-apartment">{apartment.number_of_room + ' room'} {apartment.number_of_bath + ' bath'} {apartment.sqft ? apartment.sqft + ' sqft' : ""} </p>
                                <p className="address">{apartment.address}</p>
                            </div>      
                        </div>
                    </div>
                        )}
                </div>
            </div>
        );
    }
}

export default Apartments;

