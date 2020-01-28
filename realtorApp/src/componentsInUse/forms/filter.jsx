import React from 'react';
import {getCountries} from '../../data/countries'

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: '', 
        };
    }
// for future me - put reset button  

    async componentDidMount() {
        try{
            const countries = await getCountries();
            this.setState({ 
                countries
            });
        }catch(error){
            console.log(error.message)
        }
    };


    render() {
        const {handleChange, cities, resetFunction} = this.props;
        const {countries} = this.state;
        return (
            <main className={"sticky-top navbar-light main container-fluid"} style={{backgroundColor: "white"}}>
                <form id={"filter-gallery"} className={"row align-items-center"}>
                    <div className={"d-none d-md-inline"} id="address">
                        <select id="inputState" className="form-control" name={"country"} onChange={handleChange}>
                            <option defaultValue>Country</option>
                            {countries.length !== 0 &&
                            countries.map((country, i) => 
                                <option value={country.id} key={i}>{country.name}</option>
                            )}
                        </select>
                    </div>
                    {cities.length !== 0 &&
                    <div className={"d-none d-md-inline"} id="address">
                        <select id="inputState" className="form-control" name={"city"} onChange={handleChange}>
                            <option defaultValue>City</option>
                            {cities.length !== 0 &&
                            cities.map((city, i) => 
                                <option value={city.id} key={i}>{city.name}</option>
                            )}
                        </select>
                    </div>
                    }
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
                                            <input className={"radioButton"} type={"radio"} value={"0-2000000"}
                                                   onChange={handleChange}
                                                   name={"price"}/> 0 - 2m
                                            <input className={"radioButton"} type={"radio"} value={"2000000-4000000"}
                                                   onChange={handleChange}
                                                   name={"price"}/>2m - 4m
                                            <input className={"radioButton"} type={"radio"} value={"4000000-6000000"}
                                                   onChange={handleChange}
                                                   name={"price"}/>4m - 6m
                                            <input className={"radioButton"} type={"radio"} value={"6000000-8000000"}
                                                   onChange={handleChange}
                                                   name={"price"}/>6m - 8m
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
                               aria-expanded={"false"}>Listing Status</a>
                            <div className={"dropdown-menu"} aria-labelledby={"dropdownMenuLink"}>
                                <div className={"hidden-toggle mini-div"}>
                                    <div className={"container"}>
                                        <div className={"row beds-div d-block"}>
                                            <h4>Listing Status</h4>
                                        </div>
                                        <div className={"radio-wrapper row flex-nowrap mini-div-wrapper"}
                                             style={{width: "max-content"}}>
                                            <input className={"radioButton"} type={"radio"} value={"sale"}
                                                   name={"listingStatus"} onChange={handleChange}/>For Sale
                                            <input className={"radioButton"} type={"radio"} value={"rent"}
                                                   name={"listingStatus"} onChange={handleChange}/>For Rent
                                            <input className={"radioButton"} type={"radio"} value={"both"}
                                                   name={"listingStatus"} onChange={handleChange}/>Both
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"div-wrapper"}>
                            <button onClick={resetFunction} type={"button"}  className={"btn btn-outline-secondary"}
                            style={{
                                backgroundColor: "white",
                                fontSize: "14px",
                                color: "black",
                                border: "lightgray 1px solid"}}>Reset</button>
                        </div>
                    </div>
                </form>
            </main>
        );
    }
}

export default Filter;