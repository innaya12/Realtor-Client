import React from 'react';
import Cookies from 'js-cookie'
import {Link} from "react-router-dom";
import BuildApartment from "../gallery/buildApartment";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: this.props.apartmentArray,
            randomArray: [],
            user : {}
        };
    //    this.checkIfUser();
    }
    // checkIfUser(){
    //     let user = Cookies.get();
    //     if (Object.entries(user).length !== 0){
    //         user = JSON.parse(user.auth);
    //         this.setState({
    //             user
    //         })
    //     }
    // }
    
    componentDidMount() {
        this.handleApartmentSuccess(this.state.apartmentArray.apartment);
        let user = Cookies.get();
        if (Object.entries(user).length !== 0){
            user = JSON.parse(user.auth);
            this.setState({
                user
            })
        }    };

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
        // console.log("user", user)
        // console.log("condition", Object.entries(user).length === 0 )

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
                            <ul className={"menu row"}>
                                <Link to="/apartments">
                                    <li>SALE</li>
                                </Link>
                                <Link to="/apartments">
                                    <li>RENT</li>
                                </Link>
                                <Link to="/apartments">
                                    <li>BOTH</li>
                                </Link>
                                {/* <Link to="/apartments">
                                    <li className={"d-none d-md-flex"}>HOME VALUE</li>
                                </Link> */}
                            </ul>
                            <div className={"form d-flex align-items-stretch"}>
                                <input type={"text"} className={"d-none d-md-inline"} name={"city"} id="address"
                                       placeholder={"Address, School, City, Zip or Neighborhood"}/>
                                <Link to="/apartments" className={"no-underline d-none d-md-inline"}>
                                    <button className={"button-text red-button d-none d-md-inline"}>search
                                    </button>
                                </Link>
                                <Link to="/apartments" className={"d-md-none d-contents"}>
                                    <button id={"button-icon-search"} className={"red-button d-md-none"}>
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
                    <Link to="/apartments">
                        <p>View All New Listings</p>
                    </Link>
                    <div className={"row justify-content-between wrap-img-div"}>
                        {this.state.randomArray && this.state.randomArray.length > 0 &&
                        this.state.randomArray.map((apartment, i) =>
                            <BuildApartment  {...apartment} key={i}/>)
                        }
                    </div>
                </div>
                {/* <div className={"container part3 padding"}>
                    <h2>What's happening in San Fransisco, CA</h2>
                    <div className={"row wrapper justify-content-around align-items-center"}>
                        <div className={"col-6 col-lg columns"}>
                            <p className={"blue-font"}>1,227</p>
                            <p>Homes for Sale</p>
                        </div>
                        <div className={"col-6 col-lg columns"}>
                            <p className={"blue-font"}>389</p>
                            <p>Open House</p>
                        </div>
                        <div className={"col-6 col-lg columns"}>
                            <p className={"blue-font"}>3,087</p>
                            <p>Recently Sold</p>
                        </div>
                        <div className={"col-6 col-lg columns"}>
                            <p className={"blue-font"}>2</p>
                            <p>Foreclosures</p>
                        </div>
                        <div className={"col-6 col-lg justify-content-center columns"}>
                            <p className={"blue-font"}>85</p>
                            <p>Price Reduced</p>
                        </div>
                    </div>
                </div> */}
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
                            {Object.entries(user).length === 0 &&   

                                <Link to="/login">
                                    <img alt={""} src={require("./images/red_banner.jpg")}/>
                                </Link>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Home;