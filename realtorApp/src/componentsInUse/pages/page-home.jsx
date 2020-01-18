import React from 'react';
import Home from "../home/home";
import Footer from "../footer/footer";
import NavBar from '../navBar/navBar'

class PageHome extends React.Component {
    render() {
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
