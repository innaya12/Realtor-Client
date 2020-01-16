import React from 'react';
import Gallery from "../gallery/gallery";
import NavBar from "../navBar/navBar";

class PageGallery extends React.Component {
    render() {
        return (
            <div className={"container-fluid"}>
                <NavBar/>
                {this.props.apartmentArray.length !== 0 &&
                <Gallery apartmentArray = {this.props.apartmentArray}/>
                }
            </div>
        );
    }
}

export default PageGallery;
