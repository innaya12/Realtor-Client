import React from 'react';
import Gallery from "../gallery/gallery";
import {getApartment} from "../../data/apartments"; 


class PageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: [],
            // loading: true
        };
    }
    async componentDidMount() {
        try{
            const apartmentArray = await getApartment(); 
            this.setState({
                apartmentArray            
            });
        }catch(error){
            console.log(error.message);
        }
    };

    render() {
        return (
            <div className={"container-fluid"}>
                {this.state.apartmentArray.length !== 0 &&
                <Gallery apartmentArray = {this.state.apartmentArray}/>
                }
            </div>
        );
    }
}

export default PageGallery;
