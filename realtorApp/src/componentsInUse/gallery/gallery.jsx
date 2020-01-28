import React from 'react';
import BuildApartment from "./buildApartment";
import Filter from "../forms/filter";
import {getFilterApartments} from '../../data/apartments'
import {getCitiesByCountry} from '../../data/citiesByCountry'
import './style/gallery.css'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originalApartmentArray: this.props.apartmentArray,
            apartmentArray: this.props.apartmentArray,
            user: null,
            cities: [],
            city: '',
            price: '',
            country: '',
            address: '',
            number_of_bath: '',
            number_of_room: '',
            listingStatus: '',
        };
    }

    resetFunction(){
        console.log("done")
        console.log("or apa", this.state.originalApartmentArray)

        // console.log("this.state.or", this.state.originalApartmentArray)
        // let originalApartments = this.state.originalApartmentArray
        // console.log("or", originalApartments)

    }

    createQuery() {
        const {city, price, number_of_bath, number_of_room, listingStatus} = this.state;
        let query = '?';
        if (city){
            if(city.length !== 0){
                query += `city_id=${city}&` 
            }
        }
        if (price) {
            let min_price = price.substr(0, this.state.price.indexOf('-'))
            let max_price = price.substr(1 + this.state.price.indexOf('-'))
            query += `min_price=${min_price}&` 
            query += `max_price=${max_price}&` 
        }
        if (number_of_bath) {
            query += `number_of_bath=${number_of_bath}&` 
        }
        if (number_of_room) {
            query += `number_of_room=${number_of_room}&` 
        }
        if (listingStatus) {
            query += `sale_status=${listingStatus}&` 
        }
        this.filterApartment(query);
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

    async filterApartment(query){
        try {
            const apartmentArray = await getFilterApartments(query);
            this.setState({ 
                apartmentArray
            });
        }catch(error){
            console.log(error)
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        let {name, value} = e.target;
        if(name === "country"){         
            this.filterCity(value);
        } else {
            // console.log("name", name)
            // console.log("value", value)
            this.setState({
                [name]: value,
            }, () => {
                this.createQuery();
            });
        }
    };

    render() {
        console.log("or apa", this.state.originalApartmentArray)
        console.log("apa", this.state.apartmentArray)

        return (
            <div className={"row justify-content-between wrap-img-div"}>
                <Filter handleChange={this.handleChange}
                        resetFunction={this.resetFunction}
                        cities={this.state.cities}/>
                {this.state.apartmentArray.length !== 0 && this.state.apartmentArray.length > 1 &&
                        <p style={{marginLeft:"20px",width:"-webkit-fill-available",color: "gray",fontSize: "14px"}}>
                            Currnetly apartments are only available in Israel 
                            <br/>{this.state.apartmentArray.length} Homes</p>}
                {this.state.apartmentArray.length === 1 &&
                        <p style={{marginLeft:"20px",width:"-webkit-fill-available",color: "gray",fontSize: "14px"}}>
                            Currnetly apartments are only available in Israel 
                            <br/>{this.state.apartmentArray.length} Home</p>}
                {this.state.apartmentArray.map((apartment, i) =>
                    <BuildApartment {...apartment} key={i}/>
                )}
            </div>
        );
    }
}

export default Gallery;
