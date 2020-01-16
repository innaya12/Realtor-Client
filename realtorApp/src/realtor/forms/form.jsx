import React from 'react';

class Form extends React.Component {

    render() {
        const {handleChange, onSubmit} = this.props;
        return (
            <main className={"sticky-top navbar-light main container-fluid"} style={{backgroundColor: "white"}}>
                <form id={"filter-gallery"} className={"row align-items-center"} onSubmit={onSubmit}>
                    <input className={"d-none d-md-inline"} placeholder={"Search By Address"} onChange={(e) => handleChange(e)} name={"address"}
                           id="address"/>
                    {/*<input className={"d-none d-md-inline"} onChange={(e) => handleChange(e)} name={"city"}*/}
                    {/*       id="address" placeholder={"Search by city"}/>*/}
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
                               aria-expanded={"false"}>Beds</a>
                            <div className={"dropdown-menu"} aria-labelledby="dropdownMenuLink">
                                <div className={"hidden-toggle mini-div"}>
                                    <div className={"container"}>
                                        <div className={"row beds-div d-block"}>
                                            <h4>Bedrooms</h4>
                                        </div>
                                        <div className={"radio-wrapper row flex-nowrap mini-div-wrapper"}
                                             style={{width: "max-content"}}>
                                            <input className={"radioButton"} type={"radio"} value={"1"}
                                                   name={"number_of_beds"} onChange={handleChange}/>1
                                            <input className={"radioButton"} type={"radio"} value={"2"}
                                                   name={"number_of_beds"} onChange={handleChange}/>2
                                            <input className={"radioButton"} type={"radio"} value={"3"}
                                                   name={"number_of_beds"} onChange={handleChange}/>3
                                            <input className={"radioButton"} type={"radio"} value={"4"}
                                                   name={"number_of_beds"} onChange={handleChange}/>4
                                            <input className={"radioButton"} type={"radio"} value={"5"}
                                                   name={"number_of_beds"} onChange={handleChange}/>5
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
                                                   name={"number_of_rooms"} onChange={handleChange}/>1
                                            <input className={"radioButton"} type={"radio"} value={"2"}
                                                   name={"number_of_rooms"} onChange={handleChange}/>2
                                            <input className={"radioButton"} type={"radio"} value={"3"}
                                                   name={"number_of_rooms"} onChange={handleChange}/>3
                                            <input className={"radioButton"} type={"radio"} value={"4"}
                                                   name={"number_of_rooms"} onChange={handleChange}/>4
                                            <input className={"radioButton"} type={"radio"} value={"5"}
                                                   name={"number_of_rooms"} onChange={handleChange}/>5
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