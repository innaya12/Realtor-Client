import React from "react";
import './style.css'

class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    render() {
        const {apartment, images} = this.props;
        return(
            <div id={"carouselExampleControls"} data-interval={"false"}
                 className={"carousel slide carousel-img"}
                 data-ride={"carousel"}>
                <div className={"carousel-inner inner-carousel-img"}>
                    <div className={"carousel-item active"}>
                        <img className={"hereIsTheImg d-block w-100"}
                                src={"http://localhost:8000/" + images[0].url}
                                alt={"First slide"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img className={"hereIsTheImg d-block w-100"}
                             src={"http://localhost:8000/" + images[1].url}
                             alt={"Second slide"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img className={"hereIsTheImg d-block w-100"}
                             src={"http://localhost:8000/" + images[2].url}
                             alt={"Third slide"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img className={"hereIsTheImg d-block w-100"}
                             src={"http://localhost:8000/" + images[3].url}
                             alt={"Fourth slide"}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img className={"hereIsTheImg d-block w-100"}
                             src={"http://localhost:8000/" + images[4].url}
                             alt={"Fifth slide"}/>
                    </div>
                </div>
                <a className={"carousel-control-prev"} href={"#carouselExampleControls"} role={"button"}
                   data-slide={"prev"}>
                    <span className={"carousel-control-prev-icon"} aria-hidden={"true"}/>
                    <span className={"sr-only"} >Previous</span>
                </a>
                <a className={"carousel-control-next"} href={"#carouselExampleControls"} role={"button"}
                   data-slide={"next"}>
                    <span className={"carousel-control-next-icon"} aria-hidden={"true"}/>
                    <span className={"sr-only"}>Next</span>
                </a>
                <div className={"position-absolute"} style={{bottom: "10px", left: "8px"}}>
                    <p className={"propertyType greenTitle"}>{apartment.description}</p>
                    {/* <p className={"propertyType black mx-3"}>{apartment.propertyType}</p>
                    <p className={"propertyType grayTitle"}>{apartment.title}</p> */}
                </div>
            </div>

        )
    }
}

export default Carousel;