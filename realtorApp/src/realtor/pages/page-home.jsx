import React from 'react';
import NavBar from "../navBar/navBar";
import Home from "../home/home";
import Footer from "../footer/footer";

class PageHome extends React.Component {
    render() {
        // console.log("page home",this.props.apartmentArray)
        // console.log("page home condition",this.props.apartmentArray.length !== 0)
        return (
            <div>
                <NavBar/>
                {this.props.apartmentArray.length !== 0 &&
                <Home apartmentArray={this.props.apartmentArray}/>}
                <Footer/>

            </div>
        );
    }
}

export default PageHome;
