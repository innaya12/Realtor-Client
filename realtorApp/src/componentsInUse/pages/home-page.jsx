import React from 'react';
import Home from "../home/home";
import Footer from "../footer/footer";
import NavBar from '../navBar/navBar'
import {getApartments} from "../../data/apartments"; 

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: []
        };
    }
    async componentDidMount() {
        try{
            const apartmentArray = await getApartments(); 
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

export default HomePage;
