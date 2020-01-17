import React from 'react';
import {Link} from "react-router-dom";
import BuildApartment from "../gallery/buildApartment";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: this.props.apartmentArray,
            loading: true,
            randomId: '',
            randomArray: [],
        };
    }

    componentDidMount() {
        this.handleApartmentSuccess(this.state.apartmentArray.apartment);
    };

    handleApartmentSuccess = (data) => {
        this.setState({
            apartmentArray: data
        });
        this.sliceArray();
    };

    sliceArray = () => {
        for (let i = 0; i < 4; i++) {
            this.state.randomId = Math.floor(Math.random() * 10) + 90;
            let ChooseApartment = this.state.apartmentArray.find(apartment => (apartment.id === this.state.randomId));
            this.state.randomArray.push(ChooseApartment);
        }
        this.setState({
            randomArray: this.state.randomArray
        });
    };

    render() {
        return (
            <header className={"header"}>
                <div className={"after-header"}>
                    <img alt={""} src={require("./images/GreenV.png")}/>
                    <p>Be Ready to Buy<span className={"d-none d-md-inline"}>... How Much Can You Borrow?</span></p>
                    <button><a href={"/"}>Get Pre-Approved</a></button>
                </div>
                <div className={"container-fluid part1"}>
                    <div className={"container"}>
                        <div className={"row justify-content-center align-items-center flex-column"}>
                            <h1> The Home of Home Search<sup className={"sm"}>℠</sup></h1>
                            <p className={"d-none d-md-flex"}> With the most complete source of homes for sale & real
                                estate
                                near you</p>
                            <ul className={"menu row"}>
                                <li><a href={"/"}>BUY</a></li>
                                <li><a href={"/"}>RENT</a></li>
                                <li><a href={"/"}>JUST SOLD</a></li>
                                <li className={"d-none d-md-inline"}><a href={"/"}>HOME VALUE</a></li>
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
                    <h2 className={"wrap-text-div"}>New listing in San Francisco, CA</h2>
                    <a href={"www.google.com"}>View All 422 New Listings</a>
                    <div className={"row justify-content-between wrap-img-div"}>
                        {this.state.randomArray && this.state.randomArray.length > 0 &&
                        this.state.randomArray.map((apartment, i) =>
                            <BuildApartment  {...apartment} key={i}/>)
                        }
                    </div>
                </div>
                <div className={"container part3 padding"}>
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
                </div>
                <div className={"part4"}>
                    <p> Trends</p>
                    <h2> Live Out a Fall Fantasy in 1 of These 7 Homes Positioned for Prime Leaf Peeing</h2>
                    <button><a href={"/"}>Read More</a></button>
                </div>
                <div className={"container-fluid part5-wrapper"}>
                    <div className={"container part5"}>
                        <div className={"row justify-content-between wrap-img-div"}>
                            <div className={"col-12 col-md-6 col-lg-3 img-div"}>
                                <div className={"inner-div"}>
                                    <div className={"white"}>
                                        <div className={"inner-img-div box-img1"}>
                                            <p className={"blue title"}>UNIQUE HOMES</p>
                                        </div>
                                        <div className={"text-div"}>
                                            <p className={"bottom-title"}> Dive Into This $11.8M Kanasas Megamansion
                                                With
                                                Subterranean...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-12 col-md-6 col-lg-3 img-div"}>
                                <div className={"inner-div"}>
                                    <div className={"white"}>
                                        <div className={"inner-img-div box-img2"}>
                                            <p className={"blue title"}>SELL</p>
                                        </div>
                                        <div className={"text-div"}>
                                            <p className={"bottom-title"}>Will They Dig It? How to Keep Your
                                                Oh-So-Persfect
                                                Landscaping From Sc...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-12 col-md-6 col-lg-3 img-div"}>
                                <div className={"inner-div"}>
                                    <div className={"white"}>
                                        <div className={"inner-img-div box-img3"}>
                                            <p className={"blue title"}>HOME IMPROVEMENT</p>
                                        </div>
                                        <div className={"text-div"}>
                                            <p className={"bottom-title"}>Channel 'A Very Brandy Renovation' With These
                                                groovy, Gergeous Picks...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-12 col-md-6 col-lg-3 img-div"}>
                                <div className={"inner-div"}>
                                    <div className={"white"}>
                                        <div className={"inner-img-div box-img4"}>
                                            <p className={"blue title"}>BUY</p>
                                        </div>
                                        <div className={"text-div"}>
                                            <p className={"bottom-title"}>A Homeowner's Guide to HOAs: Homeowners
                                                Associations, Explained </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row part6"}>
                    <div className={"col-12 col-md-6 img-settings img-one"}>
                    </div>
                    <div className={"col-12 col-md-6 text-helf-page"}>
                        <h2>Need a home loan? Get pre-approved</h2>
                        <p>Find a lender who can offer competitive mortgage rates and help you with pre-approval.</p>
                        <button className={"pre-approved-button"}>Get pre-approved now</button>
                    </div>
                </div>
                <div className={"row part6"}>
                    <div className={"col-12 col-md-6 order-md-2 img-settings img-two"}>
                    </div>
                    <div className={"col-12 col-md-6 order-md-1 text-helf-page"}>
                        <h2>Find Your Neighborhood</h2>
                        <p>Does it have pet-friendly rentals? What are the crime rates? How are the schools? Get
                            important local
                            information on the area you're most interested in.</p>
                        <form className={"d-flex align-items-stretch"}>
                            <input className={"input"} type={"text"} name={"address"}
                                   placeholder={"Address, City, Neighborhood or Zip or Neighboarhood"}/>
                            <button className={"button-text red-button d-none d-md-inline"}
                                    style={{height: "auto"}}>search
                            </button>
                            <button id={"button-icon-search"} className={"red-button d-md-none"}
                                    style={{height: "auto", fontSize: "16px"}}><i
                                className={"fab fa-sistrix"}/>
                            </button>
                        </form>
                    </div>
                </div>
                <div className={"container-fluid part7"}>
                    <div className={"container bottom"}>
                        <div className={"row justify-content-between"}>
                            <div className={"col-12 col-md-6 col-lg-3"}>
                                <ul><img alt={""} src={require("./images/national.png")}/>
                                    <li>Find out how the NAR works</li>
                                    <li> for consumers and REALTORS®</li>
                                </ul>
                            </div>
                            <div className={"col-12 col-md-6 col-lg-3"}>
                                <ul>Learn About N.A.R
                                    <li><a href={"/"}>About NAR</a></li>
                                    <li><a href={"/"}>Agent vs. REALTOR®</a></li>
                                    <li><a href={"/"}>Find an Appraiser</a></li>
                                    <li><a href={"/"}>Commercial Services</a></li>
                                    <li><a href={"/"}>NAR Global Alliances</a></li>
                                </ul>
                            </div>
                            <div className={"col-12 col-md-6 col-lg-3"}>
                                <ul>For Homeowners
                                    <li><a href={"/"}>Dreamy Ways to Add Functionality to Your Outdoor Space</a></li>
                                    <li><a href={"/"}>Why Use a REALTOR® with the MRP?</a></li>
                                    <li><a href={"/"}>Real Estate Today Radio</a></li>
                                    <li><a href={"/"}>REALTORS® Relief Foundation</a></li>
                                </ul>
                            </div>
                            <div className={"col-12 col-md-6 col-lg-3"}>
                                <ul>For REALTORS®
                                    <li><a href={"/"}>NAR’s iOi Summit: Innovation Worth Exploring</a></li>
                                    <li><a href={"/"}>Earn free business boosting rewards with MVP!</a></li>
                                    <li><a href={"/"}>REALTOR Benefits® Program</a></li>
                                    <li><a href={"/"}>Center for REALTOR® Development</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container-fluid part8-wrap"}>
                    <div className={"container bottom1"}>
                        <div className={"row justify-content-between"}>
                            <div className={"col-12 col-sm-6 col-md-3"}>
                                <ul>Popular Real Estate Markets
                                    <li><a href={"/"}>Washington Real Estate</a></li>
                                    <li><a href={"/"}>Chicago Real Estate</a></li>
                                    <li><a href={"/"}>Dallas Real Estate</a></li>
                                    <li><a href={"/"}>Fort Worth Real Estate</a></li>
                                </ul>
                            </div>
                            <div className={"col-12 col-sm-6 col-md-3"}>
                                <ul>Popular Apartment Cities
                                    <li><a href={"/"}>Denver Apartments</a></li>
                                    <li><a href={"/"}>Miami Apartments</a></li>
                                    <li><a href={"/"}>Miami Beach Apartments</a></li>
                                    <li><a href={"/"}>Portland OR Apartments</a></li>
                                </ul>
                            </div>
                            <div className={"col-12 col-sm-6 col-md-3"}>
                                <ul>Popular Resources
                                    <li><a href={"/"}>Homes For Sale Near Universities</a></li>
                                    <li><a href={"/"}>Local Real Estate Market</a></li>
                                    <li><a href={"/"}>Real Estate Mobile Apps</a></li>
                                    <li><a href={"/"}>Android Rentals App</a></li>
                                </ul>
                            </div>
                            <div className={"col-12 col-sm-6 col-md-3"}>
                                <ul>US Real Estate Overview & Homes for Sale
                                    <li><a href={"/"}>Alabama Real Estate Overview(320 new listings)</a></li>
                                    <li><a href={"/"}>Alaska Real Estate Overview(61 new listings)</a></li>
                                    <li><a href={"/"}>Arizona Real Estate Overview(762 new listings)</a></li>
                                    <li><a href={"/"}>Arkansas Real Estate Overview(320 new listings)</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"part8-wrap"}>
                    <img alt={""} src={require("./images/red_banner.jpg")}/>
                </div>
            </header>
        )
    }
}

export default Home;