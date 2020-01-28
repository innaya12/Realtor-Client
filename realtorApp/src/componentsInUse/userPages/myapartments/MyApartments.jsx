import React from 'react';
import {Link} from "react-router-dom";
import BuildApartment from "../../gallery/buildApartment";
import NavBar from '../../navBar/navBar'
import {getByUserID} from '../../../data/apartments'
import './style/myApartments.css'

class MyApartments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: []
        };
    }

    async componentDidMount(){
        let userID = '' + this.props.match.params.id
        try{
            const apartmentArray = await getByUserID(userID);
            this.setState({
                apartmentArray
            })
        }catch(error){
            console.log(error)
        }
    }

    render() {
        return (
            <main>
                <NavBar/>
                <div className={"container-fluid myApa"}>
                    <div className={"row justify-content-between wrap-img-div"}>
                        {this.state.apartmentArray.length !== 0 && this.state.apartmentArray.length > 1 &&
                                <p style={{marginLeft:"20px",width:"-webkit-fill-available",color: "gray",fontSize: "14px"}}>
                                    Currnetly apartments are only available in Israel 
                                    <br/>{this.state.apartmentArray.length} Homes</p>}
                        {this.state.apartmentArray.length === 1 &&
                                <p style={{marginLeft:"20px",width:"-webkit-fill-available",color: "gray",fontSize: "14px"}}>
                                    <br/>{this.state.apartmentArray.length} Home</p>}
                        {this.state.apartmentArray.length > 0 ?
                        this.state.apartmentArray.map((apartment, i) =>
                            <BuildApartment {...apartment} key={i}/>
                        ):
                        <div>
                            <h2> Your apartment list is empty</h2>
                            <Link to="/addapartment">
                                <button type="button" className="addButton btn btn-primary">add apartment</button>
                            </Link>
                        </div>
                        }
                    </div>
                </div>
            </main>
        );
    }
}

export default MyApartments;
