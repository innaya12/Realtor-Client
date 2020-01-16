import React from 'react';
import {Link} from "react-router-dom";

class BuildApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: this.props.main_image ? `url('${"http://localhost:8000/" + this.props.main_image}')` : `url('${"http://localhost:8000/" + this.props.image}')`
        };
    }

    render() {
        console.log(`url('${"http://localhost:8000/" + this.props.main_image}')`)
        const { property_type, description, sale_status, price, number_of_bath, number_of_room, address, sqft, id } = this.props;
        const style = {backgroundImage: this.state.backgroundImage};
        const propertyType = sale_status ? "sale" : sale_status ? "rent" : "for rent and for sale";
        // console.log("propertyType", propertyType)

        return (
            <div className={"col-12 col-sm-6 col-lg-4 col-xl-3 img-div"}>
                <div className={"inner-div"}>
                    <p>{property_type}</p>
                    <div className={"inner-img-div"}>
                        <Link to={`/apartment/${id}`}>
                            <div style={style} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
                                 className="hereIsTheImg"/>
                        </Link>
                        <p className={"green title"}>{description}</p>
                        <p className={"sale"}>{'House for ' + propertyType} </p>

                        <h1 className={"heart"}><i className="fas fa-heart"/></h1>
                        <h5 className="price">{'$' + price} m</h5>
                    </div>
                </div>
                <div className="text-div">
                    <p className="bottom-title-apartment">{number_of_room + ' room'} {number_of_bath + ' bath'} {sqft ? sqft + ' sqft' : ""} </p>
                    <p className="address">{address}</p>
                </div>
            </div>
        );
    }
}

export default BuildApartment;

