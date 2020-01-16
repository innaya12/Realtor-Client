import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './realtor/gallery/mystyle.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './realtor/home/style/home-page.css';
import './realtor/gallery/singleApratment.css';
import SingleApartment from "./realtor/gallery/singleApartment"
import PageGallery from "./realtor/pages/page-gallery"
import PageHome from "./realtor/pages/page-home";
import PageSell from "./realtor/pages/page-for-sale";
import PageRent from "./realtor/pages/page-for-rent";
import Login from "./realtor/login/login";
import Form from './realtor/form/form'

import {getApartment} from "./realtor/serverData/serverData"; //server

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartmentArray: [],
            loading: true
        };
    }
    componentDidMount() {
        getApartment((data) => {
            this.handleApartmentSuccess(data)
        })
    };
    handleApartmentSuccess = (data) => {
        // console.log("appp", data)
        this.setState({
            apartmentArray: data
        });
    };

    render(){
        return (
            <Router>
                <div id={"app"}>
                    <div>
                        <Switch>
                            {/* <Route path="/sell">
                                <PageSell apartmentArray ={this.state.apartmentArray}/>
                            </Route>
                            <Route path="/rent">
                                <PageRent apartmentArray ={this.state.apartmentArray}/>
                            </Route> */}
                            <Route path="/apartments">
                                <PageGallery apartmentArray={this.state.apartmentArray}/>
                            </Route>
                            <Route path={"/apartment/:id"} component={SingleApartment} />
                            <Route path={"/form"} component={Form}/>

                            <Route path={"/login"} component={Login}/>
                            <Route path="/">
                                <PageHome apartmentArray={this.state.apartmentArray}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;