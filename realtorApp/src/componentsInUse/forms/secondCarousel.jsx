import React from "react";

class SecondCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    render() {
        const {apartment, images} = this.props;

        return (
            <div className={"container my-4"}>
                <p className={"font-weight-bold"} style={{fontSize:"20px", fontWeight:"normal"}}>Similar Homes</p>
                <div id={"multi-item-example"} className={"carousel slide carousel-multi-item"}
                     data-ride={"carousel"}>
                    <div className={"controls-top"}>
                        <a className={"btn-floating"}
                           href={"#multi-item-example"} data-slide={"prev"}
                           style={{color:"white",position: "absolute", zIndex: "9999",left: "50px",bottom: "80px"}}><i
                            className={"fa fa-chevron-left"} style={{fontSize:"30px"}}/></a>
                        <a className={"btn-floating"} href={"#multi-item-example"} data-slide={"next"}
                           style={{color:"white",position: "absolute", zIndex: "9999",right: "50px",bottom: "80px"}}><i
                            className={"fa fa-chevron-right"} style={{fontSize:"30px"}}/></a>
                    </div>
                    <div className={"carousel-inner"} role={"listbox"}>
                        <div className={"carousel-item active"}>
                            <div className={"row"}>
                                <div className={"col-md-3"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + apartment.main_image}
                                             alt={"/"}/>
                                    </div>
                                </div>
                                {/* <div className={"col-md-3 clearfix d-none d-md-block"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + images[4].url}
                                             alt={"/"}/>
                                    </div>
                                </div> */}
                                <div className={"col-md-3 clearfix d-none d-md-block"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + images[3].url}
                                             alt={"/"}/>
                                    </div>
                                </div>

                                <div className={"col-md-3 clearfix d-none d-md-block"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + images[2].url}
                                             alt={"/"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"carousel-item"}>
                            <div className={"row"}>
                                <div className={"col-md-3"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + images[1].url}
                                             alt={"/"}/>
                                    </div>
                                </div>

                                <div className={"col-md-3 clearfix d-none d-md-block"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + images[0].url}
                                             alt={"/"}/>
                                    </div>
                                </div>

                                <div className={"col-md-3 clearfix d-none d-md-block"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + apartment.main_image}
                                             alt={"/"}/>
                                    </div>
                                </div>

                                <div className={"col-md-3 clearfix d-none d-md-block"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + apartment.main_image}
                                             alt={"/"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"carousel-item"}>
                            <div className={"row"}>
                                <div className={"col-md-3"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + apartment.main_image}
                                             alt={"/"}/>
                                    </div>
                                </div>

                                <div className={"col-md-3 clearfix d-none d-md-block"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + apartment.main_image}
                                             alt={"/"}/>
                                    </div>
                                </div>

                                <div className={"col-md-3 clearfix d-none d-md-block"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + apartment.main_image}
                                             alt={"/"}/>
                                    </div>
                                </div>

                                <div className={"col-md-3 clearfix d-none d-md-block"}>
                                    <div className={"card mb-2"}>
                                        <img className={"card-img-top"}
                                             src={"http://localhost:8000/" + apartment.main_image}
                                             alt={"/"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SecondCarousel;