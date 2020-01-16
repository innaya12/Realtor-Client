import React from 'react';
import Gallery from "../gallery/gallery";
import NavBar from "../navBar/navBar";

class PageRent extends React.Component {
    render() {
        return (
            <div className={"container-fluid"}>
                <NavBar/>
                {this.props.apartmentArray.length !== 0 &&
                <Gallery apartmentArray={this.props.apartmentArray.apartment.filter(apartment => (apartment.for_rent === true))}/>
                }
            </div>
        );
    }
}

export default PageRent;
