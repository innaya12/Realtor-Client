import React from 'react';
import {getCountries} from '../../data/countries'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: ''
        };
    }

    async componentDidMount() {
        try{
            let countries = getCountries()
            this.setState({ 
                countries
            });
        }catch(error){
            console.log(error.message)
        }
    };

    render() {
        const {handleChange} = this.props;
        const {countries} = this.state;
        return (
            <main className={"sticky-top navbar-light main container-fluid"} style={{backgroundColor: "white"}}>
                <form id={"filter-gallery"} className={"row align-items-center"}>
                    <div className={"d-none d-md-inline"} id="address">
                        <select id="inputState" className="form-control" name={"country"}>
                            <option defaultValue>Country</option>
                            {/* {countries.length !== 0 &&
                            countries.map((city, i) => 
                                <option>{city.name}</option>
                            )} */}
                        </select>
                    </div>
                    <div className={"d-flex align-items-center dropdown show nav-bar new-york"}>
                        <div className={"div-wrapper flex-wrap "}>
                            <a className={"btn btn-secondary dropdown-toggle"} href={"/"}
                               role={"button"} id={"dropdownMenuLink"} data-toggle={"dropdown"} aria-haspopup={"true"}
                               aria-expanded={"false"}>Price</a>
                            <div className={"dropdown-menu"} aria-labelledby="dropdownMenuLink">
                                <div className={"hidden-toggle mini-div"}>
                                    <div className={"container"}>
                                        <div className={"row beds-div d-block"}>
                                            <h4>Price range</h4>
                                        </div>
                                        <div className={"radio-wrapper row flex-nowrap mini-div-wrapper"}
                                             style={{width: "max-content"}}>
                                            <input className={"radioButton"} type={"radio"} value={"1-2"}
                                                   onChange={(e) => handleChange(e)}
                                                   name={"price"}/>1 - 2
                                            <input className={"radioButton"} type={"radio"} value={"2-3"}
                                                   onChange={(e) => handleChange(e)}
                                                   name={"price"}/>2 - 3
                                            <input className={"radioButton"} type={"radio"} value={"3-4"}
                                                   onChange={(e) => handleChange(e)}
                                                   name={"price"}/>3 - 4
                                            <input className={"radioButton"} type={"radio"} value={"4-33"}
                                                   onChange={(e) => handleChange(e)}
                                                   name={"price"}/>4 - 33
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"div-wrapper"}>
                            <a className={"btn btn-secondary dropdown-toggle"} href={"/"}
                               role={"button"} id={"dropdownMenuLink"} data-toggle={"dropdown"} aria-haspopup={"true"}
                               aria-expanded={"false"}>Baths</a>
                            <div className={"dropdown-menu"} aria-labelledby="dropdownMenuLink">
                                <div className={"hidden-toggle mini-div"}>
                                    <div className={"container"}>
                                        <div className={"row beds-div d-block"}>
                                            <h4>Baths</h4>
                                        </div>
                                        <div className={"radio-wrapper row flex-nowrap mini-div-wrapper"}
                                             style={{width: "max-content"}}>
                                            <input className={"radioButton"} type={"radio"} value={"1"}
                                                   name={"number_of_bath"} onChange={handleChange}/>1
                                            <input className={"radioButton"} type={"radio"} value={"2"}
                                                   name={"number_of_bath"} onChange={handleChange}/>2
                                            <input className={"radioButton"} type={"radio"} value={"3"}
                                                   name={"number_of_bath"} onChange={handleChange}/>3
                                            <input className={"radioButton"} type={"radio"} value={"4"}
                                                   name={"number_of_bath"} onChange={handleChange}/>4
                                            <input className={"radioButton"} type={"radio"} value={"5"}
                                                   name={"number_of_bath"} onChange={handleChange}/>5
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"div-wrapper"}>
                            <a className={"btn btn-secondary dropdown-toggle"} href={"/"}
                               role={"button"} id={"dropdownMenuLink"} data-toggle={"dropdown"} aria-haspopup={"true"}
                               aria-expanded={"false"}>Rooms</a>
                            <div className={"dropdown-menu"} aria-labelledby={"dropdownMenuLink"}>
                                <div className={"hidden-toggle mini-div"}>
                                    <div className={"container"}>
                                        <div className={"row beds-div d-block"}>
                                            <h4>Rooms</h4>
                                        </div>
                                        <div className={"radio-wrapper row flex-nowrap mini-div-wrapper"}
                                             style={{width: "max-content"}}>
                                            <input className={"radioButton"} type={"radio"} value={"1"}
                                                   name={"number_of_room"} onChange={handleChange}/>1
                                            <input className={"radioButton"} type={"radio"} value={"2"}
                                                   name={"number_of_room"} onChange={handleChange}/>2
                                            <input className={"radioButton"} type={"radio"} value={"3"}
                                                   name={"number_of_room"} onChange={handleChange}/>3
                                            <input className={"radioButton"} type={"radio"} value={"4"}
                                                   name={"number_of_room"} onChange={handleChange}/>4
                                            <input className={"radioButton"} type={"radio"} value={"5"}
                                                   name={"number_of_room"} onChange={handleChange}/>5
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"div-wrapper"}>
                            <a className={"btn btn-secondary dropdown-toggle"} href={"/"}
                               role={"button"} id={"dropdownMenuLink"} data-toggle={"dropdown"} aria-haspopup={"true"}
                               aria-expanded={"false"}>listing Status</a>
                            <div className={"dropdown-menu"} aria-labelledby={"dropdownMenuLink"}>
                                <div className={"hidden-toggle mini-div"}>
                                    <div className={"container"}>
                                        <div className={"row beds-div d-block"}>
                                            <h4>listing Status</h4>
                                        </div>
                                        <div className={"radio-wrapper row flex-nowrap mini-div-wrapper"}
                                             style={{width: "max-content"}}>
                                            <input className={"radioButton"} type={"radio"} value={"for_sale"}
                                                   name={"listingStatus"} onChange={handleChange}/>For Sale
                                            <input className={"radioButton"} type={"radio"} value={"for_rent"}
                                                   name={"listingStatus"} onChange={handleChange}/>For Rent
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<input type={"submit"} value={"save change"} className={"filterButton"} id={"submitButton"}/>*/}
                    </div>
                </form>
                {/*<button id="resetButton" className={"filterButton"} onClick="clearAll()">reset</button>*/}
            </main>
        );
    }
}

export default Form;