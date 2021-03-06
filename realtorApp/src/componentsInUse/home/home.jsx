import React from 'react';
import Cookies from 'js-cookie'
import {Link} from "react-router-dom";
import BuildApartment from "../gallery/buildApartment";
import './style/home-page.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: this.props.apartmentArray,
            randomArray: [],
            user : {}
        };
    }   
    
    componentDidMount() {
        this.handleApartmentSuccess(this.state.apartmentArray.apartment);
        let user = Cookies.get();
        if (Object.entries(user).length !== 0){
            user = JSON.parse(user.auth);
            this.setState({
                user
            })
        }    
    };

    handleApartmentSuccess = (data) => {
        this.setState({
            apartmentArray: data
        });
        this.sliceArray();
    };

    sliceArray = () => {
        for (let i = 0; i < 4; i++) {
            let randomId = Math.floor(Math.random() * 10) + 90;
            let ChooseApartment = this.state.apartmentArray.find(apartment => (apartment.id === randomId));
            this.state.randomArray.push(ChooseApartment);
        }
        this.setState({
            randomArray: this.state.randomArray
        });
    };

    render() {
        const {user} = this.state;

        return (
            <header className={"header"}>
                <div className={"after-header"}>
                    <img alt={""} src={require("./images/GreenV.png")}/>
                    <p>Be Ready to Buy<span className={"d-none d-md-inline"}>... How Much Can You Borrow?</span></p>
                    {Object.entries(user).length === 0 &&        
                    <Link to="/signup">
                        <button>Get Pre-Approved</button>
                    </Link>
                    }
                </div>
                <div className={"container-fluid part1"}>
                    <div className={"container"}>
                        <div className={"row justify-content-center align-items-center flex-column"}>
                            <h1> The Home of Home Search<sup className={"sm"}>℠</sup></h1>
                            <p className={"d-none d-md-flex"}> With the most complete source of homes for sale & real estate near you</p>
                            <div className={"form d-flex align-items-stretch"}>
                                <Link to="/gallery" className={"no-underline d-none d-md-inline"}>
                                    <button style={{borderRadius:"5px", padding:"11px"}}className={"red-button d-none d-md-inline"}>search
                                    </button>
                                </Link>
                                <Link to="/gallery" className={"d-md-none d-contents"}>
                                    <button className={"red-button  d-md-none"}>
                                        <i className={"fab fa-sistrix"}>
                                        </i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container part-2 padding"}>
                    <h2 className={"wrap-text-div"}>New listing in Tel Aviv, IL</h2>
                    <Link to="/gallery">
                        <p>View All New Listings</p>
                    </Link>
                    <div className={"row justify-content-between wrap-img-div"}>
                        {this.state.randomArray && this.state.randomArray.length > 0 &&
                        this.state.randomArray.map((apartment, i) =>
                            <BuildApartment  {...apartment} key={i}/>)
                        }
                    </div>
                </div>
                <div className={"part4"}>
                    <p> Trends</p>
                    <h2> Live Out a Fall Fantasy in 1 of These 7 Homes Positioned for Prime Leaf Peeing</h2>
                    {Object.entries(user).length === 0 &&        
                    <Link to="/login">
                        <button>Log In</button>
                    </Link>
                    }
                </div>
                <div className={"part8-wrap"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-6 col-md-12"}>
                            {/* {Object.entries(user).length === 0 &&   

                                <Link to="/login">
                                    <img alt={""} src={require("./images/red_banner.jpg")}/>
                                </Link>
                            } */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Home;