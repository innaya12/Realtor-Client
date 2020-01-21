import React from 'react';
import Home from "../home/home";
import Footer from "../footer/footer";
import NavBar from '../navBar/navBar'
import {getApartment} from "../../data/apartments"; 

class PageHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: [],
            // loading: true
        };
    }
    async componentDidMount() {
        try{
            const apartmentArray = await getApartment(); 
            this.setState({
                apartmentArray            
            });
        }catch(error){
            console.log(error.message);
        }
    };

    render() {
        return (
            <div>
                <NavBar/>
                {this.state.apartmentArray.length !== 0 &&
                <Home apartmentArray={this.state.apartmentArray}/>}
                <Footer/>
            </div>
        );
    }
}

export default PageHome;
