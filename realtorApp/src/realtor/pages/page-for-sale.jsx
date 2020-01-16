import React from 'react';
import Gallery from "../gallery/gallery";
import NavBar from "../navBar/navBar";

class PageSell extends React.Component {
    render() {
        console.log("this.props.apartmentArray.apartment", this.props.apartmentArray.apartment)
        console.log("this.props.apartmentArray.apartment.sale_status", this.props.apartmentArray.apartment.sale_status === 'sale')

        return (
            <div className={"container-fluid"}>
                <NavBar/>
                {this.props.apartmentArray.length !== 0 &&
                <Gallery arrayCiAp={this.props.apartmentArray.filter(apartment => (
                    console.log("p-f-s",apartment.sale_status === 'sale')))}/>
                }

                {/* {this.props.apartmentArray.length !== 0 &&
                <Gallery apartmentArray={this.props.apartmentArray.apartment.filter(apartment => (apartment.sale_status === 'sale'))}/>
                } */}
            </div>
        );
    }
}

export default PageSell;