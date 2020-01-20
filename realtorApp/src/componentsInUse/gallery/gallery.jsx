import React from 'react';
import BuildApartment from "./buildApartment";
import Form from "../forms/form";
import {getFilterApartments} from '../../data/apartments'
import {getCountriesByCountry} from '../../data/citiesByCountry'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: this.props.apartmentArray,
            city: '',
            price: '',
            country: '',
            address: '',
            number_of_bath: '',
            number_of_room: '',
            listingStatus: '',
        };
    }

    createQuery() {
        const {country, city, price, number_of_bath, number_of_room, listingStatus} = this.state;
        let query = '?';
        if (country) {
            query += `country=${country}&`
        }
        if (city) {
            
            query += `city=${city}&` 
        }
        if (price) {
            query += `price=${price}&` 
        }
        if (number_of_bath) {
            query += `number_of_bath=${number_of_bath}&` 
        }
        if (number_of_room) {
            query += `number_of_room=${number_of_room}&` 
        }
        if (listingStatus) {
            query += `listingStatus=${listingStatus}&` 
        }
        this.filterApartment(query);
    };
    async filtetCity(){
        try{
            const city = getCountriesByCountry(95)
            this.setState({
                city
            });
        }catch(error){
            console.log(error)
        }
    }
    async filterApartment(query){
        try {
            const apartmentArray = getFilterApartments(query);
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
            this.filtetCity();
        }
        this.setState({
            [name]: value.toLowerCase(),
        }, () => {
            this.createQuery();
        });
    };

    render() {
        console.log("country", this.state.country)
        console.log("city", this.state.city)

        return (
            <div className={"row justify-content-between wrap-img-div"}>
                <Form handleChange={this.handleChange}/>
                {this.state.apartmentArray.length !== 0 &&
                        <p style={{marginLeft:"20px",width:"-webkit-fill-available",color: "gray",fontSize: "14px"}}>{this.state.apartmentArray.length} Homes</p>}
                {this.state.apartmentArray.map((apartment, i) =>
                    <BuildApartment {...apartment} key={i}/>
                )}
            </div>
        );
    }
}

export default Gallery;
