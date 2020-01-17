import React from 'react';
import {Link} from "react-router-dom";

class BuildSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: this.props.main_image ? `url('${"http://localhost:8000/" + this.props.main_image}')` : `url('${"http://localhost:8000/" + this.props.image}')`
        };
        // this.handleMouseOver = this.handleMouseOver.bind(this);
        // this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    // handleMouseOver() {
    //     this.setState({
    //         backgroundImage: this.props.main_image ? `url('${"http://localhost:8000/" + this.props.images[1]}')` : `url('${"http://localhost:8000/" + this.props.image}')`
    //     });
    // }

    // handleMouseOut() {
    //     this.setState({
    //         backgroundImage: this.props.main_image ? `url('${"http://localhost:8000/" + this.props.main_image}')` : `url('${"http://localhost:8000/" + this.props.image}')`
    //     });
    // }

    render() {
        // console.log(`url('${"http://localhost:8000/" + this.props.main_image}')`);
        // console.log(this.props.main_image)
        const { description, sale_status, price, number_of_bath, number_of_room, address, sqft, id } = this.props;
        const style = {backgroundImage: this.state.backgroundImage};
        // const propertyType = sale_status ? "sale" : sale_status ? "rent" : "for rent and for sale";
                // const propertyType = sale_status ? "sale" : "for sale";
                // const propertyType = sale_status ? "rent" : "for rent";


            //     if (sale_status === 'sale'){
    //         return 'for sale'
    //     }else if(sale_status === 'rent'){
    //         return 'for sale'
    //     } else {
    //         return 'for rent and for sale'
    //     }
    // }

        return (
            <div className={"col-12 col-sm-6 col-lg-4 col-xl-3 img-div"}>
                <div className={"inner-div"}>
                    {/* {price && <p>{title}</p>} */}
                    {/* {!price && <p>{name}</p>} */}
                    <div className={"inner-img-div"}>
                        {price && <Link to={`/apartment/${id}`}>
                            <div style={style} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
                                 className="hereIsTheImg"/>
                        </Link>}
                        {/* {!price && <div style={style} className="hereIsTheImg"/>} */}
                        {price && <p className={"green title"}>{description}</p>}
                        {/* {!price && <p className={"green title"}>{label}</p>} */}
                        {/* {price && <p className={"sale"}>{'House for ' + propertyType} </p>} */}

                        {price && <h1 className={"heart"}><i className="fas fa-heart"/></h1>}
                        {price && <h5 className="price">{'$' + price} m</h5>}
                    </div>
                </div>
                <div className="text-div">
                    {price &&
                    <p className="bottom-title-apartment">{number_of_room + ' room'} {number_of_bath + ' bath'} {sqft ? sqft + ' sqft' : ""} </p>}
                    {/* {!price && <p className="bottom-title-city">{country}</p>} */}
                    {price && <p className="address">{address}</p>}
                    {/*{!price && <p className="address">{label}</p>}*/}
                </div>
            </div>
        );
    }
}

export default BuildSquare;

