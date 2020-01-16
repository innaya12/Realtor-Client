import React from 'react';
import BuildSquare from "./buildSquare";
import Form from "../forms/form";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: this.props.apartmentArray,
            city: '',
            price: '',
            address: '',
            number_of_beds: '',
            number_of_rooms: '',
            listingStatus: ''
        };
    }

    // searchApartmentByCity = () => {
    //     let newArray = this.state.arrayCity;
    //     if (this.state.city) {
    //         newArray = newArray.filter(city => city["label"].toLowerCase().includes(this.state.city));
    //         console.log("list", newArray);
    //     }
    //     this.setState({apartmentArray: newArray});
    // };

    // createFilter() {
    //     const {address, price, number_of_beds, number_of_rooms, listingStatus} = this.state;
    //     let newList = this.state.apartmentArray;
    //     if (address) {
    //         console.log(address);
    //         newList = newList.filter(apartment => apartment["address"].toLowerCase().includes(address));
    //         console.log("list", newList);
    //     }
    //     if (price) {
    //         let priceMin = parseInt(price.slice(0, price.indexOf('-')));
    //         let priceMax = parseInt(price.slice(price.indexOf('-') + 1));
    //         newList = newList.filter(apartment => priceMax >= apartment["price"] && priceMin < apartment["price"]);
    //     }
    //     if (number_of_beds) {
    //         newList = newList.filter(apartment => (apartment["number_of_beds"] === parseInt(number_of_beds)));
    //     }
    //     if (number_of_rooms) {
    //         newList = newList.filter(apartment => (apartment["number_of_rooms"] === parseInt(number_of_rooms)));
    //     }
    //     if (listingStatus) {
    //         newList = newList.filter(apartment => (apartment[listingStatus] === true));
    //     }
    //     this.setState({apartmentArray: newList});
    // };

    // handleChange = (e) => {
    //     e.preventDefault();
    //     let {name, value} = e.target;
    //     this.setState({
    //         [name]: value.toLowerCase(),
    //     }, () => {
    //         this.createFilter();
    //     });
    // };

    // onSubmit = (e) => {
    //     e.preventDefault();
    // };

    render() {
        // console.log("this.state.apartmentArray", this.state.apartmentArray)
        return (
            <div className={"row justify-content-between wrap-img-div"}>
                <Form onSubmit={this.onSubmit}
                      handleChange={this.handleChange}
                />
                {this.state.apartmentArray.map((apartment, i) =>
                    <BuildSquare {...apartment} key={i}/>
                )}
            </div>
        );
    }
}

export default Gallery;
