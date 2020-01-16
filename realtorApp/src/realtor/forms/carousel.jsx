import React from "react";

class Carousel extends React.Component{
    render() {
        const {apartment, propertyType} = this.props;
        return(
            <div id={"carouselExampleControls"} data-interval={"false"}
                 className={"carousel slide carousel-img"}
                 data-ride={"carousel"}>
                <div className={"carousel-inner inner-carousel-img"}>
                    <div className={"carousel-item active"}>
                        <img className={"hereIsTheImg d-block w-100"}
                             src={"http://localhost:8000/" + apartment.main_image}
                             alt={"First slide"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img className={"hereIsTheImg d-block w-100"}
                             src={"http://localhost:8000/" + apartment.main_image}
                             alt={"Second slide"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img className={"hereIsTheImg d-block w-100"}
                             src={"http://localhost:8000/" + apartment.main_image}
                             alt={"Third slide"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img className={"hereIsTheImg d-block w-100"}
                             src={"http://localhost:8000/" + apartment.main_image}
                             alt={"Fourth slide"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img className={"hereIsTheImg d-block w-100"}
                             src={"http://localhost:8000/" + apartment.main_image}
                             alt={"Fifth slide"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img className={"hereIsTheImg d-block w-100"}
                             src={"http://localhost:8000/" + apartment.main_image}
                             alt={"Sixth slide"}/>
                    </div>
                </div>
                <a className={"carousel-control-prev"} href={"#carouselExampleControls"} role={"button"}
                   data-slide={"prev"}>
                    <span className={"carousel-control-prev-icon"} aria-hidden={"true"}/>
                    <span className={"sr-only"}>Previous</span>
                </a>
                <a className={"carousel-control-next"} href={"#carouselExampleControls"} role={"button"}
                   data-slide={"next"}>
                    <span className={"carousel-control-next-icon"} aria-hidden={"true"}/>
                    <span className={"sr-only"}>Next</span>
                </a>
                <div className={"position-absolute"} style={{bottom: "10px", left: "8px"}}>
                    <p className={"propertyType greenTitle"}>{apartment.description}</p>
                    <p className={"propertyType black mx-3"}>{propertyType}</p>
                    <p className={"propertyType grayTitle"}>{apartment.title}</p>
                </div>
            </div>

        )
    }
}

export default Carousel;